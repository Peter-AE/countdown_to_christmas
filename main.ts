input.onGesture(Gesture.Shake, function () {
    if (Tage_bis_Weihnachten >= 1) {
        basic.showString("" + (Tage_bis_Weihnachten))
        Tage_bis_Weihnachten += -1
    }
    if (Tage_bis_Weihnachten == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . . # . .
            `)
    }
})
let Tage_bis_Weihnachten = 0
Tage_bis_Weihnachten = 24
basic.forever(function () {
	
})
