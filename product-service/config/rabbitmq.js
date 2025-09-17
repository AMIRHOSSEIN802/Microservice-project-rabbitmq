const amqp = require("amqplib");
let channel;
const connectTochannel = async() => {
    try {
        const connection = await amqp.connect("amqp://localhst:5672")
        return (await connection.createChannel());
    } catch (error) {
        console.log("connot connect to rabbitmq server");
        
    }
}
const returnChannel = async() => {
    if(!channel){
        channel = await connectTochannel
    }
    return channel
}
const pushToQueue = async(queueName , data) => {
    try {
        await channel.assertQueue(queueName);
        return channel.sendToQueue(queueName , Buffer.from(JSON.stringify(data)))
    } catch (error) {
        console.log(error.message);
        
    }
}
module.exports = {
    connectTochannel,
    returnChannel,
    pushToQueue
}