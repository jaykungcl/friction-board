# Friction Board

Video Demo: https://youtu.be/FJQNHWWyzEY

Try it out yourself at: https://friction-board.web.app

Description:

Language: HTML, CSS and Vanilla JavaScripts

This project emerge from the idea that I wanted to create a virtual world that obey laws of Physics. Angry Birds is one of a kind, where you have to determine path of rocks to destroy the evil castle. When you drag to aim, it does not only determine the direction but also the force. I though it will be very challenging to writh the logic that moves object that way.

At first, I searched for ideas online. But I only found project that include libraries that create a field that objects behave by the law of Physics, without understanding of how things move the way they are.

So I decided to wrote it from scratch, but starting from virtual world in 2D. My idea is make a board that you can determined the force that will be exert on an object. And there will be counter force in a shape of friction force which you can specify.

This is a very simple project, focusing only on the logic that make an object moves according to the equation. So it is consisted of only 1 HTML, 1 CSS, and 1 JavaScripts file.

--- How it Works ---

This ball moves in 400*400 px scapce acoording to equation of movement in 1D, but the vectors (distance, velocity, acceleration) has to be divided and calculate seperately in X and Y directions. s represents distance v represents velocity a represents acceleration

Basiclly when the game starts, after you determine your force that will be exerted on the ball. It will move with certain initial speed and then decrease proportionate to the accelerating factor (that was determined by friction factor that you chose)

You can adjust the size of the ball by selecting dropdown menu, and the ball will bounce off the edge perfectly no matter which size.

Friction force is, in fact, will be determine by the mass, gravitational force, and friction factor of surfaces. But in this game, friction will be just arbitrary number that determine movement of the ball.

Friction can be adjusted by select the slider position. More friction in the equation, the shorter distance the ball travel.

I tried to make UI easy to understand as much as possible. In order to move the ball, you have to drag it from the center of the ball to create the force that will be exerted on the ball. The longer the red line, more force exerted on the ball. (More inspiration from Angry Birds)

I wrote every line of code in here myself and I am very proud of it :)

Please enjoy my little playground!
