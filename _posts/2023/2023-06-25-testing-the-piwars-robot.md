---
title: Testing the PiWars robot
date: 2023-06-25
thumbnail: galleries/2023/piwars-robot-info/2019-view-from-the-robot.jpg
tags: [piwars, piwars 2024, raspberry pi, robotics at home, robotics competitions, mdns, ssh]
---
Yesterday I made a [block diagram of the Piwars Robot](/2023/06/24/block-diagrams-of-robot-electronics.html). With an understanding of the connections, and not fearing that they will damage the Raspberry Pi, I can power it up and test it.

I'm going to start using an external power supply first, so I can connect to it headlessly, and see what files are there.

> Design thought - I've oriented the Raspberry Pi currently so that the GPIO port faces the rear of the robot, where the 4duino is. Would it be sensible to reorient it 90 degree so I have access to the HDMI port? Or perhaps I want a port extender cable? This is in case headless connections run into trouble.

The power shim starts up the Raspberry Pi, and I wait for the green light to stop flashing. The next step is to find it's IP address on my network, it it has connected. In theory, mdns should have registered this Raspberry Pi as something, but I cant remember what it was. On my router I found `orionrobots-piwars-2019.local` - I'm confident that's the right one.

Luckily, when I ssh to it, my ssh key is already setup on it, so I didn't need to remember a password. But I am in!

{% img_responsive "galleries/2023/piwars-robot-info/piwars-bot-ssh-session.png", "Piwars robot ssh session" %}

Having a look at what is there:

```shell
pi@orionrobots-piwars-2019:~ $ ls -l
total 3992
-rw-r--r-- 1 pi pi 4060245 Sep  2  2019 image.jpg
drwxr-xr-x 2 pi pi    4096 Apr 14  2019 piconbot
drwxr-xr-x 2 pi pi    4096 Apr 14  2019 piconzero
-rw-r--r-- 1 pi pi     803 Apr 20  2016 piconz.sh
drwxr-xr-x 3 pi pi    4096 Sep  2  2019 Pimoroni
drwxr-xr-x 7 pi pi    4096 Sep  2  2019 piwars
drwxr-xr-x 7 pi pi    4096 Jun  8  2019 piwars_env
```

> Design thought - why isn't there a USB connection between the Pi and Arduino? Might be easier to control than using I2C, and the Arduino could be programmed from the Pi remotely. The only issue is I'd need to skip the 5v power line since they use separate power sources.

This started to reveal what I'd built - this is using the PiConZero code on the Arduino. If you are curious, that image.jpg there is a shot from the camera. Nice!

{% img_responsive "galleries/2023/piwars-robot-info/2019-view-from-the-robot.jpg", "Camera view from the robot" %}

> Problem spotted - that camera alignment has too much of the chop-block (there for PiNoon) in shot. That is a removable part though, so I can take it off. The camera is also sitting a bit too low with too much of the lens visible too.

```shell
pi@orionrobots-piwars-2019:~ $ ls piwars
avoid_behavior.py           drive_distance_behavior.py  image_server.py             menu_server.socket    robot_modes.py            test_motors.py
behaviour_line.py           drive_square_behavior.py    leds_test.py                multi_line_sensor.py  robot.py                  tests
behaviour_path.py           face_track_behavior.py      line_following_behavior.py  over_the_rainbow.py   robot.pyc
color_track_behavior.py     i2c_4duino.py               manual_drive.py             pi_camera_stream.py   static
deploy.sh                   i2c_4duino.pyc              menu_server.py              pid_controller.py     straight_line_drive.py
distance_sensor_hcsr04.py   image_app_core.py           menu_server.service         __pycache__           SunFounder_Line_Follower
distance_sensor_hcsr04.pyc  image_app_core.pyc          menu_server.socker          requirements.txt      templates
```

The core of the code here, other than adaptations, is my [Learn Robotics Programming](http://packt.live/2XccaKe) code, likely first edition so could take some updates. However, much of it should still work.

lets power up the Arduino part of the circuit. I'll need 6xAA batteries. NiMH's would be the best choice. Les put batteries in and try powering this bit up. I see no lights on it - so lets try an i2c scan from the Raspberry Pi.

```shell
pi@orionrobots-piwars-2019:~ $ i2cdetect -y 1
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- -- 
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
70: -- -- -- -- -- -- -- --    
```

Hmm - nothing - not good. I disconnected the batteries immediately, time to use the multimeter to check the wiring, but not before shutting down the Raspberry Pi with `sudo poweroff`. It's multimeter time! However, out of time today, so I'll have to come back to this tomorrow.

[See the rest of my 2024 piwars blogs](/tags/piwars-2024/)
