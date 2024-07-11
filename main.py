distance = 0
led.enable(False)

def on_forever():
    global distance
    pins.analog_write_pin(AnalogPin.P2, 0)
    control.wait_micros(2)
    pins.analog_write_pin(AnalogPin.P2, 1)
    control.wait_micros(10)
    pins.analog_write_pin(AnalogPin.P2, 0)
    distance = pins.pulse_in(DigitalPin.P1, PulseValue.HIGH) / 58
    serial.write_value("distance(cm)", distance)
    basic.pause(50)
basic.forever(on_forever)
