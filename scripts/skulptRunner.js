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
   var prog = preProgrammedGrapics += editor.getValue(); 
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
		   err.traceback[0].lineno -= 64;
       alert(err.toString());
   });
} 

var preProgrammedGrapics = `
import turtle

size = 50
aantalY = 6
aantalX = 7

kleurLeegVakje = '#DDDDDD'
kleurSpeler1 = '#DD0000'
kleurSpeler2 = '#FFFF00'
achtergrondkleur = 'lightgreen'

wn = turtle.Screen()
wn.bgcolor(achtergrondkleur)

turtle1 = turtle.Turtle()
turtle1.speed(0)
turtle1.delay(0)
turtle1.color('')

vorigSpel = [[9 for i in range(aantalY)] for j in range(aantalX)] 

def printSpel(spel):
  for row in spel:
    print(row)
  return

def toonSpel(spel):
  global vorigSpel
  for x in range(aantalX):
    for y in range(aantalY):
      if spel[x][y] != vorigSpel[x][y]:
        turtle1.color('')
        turtle1.up()
        turtle1.goto((x*size-aantalX*size/2), (y*size-aantalY*size/2))
        turtle1.pendown()
        turtle1.color(__getKleur(spel[x][y]))
        turtle1.begin_fill()
        for i in range(4):
            turtle1.fd(size)
            turtle1.lt(90)
        turtle1.end_fill()
        turtle1.color('#000000')
        for i in range(4):
          turtle1.fd(size)
          turtle1.lt(90)
      turtle1.color('')
      vorigSpel[x][y] = spel[x][y];
  return


def __getKleur(number):
  if number == 1:
    return kleurSpeler1
  elif number == 2:
    return kleurSpeler2
  else:
    return kleurLeegVakje
  return





`
