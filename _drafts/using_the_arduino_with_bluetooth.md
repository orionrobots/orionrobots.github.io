---
extends: base.j2
default_block: main
title: Using the Arduino With The HC-06 Bluetooth BT Board
description: Using the Arduino With The HC-06 Bluetooth BT Board
tags:
    -arduino
    -microcontroller
    -bluetooth
---
{% filter markdown -%}
<h1>Using the Arduino With The HC-06 Bluetooth BT Board</h1>

Being able to interact with your project from a connected computer is fun - but even more so if it doesn't need a wire to do so.
Most laptops have builtin bluetooth, and inexpensive dongles can add the capability to desktops. Android Phones also support simple bluetooth setups.

It is easy to add Bluetooth to an Arduino based project - like my Explorer 1 robot kits, or any other project you have.

Please note - all of the code here is free for you to use for any purpose and in the public domain.
What you will need:
- An HC-06 Bluetooth module
An Arduino UNO compatible board - like the one in the Orion Explorer One Robot Kit.
A power supply - either connect 7.2v or more to the vIn on the Arduino, or take 5v regulated power to the 5v pin. This will be present on an Explorer One.
4 Male to Female Jumper cables - there are many spare in the Explorer One kit.
A computer with Bluetooth - Windows, Linux or Mac.

Note - there is Arduino example code for serial interactions - please do take a look at it in the File- Examples- 01.Basics menu in the Arduino IDE.

<h2>Step 1 - Programming the Arduino</h2>
<img src="step1"/>
The bluetooth module interacts with the Arduino using a serial interface. This is a simple connection which can send or recieve bytes - information, at a fixed clock rate. This is a very old protocol - although physical serial ports have all but dissappeared, the system it used is still common.
Serial has a BAUD rate - for now, consider this the speed at which data is sent. There are other parameters - but for now I suggest to keep to the defaults.

In the Arduino code - we will demonstrate a simple lights on/off program. The Setup function will set the port mode.
In the loop function, when data is sent to the Arduino - we can use the signal sent to turn the demo LED (on pin 13) on and off.

When connected via USB, the Arduino will behave like a serial port. This connection is used to program the Arduino. We will use the same connection to test serial.

<b>Setup code</b>

const LED_PIN =  13;
void setup() {
    // initialize serial:
    Serial.begin(9600);
    // set the digital pin as output:
    pinMode(LED_PIN, OUTPUT);
    digitalWrite(LED_PIN, LOW);
}

We start the serial connection at 9600 BAUD.
We also setup the LED pin.
We should also agree on what symbol will turn the LED on, and which will turn it off.
For now - we can use 1 and 2 - since they are close to each other on the keyboard.

<b>Loop Code</b>
void loop() {
    if(Serial.available()) {
        char data = (char)Serial.read();
        if(data == '1') {
            digitalWrite(LED_PIN, HIGH);
        }
        if(data == '2') {
            digitalWrite(LED_PIN, LOW);
        }
    }
}

This code is easy - if there is data at the port, then read it.
If it is a '1' - turn on the LED, if it is a '2' - turn off the LED.
Compile this code in the Arduino IDE - and send it to your Arduino.

<h2>Step 2 - Testing Via serial</h2>
With the Arduino still connected, go to Tools->Serial Monitor.
From the monitor - type '1' and hit send, you will see the LED light.
Type '2' and send, and the LED will turn off.

<h2>Step 3 - Connecting the bluetooth module</h2>
Disconnect the USB cable - the Bluetooth module uses the same digital lines as the USB connection.
Connect up the external power.

Follow the diagrams below.
Connect the Tx of the module to the Rx of the Arduino, and the Rx of the Arduino to the Tx of the board.
Tx is an abbreviation for transmit, and Rx for receive. The lines must be swapped - so each device is receiving
the data the other is transmitting.
For power, you can either use the 5v or IORef connections on an Uno compatible board. Both are at 5v.
For GND - any connection marked GND on the Arduino is suitable.

<h2>Step 4 - Connecting your computer</h2>
At this point, set your computer up to discover bluetooth devices. This will be different for each OS.

<h3>Windows Xp</h3>

<h3>Windows Vista/7/8</h3>

