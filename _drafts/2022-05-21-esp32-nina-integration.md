
### Problem 1

To debug this, my thought was to get an ESp32 dev board, with an on board USB-UART adaptor.

- buidling NINA FW on my laptop
- Building NINA FW with Debug
- Connecting the Mac to USB Uart - drivers, then boot button
- Flashing FW
- Making the test code for Adafruit ESP32SPI
- MacOS capturing - finding the issue with Putty, gnu screen doesn't quite capture, the stty route not woorkiing, then using miniterm.
- The result so far - seeing the ESP32SPI code and NINA-FW code interact with a simple test
- Tomorrow - dong a simple socket based stress test.