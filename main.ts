let B = 0
let Y = 0
let X = 0
led.enable(true)
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P0)
    Y = pins.analogReadPin(AnalogPin.P1)
    B = pins.analogReadPin(AnalogPin.P2)
    serial.writeValue("X", X)
    serial.writeValue("Y", Y)
    serial.writeValue("B", B)
    basic.pause(200)
    if (X > 420) {
        basic.showString("R")
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P11, 0)
    } else if (Y > 411) {
        basic.showString("U")
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else if (X < 420) {
        basic.showString("L")
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P11, 0)
    } else if (Y < 411) {
        basic.showString("D")
        pins.digitalWritePin(DigitalPin.P11, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else {
    	
    }
})
