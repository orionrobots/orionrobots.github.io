---
title: Reconfiguring headless Raspberry Pi OS Bookworm WiFi
date: 2025-07-29
tags: [Raspberry Pi, Raspberry Pi OS, WiFi, bookworm, headless]
---
If you have set up a headless Raspberry Pi using Raspberry Pi OS Bookworm, you may have found that the WiFi configuration has changed from previous versions. The trick with putting the SD card into antoher computer and updating wpa_supplicant.conf no longer works, as the file is no longer used.

The first way to get the right connection is to reflash the SD card from the Raspberry Pi imager. But what about an existing SD card that you want to reconfigure? Especially if the WiFi it was connected to has gone away?

## Reconfiguring using a screen and keyboard

This is not exactly headless. You can use a screen and keyboard to log in to the Raspberry Pi, and then use the network manager tool nmtui to set up the WiFi connection.
This is documented at [Getting Started with Network Manager](https://forums.raspberrypi.com/viewtopic.php?t=357739).

## Reconfiguring using a wired connection

You could use a wired ethernet if you have one available, and then use the nmtui tool as above via SSH from another computer.

## Reconfiguring using another Raspberry Pi

The image on the Raspberry Pi SD cards are only going to be mounted on another Linux computer. Windows (including WSL) and MacOS will not be able to modify it. However, if you mount it onto another Raspberry Pi, you can configure it that way. This was the method I used, given that I was unable to connect a screen & keyboard, or a wired connection to the headless Raspberry Pi.

1. I'm assuming that the other Raspberry Pi, which we will call `pi2`, is already set up and connected to the network.
2. Insert the SD card of the headless Raspberry Pi into a USB slot on`pi2` using an adaptor.
3. On the CLI for `pi2`, look for the new device, using `ls /dev/sd*` or `lsblk`. Mine was `/dev/sda2`. It's likely to be a 2, since the 1 is the boot partition.
4. Create a mount point for the new device, e.g. `sudo mkdir /mnt/headlesspi`.
5. Mount the device: `sudo mount /dev/sda2 /mnt/headlesspi`.
6. You can now copy the Wifi configuration from `pi2` to the headless Raspberry Pi. Find the name of the connection file with `ls /etc/NetworkManager/system-connections/` on `pi2`. This will list all the network connections configured on `pi2`.
7. Copy the desired connection file to the mounted directory of the headless Raspberry Pi:
   For example, if you have a WiFi connection named "HomeWiFi", you can copy it like this:
   ```bash
   sudo cp /etc/NetworkManager/system-connections/HomeWiFi.nmconnection /mnt/headlesspi/etc/NetworkManager/system-connections/
   ```
8. You may also want to remove any preconfigured connection files that are not needed, especially if configured for the wrong network (like the deco IoT network). For example:
   ```bash
   sudo rm /mnt/headlesspi/etc/NetworkManager/system-connections/preconfigured.nmconnection
   ```
9. Unmount the device:
   ```bash
   sudo umount /mnt/headlesspi
   ```
10. Safely remove the SD card from `pi2` and insert it back into the headless Raspberry Pi.
11. Power on the headless Raspberry Pi. It should now connect to the WiFi network using the configuration you copied.

## What I hope for

I hope that in future versions of Raspberry Pi OS, the WiFi configuration will be easier to set up for headless devices, with a similar configuration file in the /boot partition to 
the wpa_supplicant. Ideally, dropping an nmtui configuration file into the /boot partition would allow for easy WiFi setup without needing to modify the root filesystem.

The may be a way to do this with a shell script that runs on the next boot (not first boot, as this sd card has already been booted). This would be a good topic for a future post.

## Mistakes I made

When I switched to using Deco mesh in my house, I kept the old SSID/password on as guest/iot networks which meant that they were still configured on the headless Raspberry Pi. I had to remove these connections from the headless Raspberry Pi, as it was trying to connect to them instead of the new Deco network. 

These guest/IoT networks are isolated from the main network, so my computer could not connect to the headless Raspberry Pi to reconfigure it. I had to use the method above to copy the new WiFi configuration from another Raspberry Pi, along with removing the configuration it had so it wasn't still trying to connect to the old network and prefering it.