First download Putty (my personal favourite tool for serial stuff on Windows).
Press the Windows button, and search for Bluetooth. Search for bluetooth devices.
In this - you will see an HC06 device - add the device. When asked for a code, type 1234.
Windows should automatically detect this as a bluetooth serial device.
Look in device manager to find which port it now is.

Now open putty, connect to this port at 115200. You are now ready to try turning the LED on and off with the 1 and 2 buttons.

<h3>Mac OSX</h3>

Use spotlight with cmd+space, type "bluetooth" and select the bluetooth settings. Discover new devices.
Find the device with "HC06" in it, and connect to it. The code is "1234".
To find the port, start up a terminal, and type "ls /dev/tty.*hc*".

To screen
<h3>Linux FC GUI</h3>
Go to settings (access from your user name in the top right), then Bluetooth. Ensure you have adaptors on, click +, select the "HC06", connect with the code "1234".

To find the port, start up a terminal, and type "ls /dev/tty.*hc*".

<h2>Step 5- Sending commands to it</h2>


<h2>Bonus Step - Doing it from an Android device</h2>


------

This tutorial will be in two major stages. The first will be tethered control where a connected PC or Laptop with a USB cable will act as the serial controller. The second part will be using the HC06 mounted serial module (available on the shop or with the Deluxe kit) to control this remotely. The very final step is to be able to use an Android phone to control it.

Warning - your robot will start to move with this - so you may want to make sure you are ready to field it from driving into or off something. The Explorer 1 robots - at least unmodified, can stand up on their rear - so the motors are not in contact with the floor. This is a good position to use while testing/developing.

All the code - for each of the stages, and the final stage of this tutorial can be viewed at <a href="https://github.com/dannystaple/orion-explorer-arrow-control">Github | dannystaple | orion-explorer-arrow-control</a>. Please <a href="https://github.com/dannystaple/orion-explorer-arrow-control/archive/master.zip">Download</a> and unzip somewhere before starting.

<h1>Gaining Tethered Control</h1>

<h2>A recap on the motor control</h2>

I will assume that you have already constructed the Explorer 1, have batteries, and have seen the motor control program working.

<img alt="Completed Explorer 1 Robot" src="{{ media_url('images/construction_guide/IMG_1211_web.jpg')}}">

First - start off with the 0_start app, which is the same as the basic app you'd used to test your robot.

Now open up your Arduino app, and load this 0_start.ino file. You should have an IDE with two tabs. Leave the motor control tab alone for now, we can use that for reference for controlling the motor. The initial code here is the simplest setup - I'll quickly take you through it to refresh before we get started on the next bit.

<pre>
#include "MotorControl.h"

Motor motorLeft(10, 8, 9); //A
Motor motorRight(3, 4, 5); //B
</pre>

This section first states that we will be using the MotorControl header in this file - that gives us the "Motor" class - a kind of code template for dealing with the motors. We create two motor objects with that class, passing in the pins the motor is connected to. For this arrow bot - those pins will stay the same and we shouldn't need to rewire the motors.

Next we have the main setup function - which is run once when the Arduino is reset or turned on:

<pre>
void setup() {
  motorLeft.forward();
  motorRight.forward();
  delay(2000);
  motorLeft.forward();
  motorRight.back();
  delay(1000);
  motorLeft.forward();
  motorRight.forward();
  delay(2000);
  motorLeft.stop();
  motorRight.stop();
}
</pre>

In this setup, we set both motors to move forward for 2 seconds (delay is in millis - 1000ths of a second), then turn the Right one back - which will cause the robot to drive to the right, for 1 second, we then set them forward for another 2 seconds and finally stop both motors.

<pre>
void loop() {
}
</pre>

Finally there is an empty loop. The Arduino system requires this function to exist - even if you have nothing to put in it. We will find something to put in it throughout this tutorial.

<h2>A basic plan</h2>

So before we start - lets show the basic idea:
You will have a program on the controller that will read data from the serial connection (the USB cable in this case), and based on the data, drive forward, back, turn left, right or stop. To keep this simple - every key will start movement, and the space button will stop. Just in case things go wrong - so the robot doesn't run away, it would be a good idea to have 1 second timeout on any movements.

