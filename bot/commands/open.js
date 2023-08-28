module.exports = {
	name: "open",
    description: "Opens a pack.",
    help: `$open [Pack name]\n
    \n
    Available Packs:\n
    Iron: $1.00\n
    Bronze: $3.00\n
    Silver: $7.00\n
    Gold: $14.00\n
    Platinum: $25.00\n
    Diamond: $40.00`,
	async execute(message) {
		await message.channel.send('open!');
	},
};