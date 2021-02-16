// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) { 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit() { 
	save('myTicTacToe');
   var prog = preProgrammedGrapics + editor.getValue(); 
   var mypre = document.getElementById("output"); 
   mypre.innerHTML = ''; 
   Sk.pre = "output";
   Sk.configure({output:outf, read:builtinRead}); 
   (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
   var myPromise = Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>", false, prog, true);
   });
   myPromise.then(function(mod) {
       console.log('success');
   },
       function(err) {
		   err.traceback[0].lineno -= 18;
       outf(err.toString());
   });
} 

var preProgrammedGrapics = `
import document
import time
def toonSpel(spel):
	game = document.getElementById('game')
	game.innerHTML = "<table>"
	for y in range(6):
		game.innerHTML+="<tr>"
		for x in range(7):
			game.innerHTML += "<td>"
			blokje = "<div class='blokje"
			blokje += str(spel[x][5-y])
			blokje += "'></div>"
			game.innerHTML += blokje
			game.innerHTML += "</td>"
		game.innerHTML+="</tr>"
	game.innerHTML += "</table>"
	time.sleep(0)
`