The keys will be sent from the computer - initially we will use the Arduino IDE serial monitor - but we will later find more interesting ways to control this.



To implement our basic idea, the Arduino code will need to do the following:

* Set up the motor control - we can use what we already have as this won't change
* Set up a serial connection
* Check for new serial commands- and start/stop the right motors
* Check for a time out - stop the motors if no commands have been received for 2 seconds.

<h2>Basic serial</h2>

There are Arduino tutorials on this - for now, I'll make the small modifications to SimpleMotorBot to get there. First - clear out the setup function so it is empty, and replace it with this:

<pre>
  void setup() {
    // initialize serial:
    Serial.begin(9600);
  }
</pre>

The control is now ready to accept serial input at 9600 (a "baud" rate- the number of bits of data per second the connection can accept)- but we need to do something with it. We can check for serial data in the loop function, and then do something with it. Lets make the robot spin its wheels when any key is sent by replacing the loop function with this code:

<pre>
  void loop() {
    if(Serial.available()) {
      char ignore = (char)Serial.read();
      motorLeft.forward();
      motorRight.forward();
      delay(100);
      motorLeft.stop();
      motorRight.stop();
    }
  }
</pre>

What this will do is check if there is any serial data available. If there is, it will read the data off the port (you need this, otherwise data would always be available), then move the motors forward for 100 millis (10th of a second) and then stop.

Save your sketch, and hit the Upload button to send it to your Arduino.

Lets test this with the serial monitor built into the Arduino IDE - note that the serial monitor is a little basic, and will expect you to hit the send button for each keypress.

You can access this serial monitor through the "Tools" menu.Type a single letter, press the send button, and the motors will briefly turn.
You can see the code will do 100 millis for each key - if you send 5 keys, it should be roughly half a second.

This is shown in the 1_basic_serial folder in the github download.

<h2>Adding in the start/stop behaviour</h2>

Lets alter this slightly - with our "safety" mechanism. Well make it behave in the following way:

Any keypress other than space will start it moving for 1 second, and space will stop it moving.

We will need to monitor for keypresses inside the loop, while the robot is moving, so we can no longer simply use the delay. We will need some kind of countdown, which we can reset every time a key is pressed.

We will also need to detect if the sequence sent is a space - and stop if that is the case too.

How can we do the count down?

There is a function in the arduino library called "millis" - which counts the number of milliseconds since the controller started or was last reset. You cannot set this value, but you can read it more than once. To have a timeout, we can take the following (common) approach - store a value of the timer plus a fixed interval - 1000 millis, and in our loop, check if the current time is greater than this - if so stop.

We also want to be able to send a space to stop this - so we no longer ignore the character read from serial, we need to use an "if" statement to check it.
So here is what loop would now look like:

<pre>
  unsigned long timeout = 0;

  void loop() {
    //Stop after the timeout
    if (millis() > timeout) {
      motorLeft.stop();
      motorRight.stop();
    }
    if(Serial.available()) {
      char data = (char)Serial.read();
      if (data == ' ') {
        motorLeft.stop();
        motorRight.stop();
      } else {
        motorLeft.forward();
        motorRight.forward();
        //reset the timeout
        timeout = millis() + 1000;
      }
    }
  }
</pre>
First - we've declared a timeout variable, and initialised it to 0.
If we have reached the timeout, the stop everything.
If there is serial data, then read it.
If the data is a space, then stop the motors, otherwise, move forward and reset the timeout.

You should have code that looks like 2_start_stop in the downloaded folder.

Upload this, and test with the serial monitor- you will need to reopen it as it closes during code uploads.

<h2>More Interesting Serial</h2>

A bit more design - we did say arrow keys, but lets use a common gaming convention and we can translate to arrows later. This is because they are a bit easier to test this way.

If you ever played a first person shooter (I am a bit of a Valve fan - Half Life 1,2 and Team Fortress 2) you'd have seen the WASD setup:

<table>
  <tr><td> </td><td>W</td><td> </td></tr>
  <tr><td>A</td><td>S</td><td>D</td></tr>
</table>

W is forward, A left, S back and D right. It is usually the same shape as the arrow keys on most qwerty keyboards.
We also need to keep that timeout, and the space to stop things.

