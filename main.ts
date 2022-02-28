let B = 0
let Y = 0
let X = 0
led.enable(true)
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P3)
    Y = pins.analogReadPin(AnalogPin.P4)
    B = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("X", X)
    serial.writeValue("Y", Y)
    serial.writeValue("B", B)
    basic.pause(200)
    if (X < 650 && X > 400 && Y > 700) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (Y < 650 && Y > 400 && X > 700) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (X < 650 && X > 400 && Y < 400) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (Y < 650 && Y > 400 && X < 400) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else {
    	
    }
})
