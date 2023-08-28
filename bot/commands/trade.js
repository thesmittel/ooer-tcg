module.exports = {
	name: "trade",
    description: "Send a trade request to another user",
	async execute(message) {
		await message.channel.send('trade!');
	},
};