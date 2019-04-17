var adjectiveArray = [
    'accompanied', 'accustomed', 'acted', 'added', 'addressed', 'advertised', 'agreed', 'aided', 'amused', 'annoyed', 'answered', 
    'appealed', 'appeared', 'approached', 'arranged', 'arrested', 'arrived', 'asked', 'assisted', 'ate', 'attended', 'balanced', 
    'banished', 'barked', 'became', 'began', 'begged', 'behaved', 'believed', 'belonged', 'blessed', 'blew', 'boarded', 'boiled', 
    'boosted', 'bought', 'breathed', 'broke', 'brought', 'brushed', 'built', 'burst', 'called', 'came', 'cared', 'carried', 
    'caught', 'changed', 'charged', 'checked', 'choked', 'chose', 'cleaned', 'climbed', 'closed', 'combed', 'completed', 
    'consisted', 'cooked', 'cooled', 'counted', 'covered', 'crashed', 'crawl', 'cried', 'crossed', 'cut', 'danced', 'dared', 
    'dealt', 'declared', 'delayed', 'delivered', 'denied', 'dialled', 'did', 'died', 'dined', 'dragged', 'drank', 'dressed', 
    'dried', 'dropped', 'drove', 'eased', 'enclosed', 'engaged', 'enjoyed', 'envied', 'erased', 'exchanged', 'exclaimed', 
    'explained', 'expressed', 'failed', 'fastened', 'fed', 'fell', 'felt', 'filed', 'filled', 'finished', 'fired', 'fished', 
    'fixed', 'flew', 'followed', 'forbade', 'forgave', 'forgot', 'fought', 'found', 'fried', 'frightened', 'froze', 'gained', 
    'gave', 'got', 'grew', 'guessed', 'had', 'happened', 'heard', 'held', 'helped', 'hid', 'hunted', 'hurried', 'hurt', 
    'imagined', 'ironed', 'judged', 'kept', 'killed', 'kissed', 'knew', 'laid', 'laughed', 'lay', 'leaked', 'led', 'left', 'let', 
    'liked', 'locked', 'looked', 'lost', 'loved', 'made', 'managed', 'marked', 'married', 'massaged', 'measured', 'met', 
    'milked', 'missed', 'moved', 'observed', 'offered', 'opened', 'ordered', 'paid', 'parked', 'passed', 'performed', 'phoned', 
    'picked', 'planed', 'played', 'pleased', 'ploughed', 'polished', 'poured', 'practiced', 'prayed', 'preferred', 'promised', 
    'pronounced', 'pulled', 'punished', 'pushed', 'quit', 'rained', 'raised', 'ran', 'reached', 'read', 'realized', 'received', 
    'refused', 'registered', 'remained', 'remembered', 'repaired', 'repeated', 'reported', 'requested', 'required', 'reserved', 
    'resolved', 'rested', 'returned', 'rode', 'rowed', 'said', 'sang', 'sat', 'saved', 'saw', 'searched', 'sent', 'served', 
    'settled', 'shone', 'shook', 'signed', 'slapped', 'slept', 'slipped', 'smiled', 'smoked', 'snowed', 'sold', 'sought', 
    'spent', 'spilled', 'spoke', 'sprang', 'staged', 'stayed', 'stole', 'stood', 'stopped', 'stretched', 'studied', 'suffered', 
    'swallowed', 'swam', 'switched', 'swung', 'tackled', 'talked', 'taught', 'thanked', 'thought', 'threw', 'tired', 'told', 
    'took', 'tore', 'touched', 'trained', 'trapped', 'travelled', 'tried', 'troubled', 'turned', 'understood', 'unpacked', 
    'used', 'visited', 'waited', 'waked', 'walked', 'warmed', 'warned', 'washed', 'watched', 'watered', 'weighed', 'went', 
    'wished', 'woke', 'won', 'wore', 'worked', 'wrecked', 'wrote'
];
var vocationArray = [
    'abode', 'accommodation', 'altar', 'apartment', 'area', 'arena', 'hall', 'atmosphere', 'backseat', 'bank', 'bar', 
    'base', 'diamond', 'bath', 'bed', 'birthplace', 'boat', 'border', 'bottom', 'boutique', 'building', 'bunkhouse', 
    'bunkbed', 'burial', 'bus', 'business', 'district', 'camp', 'cape', 'cargo', 'seat', 'cellar', 'center', 'chamber', 
    'city', 'club', 'coffeehouse', 'coffin', 'community', 'concourse', 'condo', 'continuum', 'corner', 'country', 
    'cubicle', 'current', 'cushion', 'departure', 'desk', 'diner', 'district', 'domicile', 'entry', 'entryway', 
    'environment', 'establishment', 'event', 'execution', 'exhibit', 'exile', 'facility', 'field', 'foothold', 'fort', 
    'forum', 'freezer', 'front', 'function', 'gallery', 'gallows', 'garden', 'ground', 'grounds', 'hallways', 
    'happening', 'haven', 'headquarters', 'helm', 'hold', 'hole', 'home', 'hotel', 'house', 'housing', 'hut', 'indoors', 
    'installation', 'institution', 'job', 'lair', 'land', 'lap', 'line', 'locale', 'location', 'loft', 'midpoint', 
    'mountain', 'neighborhood', 'nest', 'niche', 'office', 'operation', 'origin', 'out', 'outside', 'street', 'pad', 
    'park', 'parliament', 'patio', 'penthouse', 'perch', 'piazza', 'place', 'platform', 'podium', 'point', 'position', 
    'post', 'premises', 'pride', 'property', 'publication', 'rack', 'ranch', 'range', 'rank', 'refrigerator', 
    'rendezvous', 'residence', 'resort', 'restaurant', 'retreat', 'rock', 'roof', 'room', 'row', 'saloon', 'scene', 
    'seat', 'set', 'setting', 'shack', 'shelter', 'shop', 'shrine', 'sidecar', 'site', 'situation', 'space', 'spot', 
    'stage', 'stead', 'step', 'storage', 'store', 'street', 'strip', 'stripmall', 'table', 'tavern', 'territory', 
    'theatre', 'throne', 'toboggan', 'top', 'town', 'universe', 'vault', 'venue', 'villa', 'village', 'woodshed', 'work', 
    'workplace', 'zoo'

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
    }, 4950); // repeat forever, polling every 4.95 seconds
}
