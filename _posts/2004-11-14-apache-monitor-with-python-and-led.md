---
layout: post
title: Apache Server Monitor With Python And Led
tags: [led, apache, python, parallelport]
gallery: /galleries/2004-11-05-simple-parallel-port-led
---
![Parallel Cable With LED]({{ page.gallery }}/thumb_cable-with-led.jpg){: class="img-rounded" style="float:left; padding-right: 4px"}
Building on the LED and cable last time, I linked this up to monitor Apache, a common webserver, which at the time of writing, I am using to host orionrobots.

After building the initial [Simple Parallel Port LED](/2004/11/05/simple-parallel-port-led.html) experiment one, I set about finding an interesting use for it. The first thing that came to mind was an internet activity monitor for the OrionRobots web site.

Everytime someone views a page on my website, the LED will flicker - kind of like a HDD Led, possibly with a small delay. The way it works means that other network activity would be ignored. The LED could easily be substituted for a counter that was activated by the pulse.
 
This will run on a linux box with the "ppdev" kernel module enabled and the "parallel" module for python available. It works by polling apache logs. I am sure a more efficient version could be created by adding a snippet into your page like a blank image, which when loaded, fired off the parallel port activation.

The code here is mostly going to be in python. First pull in the right rules:

    import os
    import parallel
    import select
    import time

`os` provides our basic operating system services, like opening a pipe.
`parallel` is the module that allows us to communicate with the parallel port, used previously with the LED cable.
The `select` module provides a pre-made poller wrapper - so you can easily build a system to check if the file-pipe has anything happening.
Finally we use the `time` module to allow the code to sleep, that is suspend our code between checks.

Now to initialise the default parallel port:

    # Get the parallel port object
    p = parallel.Parallel()
    # Make sure all the data lines are 0
    p.setData(0)
    
By running tail, and creating a pipe to its results, we get a continuously updated version of the apache log (or any other) with the latest entries. Tail is a standard unix command - and worth familiarising yourself with.

    pipe = os.popen("tail -f /var/log/apache2/access_log")
    
Before you try to run the code, please ensure the log file here points at your apache log, or another log you would like to monitor, otherwise the program will fail to do anything.

This next section sets up a poller, and the file pipe we just opened to be the subject we are observing with our poller. A poller is designed to check if anything has changed since we last looked.

    # Use the select module to create an IO poller
    poll = select.poll()
    
    # Add the pipe file to the poller
    poll.register(pipe)

I left in some debug code here, for users to comment in if they are having trouble.

    #optional debugging
    #print "Select POLLIN is ", select.POLLIN, " pipe file no is ", pipe.fileno()

If it fails to run, try commenting that back in. If the file pipe number is not a number, or negative, this generally means your file pipe open has failed, and the log file name and path above are incorrect.
 
Because we expect to run this as a constant service, we use `while True:` to go into an infinite loop. Normally, while will run the code inside the indented block after, until the condition in the bracket following the while keyword is false. As the condition in this case is the constant True - then it never exits. We can exit by ctrl-c or by using the kill command with the process number.

The rest of the code is all under the while loop.

Since we are looping in an infinite loop, which may result in doing nothing, we could end up pulling all the computers resources by just running in that idle loop. Also - if it loops too fast, it would be a waste of time, the human eye can only see so many pulses per second. By delaying it by a mere fraction of a second, we ensure that the other processes on the computer get a chance to run, or the computer gets idle time as CPU's at 100% for extended periods can be quite damaging. Please - do not be tempted to remove this line.

    while(1):
        time.sleep(0.01)
        
Next we poll the pipe - check if anything has come through it yet, and if so, put it in data.
        
        data  = poll.poll()
    
If we actually got something, we need to loop through it until we have data. This means we can wait until something happens here. We are still continuing to poll, and have another sleep - again to stop it tight looping.
    
        # loop here until we find data if we have not got any yet
        while(data((0)) != (pipe.fileno(), select.POLLIN)):
            time.sleep(0.01)
            data = poll.poll()

After we actually get something, we actually exit that inner while loop back out to the main loop

        # Turn on LED in parallel port data 4 (pin 5)
        p.setData(1 << 4)

This next bit is optional - and depends on whether you are debugging and want to view the input data the LED monitor program is getting. Comment it out with hashes if you want to run this on a silent terminal somewhere.

        # Read the data
        read = pipe.readline()
        # Print the data we got
        print read

The program here would run very fast, and if we turn off the LED too quickly, a human simply would not see it. I introduced another sleep here to make sure it is clearly visible to a human. If you are using a counting device instead of LED, you may want to remove this step or replace the timing with the minimum pulse length required to trigger your device.

        # Sleep long enough to make the flicker human visible
        time.sleep(0.05)
        
Finally - we turn off the LED. Because this is still indented, the program will then carry on again around the large while(1) loop.
       
        p.setData(0)
        
The app is not particularly complex - but a more safe stop could be added to stop it exiting with the LED on. I am sure that there are a number of improvements and enhancements, but I had written it as more of a demonstration or proof of concept. Putting a try/except block around the part with the LED perhaps.

The whole 

Running the program

    
