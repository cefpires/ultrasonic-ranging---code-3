let distance = 0
led.enable(false)
makerbit.connectLcd(27)
makerbit.clearLcd1602()
basic.forever(function () {
    makerbit.clearLcd1602()
    distance = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    makerbit.showStringOnLcd1602("" + (distance), makerbit.position1602(LcdPosition1602.Pos1), 7, TextOption.AlignCenter)
    makerbit.showStringOnLcd1602("cm", makerbit.position1602(LcdPosition1602.Pos8), 4)
    basic.pause(200)
})
