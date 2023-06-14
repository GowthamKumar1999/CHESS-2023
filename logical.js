function keysAndValues(obj) {
	let keysArr = Object.keys(obj);
	let kAv = [];
    console.log(keysArr);
    let valArr= keysArr.map(each => obj[each]);
    kAv.push(keysArr);
    kAv.push(valArr);
    console.log(valArr)
}
keysAndValues()


