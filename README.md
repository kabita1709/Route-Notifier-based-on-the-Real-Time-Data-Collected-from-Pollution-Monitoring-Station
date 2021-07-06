# fyp_21
:Author: sohamfyp09
:Email: sohamghosh647@gmail.com
:Date: 05/07/2021
:Revision: version1#
:License: Public Domain

= Project: {Web based Route Notifier based on the data from Air Quality Monitor}

Description: Use the arduino code to read data from sensors and store them onto SD card.

== Step 1: Installation

1. Open this file
2. Edit as you like
3. Release to the World!

== Step 2: Assemble the circuit

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

== Step 3: Load the code

Upload the code contained in this sketch on to your board

=== Folder structure

....
 sketch123                => Arduino sketch folder
  ├── sketch123.ino       => main Arduino file
  ├── schematics.png      =>  an image of the required schematics
  ├── layout.png          =>  an image of the layout
  └── ReadMe.adoc         => this file
....

=== License
This project is released under a student License.

=== Contributing
To contribute to this project please contact sohamfyp09 https://id.arduino.cc/sohamfyp09

=== BOM
This project costs around 80$.

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
| 13 | USB Connector      |   1

|===


=== Help
This document is written in the _AsciiDoc_ format, a markup language to describe documents.
If you need help you can search the http://www.methods.co.nz/asciidoc[AsciiDoc homepage]
or consult the http://powerman.name/doc/asciidoc[AsciiDoc cheatsheet]
