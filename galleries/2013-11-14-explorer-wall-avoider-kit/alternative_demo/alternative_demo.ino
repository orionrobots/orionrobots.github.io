#include "Motors.h"
#include "DistanceSensor.h"

//Define the devices
Motor motor_right = {3, 4, 5};
Motor motor_left = {10, 8, 9};

SR04 sensor_left = {11, 12};
SR04 sensor_right = {6, 7};

void setup() {
  motor_left.setup();
  motor_right.setup();
  sensor_left.setup();
  sensor_right.setup();
  motor_left.forward(255);
  motor_right.forward(255);
}

#define SENSOR_AVOID_DIST 30

void loop() {
  if(sensor_left.readDist() < SENSOR_AVOID_DIST) {
    motor_right.backward(255);
    delay(200);
  } else {
    motor_right.forward(255);
  }
  if(sensor_right.readDist() < SENSOR_AVOID_DIST) {
    motor_left.backward(255);
    delay(100);
  } else {
    motor_left.forward(255);
  }
}

