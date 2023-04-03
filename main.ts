input.onGesture(Gesture.LogoUp, function () {
    dot.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    dot.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    dot.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    dot.change(LedSpriteProperty.Y, -1)
})
let dot2: game.LedSprite = null
let dot: game.LedSprite = null
dot = game.createSprite(2, 2)
basic.forever(function () {
    dot2 = game.createSprite(randint(0, 4), randint(0, 4))
    basic.pause(2000)
    dot2.delete()
})
basic.forever(function () {
    if (dot.isTouching(dot2)) {
        game.addScore(1)
    }
})
basic.forever(function () {
    if (input.runningTime() > 10000) {
        basic.showNumber(game.score())
        game.gameOver()
    }
})
