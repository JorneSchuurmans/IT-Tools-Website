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
		   err.traceback[0].lineno -= 44;
       outf(err.toString());
   });
} 

function end() { 
    save('myTicTacToe');
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
WINDOWWIDTH = 350
WINDOWHEIGHT = 350
pygame.display.set_mode((WINDOWWIDTH, WINDOWHEIGHT))

def toonSpel(spel):
    game = document.getElementById('game')
    game.innerHTML = "<table>"
    for y in range(3):
        game.innerHTML+="<tr>"
        for x in range(3):
            game.innerHTML += "<td>"
            if spel[x][y] == 1 : game.innerHTML += "<div class='blokje'><p>X</p></div>"
            elif spel[x][y] == 2 : game.innerHTML += "<div class='blokje'><p>O</p></div>"
            else: game.innerHTML += "<div class='blokje'><p></p></div>"
            game.innerHTML += "</td>"
        game.innerHTML+="</tr>"
    game.innerHTML += "</table>"
    time.sleep(0)

def getMuisPositionNaClick():
    getal=[]
    getal = [0 for i in range(2)]
    while pygame.mouse.get_pressed()[0] == 0:
        time.sleep(0.1)
    x = pygame.mouse.get_pos()[0]
    getal[1] = (x-20)/100
    y = pygame.mouse.get_pos()[1]
    getal[0] = (y-20)/100
    while pygame.mouse.get_pressed()[0] != 0:
        time.sleep(0.1)
    if getal[0] < 0: getal[0] = 0
    if getal[0] > 2: getal[0] = 2
    if getal[1] < 0: getal[1] = 0
    if getal[1] > 2: getal[1] = 2
    return getal
`

