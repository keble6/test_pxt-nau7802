serial.writeLine("S T A R T I N G")
NAU7802.begin()
NAU7802.power_up()
basic.forever(function () {
    serial.writeLine("Raw reading (average)" + NAU7802.read_average(0))
    basic.pause(5000)
})
