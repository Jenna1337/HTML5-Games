; Note: images are drawn from the bottom left and go upwards first, then to the right.
; Like so:
;     3 6 9
;     2 5 8
;     1 4 7


; Note: Size syntax: 
;     Regex (Not yet compatible with JavaScript:
;         (?<sizeY>\d+)x(?<sizeX>\d+)(?: f(?<frames>\d+))?(?: m(?<modes>\d++))?(?: c(?<collated>\w+))?$
;     ABNF:
;         number    = 1*DIGIT
;         sizeY     = number
;         sizeX     = number
;         frames    = number
;         modes     = number
;         collated  = BIT
;         imgsyntax = sizeY "x" sizeX [" f" frames][" m" modes][" c" collated] CRLF




; 8x16 f2 m2 c1
; Alien sprite type C pulling upside down Y frame 1/2
AlienSprCYA:
; ........
; **......
; ..*.....
; ...****.
; ..*.*...
; **..*...
; ...*....
; .*.**...
; *.****..
; ...*.**.
; ..******
; ..******
; ...*.**.
; *.****..
; .*.**...
; ........
1BA0: 00 03 04 78 14 13 08 1A 3D 68 FC FC 68 3D 1A 00

AlienSprCYB:
; Alien sprite type C pulling upside down Y frame 2/2
; ........
; ........
; **......
; ..*.....
; ...****.
; ..*.*...
; **.*....
; *..**...
; .*.***..
; *.**.**.
; .*.*****
; .*.*****
; *.**.**.
; .*.***..
; *..**...
; ........
;
1BD0: 00 00 03 04 78 14 0B 19 3A 6D FA FA 6D 3A 19 00


; Small alien pushing Y back onto screen
AlienSprCA:
; .....**.
; ....*...
; ****....
; ....*...
; .....**.
; ....**..
; ...**...
; .*.**...
; *.****..
; ...*.**.
; ..******
; ..******
; ...*.**.
; *.****..
; .*.**...
; ........
1F80: 60 10 0F 10 60 30 18 1A 3D 68 FC FC 68 3D 1A 00

AlienSprCB:
; ........
; .....**.
; ....*...
; ****....
; ....*...
; .....**.
; ...***..
; *..**...
; .*.***..
; *.**.**.
; .*.*****
; .*.*****
; *.**.**.
; .*.***..
; *..**...
; ........
1FB0: 00 60 10 0F 10 60 38 19 3A 6D FA FA 6D 3A 19 00



AlienSprA:
; 8x16 f2 m3 c0
; Alien sprite type A,B, and C at positions 0
;  ........ ........ ........
;  ........ ........ ........
;  *..***.. ........ ........
;  *..****. ...****. ........
;  .*.****. *.***... *..**...
;  .***.**. .*****.* .*.***..
;  ..**.*** ..**.**. *.**.**.
;  .*.***** ..****.. .*.*****
;  .*.***** ..****.. .*.*****
;  ..**.*** ..****.. *.**.**.
;  .***.**. ..**.**. .*.***..
;  .*.****. .*****.* *..**...
;  *..****. *.***... ........
;  *..***.. ...****. ........
;  ........ ........ ........
;  ........ ........ ........
1C00: 00 00 39 79 7A 6E EC FA FA EC 6E 7A 79 39 00 00
1C10: 00 00 00 78 1D BE 6C 3C 3C 3C 6C BE 1D 78 00 00
1C20: 00 00 00 00 19 3A 6D FA FA 6D 3A 19 00 00 00 00

AlienSprB:
; Alien sprite type A,B, and C at positions 1
;  ........ ........ ........
;  ........ ........ ........
;  ...***.. ........ ........
;  .*.****. .***.... ........
;  *******. ...**... .*.**...
;  *.**.**. .*****.* *.****..
;  ..**.*** *.**.**. ...*.**.
;  .*.***** *.****.. ..******
;  .*.***** ..****.. ..******
;  ..**.*** *.****.. ...*.**.
;  *.**.**. *.**.**. *.****..
;  *******. .*****.* .*.**...
;  .*.****. ...**... ........
;  ...***.. .***.... ........
;  ........ ........ ........
;  ........ ........ ........
1C30: 00 00 38 7A 7F 6D EC FA FA EC 6D 7F 7A 38 00 00
1C40: 00 00 00 0E 18 BE 6D 3D 3C 3D 6D BE 18 0E 00 00
1C50: 00 00 00 00 1A 3D 68 FC FC 68 3D 1A 00 00 00 00

; 8x16
PlayerSprite:
;  ........
;  ........
;  ****....
;  *****...
;  *****...
;  *****...
;  *****...
;  *******.
;  ********
;  *******.
;  *****...
;  *****...
;  *****...
;  *****...
;  ****....
;  ........
1C60: 00 00 0F 1F 1F 1F 1F 7F FF 7F 1F 1F 1F 1F 0F 00

; 8x16 f2
PlrBlowupSprites:
;  ........
;  ..*.....
;  *.......
;  **..*...
;  **......
;  ***.....
;  **..**.*
;  ****....
;  ****.*..
;  **......
;  ****.*..
;  *..*..*.
;  ..*.....
;  **......
;  ........
;  *.......
;
1C70: 00 04 01 13 03 07 B3 0F 2F 03 2F 49 04 03 00 01
;
;  ......*.
;  ...*....
;  *.*.....
;  **...*.*
;  .*.*....
;  **......
;  **.**.*.
;  ****....
;  ***..*..
;  ***..*..
;  **.*....
;  **.*..*.
;  ......*.
;  ..*....*
;  *...*...
;  ...*..*.
1C80: 40 08 05 A3 0A 03 5B 0F 27 27 0B 4B 40 84 11 48
;<h2>Player Shot Sprite</h2>

; 8x1
PlayerShotSpr:
1C90: 0F    ; ++++....
;<h2>Player Shot Exploding</h2>

; 8x8
ShotExploding:
; *..**..*
; ..****..
; .******.
; *.****..
; ..****.*
; .*****..
; ..*****.
; *..**..*
1C91: 99 3C 7E 3D BC 3E 7C 99

; 8x16
; Alien exploding sprite
AlienExplode:
;  ........
;  ...*....
;  *..*..*.
;  .*...*..
;  ..*.*...
;  *......*
;  .*....*.
;  ........
;  .*....*.
;  *......*
;  ..*.*...
;  .*...*..
;  *..*..*.
;  ...*....
;  ........
;  ........
1CC0: 00 08 49 22 14 81 42 00 42 81 14 22 49 08 00 00

; 8x3 f4
; Squigly shot picture in 4 animation frames
SquiglyShot:
1CD0: 44   ; ..*...*.
1CD1: AA   ; .*.*.*.*
1CD2: 10   ; ....*...

1CD3: 88   ; ...*...*
1CD4: 54   ; ..*.*.*.
1CD5: 22   ; .*...*..

1CD6: 10   ; ....*...
1CD7: AA   ; .*.*.*.*
1CD8: 44   ; ..*...*.

1CD9: 22   ; .*...*..
1CDA: 54   ; ..*.*.*.
1CDB: 88   ; ...*...*

; 8x6
; Alien shot exploding
AShotExplo:
; .*.*..*.
; *.*.*...
; .*****.*
; ******..
; .****.*.
; *.*..*..
1CDC: 4A 15 BE 3F 5E 25

; 8x3 f4
; Alien shot ... the plunger looking one
PlungerShot:
1CE2: 04  ; ..*.....
1CE3: FC  ; ..******
1CE4: 04  ; ..*.....

1CE5: 10  ; ....*...
1CE6: FC  ; ..******
1CE7: 10  ; ....*...

1CE8: 20  ; .....*..
1CE9: FC  ; ..******
1CEA: 20  ; .....*..

1CEB: 80  ; .......*
1CEC: FC  ; ..******
1CED: 80  ; .......*

; 8x3 f4
; Alien shot ... the rolling one
RollShot:
1CEE: 00  ; ........
1CEF: FE  ; .*******
1CF0: 00  ; ........

1CF1: 24  ; ..*..*..
1CF2: FE  ; .*******
1CF3: 12  ; .*..*...

1CF4: 00  ; ........
1CF5: FE  ; .*******
1CF6: 00  ; ........

1CF7: 48  ; ...*..*.
1CF8: FE  ; .*******
1CF9: 90  ; ....*..*

; 16x22
ShieldImage:
; Shield image pattern. 2 x 22 = 44 bytes.
;
;************....
;*************...
;**************..
;***************.
;****************
;..**************
;...*************
;....************
;....************
;....************
;....************
;....************
;....************
;....************
;...*************
;..**************
;****************
;****************
;***************.
;**************..
;*************...
;************....
;
1D20: FF 0F FF 1F FF 3F FF 7F FF FF FC FF F8 FF F0 FF F0 FF F0 FF F0 FF
1D36: F0 FF F0 FF F0 FF F8 FF FC FF FF FF FF FF FF 7F FF 3F FF 1F FF 0F

; 8x24
SpriteSaucer:
; ........
; ........
; ........
; ........
; ..*.....
; ..**....
; .****...
; ***.**..
; .*****..
; ..*****.
; ..*.***.
; .******.
; .******.
; ..*.***.
; ..*****.
; .*****..
; ***.**..
; .****...
; ..**....
; ..*.....
; ........
; ........
; ........
; ........
1D64: 00 00 00 00 04 0C 1E 37 3E 7C 74 7E 7E 74 7C 3E 37 1E 0C 04 00 00 00 00

; 8x24
SpriteSaucerExp:
;........
;.*...*..
;........
;*.*..*.*
;......*.
;...*....
;...**..*
;*.****..
;.**.**.*
;..****..
;.**.**..
;*.***...
;....*...
;...*..*.
;.*...**.
;.**.**.*
;*.***...
;...**..*
;...*....
;.*....*.
;....*..*
;...*....
;........
;........
1D7C: 00 22 00 A5 40 08 98 3D B6 3C 36 1D 10 48 62 B6 1D 98 08 42 90 08 00 00

; 8x8 m44
Characters:
1E00: 00 1F 24 44 24 1F 00 00  ; "A"
1E08: 00 7F 49 49 49 36 00 00  ; "B"
1E10: 00 3E 41 41 41 22 00 00  ; "C"
1E18: 00 7F 41 41 41 3E 00 00  ; "D"
1E20: 00 7F 49 49 49 41 00 00  ; "E"
1E28: 00 7F 48 48 48 40 00 00  ; "F"
1E30: 00 3E 41 41 45 47 00 00  ; "G"
1E38: 00 7F 08 08 08 7F 00 00  ; "H"

1E40: 00 00 41 7F 41 00 00 00  ; "I"
1E48: 00 02 01 01 01 7E 00 00  ; "J"
1E50: 00 7F 08 14 22 41 00 00  ; "K"
1E58: 00 7F 01 01 01 01 00 00  ; "L"
1E60: 00 7F 20 18 20 7F 00 00  ; "M"
1E68: 00 7F 10 08 04 7F 00 00  ; "N"
1E70: 00 3E 41 41 41 3E 00 00  ; "O"
1E78: 00 7F 48 48 48 30 00 00  ; "P"

1E80: 00 3E 41 45 42 3D 00 00  ; "Q"
1E88: 00 7F 48 4C 4A 31 00 00  ; "R"
1E90: 00 32 49 49 49 26 00 00  ; "S"
1E98: 00 40 40 7F 40 40 00 00  ; "T"
1EA0: 00 7E 01 01 01 7E 00 00  ; "U"
1EA8: 00 7C 02 01 02 7C 00 00  ; "V"
1EB0: 00 7F 02 0C 02 7F 00 00  ; "W"
1EB8: 00 63 14 08 14 63 00 00  ; "X"

1EC0: 00 60 10 0F 10 60 00 00  ; "Y"
1EC8: 00 43 45 49 51 61 00 00  ; "Z"
1ED0: 00 3E 45 49 51 3E 00 00  ; "0"
1ED8: 00 00 21 7F 01 00 00 00  ; "1"
1EE0: 00 23 45 49 49 31 00 00  ; "2"
1EE8: 00 42 41 49 59 66 00 00  ; "3"
1EF0: 00 0C 14 24 7F 04 00 00  ; "4"
1EF8: 00 72 51 51 51 4E 00 00  ; "5"

1F00: 00 1E 29 49 49 46 00 00  ; "6"
1F08: 00 40 47 48 50 60 00 00  ; "7"
1F10: 00 36 49 49 49 36 00 00  ; "8"
1F18: 00 31 49 49 4A 3C 00 00  ; "9"
1F20: 00 08 14 22 41 00 00 00  ; "<"
1F28: 00 00 41 22 14 08 00 00  ; ">"
1F30: 00 00 00 00 00 00 00 00  ; " "
1F38: 00 14 14 14 14 14 00 00  ; "="

1F40: 00 22 14 7F 14 22 00 00  ; "*"
1F48: 00 03 04 78 04 03 00 00  ; upside-down "Y"
1FC0: 00 20 40 4D 50 20 00 00  ; "?"
1FF8: 00 08 08 08 08 08 00 00  ; 3F:"-"

