def maakLeegVeld():
      aantalX, aantalY = (3, 3) 
  array = [[0 for i in range(aantalY)] for j in range(aantalX)] 
  return array

def plaatsBlokje(rij, kolom, speler):
  if veld[kolom][rij] == 0:
    veld[kolom][rij] = speler
    toonSpel(veld)
    return True
  return False

def checkWin():
  if veld[0][0] == veld[0][1] == veld[0][2] != 0: return True
  if veld[1][0] == veld[1][1] == veld[1][2] != 0: return True
  if veld[2][0] == veld[2][1] == veld[2][2] != 0: return True
  if veld[0][0] == veld[1][0] == veld[2][0] != 0: return True
  if veld[0][1] == veld[1][1] == veld[2][1] != 0: return True
  if veld[0][2] == veld[1][2] == veld[2][2] != 0: return True
  if veld[0][2] == veld[1][1] == veld[2][0] != 0: return True
  if veld[0][0] == veld[1][1] == veld[2][2] != 0: return True
  return False

def main():
  speler = 0
  end = False
  while end == False: 
    if speler != 1: speler = 1
    else: speler = 2
    geplaatst = False
    print("speler "+str(speler)+" is aan de beurt")
    while geplaatst == False:
      pos = getMuisPositionNaClick()
      geplaatst = plaatsBlokje(pos[0],pos[1], speler)
    end = checkWin()
  print("speler "+str(speler)+" wint!")
  return

veld = maakLeegVeld()
toonSpel(veld)
main()
pygame.quit()
					