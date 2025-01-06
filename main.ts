input.onButtonPressed(Button.A, function () {
    value = randint(0, 10)
    ESP8266_IoT.publishMqttMessage(convertToText(value), "myhome/null/bedroom-light", ESP8266_IoT.QosList.Qos1)
    OLED.clear()
    OLED.writeString("Publish value: ")
    OLED.writeNumNewLine(value)
})
let value = 0
basic.showNumber(0)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("izowifi", "izo@1234")
basic.showNumber(1)
let client_id = randint(0, 99999999)
ESP8266_IoT.setMQTT(
ESP8266_IoT.SchemeList.TCP,
convertToText(client_id),
"test",
"test",
""
)
ESP8266_IoT.connectMQTT("192.168.68.51", 1884, false)
basic.showNumber(2)
OLED.init(128, 64)
basic.showNumber(3)
basic.pause(2000)
if (ESP8266_IoT.isMqttBrokerConnected()) {
    basic.showIcon(IconNames.Yes)
}
