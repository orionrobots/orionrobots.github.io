---
layout: page
title: Parallel Port
date: 2005-03-16 22:43:35
---
Most PCs come with this port, traditionally used for connecting printers, and sometimes hobbyist kits like our <a href="/wiki/simple_parallel_port_led_board.html" title="How to attach and program an LED to the parallel port on a PC">Simple Parallel port LED Board</a>. Some newer ones have however done away with this with the rise of the <a href="/wiki/universal_serial_bus.html" title="Universal Serial Bus">USB</a> printers.

It uses (as the name implies) a <a href="/wiki/parallel_data_stream.html" title="Parallel Data Stream">Parallel Data Stream</a>.

<img class="img-responsive" src="image119"/>

Parallel Port Pins:

<table class="normal" id="fancytable_1"> <thead> <tr> <th>Pin No</th> <th>Name</th> <th>Direction In/out</th> <th>Register</th> <th>Hardware Inverted</th> </tr> </thead> <tbody> <tr> <td class="odd">1</td> <td class="odd">nStrobe</td> <td class="odd">In/Out</td> <td class="odd">Control</td> <td class="odd">Yes</td> </tr> <tr> <td class="even">2</td> <td class="even">Data 0</td> <td class="even">Out</td> <td class="even">Data</td> <td class="even"></td> </tr> <tr> <td class="odd">3</td> <td class="odd">Data 1</td> <td class="odd">Out</td> <td class="odd">Data</td> <td class="odd"></td> </tr> <tr> <td class="even">4</td> <td class="even">Data 2</td> <td class="even">Out</td> <td class="even">Data</td> <td class="even"></td> </tr> <tr> <td class="odd">5</td> <td class="odd">Data 3</td> <td class="odd">Out</td> <td class="odd">Data</td> <td class="odd"></td> </tr> <tr> <td class="even">6</td> <td class="even">Data 4</td> <td class="even">Out</td> <td class="even">Data</td> <td class="even"></td> </tr> <tr> <td class="odd">7</td> <td class="odd">Data 5</td> <td class="odd">Out</td> <td class="odd">Data</td> <td class="odd"></td> </tr> <tr> <td class="even">8</td> <td class="even">Data 6</td> <td class="even">Out</td> <td class="even">Data</td> <td class="even"></td> </tr> <tr> <td class="odd">9</td> <td class="odd">Data 7</td> <td class="odd">Out</td> <td class="odd">Data</td> <td class="odd"></td> </tr> <tr> <td class="even">10</td> <td class="even">nAck</td> <td class="even">In</td> <td class="even">Status</td> <td class="even"></td> </tr> <tr> <td class="odd">11</td> <td class="odd">Busy</td> <td class="odd">In</td> <td class="odd">Status</td> <td class="odd">Yes</td> </tr> <tr> <td class="even">12</td> <td class="even">Paper-Out / Paper-End</td> <td class="even">In</td> <td class="even">Status</td> <td class="even"></td> </tr> <tr> <td class="odd">13</td> <td class="odd">Select</td> <td class="odd">In</td> <td class="odd">Status</td> <td class="odd"></td> </tr> <tr> <td class="even">14</td> <td class="even">nAuto-Linefeed</td> <td class="even">In/Out</td> <td class="even">Control</td> <td class="even">Yes</td> </tr> <tr> <td class="odd">15</td> <td class="odd">nError / nFault</td> <td class="odd">In</td> <td class="odd">Status</td> <td class="odd"></td> </tr> <tr> <td class="even">16</td> <td class="even">nInitialize</td> <td class="even">In/Out</td> <td class="even">Control</td> <td class="even"></td> </tr> <tr> <td class="odd">17</td> <td class="odd">nSelect-Printer / nSelect-In</td> <td class="odd">In/Out</td> <td class="odd">Control</td> <td class="odd">Yes</td> </tr> <tr> <td class="even">18 - 25</td> <td class="even">Ground</td> <td class="even">Gnd</td> <td class="even"></td> <td class="even"></td> </tr> </tbody> </table>

In the table - when hardware inverted is yes, it means that when you write a 1 to this pin, it will output a 0, and vice versa.

You can learn to connect things to this, and program this port at our <a href="/wiki/simple_parallel_port_led_board.html" title="How to attach and program an LED to the parallel port on a PC">Simple Parallel port LED Board</a> article.

* [Jan Axelson's Parallel Port FAQ](http://janaxelson.com/jansfaq.htm) is somewhat helpful if you are having trouble with this.
* [Interfacing to The IBM-PC Parallel Printer Port](http://www.massmind.org/techref/io/parallel/par.html) A nice resource with a few more projects to try.
