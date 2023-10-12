const mqtt = require("mqtt");
let client = mqtt.connect("mqtt://broker.hivemq.com");
// let client = mqtt.connect("mqtt://127.0.0.1:1883"); //for own broker you can download software from HiveMQ

client.on("connect", function () {
    client.subscribe("Fertharion");
    console.log("Client has subscribed successfully");
});

client.on("message", function (topic, message) {
    console.log(message.toString());
});