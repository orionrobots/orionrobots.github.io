Debugging time issue:

Facts:
- If I import time, it's fine.
- If I run my avoid walls - it breaks
- Test eventually stops
- Always hangs in a sleep

One concern is that I've damaged the Pico W - with a wiring fault I made before.
I could try another Pico.

Observations - my wire labelling is still a bit rough.
- 622 iterations of:

```python
# test times
import time


loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.5 seconds")
    time.sleep(0.5)
    print("Sleep_us 5")
    time.sleep_us(5)
    loop_count += 1
```

Try with a pulse time in.

```python
# test times
import time
from machine import Pin, time_pulse_us

dummy_pin = Pin(5, Pin.IN)

loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    time.sleep(0.1)
    print("Starting in pulse")
    return_time = time_pulse_us(dummy_pin, 1, 3000)
    print("Return time", return_time)
    loop_count += 1
```

Nope - made 420 iterations...

Try a pin out cycle:

```python
import time
from machine import Pin, time_pulse_us

trigger_pin = Pin(4, Pin.OUT)
dummy_pin = Pin(5, Pin.IN)

loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    time.sleep(0.1)
    trigger_pin.value(0)
    time.sleep_us(5)
    # Send a pulse
    trigger_pin.value(1)
    time.sleep_us(10)
    trigger_pin.value(0)
    print("Starting in pulse")
    return_time = time_pulse_us(dummy_pin, 1, 3000)
    print("Return time", return_time)
    loop_count += 1
```

Nope - not that - 800 iterations.

Try count in a second pin?


```python
# test times
import time
from machine import Pin, time_pulse_us

dummy_pin = Pin(5, Pin.IN)
dummy2_pin = Pin(7, Pin.IN)
loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    time.sleep(0.1)
    print("Starting in pulse")
    return_time = time_pulse_us(dummy_pin, 1, 3000)
    print("Return time", return_time)
    print("Starting in pulse")
    return_time = time_pulse_us(dummy2_pin, 1, 3000)
    print("Return time", return_time)
    loop_count += 1
```

Nope - 699 iterations...

Try one of these RCWL code chunks:

```python
import time
import rcwl_1601

left_sensor = rcwl_1601.RCWL1601(4, 5)

loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    time.sleep(0.1)
    print("Distance:", left_sensor.distance_cm())
    loop_count += 1
```

11 iterations - and it dies... Ok.

Ok - what is this?

Could it be down to mixing up my time usage?

```python
from time import sleep
import rcwl_1601

left_sensor = rcwl_1601.RCWL1601(4, 5)

loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    sleep(0.1)
    print("Distance:", left_sensor.distance_cm())
    loop_count += 1
```

19 iterations. Nope - not that.

Let's temporarily run these together in one file:

```python
from machine import Pin, time_pulse_us
from time import sleep_us, sleep

class RCWL1601:
    def __init__(self, trigger_pin, echo_pin):
        self.trigger_pin = Pin(trigger_pin, Pin.OUT)
        self.echo_pin = Pin(echo_pin, Pin.IN)
        self.trigger_pin.value(0)

    us_to_cm = 0.0343 / 2

    def distance_cm(self):
        self.trigger_pin.value(0) # Stabilize the sensor
        sleep_us(5)
        # Send a pulse
        self.trigger_pin.value(1)
        sleep_us(10)
        self.trigger_pin.value(0)
        # Measure the time it takes to get a pulse back
        return_time = time_pulse_us(self.echo_pin, 1, 3000)
        # Now we have the time, we can calculate the distance
        return return_time * self.us_to_cm

left_sensor = RCWL1601(4, 5)

loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    sleep(0.1)
    print("Distance:", left_sensor.distance_cm())
    loop_count += 1
```

Expect failure after 10 or so iterations. 8.

trim this a bit

