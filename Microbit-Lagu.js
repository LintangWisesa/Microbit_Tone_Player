let lagu = 0

input.onButtonPressed(Button.B, () => {
    if (lagu == 5) {
        lagu = 1
        basic.showNumber(lagu)
        music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    } else {
        lagu = lagu + 1
        basic.showNumber(lagu)
        if (lagu == 1) {
            music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        } else if (lagu == 2) {
            music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
        } else if (lagu == 3) {
            music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
        } else if (lagu == 4) {
            music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        } else {
            music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
        }
    }
})

input.onButtonPressed(Button.A, () => {
    if (lagu == 0) {
        lagu = 5
        basic.showNumber(lagu)
        music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    } else {
        lagu = lagu - 1
        basic.showNumber(lagu)
        if (lagu == 1) {
            music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        } else if (lagu == 2) {
            music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
        } else if (lagu == 3) {
            music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
        } else if (lagu == 4) {
            music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        } else {
            music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
        }
    }
})

lagu = 0
music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.showIcon(IconNames.EigthNote)

basic.forever(() => {})
