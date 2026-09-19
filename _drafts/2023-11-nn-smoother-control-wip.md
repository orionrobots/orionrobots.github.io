smoother control


## Smoother control

For smoother control, we can use proportional control. This is where we use the distance to the wall to control the speed of the motors. The closer we get to the wall, the slower we go.

```python
import robot
import rcwl_1601
import time

left_sensor = rcwl_1601.RCWL1601(4, 5)
right_sensor = rcwl_1601.RCWL1601(6, 7)

speed = 0.5
threshold = 30


try:
    while True:
        left_distance = left_sensor.distance_cm()
        right_distance = right_sensor.distance_cm()

        left_error = left_distance - threshold
        right_error = right_distance - threshold

        left_speed = min(speed, max(-speed, left_distance / threshold))
        right_speed = min(speed, max(-speed, right_distance / threshold))

        print("Left d:", left_distance, "Left s:", left_speed, "Right d:", right_distance, "Right s:", right_speed)
        robot.set_speed(0, left_speed)
        robot.set_speed(1, right_speed)
        time.sleep(0.01)
finally:
    robot.stop()

```

This code starts the same way as our bang -bang code, but the speed of each motor is affected by how close the sensor is to the wall. The further a motor is from a wall, the faster it goes.
