radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == num) {
        radio.sendString("Correct")
        basic.showIcon(IconNames.Happy)
    } else {
        radio.sendString("X")
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(num)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
})
let num = 0
basic.showIcon(IconNames.Heart)
num = 0
radio.setGroup(187)
basic.forever(function () {
	
})
