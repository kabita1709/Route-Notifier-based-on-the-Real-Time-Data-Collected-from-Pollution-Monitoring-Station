# fyp_21
:Author: soham71 & kabita1709
:Email: sohamghosh647@gmail.com & ksharma1797@gmail.com
:Date: 07/07/2021
:Revision: version2#
:License: Public Domain

= Project: {Web based Route Notifier based on the data from Air Quality Monitoring Station}

Description: Use the arduino code to read data from sensors and store them onto SD card. Now Based on the sensor read data provide a user with alternative route to the user so that the polluted places can be avoided in a real time scenario.

== Step 1: Installation

1. Open this file
2. Edit as you like.
3. Release to the World!

== Step 2: Assemble the circuit and Prepare the Web server system by integrating the API.

Assemble the circuit following the diagram circuit.png attached to the sketch.

/*
 * Connect the SD card to the following pins:
 *https://github.com/Soham71
 * ARDUINO PRO MINI | SD CARD
 *     D10         CS
 *     D11        SCK
 *     D12        MOSI
 *     D13        MISO
 *     VCC        VCC
 *     GND        GND
 */

== Step 3: Load the code to Arduino 

Upload the code contained in this sketch on to your board

=== Folder structure

....
 sketch123                => Arduino sketch folder
  ├── sketch123.ino       => main Arduino file
  ├── schematics.png      =>  an image of the required schematics
  ├── layout.png          =>  an image of the layout
  └── ReadMe.adoc         => this file
....

== Step 4: Setup the Web server using the nodejs code.

=== License
This project is released under a student License.

=== Contributing
To contribute to this project's hardware part please contact sohamfyp09 https://id.arduino.cc/sohamfyp09
And to cntribute on Github, please mail at ksharma1797@gmail.com.

=== BOM
This project costs around 180$.

|===
| ID | Part name          | Quantity
| 1  | Arduino Pro MIni   |   1
| 2  | PMS5003            |   1
| 3  | MP503              |   1
| 4  | MQ131              |   1
| 5  | MH-Z19             |   1
| 6  | DHT22              |   1
| 7  | DS3231             |   1
| 8  | SD Card Module     |   1
| 9  | Transistors– 2N3904|   2
| 10 | Capacitors         |   2
| 11 | 2 Position Switch  |   1
| 12 | Resistors          |   7
| 14 | Nodejs setup       |   1
| 15 | MongoDb Subscript. |   1
| 16 | MessageBird API    |   1
| 17 | USB Connector      |   1
| 18 | Switch             |   1

|===


=== Help
This document is written keeping in mind the user have no time constraint. For further doubt refer to this: bi.nlm.nih.gov/pmc/articles/PMC6696184/
