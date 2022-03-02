radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    } else if (receivedNumber == 2) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedNumber == 3) {
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 150)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedNumber == 4) {
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 150)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
radio.setGroup(53)
basic.forever(function () {
	
})
