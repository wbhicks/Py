// 5 per line in this file:
var adjectiveArray = [
    'bad', 'big', 'low', 'old', 'wry',
    'easy', 'full', 'good', 'late', 'sure',
    'abstract', 'bounded', 'certain', 'little', 'real',
    'ahistorical', 'flammable', 'international', 'itinerant', 'resurgent',
    'hallucinatory', 'performative', 'reduplicative', 'transformative', 'unapproachable'
];
// 5 per line in this file:
var vocationArray = [
    'accountant', 'baker', 'bartender', 'boilermaker', 'butcher', 
    'carpenter', 'cashier', 'chef', 'clerk', 'dentist', 
    'driver', 'farmer', 'fishmonger', 'glazier', 'grocer', 
    'judge', 'miner', 'pipefitter', 'plumber', 'reporter', 
    'salvor', 'surveyor', 'tailor', 'taxidermist', 'undertaker'
];
var adjectiveArrayLength = adjectiveArray.length;
var vocationArrayLength = vocationArray.length;
var shuffledIndicesForAdjectiveArray = new Array(adjectiveArrayLength);
var shuffledIndicesForVocationArray = new Array(vocationArrayLength);
for (var i = 0; i < adjectiveArrayLength; i++) {
    shuffledIndicesForAdjectiveArray[i] = i;
} // they're not yet shuffled
for (var i = 0; i < vocationArrayLength; i++) {
    shuffledIndicesForVocationArray[i] = i;
} // they're not yet shuffled

function durstenfeldShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function overall() {
    var indexForIndexForAdjectives = 0, 
        indexForIndexForVocations = 0,
        currentAdjective = '', // will be assigned before being read
        currentVocation = '';  // will be assigned before being read
    window.setInterval(function () {
        if (indexForIndexForAdjectives == 0) {
            durstenfeldShuffle(shuffledIndicesForAdjectiveArray);
        }
        if (indexForIndexForVocations == 0) {
            durstenfeldShuffle(shuffledIndicesForVocationArray);
        }
        currentAdjective = adjectiveArray[shuffledIndicesForAdjectiveArray[indexForIndexForAdjectives]];
        currentVocation = vocationArray[shuffledIndicesForVocationArray[indexForIndexForVocations]];
        document.getElementById("adjective-here").innerHTML = currentAdjective;
        document.getElementById("vocation-here").innerHTML = currentVocation;
        indexForIndexForAdjectives = (indexForIndexForAdjectives + 1) % adjectiveArrayLength;
        indexForIndexForVocations = (indexForIndexForVocations + 1) % vocationArrayLength;
    }, 700); // repeat forever, polling every 0.7 seconds
}
