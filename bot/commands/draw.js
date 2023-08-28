module.exports = {
	name: "draw",
    description: "Get a free card every day, week, month",
    help: "$draw [daily|weekly|monthly]",
	async execute(message) {
		await message.channel.send('draw!');
	},
};