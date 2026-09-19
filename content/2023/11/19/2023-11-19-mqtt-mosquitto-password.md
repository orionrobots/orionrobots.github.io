---
title: MQTT Mosquitto Password Issues
date: 2023-11-19
tags: [robot programming, mqtt, python, mosquitto-mqtt-broker, piwars 2024]
---
I've recently started playing with MQTT. My intent is to use it in Python, with the Paho client, on a Raspberry Pi running the Mosquitto broker. I plan to use MQTT in my Piwars 2024 robot so I can have multiple communicating programs, and a channel to send control signals to/from a smartphone too.

I'd set up a passwords file using `mosquitto_passwd`, and had been sending a username and password with the clients.

Because I have plans for multiple devices, like a web client, I wanted to use this over websockets.
I initially got a version working over tcp, but the moment I set up the websockets, it all broke.
It wasn't refusing connections, but timing them out for the python connections over websockets.
The mosquitto_pub client got an authentication error. I was confused, because I was using the credentials I set. Why?

## Configuration

The key here was in the configuration. The initial configuration of mosquitto is to allow anonymous connections. If you've set no listeners, then connections are anonymous.

I added the websocket listener in a conf file:

`/etc/mosquitto/conf.d/websockets.conf`:

```conf
listener 1883
protocol mqtt
listener 9001
protocol websockets
```

This did not disable the anonymous connections explicitly, but it did disable them implicitly. What I didn't yet know is my authentication had not been working anyway.
After some time fiddling with conf I found the solution. Things had been working without the websockets conf, because the default tcp does not add listeners, and so the anonymous connections were still allowed. In that mode, my credentials had worked because they were being ignored.

## Solution

Although mosquitto_passwd defaults to writing a password (on Raspberry Pi's and Linux) to `/etc/mosquitto/passwd`, I expected the default configuration to use it. It dos *not*!
You must explicitly tell it to:

```conf
passwd /etc/mosquitto/passwd
```

I put this into a single file, with the anonymous access made explicit:

`/etc/mosquitto/conf.d/robot.conf`:

```conf
allow_anonymous false
password_file /etc/mosquitto/passwd

listener 1883
protocol mqtt
listener 9001
protocol websockets
```

The users you configured with mosquitto_passwd will now work in your code.

## Conclusion

Magic around the anonymous access, and an implicit listener made this a pain to debug. Having the anonymous bit turn off automatically was surprising (I didn't know it was on), and having the password file not be used by default was also surprising (I didn't know it was off). I hope this helps someone else.

Remember: try to ensure tools have the least surprise!

Tim Peters:
> Explicit is better than implicit.
