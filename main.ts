input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(6)
basic.forever(function () {
	
})
