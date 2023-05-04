Single board Digital Servo
16 Pos - 4 bit
180 pos - 8 bit (256)

Image of 8 bit encoder wheel.

360/256 = 1.5 degrees approx, giving 240 positions.

11 i/o line Microcontroller, 8 inputs, 2 PWM outputs to motor H-Bridge.

Signals are on a serial Input (1 Line I/O) + Ground, 5v CMOS and 12 V motor.

Every servo has an 8 bit servo ID - which is set with a DIP switch.

Every signal takes the form:
	ID	Op Params, Op params, op params, packet end

Op = Set POS
	Param = angle in degrees
		This will move to, and hold at angle until instructed otherwise

Op = Float - motor will float-default mode
op = reset - will also float, and remove extents.
op = Read Pos - Will return the current position
op = Read speed - will try to use pos sensor to get speed
op = Set speed - will try to maintain a speed - param is a speed 0/8
op = set extent max, min
	when the motor tries to reach a position and not in speed (full rotation) mode, it will not go outside the limits - taking the long way round if necessary. Useful to get it to behave like a analgue servo, or for kinematics.
op = brake (parma active)- the motor will stop in the current position, and the following param will tell it to brake passively (using the h-bridge short method), or actively - trying to maintain the current position (wether it was moving to a pos, or at speed)

8 operations
