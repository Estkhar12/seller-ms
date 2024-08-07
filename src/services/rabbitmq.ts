import amqplib from 'amqplib'

const rabbitMqUrl = process.env.RABBITMQ_URL as string

export const consumeMessages = async () => {
	try {
		const connection = await amqplib.connect(rabbitMqUrl)
		const channel = await connection.createChannel()
		await channel.assertQueue('seller', { durable: true })
		console.log('Connected to RabbitMQ')
		channel.consume(
			'seller',
			async (msg: any) => {
				if (msg !== null) {
					const message = JSON.parse(msg.content.toString())
					channel.ack(msg)
				}
			},
			{
				noAck: false,
			}
		)
	} catch (error) {
		console.error('Error in consuming messages:', error)
	}
}
