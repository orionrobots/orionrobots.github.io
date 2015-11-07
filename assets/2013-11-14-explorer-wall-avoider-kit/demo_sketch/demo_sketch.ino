
#include "TurtleMotors.h"
#include "DistanceSensor.h"

//Define the devices
Motor motor_right = {3, 4, 5};
Motor motor_left = {10, 8, 9};
TurtleMotors motors = {motor_left, motor_right, 255, 100};
SR04 sensor_left = {11, 12};
SR04 sensor_right = {6, 7};

void setup() {
  motors.setup();
  sensor_left.setup();
  sensor_right.setup();
  motors.forward(0);
  
  //Serial.begin(9600);
}

//Threshold to avoid at
#define SENSOR_AVOID_DIST 30

void real_loop() {
  int l = sensor_left.readDist();
  int r = sensor_right.readDist();
  while (l < SENSOR_AVOID_DIST || r < SENSOR_AVOID_DIST) {
    //if left is closer than right
    if (l < r) {
      motors.turnRight(2);
    } else {
      motors.turnLeft(2);
    }
    l = sensor_left.readDist();
    r = sensor_right.readDist();
  }
  motors.forward(0);
}

void debug_loop() {
  Serial.print("L");
  Serial.println(sensor_left.readDist(), DEC);
//  Serial.print("R");
//  Serial.println(sensor_right.readDist(), DEC);
}

void loop() {
  //debug_loop();
  real_loop();
  //if (sensor_left.readDist() < SENSOR_AVOID_DIST) {
  //  motors.forward(1);    
  //}
  //f = 1010
  //b = 0101
  //l = 1001
  //r = 0110
  //Getting stuck on the first turning side we go on
}

