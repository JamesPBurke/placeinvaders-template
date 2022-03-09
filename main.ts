let inv1 = img`
    f f 2 f f f f f 2 f f 
    f f f 2 f f f 2 f f f 
    f f 2 2 2 2 2 2 2 f f 
    f 2 2 f 2 2 2 f 2 2 f 
    2 2 2 2 2 2 2 2 2 2 2 
    2 f 2 2 2 2 2 2 2 f 2 
    2 f 2 f f f f f 2 f 2 
    f f f 2 2 f 2 2 f f f 
    `
let inv2 = img`
    f f f f 7 7 7 f f f f 
    f f 7 7 7 7 7 7 7 f f 
    f 7 7 f f 7 f f 7 7 f 
    f 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 f 
    f f f 7 7 f 7 7 f f f 
    f f 7 7 f f f 7 7 f f 
    f 7 7 f f f f f 7 7 f 
    `
let inv3 = img`
    f f f f a f a f f f f 
    f f f a a a a a f f f 
    f f a a f a f a a f f 
    f a a a a a a a a a f 
    f a f a a a a a f a f 
    f a f a a f a a f a f 
    f f f f a f a f f f f 
    f f f a a f a a f f f 
    `
let Invader = sprites.create(inv1, SpriteKind.Player)
let Invader2 = sprites.create(inv2, SpriteKind.Player)
let Invader3 = sprites.create(inv3, SpriteKind.Player)
let rows = game.askForNumber("How many rows of invaders?")
let Columns = game.askForNumber("How many columns of invaders?")
