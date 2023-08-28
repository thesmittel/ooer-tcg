module.exports = {
	name: "view",
    description: "View a specific card",
	async execute(message) {
		await message.channel.send('View!');
	},
};