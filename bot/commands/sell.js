module.exports = {
	name: "sell",
    description: "Sell a card, get money with which you can buy packs",
	async execute(message) {
		await message.channel.send('sell!');
	},
};