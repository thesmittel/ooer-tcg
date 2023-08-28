let availableLimiteds = [0,1,2,3];

function tick() {
	let tmp = {};
	for (a in availableLimiteds) {
		if (Date.now() < a.endDate) {
			tmp.push(a);
		}
	}
	availableLimiteds = tmp;
}
// setInterval(tick, 1000);

const raritynames = ["Legendary", "Mythical", "Ancient", "Very Rare", "Rare", "Uncommon", "Common"];

const probabilitiesDaily = [0.5, 0.3, 0.15, 0.04, 0.009, 0.0009, 0.0001]
const probabilitiesWeekly = [0.36, 0.32, 0.19, 0.09, 0.03, 0.009, 0.001]
const probabilitiesMonthly = [0.22, 0.26, 0.24, 0.16, 0.08, 0.03, 0.01]

const cumulativeDaily = [1, 0.9999, 0.999, 0.99, 0.95, 0.8, 0.5]
const cumulativeWeekly = [1, 0.999, 0.99, 0.96, 0.87, 0.68, 0.36]
const cumulativeMonthly = [1, 0.99, 0.96, 0.88, 0.72, 0.48, 0.22]






function makeLimitedAvailable(message) {
	// Check if card exists
	
	// Calculate duration (time suffixes h, d, w)
	let durationInSeconds = 0; //TEMP
	let end = Date.now() + durationInSeconds;
	
	
	availableLimiteds.push({name: cardname, endDate: end});
	
	// Make announcement
	
}

function dailyDrop(message) {
	let rand1 = (parseInt(process.hrtime.bigint())/100 % 10000);
	let cardcat1 = getRarityDaily(rand1)
	let rand2 = (parseInt(process.hrtime.bigint())/100 % 10000);
	let cardcat2 = getRarityDaily(rand2)
	let rand3 = (parseInt(process.hrtime.bigint())/100 % 10000);
	let cardcat3 = getRarityDaily(rand3)
	console.log(rand1, raritynames[cardcat1], rand2, raritynames[cardcat2], rand3, raritynames[cardcat3])
}

function getRarityDaily(n) {
	for (c in cumulativeDaily) {
		if (n >= cumulativeDaily[c] * 10000) return c-1;
	}
	return 6;
}

function getRarityWeekly(n) {
	for (c in cumulativeWeekly) {
		if (n >= cumulativeWeekly[c] * 10000) return c-1;
	}
	return 6;
}

function getRarityMonthly(n) {
	for (c in cumulativeMonthly) {
		if (n >= cumulativeMonthly[c] * 10000) return c-1;
	}
	return 6;
}


// 1,000.000.000
function testrun() {
	let ret = [
		getRarityDaily((parseInt(process.hrtime.bigint())/100 % 10000)),
		getRarityWeekly((parseInt(process.hrtime.bigint())/100 % 10000)),
		getRarityMonthly((parseInt(process.hrtime.bigint())/100 % 10000))
	];
	return ret;
}

let testProbabilityD = [0,0,0,0,0,0,0]
let testProbabilityW = [0,0,0,0,0,0,0]
let testProbabilityM = [0,0,0,0,0,0,0]

for (let i = 0; i < 10000000; i++) {
	testProbabilityD[testrun()[0]]++;
	testProbabilityW[testrun()[1]]++;
	testProbabilityM[testrun()[2]]++;
}

console.log({
	"Daily": testProbabilityD.reverse(),
	"Weekly": testProbabilityW.reverse(),
	"Monthly": testProbabilityM.reverse(),
});

// dailyDrop("a");