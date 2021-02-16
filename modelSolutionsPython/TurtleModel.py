from turtle import *
import math

color('red', 'red')
speed(0)
left(-90)
#buitensteCirkel
for i in range(30):
  begin_fill()
  x = math.cos(math.radians(i*12))*150
  y = math.sin(math.radians(i*12))*150
  goto(x,y)
  x = math.cos(math.radians(i*12+6))*150
  y = math.sin(math.radians(i*12+6))*150
  goto(x,y)
  goto(0,0)
  end_fill()

#maakPlaatsVoorCirkel2
color('white', 'white')
goto(-50,0)
begin_fill()
circle(100)
end_fill()

goto(0,0)
color('red', 'red')
for i in range(30):
  begin_fill()
  for j in range(1,3):
    x1 = math.cos(math.radians(i*12+6*j))*150
    y1 = math.sin(math.radians(i*12+6*j))*150
    R=y1/x1
    if i == 7:
      if j == 1:
        x=(100+math.sqrt(40000+30000*R*R))/(2*R*R+2)
      else:
        x=(100-math.sqrt(40000+30000*R*R))/(2*R*R+2)
    elif i == 22:
      if j == 1:
        x=(100-math.sqrt(40000+30000*R*R))/(2*R*R+2)
      else:
        x=(100+math.sqrt(40000+30000*R*R))/(2*R*R+2)
    elif i > 17:
      x=(100-math.sqrt(40000+30000*R*R))/(2*R*R+2)
    else:
      x=(100+math.sqrt(40000+30000*R*R))/(2*R*R+2)
    y=R*x
    goto(x,y)
  goto(0,0)
  end_fill()

goto(-50,0)
color('white', 'white')
begin_fill()
circle(50)
end_fill()
done()