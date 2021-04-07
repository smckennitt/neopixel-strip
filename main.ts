input.onButtonPressed(Button.A, function () {
    direction = direction - direction * 2
})
let direction = 0
direction = -1
basic.showString("WOW")
let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
for (let index = 0; index <= 60; index++) {
    strip.setPixelColor(index, neopixel.hsl(randint(0, 16711680), 60, 5))
}
strip.show()
basic.forever(function () {
    basic.pause(100)
    strip.rotate(direction)
    strip.show()
})
