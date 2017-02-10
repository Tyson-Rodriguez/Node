//binary random interger
//save file as randomInCreate.js
//to run type "node randomInCreate.js"
var randomInteger = function(val) {
	var ival = Math.random()*256;
	ival = Math.floor(ival);
	return ival;
}
//main
var rInt ;
var i;
for (i = 0; i < 65; i++){
rInt	= randomInteger();
//consle.log(rInt+".");
process.stdout.write(rInt+",");
}
