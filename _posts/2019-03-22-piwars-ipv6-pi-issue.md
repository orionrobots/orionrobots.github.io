---
created: 2018-4-10 20:04:30
tags: [piwars, robot, raspberry pi]
title: PiWars 2019 Build Journal - Pi Problems With IP
layout: post
---
I am now in the final days before my PiWar 2019 journey, where I will be a reserve for the competition with my robot.

The robot is mostly build - with a couple of 3D printed parts remaining, and a bunch of code remaining. I've been largely basing my code on things I wrote for [Learn Robotics Programming](https://www.amazon.co.uk/Learn-Robotics-Programming-autonomous-Raspberry-ebook/dp/B07DT9R42B/ref=as_li_ss_il?ie=UTF8&linkCode=li1&tag=orionrobots-21&linkId=4f408506c16858434100eba00eb4f647&language=en_GB) with some enhancements and adapting the robot layer for my robots specific hardware. The code in the book has been designed to make that possible.

One part of this was to go and install something that required an update.  Now, to update Raspbian, after sshing in, there are some specific commands:

```shell
    sudo apt-get update && sudo apt-get upgrade -y
```

This is usually easy enough, it takes a while, and sometimes there may be a package with changes I didn't want. But in this case, none of that was the problem. This time, I was given an unexpected problem, it got stuck:

```shell
    pi@orionrobots-piwars-2019:~ $ sudo apt-get update && sudo apt-get upgrade -y
    Get:1 http://raspbian.raspberrypi.org/raspbian stretch InRelease [15.0 kB]                                
    Get:2 http://raspbian.raspberrypi.org/raspbian stretch/main armhf Packages [11.7 MB]                      
    Get:3 http://raspbian.raspberrypi.org/raspbian stretch/non-free armhf Packages [95.5 kB]                  
    0% [Connecting to archive.raspberrypi.org (2a00:1098:0:82:1000:13:0:7)]                                   
    0% [Connecting to archive.raspberrypi.org (2a00:1098:0:80:1000:13:0:6)]
    0% [Connecting to archive.raspberrypi.org (2a00:1098:0:80:1000:13:0:6)]
    0% [Connecting to archive.raspberrypi.org (2a00:1098:0:80:1000:13:0:6)]^C
```

It was sat like this for a long time. Now the clue here is in what this Pi thought archive.raspberrypi.org is - "2a00:1098:0:82:1000:13:0:7". This looks to me like an ipv6 address. Now although ipv6 is the future (although on hold since the 90's), it's not universally supported.

Now I'm on an interesting new broadband provider. They are very quick, but they also tend to get a little experimental sometimes. It seems that there are IPV6 addresses on the local network, and some of their network, but not all the way. It's not going to work. There are resources on the internet that make this a likely issue. [Raspberry Pi - apt-get and ipv6 troubles](https://www.raspberrypi.org/forums/viewtopic.php?t=173052)

Lets confirm this with an `ifconfig -a`, a command to check the network interface configuration. This should show if we have an ipv6 address, which to me makes it even more likely that it's the issue. Note I've obscured some bits...

```shell
    pi@orionrobots-piwars-2019:~ $ ifconfig -a
    lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
            inet 127.0.0.1  netmask 255.0.0.0
            inet6 ::1  prefixlen 128  scopeid 0x10<host>
            loop  txqueuelen 1000  (Local Loopback)
            RX packets 0  bytes 0 (0.0 B)
            RX errors 0  dropped 0  overruns 0  frame 0
            TX packets 0  bytes 0 (0.0 B)
            TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

    wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
            inet 192.168.1.142  netmask 255.255.255.0  broadcast 192.168.1.255
            inet6 2a01:9faf:9faf:9ac7:66f6:4b00:2378:beef  prefixlen 64  scopeid 0x0<global>
            inet6 fd05:71fc:66f6:0:19c6:9ac7:a674:e51f  prefixlen 64  scopeid 0x0<global>
            inet6 e51f::9faf:2fc5:95d:38  prefixlen 64  scopeid 0x20<link>
            ether b8:27:eb:a6:ba:63  txqueuelen 1000  (Ethernet)
            RX packets 11150  bytes 12469106 (11.8 MiB)
            RX errors 0  dropped 0  overruns 0  frame 0
            TX packets 5696  bytes 816559 (797.4 KiB)
            TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

So it was definitely using ipv6, which is why it got an upv6 address for Raspberry Pi. At this point I tried traceroute - which I found wont work, because it insists on ipv4.

```shell
    pi@orionrobots-piwars-2019:~ $ traceroute raspbian.raspberrypi.org
    traceroute to raspbian.raspberrypi.org (93.93.128.193), 30 hops max, 60 byte packets
    1  192.168.1.1 (192.168.1.1)  4.060 ms  4.236 ms  4.287 ms
    2  100.65.15.33 (100.65.15.33)  9.263 ms  9.446 ms  9.827 ms
    3  172.17.3.210 (172.17.3.210)  7.127 ms  7.309 ms  7.357 ms
    4  172.17.9.96 (172.17.9.96)  7.928 ms  8.216 ms  8.464 ms
    5  172.17.9.94 (172.17.9.94)  8.008 ms  8.348 ms  8.331 ms
    6  172.16.26.24 (172.16.26.24)  9.116 ms  4.904 ms  6.059 ms
    7  172.16.20.96 (172.16.20.96)  7.378 ms  7.726 ms  7.789 ms
    8  172.17.8.46 (172.17.8.46)  12.608 ms  12.819 ms  13.022 ms
    9  93.93.128.193 (93.93.128.193)  5.989 ms  6.197 ms  6.264 ms
```

Now I did see there are ipv6 tools, but this instead further confirmed that I could reach the raspbian site, but only by ipv4. So I had to look for how to get the Pi to use ipv4 for this.

I found the answer on this at [Convince apt-get *not* to use IPv6 method - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/9940/convince-apt-get-not-to-use-ipv6-method), my answer for now is to set up the Pi so ipv4 is preferred for all hosts. This will reduce the likelihood that other tools have weird behaviour for the same reason.

First edit the file gai.conf as root

```shell
    nano /etc/gai.conf
```

In this file, you may find the following line commented out (with the '#' side in front of it):

```text
    # precedence ::ffff:0:0/96  100
```

Remove the '#' from the start of the line (to make it active again), or if you cannot find it, add the line without the preceding '#'. Save the file with this, and you do not need to restart.

GAI changes the behavior of `getaddrinfo` call, used by many things to find addresses for hosts. With this change, many apps will now use ip4 in preference.

At this point, I was able to run the apt-get tools as I expected. I will keep this around to use with other Raspberry Pis.
