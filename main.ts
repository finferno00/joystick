function BU () {
    display.clear()
    basic.pause(200)
    display.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(11, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(19, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(20, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(24, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(27, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(28, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(31, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(32, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(33, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(35, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(36, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(38, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(39, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(41, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(42, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(43, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(44, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(45, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(46, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(50, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(51, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(52, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(53, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(59, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(60, neopixel.colors(NeoPixelColors.Blue))
    display.show()
}
function LOSE () {
    for (let index = 0; index < 3; index++) {
        display.showColor(neopixel.colors(NeoPixelColors.Red))
        display.show()
        basic.pause(1000)
        display.clear()
        display.show()
        basic.pause(1000)
    }
}
function startGame () {
    display = neopixel.create(DigitalPin.P2, 64, NeoPixelMode.RGB)
    range = display.range(0, 64)
    action = -1
    buttonTime = input.runningTime()
    time2Answer = 10000
    X = pins.analogReadPin(AnalogPin.P1)
    Y = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("X", X)
    serial.writeValue("Y", Y)
    testGup()
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(X)
    if (Y < 650 && Y > 400 && X > 700) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        action = -1
        gameLoop()
    }
})
function GR () {
    display.clear()
    basic.pause(200)
    display.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(4, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(11, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(17, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(18, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(24, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(25, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(26, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(27, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(28, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(29, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(30, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(31, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(32, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(33, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(34, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(35, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(36, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(37, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(38, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(39, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(41, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(42, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(50, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(51, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(59, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(60, neopixel.colors(NeoPixelColors.Green))
    display.show()
}
function GU () {
    display.clear()
    basic.pause(200)
    display.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(4, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(11, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(19, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(20, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(24, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(27, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(28, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(31, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(32, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(33, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(35, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(36, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(38, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(39, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(41, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(42, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(43, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(44, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(45, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(46, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(50, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(51, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(52, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(53, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(59, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(60, neopixel.colors(NeoPixelColors.Green))
    display.show()
}
function testGup () {
    GU()
    if (Y < 650 && Y > 400 && X > 700 && input.buttonIsPressed(Button.A)) {
    	
    } else {
    	
    }
}
function gameLoop () {
    random = randint(0, 7)
    if (random == 0) {
        BU()
    } else if (random == 1) {
        BD()
    } else if (random == 2) {
        BR()
    } else if (random == 3) {
        BL()
    } else if (random == 4) {
        GU()
    } else if (random == 5) {
        GD()
    } else if (random == 6) {
        GR()
    } else {
        GL()
    }
}
function GD () {
    display.clear()
    basic.pause(200)
    display.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(4, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(11, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(17, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(18, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(19, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(20, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(21, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(22, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(24, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(25, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(27, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(28, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(30, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(31, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(32, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(35, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(36, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(39, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(43, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(44, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(51, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(52, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(59, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(60, neopixel.colors(NeoPixelColors.Green))
    display.show()
}
input.onButtonPressed(Button.B, function () {
	
})
function BL () {
    display.clear()
    basic.pause(200)
    display.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(13, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(21, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(22, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(24, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(25, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(26, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(27, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(28, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(29, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(30, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(31, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(32, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(33, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(34, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(35, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(36, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(37, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(38, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(39, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(45, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(46, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(52, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(53, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(59, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(60, neopixel.colors(NeoPixelColors.Blue))
    display.show()
}
function BD () {
    display.clear()
    basic.pause(200)
    display.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(11, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(13, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(17, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(18, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(19, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(20, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(21, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(22, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(24, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(25, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(27, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(28, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(30, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(31, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(32, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(35, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(36, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(39, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(43, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(44, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(51, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(52, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(59, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(60, neopixel.colors(NeoPixelColors.Blue))
    display.show()
}
function BR () {
    display.clear()
    basic.pause(200)
    display.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(11, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(17, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(18, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(24, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(25, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(26, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(27, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(28, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(29, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(30, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(31, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(32, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(33, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(34, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(35, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(36, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(37, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(38, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(39, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(41, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(42, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(50, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(51, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(59, neopixel.colors(NeoPixelColors.Blue))
    display.setPixelColor(60, neopixel.colors(NeoPixelColors.Blue))
    display.show()
}
function GL () {
    display.clear()
    basic.pause(200)
    display.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(4, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(21, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(22, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(24, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(25, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(26, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(27, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(28, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(29, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(30, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(31, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(32, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(33, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(34, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(35, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(36, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(37, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(38, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(39, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(45, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(46, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(52, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(53, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(59, neopixel.colors(NeoPixelColors.Green))
    display.setPixelColor(60, neopixel.colors(NeoPixelColors.Green))
    display.show()
}
let random = 0
let Y = 0
let X = 0
let time2Answer = 0
let buttonTime = 0
let action = 0
let range: neopixel.Strip = null
let display: neopixel.Strip = null
startGame()
basic.forever(function () {
	
})