In Arduino code, you can chose from a number of different cases using the "switch statement":
<pre>
  switch(data) {
    case 1:
      do something;
      break;
    case 2:
      do something else;
      break;
  }
</pre>
Note we must end each case with "break;" - if you fail to, the code will actually continue into the code for the next case too - this is known as fall through, something you don't want to trigger accidentally (although there are legitimate reasons to trigger deliberately).

In our case, we can switch over the keypresses. However, there is one more thing - as we build this code, we may want to change which keys do things, so it is a good idea to define them, and use the defined names in the switch. This also makes the code easier to read later. To do this, use the #define statement:

<pre>
  #define COMMAND_LEFT 'a'
  #define COMMAND_RIGHT 'd'
  #define COMMAND_FORWARD 'w'
  #define COMMAND_BACK 's'
  #define COMMAND_STOP ' '
</pre>

You can add this at the top of the program, I normally do so after the include.

Now we can use these values in our switch statement. We'll also reset the timer for any of these keypresses.
In the loop function, look for the block of code (blocks are grouped by curly braces '{}') which starts with if(Serial.available()). Replace the block with this code:
<pre>
  char data = (char)Serial.read();
  //always reset the timeout
  timeout = millis() + 1000;
  switch(data) {
    case COMMAND_FORWARD:
      motorLeft.forward();
      motorRight.forward();
      break;
    case COMMAND_BACK:
      motorLeft.back();
      motorRight.back();
      break;
    case COMMAND_LEFT:
      motorLeft.back();
      motorRight.forward();
      break;
    case COMMAND_RIGHT:
      motorLeft.forward();
      motorRight.back();
      break;
    case COMMAND_STOP:
    default:
      motorLeft.stop();
      motorRight.stop();
  }
</pre>

Upload this, and if you have the tool "putty" - you can point it at the serial port for your robot, you will be able to drive it with the
WASD keys and space to stop.

You can see this code in the folder 3_arrows.

Note in the last case, we fall through to a special case 'default' - which means that the stop command, and any other
unrecognised command, will cause the robot to stop. Lets upload this - and you will have some control through the serial
monitor. We'll then build a small app to easily use arrow keys to send your commands to the robot.

<h1>PC Control of the Arduino</h1>

For using a PC to control the Arduino - I am going to use Processing - this a match well made with the Arduino IDE
you have already been using as it has a very similar look and there is a lot of documentation on interfacing with
Arduino compatible boards like the one on the Explorer.
Please download and install <a href='https://processing.org/download/?processing'>processing</a>. On Windows - please
use only the 32 bit version as the serial library isn't yet 64 bit windows compatible.

Once again, a little basic design - we already have our tethered Arduino which received serial commands.
The basic processing Sketch will need to do the following:
setup a serial port
When a key is pressed on the keyboard:
  if it is one of the arrow keys, send the right combination on the serial
When the key is released:
  send the stop command on the serial port.

When you open processing, you will have a blank sketch - lets add in the basics:
<pre>
void setup() {

}
</pre>

So far - looks a lot like the Arduino IDE. We won't need a loop function here as we will directly use keyboard events.
Lets initialise a serial connection to our robot. In the bottom right corner of the Arduino window -
there will be a note that says "Arduino Uno on ..." - this shows the port you will need. This will be something like
COMN, or /dev/ttyXXX.

You will also need to bring in the serial library, and declare your port:
<pre>
import processing.serial.*;

Serial port;
void setup() {
    port = new Serial(this, "/dev/tty.HC-06-DevB", 9600);
}
</pre>

You now have the port to connect to. Your app will need to accept keypresses, and send them to the serial port.
This can be done by adding a new function "keyPressed". If you add this, processing will automatically call it every
time a keyboard is pressed. You also need to know when a key is released, so you can tell the robot to stop. There is a
keyReleased function for that.

<pre>
void keyPressed() {
}

void KeyReleased() {

}
</pre>

