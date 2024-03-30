---
title: Connecting a Bluetooth Headset to a Raspberry Pi Running OS Lite
date: 2024-03-30
tags: [raspberry pi, bluetooth, audio]
---
I have a Raspberry Pi 4, running Raspberry Pi OS Lite, bookworm. I wanted to connect a bluetooth headset to it so I can record and playback. I needed to get the speakers and microphone working. This is handy for a DIY project like a voice assistant.

I am doing this on Raspberry Pi OS lite, which means I am in a command line/CLI/SSH headless environment. The headset is some cheap bluetooth earbuds I bought online, Power Q20 Pro. This will probably work for other headsets.

I had to do a bunch of research to get this working.

I assume you already have an SSH connection to the Raspberry Pi, and are ok with copying files to it (for the audio output test).

## Steps

- Install bluetooth alsa tools: `sudo apt install bluez-alsa-utils`
- [Make the bluetooth audio helper](#making-a-bluetooth-audio-helper).
- [Update the bluealsa service](#update-the-bluealsa-service-to-run-the-helper) to run the helper script.
- Ensure the headset is not paired with anything else, and in pairing mode.
- [Pair the headset with the Raspberry Pi](#pairing-the-headset-with-raspberry-pi)
- [Connect the headset](#connect-the-headset)
- [Test the audio](#test-the-audio)
- [Make this the default audio](#making-this-the-default)

## Making a bluetooth audio helper

Bluetooth audio on the Raspberry Pi has a route missing. A helper script will get this up and running.

Use `sudo nano /usr/bin/bluealsa-start-helper` to create a new file.

```bash
#!/bin/bash
hcitool cmd 0x3F 0x01C 0x01 0x02 0x00 0x01 0x01
/usr/bin/bluealsa -p a2dp-source -p a2dp-sink -p hfp-hf -p hsp-hs -p hfp-ag -p hsp-ag
```

Press `Ctrl+X` to exit, and `Y` to save the file. You also need to make this file executable with `sudo chmod +x /usr/bin/bluealsa-start-helper`.

The hcitool part enables an audio route in the Broadcom bluetooth chip. This is needed to get audio working. Without this, you will not get a working SCO profile for microphone input.

The bluealsa part starts the bluealsa service with the profiles that are needed for the headset, enabling headphone and headset profiles. Otherwise, you will only get audio output.

## Update the bluealsa service to run the helper

Edit the file "/lib/systemd/system/bluealsa.service" with `sudo nano /lib/systemd/system/bluealsa.service`.

Find the line that starts with ExecStart. Make sure that line now looks like this:

`ExecStart=/usr/bin/bluealsa-start-helper`

Press `Ctrl+X` to exit, and `Y` to save the file.

Reload the systemd service with `sudo systemctl daemon-reload`, then restart the bluealsa service with `sudo systemctl restart bluealsa`.

## Pairing the headset with Raspberry Pi

Make sure the headset is in pairing mode. This is usually done by holding down the power button for a few seconds until the LED flashes.

Run `sudo bluetoothctl` to start the bluetooth control tool.

Inside bluetooth control, we can make our Raspberry Pi ready for pairing by typing the following:

```text
discoverable on
pairable on
agent on
default-agent
scan on
```

This makes the Raspberry Pi discoverable, and starts scanning for devices. Bluetoothctl will start printing Bluetooth devices. You will need to watch for yours:

```text
[NEW] Device 7F:71:7C:AB:CD:EF Power Q20 Pro
```

Your device and address will be different from mine, but take note of that address `7F:71:7C:AB:CD:EF`. We can use that to pair and trust our device:

```text
pair 7F:71:7C:AB:CD:EF
trust 7F:71:7C:AB:CD:EF
```

This will pair and trust the device. You can now exit bluetoothctl with `exit`. You only need to do this once.

## Connect the headset

Run this command any time you want to reconnect the headset:

`bluetoothctl connect 7F:71:7C:AB:CD:EF`

I've not yet figured out if there's an automatic connect once it's all paired. I'll update this post if I find out.

## Test the audio

We should now be able to play back and record audio. You can use `aplay` to play audio files, and `arecord` to record audio files.

- Copy a test audio file to the Raspberry Pi. A 16 bit stereo wav file is a good choice.
- Play it back with `aplay -D bluealsa downloaded.wav`. You should now hear your file.
- Record audio with `arecord -D bluealsa:PROFILE=SCO -f CD recording.wav`. You should now have a recording. Press ctrl-c to stop.
- Play back the recording with `aplay -D bluealsa recording.wav`.

The audio may not be the best quality, this does depend largely on the headset.

## Making this the default

You will need to make this a default, so record and playback work in other programs. You can use the ~/.asoundrc file to do this. `nano ~/.asoundrc` to create a new file.

```text
pcm.!default {
    type asym
    playback.pcm {
        type plug
        slave.pcm {
          type bluealsa
            device "7F:71:7C:AB:CD:EF"
            profile "a2dp"
        }
    }
    capture.pcm {
        type plug
        slave.pcm {
            type bluealsa
            device "7F:71:7C:AB:CD:EF"
            profile "sco"
        }
    }
}

ctl.!default {
    type bluealsa
}
```

Be sure to swap the device address for your headset. Press `Ctrl+X` to exit, and `Y` to save the file.

Now you can record and playback without specifying the device:

```bash
$ aplay downloaded.wav
...
$ arecord -f CD recording.wav
...
$ aplay recording.wav
...
```

## Troubleshooting

This guide is a starting point, but not exhaustive. If you still run into problems, you may need to search for more information on the internet. There are a lot of blog and forum posts on the topic, but I had to combine research from a few to get this working. I still do not have PyAudio fully working with this setup, but arecord and aplay are a good start.

The bluetooth audio support for Raspberry Pi has changed over the years too, so some older posts may be less useful, some assume a desktop interface, or pulseaudio. I've made this work with the least additional install packages.

This guide may not work with the Raspberry Pi 5, or more recent Raspberry Pi OS versions, which may come with the routing issue fixed already (this would be great), and a different bluetooth audio stack(this would be a rewrite of the guide). Hopefully future updates will make this process simpler and more reliable.

Ask about problems on forums. You can ask the people on my [Robotics discord server](https://discord.gg/hQNfk32Zx4) for help too.

You can find out if your headset supports the right profiles with:

```bash
$ bluetoothctl info 7F:71:7C:AB:CD:EF
Device 7F:71:7C:AB:CD:EF (public)
        Name: Power Q20 Pro
        Alias: Power Q20 Pro
        Class: 0x00240404
        Icon: audio-headset
        Paired: yes
        Bonded: yes
        Trusted: yes
        Blocked: no
        Connected: no
        LegacyPairing: no
        UUID: Audio Sink                (0000110b-0000-1000-8000-00805f9b34fb)
        UUID: A/V Remote Control Target (0000110c-0000-1000-8000-00805f9b34fb)
        UUID: A/V Remote Control        (0000110e-0000-1000-8000-00805f9b34fb)
        UUID: Handsfree                 (0000111e-0000-1000-8000-00805f9b34fb)
        UUID: PnP Information           (00001200-0000-1000-8000-00805f9b34fb)
        Modalias: bluetooth:v05D6p000Ad0240
        ManufacturerData Key: 0x7262
        ManufacturerData Value:
  32 32 78 78 11 22 33 44 55 66 aa bb 00 00        22xx."3DUf....
```

Note here the UUID's showing ports for audio sink, handsfree, and remote control. This is a good sign that the headset supports the profiles we need.

You can verify the bluealsa command that is running, to ensure your settings are being used:

```bash
$ ps -ef | grep bluealsa
root         632       1  0 12:38 ?        00:00:00 /usr/bin/bluealsa-aplay
root         921       1  0 12:41 ?        00:00:00 /bin/bash /usr/bin/bluealsa-start-helper
root         926     921  0 12:41 ?        00:00:00 /usr/bin/bluealsa -p a2dp-source -p a2dp-sink -p hfp-hf -p hsp-hs -p hfp-ag -p hsp-ag --syslog
```

If you don't see these, you may need to restart the bluealsa service, or check the logs with `journalctl -u bluealsa`.

## Note on bluetooth security

When you ask questions, be sure to obfuscate your bluetooth device address. This is a security risk, as someone could use that address to connect to your device. This is why I've used `7F:71:7C:AB:CD:EF` as an example address.

## Noisy debug

If you see a lot of log output from bluealsa for every sound command, you may want to instruct it to send output to the system log.

In the starter script we added, `/usr/bin/bluealsa-start-helper`, try adding `--syslog` after the `bluealsa` command. This will send the output to the system log, which you can view with `journalctl`.

## Glossary

There are a lot of confusing terms in the bluetooth audio stack that I had to get my head around:

- A2DP - Advanced Audio Distribution Profile - This is the profile that is used for high quality audio streaming. This is really for output only.
- ALSA - Advanced Linux Sound Architecture - This is the sound system that is used on Linux. This is the low level system that is used to play and record audio, which is available on the Raspberry Pi.
- Aplay - This is a command line tool that is used to play audio files. This is part of the ALSA system.
- Arecord - This is a command line tool that is used to record audio files. This is part of the ALSA system.
- bluealsa - This is a program that is used to connect the ALSA system to bluetooth devices. It is installed by default on Raspberry Pi OS Lite.
- Bluetooth Profiles - These are the different ways that bluetooth devices can communicate. There are a lot of different profiles, but the ones that are important for audio are A2DP, HFS, HFP, and SCO.
- bluetoothctl - This is a command line tool that is used to interact with the bluetooth stack.
- HCI - Host Controller Interface - This is the interface between the bluetooth controller and the host (the Raspberry Pi). This is a low level interface, but may be needed to make changes to the bluetooth stack.
- HFP - Hands Free Profile - This is the profile that is used for audio input and output. This is for things like headsets, and is a bit more complex than A2DP.
- HFS - Headset Profile - This is the profile that is used for audio input and output. This is for things like headsets, and is a bit more complex than A2DP.
- SCO - Synchronous Connection Oriented - This is a type of bluetooth connection that is used for audio. This is a bit more complex than A2DP, but lets you do two way audio with a microphone.

## Links

- [BlueAlsa Manual Page](https://manpages.debian.org/unstable/bluez-alsa-utils/bluealsa.8.en.html) - I found this helpful in understanding what the profiles meant.
- [Alsa APlay manual page](https://manpages.org/aplay)
- [Alsa ARecord manual page](https://manpages.org/arecord)
- [Bluetoothctl manual page](https://manpages.org/bluetoothctl)
- [BlueDot guide to pairing on the Pi](https://bluedot.readthedocs.io/en/latest/pairpipi.html#using-the-command-line) - I found this a great guide to get started on pairing at all.
- [BlueAlsa Plugins](https://manpages.debian.org/unstable/libasound2-plugin-bluez/bluealsa-plugins.7.en.html) - Good reference for things after the colon with the bluealsa device.