```python
from machine import Pin, time_pulse_us
from time import sleep_us, sleep

trigger_pin = Pin(4, Pin.OUT)
echo_pin = Pin(5, Pin.IN)
trigger_pin.value(0)
us_to_cm = 0.0343 / 2

def distance_cm():
    trigger_pin.value(0) # Stabilize the sensor
    sleep_us(5)
    # Send a pulse
    trigger_pin.value(1)
    sleep_us(10)
    trigger_pin.value(0)
    # Measure the time it takes to get a pulse back
    return_time = time_pulse_us(echo_pin, 1, 3000)
    # Now we have the time, we can calculate the distance
    return return_time * us_to_cm

loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    sleep(0.1)
    print("Distance:", distance_cm())
    loop_count += 1
```

4 iterations. Hmmm.

Only 1 sensor.
Remove the stabilising bit.

```python
from machine import Pin, time_pulse_us
from time import sleep_us, sleep

trigger_pin = Pin(4, Pin.OUT)
echo_pin = Pin(5, Pin.IN)
trigger_pin.value(0)
us_to_cm = 0.0343 / 2

def distance_cm():
    trigger_pin.value(1)
    sleep_us(10)
    trigger_pin.value(0)
    # Measure the time it takes to get a pulse back
    return_time = time_pulse_us(echo_pin, 1, 3000)
    # Now we have the time, we can calculate the distance
    return return_time * us_to_cm

loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    sleep(0.1)
    print("Distance:", distance_cm())
    loop_count += 1


```

Huh - - it's getting to 1000s of iterations. Is it that very short 5 us flip? Or the sleep_us 5?
It won't work, but try a version without the time_pulse_us.

```python
from machine import Pin
from time import sleep_us, sleep

trigger_pin = Pin(4, Pin.OUT)
trigger_pin.value(0)

def trigger():
    trigger_pin.value(0) # Stabilize the sensor
    sleep_us(5)
    # Send a pulse
    trigger_pin.value(1)
    sleep_us(10)
    trigger_pin.value(0)

loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    sleep(0.1)
    trigger()
    loop_count += 1
```

2 iterations... Ahhhh.
Does it need the value sets to trigger?

```python
from machine import Pin
from time import sleep_us, sleep

trigger_pin = Pin(4, Pin.OUT)
trigger_pin.value(0)

def trigger():
    sleep_us(5)
    sleep_us(10)

loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    sleep(0.1)
    trigger()
    loop_count += 1
```

No - 3 iterations.

Ok - remove all the pin output and try again?

```python
from time import sleep_us, sleep

loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    sleep(0.1)
    sleep_us(5)
    sleep_us(10)
    loop_count += 1
```

This makes many iterations... Not that.
Huh? Ok - just in a function?

```python
from time import sleep_us, sleep

def trigger():
    sleep_us(5)
    sleep_us(10)

loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    sleep(0.1)
    trigger()
    loop_count += 1
```

3 seconds. While in a function? Why is that different?

What about a 10us sleep?

```python
from time import sleep_us, sleep

def trigger():
    sleep_us(10)
    sleep_us(10)

loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    sleep(0.1)
    trigger()
    loop_count += 1
```

Hmm - 3 iterations...

```python
from time import sleep_us, sleep

def trigger():
    sleep_us(10)
    sleep_us(10)

loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    sleep(0.1)
    print("Triggering")
    trigger()
    loop_count += 1
```

Still 3 or 4 iterations. How about larger usleeps? 50us?
That seems ok.


And does it go away with a single 10us in a function instead?

```python
from time import sleep_us, sleep

def trigger():
    sleep_us(10)

loop_count = 0
while True:
    print("Loop count is:", loop_count)
    print("Sleeping 0.1 seconds")
    sleep(0.1)
    print("Triggering")
    trigger()
    loop_count += 1
```

Yes this is fine...
Conclusion - for now - 5us sleeps seem to make micropython unstable.
What about using 20s for the stabilise?
Nope - still hangs.

What about 20us after the pulse in?
That makes it stable.


## The Real answer

This Raspberry Pi Pico had been damaged. I'd been moving wires around, and knocked out the connection between the motor board and vsys/ground. I jammed them back in, the wrong way round.

The result - this Pico W was broken.

The pins connected to the motor board would no longer output a signal. And this timer issue was another symptom of that. A non-damaged Pico W works fine.
