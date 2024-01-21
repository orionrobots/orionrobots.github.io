---
title: Debugging Yukon
date: 2024-01-21
description: We debugged the connection between the Raspberry Pi and Yukon.
tags: [robot programming, piwars 2024, yukon, raspberry pi]
author: Emma
---

We looked at pyinfra, installing services and python serial. Often debugging is not caused by a large theoretical issue but instead some small mistakes/bugs.
When there are many mistakes together, it becomes especially hard to debug. Documentation is essential to look at (as well as other people's code)!
Too many changes at once will probably arouse too many mistakes at a time; always add parts step by step.

As I am not that familiar with networking/hosts/clients, this part was more confusing to me.

## Update from Danny

There were many issues at play today. However, the main issue was forgetting to await an async sleep.

The code here has a bridge from an MQTT broker running on the Raspberry Pi talking to a serial port, with code on the Yukon then receiving commands. Nothing seemed to be happening.

The Yukon code had two async coroutines. One was a motor loop, which would perform the yukon.monitor_once() command every cycle, check if there had been no contact (and stop the motors), and otherwise go to sleep.

The other routine was a serial loop, using an asyncio.StreamReader to read from teh serial port. It would decode the commands, and use those to control the motors. This has the following line:

```python
line = await input_stream.readline()
```

The key finding, after using print statements, and commenting out code, was that this line was never exiting. After trying many things, I found that the other routine, once being given the chance, never let anything else run. In the motor loop this was the culprit:

```python
while True:
    asyncio.sleep(0.1)
    yukon.monitor_once()
    self.timeout_check()
```

That asyncio sleep there? It was not awaited. So the other routine, for the serial port, never got a chance to run. The fix was to await the sleep:

```python
while True:
    await asyncio.sleep(0.1)
    yukon.monitor_once()
    self.timeout_check()
```

There were other factors, small errors that made this tricky to see. As Emma rightly observed, there were too many changes leading to many interacting issues.
