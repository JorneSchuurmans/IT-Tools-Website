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
	save('myConnect4');
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

function end() { 
    save('myConnect4');
    window.location.reload(true);
} 

var preProgrammedGrapics = `
import document
import time

import pygame
from pygame import *
pygame.quit()
pygame.init()
pygame.display.init()
WINDOWWIDTH = 400
WINDOWHEIGHT = 350
pygame.display.set_mode((WINDOWWIDTH, WINDOWHEIGHT))

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

def getMuisKolomNaClick():
    while pygame.mouse.get_pressed()[0] == 0:
        time.sleep(0.1)
    x = pygame.mouse.get_pos()[0]
    getal = (x-20)/50
    if getal < 0: return 0
    if getal > 6: return 6
    while pygame.mouse.get_pressed()[0] != 0:
        time.sleep(0.1)
    return getal

`


