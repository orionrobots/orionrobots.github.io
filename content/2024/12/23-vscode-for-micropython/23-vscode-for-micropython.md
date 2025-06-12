---
title: Investigating VScode + WSL as a MicroPython IDE
tags: [robot programming, micropython, mpremote, vscode, python, raspberry pi pico, maplin usb robot arm]
date: 2024-12-23
---
I am a frequent user of Micropython. I also have recently been using a Windows desktop (I had been using a Mac for a while).

While I like to make projects Thonny friendly for beginners to use, when I'm serious, I like to program with VScode. It's support for multiple file completion/click through, multiple file systems, Git extensions and markdown make it my current (2024) preferred IDE for most things.

However, I definitely prefer to drive Git and development filesystems from WSL (Windows Subsystem for Linux). This gives me the first class support for my familiar bash command lines, soft links and other Unix features I like.

How do I mix these three worlds?

## Why not Thonny?

Thonny does not support Git natively, although command line Git could be used.

Thonny is very Python oriented, so also would not edit Markdown without some coaxing.

Thonny also doesn't recognise networked windows drives (which WSL filesystems show up as), but you could map a drive letter if you needed this.

It does have first class native windows support for all Micropython devices I've encountered so far though. I would recommend Thonny to anyone not looking to dive as deep as I intend to.

## What I really want 

The best of both worlds for me would be integrated MicroPython access, via the native Windows side, embedded right into VSCode, regardless of the files being in WSL or Windows native.

However, at the time of writing, there's not an extension that does this.

## Connecting WSL to Micropython

The thing with WSL (2) is it's not directly connected to hardware. That means getting things like USB support is an interesting place.

However, the article [Connect USB devices | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/connect-usb) helped.

This is not straightforward. First install the files, then run usbipd commands from powershell:
```powershell
PS C:\Users\danny> usbipd.exe list
Connected:
BUSID  VID:PID    DEVICE                                                        STATE
1-1    2e8a:0005  USB Serial Device (COM3)                                      Not shared
1-5    047f:c053  Plantronics Blackwire 5220 Series, USB Input Device           Not shared
1-7    291a:3369  Anker PowerConf C200, USB Input Device                        Not shared
1-8    046a:0023  USB Input Device                                              Not shared
1-14   8087:0033  Intel(R) Wireless Bluetooth(R)                                Not shared
```

This looks like I could share more than just serial devices. Interesting. But the one I want is the USB serial.

It was at this point I learned I needed an admin powershell, then back to the user one:
```powershell
PS C:\Windows\system32> usbipd bind --busid 1-1
PS C:\Users\danny> usbipd attach --wsl --busid 1-1
usbipd: info: Using WSL distribution 'Ubuntu' to attach; the device will be available in all WSL 2 distributions.
usbipd: info: Using IP address 172.24.144.1 to reach the host.
```
This might be something I need to bind for each device though. Bit of a dance.
I can see it in WSL though:
```bash
danny@host ~danny$ lsusb
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 002: ID 2e8a:0005 MicroPython Board in FS mode
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```
There it is... Micropython board. Now does that mean reboots would need reconnecting? We'll find out. Detaching and attaching another MicroPython device meant going through the same process with that.
```powershell
 usbipd list
Connected:
BUSID  VID:PID    DEVICE                                                        STATE
1-1    1a86:7523  USB-SERIAL CH340 (COM4)                                       Not shared
```

With the USB device available, we can investigate ways to talk to the Raspberry Pi Pico.

## Using MPRemote

The MPRemote tool lets me drive command line access to a Raspberry Pi Pico or other MicroPython device. It can copy and list files, reboot devices and drive the REPL (MicroPython shell or Read-Eval-Print-Loop).

It can be installed into WSL Ubuntu as a python package with `pip install mpremote`. 
We can see if it finds a device with:
```bash
$ mpremote devs
/dev/ttyACM0 e6614104034c1035 2e8a:0005 MicroPython Board in FS mode
```

See [About MPRemote](/2024/01/21/21-aboutmpremote.html) for more information about this handy tool. What about closer VSCode integration?

## VSCode MicroPico extension

The extension [MicroPico - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=paulober.pico-w-go) allows connecting to various MicroPython devices, although the name says Pico, it can be used for many devices. Some features are available on serial, and some are WiFi only - it's not quite as intuitive as the Thonny experience.

Install this, and try a connection. Press Ctrl-Shift-P to get the command palette, then type "MicroPico connect" and select that. You should see a MicroPython repl in VSCode:

![VSCode MicroPython REPL/Shell](/2024/12/23-vscode-for-micropython/micropython-hello.png)

Now we can start uploading files.
In vscode, you can right click to upload a file, or a whole folder structure.
There's also a menu option to the run the current file. You need to use the REPL and send Ctrl-C to stop the current program there.

![VSCode MicroPico menu to run the current code on a MicroPython device](/2024/12/23-vscode-for-micropython/run-on-pico-menu-annotated.png)

I didn't get the "Play" button in VScode to run it on the device, and while in theory it's able to introspect from Micropython on the device for completions, I didn't yet get that to work.

You also need to disconnect MicroPico if you wish to use MPRemote again.

Downloading isn't quite as clear though.

## Another option - thonny in WSL

You could also install and use Thonny in WSL, with the command line used for any git operations. The UI experience isn't quite right, with tiny fonts, but this definitely works, letting you use the WSL file system.

![Thonny running in WSL](/2024/12/23-vscode-for-micropython/thonny-in-wsl.png)

## Summary

So far, there's a command line method, and a UI method I've got working. Thonny is the right choice if you don't need something heavier, however, MicroPico is pretty workable, once you have configured USB passthrough.

I've definitely not got this figured out, and more experimentation is needed. I'll need to try working with this extension and others, to see how the workflow feels.

The usbipd tool might also be a way to get that Maplin USB Arm working on Windows 11.
