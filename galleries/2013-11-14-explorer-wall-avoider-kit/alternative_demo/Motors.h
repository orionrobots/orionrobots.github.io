#include <Arduino.h>

class Motor {
  public:
    int enable;
    int in1;
    int in2;

    void setup() {
      //Set all the pins as outputs
      pinMode(enable, OUTPUT);
      pinMode(in1, OUTPUT);
      pinMode(in2, OUTPUT);
    }
    
    void forward(int speed) {
      digitalWrite(in1, LOW);
      digitalWrite(in2, HIGH);
#ifndef DEBUG
      analogWrite(enable, speed);
#endif
    }
    
    void backward(int speed) {
      digitalWrite(in1, HIGH);
      digitalWrite(in2, LOW);
#ifndef DEBUG
      analogWrite(enable, speed);          
#endif
    }
    
    void stop() {
      digitalWrite(in1, LOW);
      digitalWrite(in2, LOW);
      analogWrite(enable, 0);
    }
};
