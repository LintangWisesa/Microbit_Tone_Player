#

![simplinnovation](https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png)

# Micro:bit Tone Player

### A simple tone player using BBC Micro:bit board. Watch the video below ([click here](https://www.youtube.com/watch?v=RIZr-OoMQIw)) to see its action, then follow the instructions to build your own!

[![Video Microbit Radio](https://img.youtube.com/vi/RIZr-OoMQIw/0.jpg)](https://www.youtube.com/watch?v=RIZr-OoMQIw)

#

### **1. What You Need** :gift:
To build this project, you need the following items:
- a Micro:bit board
- 2 pcs mini alligator wires
- a PC/laptop with any OS
- a speaker

#

### **2. Schematics** :wrench::hammer:

- Connect your speaker's audio jack to Micro:bit as the following picture:

    ![schematics](https://raw.githubusercontent.com/LintangWisesa/Microbit_Tone_Player/master/Schematics.png)

#

### **3. Code** :clipboard:
 
- Open __*Microsoft Makecode for Micro:bit*__ site (https://makecode.microbit.org/) to create commands for Micro:bit. You can write the code using __Javascript__ or simply choose __Blocks__ menu.

  - If you choose __Javascript__, write the lines below:

    ```javascript
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

    ```

  - If using __Blocks__, arrange the code like the following picture:

      ![blocks](https://raw.githubusercontent.com/LintangWisesa/Microbit_Tone_Player/master/Blocks.png)

- After that, click __Download__ button to get a __.hex__ file for your Micro:bit board. Simply connect your Micro:bit to your PC/laptop, then paste the __.hex__ file into it.

- __Done!__ You're ready to go! Have fun! :sunglasses: 

#

#### Lintang Wisesa :love_letter: _lintangwisesa@ymail.com_

[Facebook](https://www.facebook.com/lintangbagus) |
[Twitter](https://twitter.com/Lintang_Wisesa) |
[Google+](https://plus.google.com/u/0/+LintangWisesa1) |
[Youtube](https://www.youtube.com/user/lintangbagus) | 
:octocat: [GitHub](https://github.com/LintangWisesa) |
[Hackster](https://www.hackster.io/lintangwisesa)

