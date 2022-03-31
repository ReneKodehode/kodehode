from turtle import *

speed(10)
shape("turtle")

penup()
right(180)
forward(200)
right(90)
forward(200)
pendown()

#square swirl
for i in range(50):
    forward(2*i)
    right(90)

penup()
forward(400)
pendown()

#square swirl to bottom right corner
for i in range(100):
    forward(2^i)
    right(90)


penup()
left(90)
forward(400)
pendown()

#circle swirl
for count in range(100):
    forward(count)
    right(45)

penup()
right(90)
forward(400)
pendown()
