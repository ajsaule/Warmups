let doesItMove = true;
let shouldIt = true; 

if (doesItMove && shouldIt || (!doesItMove && !shouldIt)) {
	console.log('No problem');
} else if (!doesItMove && shouldIt) {
	console.log('Lube it up with WD40');
} else if (doesItMove && !shouldIt) {
	console.log('Ducktape it');
}