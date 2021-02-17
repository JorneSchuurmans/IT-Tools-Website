def toonSpel(veld):
  return "dit staat in de javascript voorgeprogrameerd"

def maakLeegVeld():
      aantalX, aantalY = (7, 6) 
  array = [[0 for i in range(aantalY)] for j in range(aantalX)] 
  return array

def plaatsBlokje(kolom, speler):
  for i in range(6):
    if veld[kolom][i] == 0:
      veld[kolom][i] = speler
      toonSpel(veld)
      return True
  return False
  
def checkWin():
  return checkHorizontaal() or checkVerticaal() or checkDiagonaal()
  
def checkHorizontaal():
  for y in range(6):
    teller = 0
    for x in range(6):
      if veld[x][y] != veld[x+1][y] or veld[x][y] == 0: teller = 0
      else: teller+=1
      if teller >= 3: return True
  return False
  
def checkVerticaal():
  teller = 0
  for x in range(7):
    teller = 0
    for y in range(5):
      if veld[x][y] != veld[x][y+1] or veld[x][y] == 0: teller = 0
      else: teller+=1
      if teller >= 3: return True
  return False
  
def checkDiagonaal():
  for x in range(4):
    for y in range(3):
      teller = 0
      for i in range(1, 4):
        if veld[x][y] != veld[x+i][y+i] or veld[x][y] == 0: teller = 0
        else: teller+=1
        if teller >= 3: return True

  for x in range(4):
    for y in range(3,6):
      teller = 0
      for i in range(1, 4):
        if veld[x][y] != veld[x+i][y-i] or veld[x][y] == 0: teller = 0
        else: teller+=1
        if teller >= 3: return True
  return False

def main():
  speler = 0
  end = False
  while end == False:
    if speler == 1: speler = 2
    else: speler = 1
    while False == plaatsBlokje(int(input("speler "+str(speler)+":\r"))-1,speler): DoNotting()
    end = checkWin()
  print("speler "+str(speler)+" wint\r")
  return

veld = maakLeegVeld()
toonSpel(veld)
main() 