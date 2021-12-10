//  Init Instructions.
//  Please Mess With These
//  Im Tired lol
//  Gets Serial Data Instructions
function prog() {
    let k: string;
    let initdatapass: number;
    let selectspot: number;
    let x: number;
    let selram: number;
    let val: number;
    let devtools: boolean;
    let FIRM_TOOLS: boolean;
    let ram = [""]
    let Data_Stable = [""]
    let nums = 0
    let nums1 = 0
    let ans = 0
    let count = 0
    let prevans = 0
    let sr1 = 0
    let sr2 = 0
    let sr3 = 0
    let sr4 = 0
    let sr5 = 0
    let arraysel = [1, 1]
    let anst = ""
    let ramvalue = ""
    //  Check For Instructions
    //  Num 1 Instructions
    while (true) {
        if (arraysel[count] == 0) {
            ans = 0
            nums = 0
            nums1 = 0
        }
        
        if (arraysel[count] == 1) {
            if (nums1 != 0 && nums != 0) {
                nums = 0
                nums1 = 0
                nums = 1
            }
            
            if (nums1 == 0 && nums != 0) {
                nums1 = 1
            }
            
            if (nums == 0) {
                nums = 1
            }
            
        }
        
        //  Num 2 Inst
        if (arraysel[count] == 2) {
            if (nums1 != 0 && nums != 0) {
                nums = 0
                nums1 = 0
                nums = 2
            }
            
            if (nums1 == 0 && nums != 0) {
                nums1 = 2
            }
            
            if (nums == 0) {
                nums = 2
            }
            
        }
        
        //  Num 3 Inst
        if (arraysel[count] == 3) {
            if (nums1 != 0 && nums != 0) {
                nums = 0
                nums1 = 0
                nums = 3
            }
            
            if (nums1 == 0 && nums != 0) {
                nums1 = 3
            }
            
            if (nums == 0) {
                nums = 3
            }
            
        }
        
        //  Num 4 Inst
        if (arraysel[count] == 4) {
            if (nums1 != 0 && nums != 0) {
                nums = 0
                nums1 = 0
                nums = 4
            }
            
            if (nums1 == 0 && nums != 0) {
                nums1 = 4
            }
            
            if (nums == 0) {
                nums = 4
            }
            
        }
        
        //  Num 5 Inst
        if (arraysel[count] == 5) {
            if (nums1 != 0 && nums != 0) {
                nums = 0
                nums1 = 0
                nums = 5
            }
            
            if (nums1 == 0 && nums != 0) {
                nums1 = 5
            }
            
            if (nums == 0) {
                nums = 5
            }
            
        }
        
        //  Add Inst
        if (arraysel[count] == 6) {
            if (nums == 0) {
                radio.sendString("Err 01")
            }
            
            if (nums1 == 0) {
                radio.sendString("Err 01")
            } else {
                prevans = ans
                ans = nums + nums1
            }
            
        }
        
        //  Substract Inst
        if (arraysel[count] == 7) {
            if (nums == 0) {
                radio.sendString("Err 02")
            }
            
            if (nums1 == 0) {
                radio.sendString("Err 02")
            } else {
                ans = nums - nums1
            }
            
        }
        
        if (arraysel[count] == 8) {
            if (nums == 0) {
                radio.sendString("Err 03")
            }
            
            if (nums1 == 0) {
                radio.sendString("Err 03")
            } else {
                prevans = ans
                ans = nums * nums1
            }
            
        }
        
        if (arraysel[count] == 9) {
            if (nums == 0) {
                radio.sendString("Err 04")
            }
            
            if (nums1 == 0) {
                radio.sendString("Err 04")
            } else {
                prevans = ans
                ans = nums / nums1
            }
            
        }
        
        if (arraysel[count] == 10) {
            if (nums == 0) {
                radio.sendString("Err 05")
            }
            
            if (nums1 == 0) {
                radio.sendString("Err 05")
            } else {
                prevans = ans
                anst = "" + nums + "." + ("" + nums1)
                ans = parseInt(anst)
            }
            
        }
        
        if (arraysel[count] == 11) {
            nums = ans
            nums1 = 0
            ans = 0
            prevans = 0
        }
        
        //  Conversion from Ans to UTF-8 Chars via JS Key Codes
        if (arraysel[count] == 12) {
            if (ans == 65) {
                k = "a"
            }
            
            if (ans == 66) {
                k = "b"
            }
            
            if (ans == 67) {
                k = "c"
            }
            
            if (ans == 68) {
                k = "d"
            }
            
            if (ans == 69) {
                k = "e"
            }
            
            if (ans == 70) {
                k = "f"
            }
            
            if (ans == 71) {
                k = "g"
            }
            
            if (ans == 72) {
                k = "h"
            }
            
            if (ans == 73) {
                k = "k"
            }
            
            if (ans == 74) {
                k = "l"
            }
            
            if (ans == 75) {
                k = "m"
            }
            
            if (ans == 76) {
                k = "n"
            }
            
            if (ans == 77) {
                k = "o"
            }
            
            if (ans == 78) {
                k = "p"
            }
            
            if (ans == 79) {
                k = "q"
            }
            
            if (ans == 80) {
                k = "r"
            }
            
            if (ans == 81) {
                k = "s"
            }
            
            if (ans == 82) {
                k = "t"
            }
            
            if (ans == 83) {
                k = "u"
            }
            
            if (ans == 84) {
                k = "v"
            }
            
            if (ans == 85) {
                k = "w"
            }
            
            if (ans == 86) {
                k = "x"
            }
            
            if (ans == 87) {
                k = "y"
            }
            
            if (ans == 88) {
                k = "z"
            }
            
        }
        
        //  Data Stuff thingy
        //  There Are 96 Values In This Array, You Can Expand This, Just Not Recommended.
        if (arraysel[count] == 13 && initdatapass == 0) {
            initdatapass = 1
        }
        
        if (arraysel[count] == 14 && initdatapass == 1) {
            selectspot = ans
        }
        
        if (arraysel[count] == 15 && initdatapass == 1) {
            if (selectspot <= 97 && selectspot >= 0) {
                Data_Stable[selectspot] = "" + ("" + ans)
                hummingbird.setLED(ThreePort.One, 100)
                basic.pause(100)
                hummingbird.setLED(ThreePort.One, 0)
            }
            
        }
        
        if (arraysel[count] == 16 && initdatapass == 1) {
            if (selectspot <= 97 && selectspot >= 0) {
                radio.onReceivedValue(function on_received_value(name: string, value: number) {
                    Data_Stable[selectspot] = "" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + arraysel[count]))))))))))
                })
            }
            
        }
        
        if (arraysel[count] == 17 && initdatapass == 1) {
            initdatapass = 0
        }
        
        //  Display DFGDSFSDGDS
        if (arraysel[count] == 18) {
            led.plot(ans, prevans)
        }
        
        if (arraysel[count] == 19) {
            led.unplot(ans, prevans)
        }
        
        if (arraysel[count] == 20) {
            basic.showIcon(IconNames.Square)
        }
        
        if (arraysel[count] == 21) {
            basic.clearScreen()
        }
        
        if (arraysel[count] == 22) {
            basic.showNumber(ans)
        }
        
        if (arraysel[count] == 23) {
            radio.onReceivedValue(function on_received_value2(name2: string) {
                basic.showString(name2)
            })
        }
        
        //  Time For I/O (input output)
        if (arraysel[count] == 24) {
            pins.analogWritePin(AnalogPin.P0, 1023)
        }
        
        if (arraysel[count] == 25) {
            pins.analogWritePin(AnalogPin.P1, 1023)
        }
        
        if (arraysel[count] == 26) {
            pins.analogWritePin(AnalogPin.P2, 1023)
        }
        
        if (arraysel[count] == 27) {
            pins.analogWritePin(AnalogPin.P0, 0)
        }
        
        if (arraysel[count] == 28) {
            pins.analogWritePin(AnalogPin.P1, 0)
        }
        
        if (arraysel[count] == 29) {
            pins.analogWritePin(AnalogPin.P2, 0)
        }
        
        if (arraysel[count] == 30) {
            serial.redirectToUSB()
        }
        
        if (arraysel[count] == 31) {
            selectspot = ans
            radio.sendString("" + ("" + Data_Stable[selectspot]))
        }
        
        if (arraysel[count] == 32) {
            radio.sendString("" + ("" + Data_Stable[x]))
            x += 1
        }
        
        if (arraysel[count] == 33) {
            x = 0
            while (x < ram.length) {
                radio.sendString("" + ("" + ram[x]))
                x += 1
            }
        }
        
        //  Ram Time!!!!!!!1!!
        if (arraysel[count] == 34) {
            selram = randint(0, 128)
            ram[selram] = "" + ans
            hummingbird.setLED(ThreePort.One, 100)
            basic.pause(100)
            hummingbird.setLED(ThreePort.One, 0)
            basic.pause(50)
        }
        
        if (arraysel[count] == 34.5) {
            selram = randint(0, 128)
            radio.onReceivedValue(function on_received_value2(value2: any) {
                ram[selram] = "" + value2
            })
        }
        
        if (arraysel[count] == 35) {
            radio.sendString("" + ("" + ram[selram]))
        }
        
        if (arraysel[count] == 36 && selectspot != 0 && selram != 0) {
            selectspot = ans
            Data_Stable[selectspot] = ram[selram]
        }
        
        if (arraysel[count] == 35.5) {
            ramvalue = ram[selram]
        }
        
        if (arraysel[count] == 37) {
            ram = []
        }
        
        //  Sound Time!!!!
        if (arraysel[count] == 38) {
            music.playTone(ans, music.beat(BeatFraction.Whole))
        }
        
        //  IO Cont.
        if (arraysel[count] == 39) {
            //  edit this for game input
            if (input.pinIsPressed(TouchPin.P0)) {
                
            }
            
        }
        
        if (arraysel[count] == 40) {
            //  edit this for game input
            if (input.pinIsPressed(TouchPin.P1)) {
                
            }
            
        }
        
        if (arraysel[count] == 41) {
            //  edit this for game input
            if (input.pinIsPressed(TouchPin.P2)) {
                
            }
            
        }
        
        if (arraysel[count] == 42) {
            if (input.buttonIsPressed(Button.A)) {
                
            }
            
        }
        
        //  edit this for game input
        if (arraysel[count] == 43) {
            if (input.buttonIsPressed(Button.A)) {
                
            }
            
        }
        
        //  edit this for game input
        if (arraysel[count] == 44) {
            if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
                
            }
            
        }
        
        //  edit this for game input
        //  Advanced Settings
        //  Warning!
        //  This Could Lead To A Brick!
        //  I Am Not responsible for any damages.
        if (arraysel[count] == 45) {
            radio.sendString("" + ("" + control.deviceSerialNumber()))
        }
        
        if (arraysel[count] == 46) {
            val = 1
            while (true) {
                val = val * 9.830498230983095e+25
            }
        }
        
        if (arraysel[count] == 47) {
            devtools = true
        }
        
        if (arraysel[count] == 48 && devtools == true) {
            //  DANGEROUS.
            //  from this state, you can run proc in background, or remote execution.
            //  Still work in progress, to be released soon.
            FIRM_TOOLS = true
        }
        
        if (arraysel[count] == 49 && devtools == true) {
            radio.sendString("" + ("" + initdatapass))
            radio.sendString("" + anst + sr1 + sr2 + sr3 + sr4 + sr5)
        }
        
        if (arraysel[count] == 50 && devtools == true) {
            Data_Stable = []
        }
        
        if (arraysel[count] == 51 && devtools == true) {
            devtools = false
        }
        
        if (arraysel[count] == 52) {
            radio.sendString("" + ("" + ans))
            basic.pause(1000)
            radio.sendNumber(ans)
        }
        
        // Hummingbird Bit Instructions.
        if (arraysel[count] == 54) {
            hummingbird.setRotationServo(FourPort.One, 100)
            basic.pause(500)
            hummingbird.setRotationServo(FourPort.One, 0)
        }
        
        if (arraysel[count] == 55) {
            hummingbird.setPositionServo(FourPort.Two, 0)
            basic.pause(500)
            hummingbird.setPositionServo(FourPort.Two, 180)
        }
        
        if (arraysel[count] == 56) {
            while (true) {
                val = hummingbird.getSensor(SensorType.Dial, ThreePort.Three)
                hummingbird.setTriLED(TwoPort.One, val, 0, 0)
            }
        }
        
        count = count + 1
    }
}

hummingbird.startHummingbird()
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Target)
basic.pause(500)
basic.clearScreen()
radio.setGroup(1)
radio.sendString("init os")
//  just data array arraysel[count]s
prog()
