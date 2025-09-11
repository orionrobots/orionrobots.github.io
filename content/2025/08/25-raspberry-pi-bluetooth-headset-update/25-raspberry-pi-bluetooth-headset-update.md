---
title: Raspberry Pi Bluetooth Headset update
date: 2025-08-25
thumbnail: /content/2025/08/25-raspberry-pi-bluetooth-headset-update.jpg
tags: [raspberry pi, bluetooth, audio]
---
This guide is for installing a Raspberry Pi Bluetooth headset via SSH/headlessly.

This is based on the 2025 Raspberry Pi OS (Bookworm) and Kernel. This works well with the default Raspberry Pi OS 64 Bit install, but the lite has a few more hoops to jump through and isn't fully configured.

If you have an older Raspberry Pi distribution, you may find my [2024 Raspberry Pi bluetooth headset guide](2024/03/30/30-bluetooth-headset-on-pi.html) more suitable.

## Assumptions

This guide assumes that:
- You have installed and downloaded Raspberry Pi OS, that you have SSH access to it.
- Your Raspberry Pi is connected to the internet.
- Your Bluetooth headset is charged.

Do not start with the headset powered on yet.

It is a good idea to have the Raspberry Pi on mains power for this.

## All PI versions

- Run `sudo apt-get update && sudo apt-get upgrade -y` before starting.
- Reboot if updates advise it.

## Variants

- [Full Raspberry Pi OS](#full-raspberry-pi-os)
- [Raspberry Pi OS Lite](#raspberry-pi-os-lite)

## Full Raspberry Pi OS

The full Raspberry Pi OS has all the components installed. Let's get it connected. SSH into your Raspberry Pi.

- As your non-root user, type `bluetoothctl`, this will enter you into a bluetooth controller program.
```shell
danny@learnrob-2:~ $ bluetoothctl
Agent registered
[CHG] Controller XX:XX:XX:XX:XX:XX Pairable: yes
[bluetooth]#
```
- Now you can turn on your headphones, and ensure they are pairable.
- In the bluetooth shell type the following:

```shell
scan on
pairable on
```

You will see many bluetooth devices, one should be your headphones.

I found this one:

```shell
[NEW] Device F4:4E:FD:XX:XX:XX BT-68
```

This is my audio device. Your's will have a different address and name. Take a note on it. We can get info to check

```shell
[bluetooth]# info F4:4E:FD:XX:XX:XX
Device F4:4E:FD:XX:XX:XX (public)
        Name: BT-68
        Alias: BT-68
        Class: 0x00240404
        Icon: audio-headset
        Paired: no
        Bonded: no
        Trusted: no
        Blocked: no
        Connected: no
        LegacyPairing: no
        Modalias: bluetooth:v03E0p300Ad0100
        ManufacturerData Key: 0x03e0
        ManufacturerData Value:
  00 00                                            ..
        RSSI: -56
```

Ok - so now we connect it:

```shell
scan off
pair F4:4E:FD:XX:XX:XX
trust F4:4E:FD:XX:XX:XX
connect F4:4E:FD:XX:XX:XX
```


Once connected, it's a good idea to take the pairable mode off:

```shell
pairable off
```

F4:4E:FD:04:BB:92

# Log:

Where was I - it didn't connect.

```log
Attempting to connect to F4:4E:FD:04:BB:92
Failed to connect: org.bluez.Error.Failed br-connection-profile-unavailable
```

I might not have the right things installed this time...
Ah - I updated - it wasn't enough...

Wait what? No audio system installed? No pulse?
Ok - whatever I installed on that SD - was not right.

Rerunning - definitely Raspberry Pi OS 64 (not lite).
