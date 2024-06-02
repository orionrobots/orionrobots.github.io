---
title: Pi Wars 2024 Robot Updates
date: 2024-04-17
tags: [piwars 2024, robot building, raspberry pi pico, pimoroni yukon, micropython]
description: A checkpoint on what we've achieved this week
---
This week has seen some major progress on the robot. Let's get into it...

## Relative turret movement

We had the PS4 location directly controlling the turret with the joystick turning into absolute turret positions, when you released the stick, it would return to facing forward. This didn't feel right at all.

Danny had the idea to convert it to relative movement, so the turret would move in the direction you pushed the stick, and then stay there when you released it. This was a great idea, and it worked really well.

```python
if joystick.rx != 0 or joystick.ry != 0:
    self.aim_x += joystick.rx * PAN_SCALE
    self.aim_y += joystick.ry * TILT_SCALE
    # Keep to limits
    if self.aim_x > PAN_MAX:
        self.aim_x = PAN_MAX
    elif self.aim_x < -PAN_MAX:
        self.aim_x = -PAN_MAX
    if self.aim_y > TILT_MAX:
        self.aim_y = TILT_MAX
    elif self.aim_y < -TILT_MAX:
        self.aim_y = -TILT_MAX
    self.publish_json("servos/set", {"index": 0, "position": self.aim_x})
    self.publish_json("servos/set", {"index": 1, "position": self.aim_y})
```

There was tweaking on the scale of the movement, and which way the stick moved the tilt mechanism. Thoughts - why aren't the PAN/TILT servo indexes constants here? The publish_json is a helper function to publish the data as a JSON string to the MQTT bus.

Danny proceeded to set up a little target practice with this. It is slightly difficult where there's a fixed point of view relative to the turret aim, if there was more time, some way to project a target from the turret would be good.

### Carrying the robot

Emma brought over a make-up case, perfect for moving the robot to piwars, along with the tools and attachments...

### Loose nuts and bolts

On the theme of makeup, using nail polish to stop bolts and nuts vibrating loose.

The issues with the case, the wheels and the gears.

### Adding a launcher

launcher service to start and stop services, along with power down.
PS4 service with extra messages.

Adding a joypad pair button assignment from the YUkon.

### Wifi hotspot

Using phone - getting setup.error needing to redo wpa supplicant on the pi.

### Distance sensors

Added physically, but left for now, as we need to wire the xshut pin unless we can find 2 busses...

### Adding camera code

For blind maze - camera code, bokeh and numpy. Getting GPT to help with frustrating camera issues.

### Fitting line follower

I2c - hardware - link to sites - the service mod on the yukon, surfacing that, line following code.

- Wiring between the two crimp types and extending wires.
- Shadow/lighting
- Glossy test line issue.

### Other bits

Extra batteries on the way
Longer xt30 cable for testing - left out for now.
Motor wires sometimes drop out, trying to ensure that can't happen - all are screw terminals.

### Next steps

- Getting there
- Maybe set up the yukon boot button to send the power off signal too.

## Where are we

- Line following fully autonomous.
- All other tasks are manual - but we have all he hardware software working for them.
