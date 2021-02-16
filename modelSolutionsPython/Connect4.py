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
  if checkHorizontaal() or checkVerticaal() or checkDiagonaal():
    return True
  return False
  
def checkHorizontaal():
  teller = 0
  for y in range(6):
    for x in range(6):
      if veld[x][y] == veld[x+1][y] and veld[x][y] != 0:
        teller+=1
        if teller >= 3:
          return True
      else:
        teller = 0
  return False
  
def checkVerticaal():
  teller = 0
  for x in range(6):
    for y in range(5):
      if veld[x][y] == veld[x][y+1] and veld[x][y] != 0:
        teller+=1
        if teller >= 3:
          return True
      else:
        teller = 0
  return False
  
def checkDiagonaal():
  teller = 0
  for x in range(4):
    for y in range(3):
      for i in range(1, 4):
        if veld[x][y] == veld[x+i][y+i] and veld[x][y] != 0:
          teller+=1
          if teller >= 3:
            return True
    teller = 0
    for x in range(4):
      for y in range(3, 6):
        for i in range(1, 4):
          if veld[x][y] == veld[x+i][y-i] and veld[x][y] != 0:
            teller+=1
            if teller >= 3:
              return True
      teller = 0
  return False

def main():
  speler = 0
  end = False
  while end == False:
    if speler == 1:
      speler = 2
    else:
      speler = 1
    test = False
    while test == False:
      test = plaatsBlokje(int(input("speler "+str(speler)+":\r"))-1,speler)
    end = checkWin()
  print("speler "+str(speler)+" wint\r")
  return


veld = maakLeegVeld()
toonSpel(veld)
main()  