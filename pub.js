const mqtt = require("mqtt");
let client = mqtt.connect("mqtt://broker.hivemq.com");
// let client = mqtt.connect("mqtt://127.0.0.1:1883"); //for own broker you can download software from HiveMQ

client.on("connect", function () {
    setInterval(function () {
        let random = Math.random() * 50;
        console.log(random);

        if (random < 30) {
            client.publish("Fertharion", "Simple MQTT using HiveMQ: " + random.toString());
        }
    }), 30000;
});