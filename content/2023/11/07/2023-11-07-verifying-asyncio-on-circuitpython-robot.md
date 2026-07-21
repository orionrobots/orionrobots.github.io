---
title: Verifying that Asyncio is working on CircuitPython
tags: [robotics at home, raspberry pi pico, python, circuitpython]
date: 2023-11-07
---
In chapter 11 of [Robotics at Home with Raspberry Pi Pico](https://packt.link/5swS2), I introduce the `asyncio` library, and get this installed on the Raspberry Pi Pico. This is a library that lets you schedule multiple tasks on the Pico. They don't run in parallel, so much as hand control over to different processes when they are waiting for something.

Some readers have had a little trouble with this.

First, I suggest installing it with `circup`, and still consider this the best way to manage the library in CircuitPython.

But let's look at debugging what you do have.

1. With the battery power turned off, plug your robot in via USB. Next you need a repl (I've used Thonny in CircuitPython mode). Let's ensure it works:

    ```python
    >>> import asyncio
    >>>
    ```

2. We can now try check for the symbol:

    ```python
    >>> asyncio.create_task
    <function create_task at 0x2003a3a0>
    ```

    Note the address will likely be different, but the overall shape should be the same. If you do not see this, we need to find out what is going on with `asyncio`.

3. The python `dir` command shows the contents of a symbol, in this instance the `asyncio` module:

    ```python
    >>> dir(asyncio)
    ['__class__', '__getattr__', '__name__', '__file__', '__path__', '__version__', 'CancelledError', 'Event', 'Task', 'TaskQueue', 'TimeoutError', 'event', 'run', 'select', 'sleep', 'sys', 'traceback', 'core', '__repo__', 'funcs', 'wait_for', 'gather', 'lock', 'Lock', '_attrs', 'ticks_diff', 'ticks_add', 'ticks', 'SingletonGenerator', 'sleep_ms', 'IOQueue', 'create_task', 'run_until_complete', 'Loop', 'get_event_loop', 'current_task', 'new_event_loop', 'wait_for_ms']
    ```

    What we see here is a list of methods, classes and other symbols in the `asyncio` library.

4. If this is not what you see, what I suggest now is to use `circup` to bump this library to the most recent version. On your computer, run:

    ```bash
    circup update
    ```

    You may need a recent version of `circup` for this to work. Going back to your original repl, use ctrl-d to reboot the Pico, and try again from step 1 onwards.

If this still does not work, please let me know. I'm happy to help you debug this.
