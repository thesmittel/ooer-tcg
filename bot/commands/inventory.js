module.exports = {
	name: "inventory",
    description: "Shows the cards you collected",
	async execute(message) {
		await message.channel.send('Inventory!');
	},
};