To send events via serial, you can use port.write (you can name your port something else, but we'll stick with port for now). Lets send two basic events - a forward command 'w' when a key is pressed, and a stop command ' ' when the key is released:

<pre>
void keyPressed() {
  port.write('w');
}

void KeyReleased() {
  port.write(' ');
}
</pre>

If you run this, when you hold down a key, your robot will move, and when you let go it will stop.
You can now add a switch statement, just as we did above to map keypresses from the arrow keys, to commands we can send via serial. We can use a library variable named "keyCode" which holds the current keycode, and a number of library constants already defined for UP, DOWN, LEFT and RIGHT keys.

<pre>
  switch(keyCode) {
    case UP:
      port.write('w');
      break;
    case DOWN:
      port.write('s');
      break;
    case LEFT:
      port.write('a');
      break;
    case RIGHT:
      port.write('d');
      break;
    default:
      break;
  }
</pre>

If you now run this, you will be able to control the robot directly from the arrow keys on your keyboard, with it stopping as soon as a key is released! Awesome.

This is in the folder under 4_pc_control.

<h1>Untethering</h1>

This whole thing is still tethered to your computer, and unless you have a very long USB cable, this is going to get quite annoying. So here is how to untether it.

<h2>The Bluetooth HC06 module + mount</h2>

You will need a bluetooth module from the OrionRobots shop for the robot, and a computer with Bluetooth support or a bluetooth dongle.

This module can bought on the Orionrobots shop - and once paired (the code is 1234) can be used as a simple serial port to talk with the robot- so you only need to change the port name at the top of your code, and this will work.

To connect the module - take a look at the 4 pins - under them (on the reverse side) they have the labels TX, RX, GND and VCC.

Peel 4 cables from the male-to-female cables included in the Orion Explorer kit, and plug the female end into the module.

Plug the GND cable into a spare GND pin on the Uno board, plug VCC into IOREF. For transmission - the two lines TX and RX mean transmit and receive respectively. These lines need to be swapped - so Rx from the module goes to Tx on the robot, and Tx on the module goes to Rx on the robot.

To stop the module dangling off the side of the robot, I've found it handy to poke it just a little into the upper cable port.

Once you have this connected, you should be able to turn on your robot (without the USB cable connected), and see the bluetooth HC-06 module on your computer. Pair the module, and get the connection details (either COM<n> on windows, or /dev/tty/{somestuff} on linux and mac), put those into the new Serial call.

Restart your control app on the PC and you should be able to control the robot from the computer.

<h2>Getting Android Remote Control Of Your Robot</h2>

I suggest tweaking the timeout on the robot code to 100 millis first. You will need to disconnect the rx/cx lines from the bluetooth module before using the USB cable to program it.

If you have an Android phone or tablet with Bluetooth, you should be able to take control and drive the robot from it with the HC-06 module. This originally used the "Bluetooth SPP Tools Pro" app, which is no longer available.
You should still be able to download a bluetooth SPP app from the <a href="https://play.google.com/store/search?q=Bluetooth%20spp&c=apps&hl=en_GB">Play Store</a>.
The app <a href="https://play.google.com/store/apps/details?id=com.broxcode.arduinobluetoothfree&hl=en_GB">Arduino Bluetooth Control</a> or <a href="https://play.google.com/store/apps/details?id=com.shevauto.remotexy.free&hl=en_GB">RemoteXY: Arduino Control</a> can offer similar features.

The instructions below are for the SPP Pro Tools app:

Ensuring the robot is turned on with the module connected, launch the app and scan device - it should easily identify the HC-06, tap it, and pair with the code 1234. Enter "Keyboard mode" on the next page. You will see a bunch of buttons with the text clickMe on them. Open the app menu, and select "Buttons set". In this mode, you will be able to program the buttons. click on the top-middle button and you'll be able to change its name and the value it sends. Name it 'forward', and the send value to 'w'. You can then click ok. Set the other buttons for left, back and right with the same 'a', 's', 'd' values as above. When you've done all the buttons, summon the menu, and click "Buttons set complete".

This app will automatically send a line-ending after each value, so to disable this, from the menu select "set end flag" to "other", and clear the value so it is empty. Click ok.
Use the menu - and go to "set repeat freq", set this value to 100 millis. Finally - change the trigger mode - to "Long press to send repeatedly".

You can now use the buttons on this app to drive your robot!

{%- endfilter %}
