import turtle

size = 70;
aantalY = 6;
aantalX = 7;

kleurLeegVakje = '#DDDDDD'
kleurSpeler1 = '#DD0000'
kleurSpeler2 = '#FFFF00'
achtergrondkleur = 'lightgreen'

wn = turtle.Screen()
wn.bgcolor(achtergrondkleur)

turtle1 = turtle.Turtle()
turtle1.speed(0)
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
        turtle1.goto((x-aantalX/2)*size, (y-aantalY/2)*size)
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
      turtle1.fd(size)
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


  




