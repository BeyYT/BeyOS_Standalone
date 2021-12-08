# Init Instructions.
# Please Mess With These
# Im Tired lol
# Gets Serial Data Instructions
def prog():
    ram: List[str] = ['']
    Data_Stable: List[str] = ['']
    nums=0;nums1=0;ans=0;count=0;prevans=0
    sr1=0;sr2=0;sr3=0;sr4=0;sr5=0
    arraysel = [1, 53, 54, 55, 56]
    anst = ""
    ramvalue = ''
    # Check For Instructions
    # Num 1 Instructions
    while True:
        if arraysel[count] == 0:
            ans = 0
            nums = 0
            nums1 = 0
        if arraysel[count] == 1:
            if nums1 != 0 and nums != 0:
                nums = 0
                nums1 = 0
                nums = 1
            if nums1 == 0 and nums != 0:
                nums1 = 1
            if nums == 0:
                nums = 1
        # Num 2 Inst
        if arraysel[count] == 2:
            if nums1 != 0 and nums != 0:
                nums = 0
                nums1 = 0
                nums = 2
            if nums1 == 0 and nums != 0:
                nums1 = 2
            if nums == 0:
                nums = 2

        # Num 3 Inst
        if arraysel[count]==3:
            if nums1 != 0 and nums != 0:
                nums = 0
                nums1 = 0
                nums = 3
            if nums1 == 0 and nums != 0:
                nums1 = 3
            if nums == 0:
                nums = 3

        # Num 4 Inst
        if arraysel[count] == 4:
            if nums1 != 0 and nums != 0:
                nums = 0
                nums1 = 0
                nums = 4
            if nums1 == 0 and nums != 0:
                nums1 = 4
            if nums == 0:
                nums = 4
        # Num 5 Inst
        if arraysel[count] == 5:
            if nums1!= 0and nums!=0:
                nums = 0
                nums1 = 0
                nums = 5
            if nums1 == 0 and nums != 0:
                nums1 = 5
            if nums == 0:
                nums = 5
        # Add Inst
        if arraysel[count] == 6:
            if nums==0:
                radio.send_string("Err 01")
            if nums1==0:
                radio.send_string("Err 01")
            else:
                prevans=ans
                ans=nums+nums1
        # Substract Inst
        if arraysel[count]==7:
            if nums==0:
                radio.send_string("Err 02")
            if nums1==0:
                radio.send_string("Err 02")
            else:
                ans=nums-nums1
        if arraysel[count]==8:
            if nums==0:
                radio.send_string("Err 03")
            if nums1==0:
                radio.send_string("Err 03")
            else:
                prevans=ans
                ans=nums*nums1
        if arraysel[count]==9:
            if nums==0:
                radio.send_string("Err 04")
            if nums1==0:
                radio.send_string("Err 04")
            else:
                prevans=ans
                ans=nums/nums1
        if arraysel[count]==10:
            if nums==0:
                radio.send_string("Err 05")
            if nums1==0:
                radio.send_string("Err 05")
            else:
                prevans = ans
                anst=str(nums)+"."+(str(nums1))
                ans=int(anst)
        if arraysel[count]==11:
            nums=ans
            nums1 = 0
            ans=0
            prevans=0
        # Conversion from Ans to UTF-8 Chars via JS Key Codes
        if arraysel[count]==12:
            if ans==65:k="a"
            if ans==66:k="b"
            if ans==67:k="c"
            if ans==68:k="d"
            if ans==69:k="e"
            if ans==70:k="f"
            if ans==71:k="g"
            if ans==72:k="h"
            if ans==73:k="k"
            if ans==74:k="l"
            if ans==75:k="m"
            if ans==76:k="n"
            if ans==77:k="o"
            if ans==78:k="p"
            if ans==79:k="q"
            if ans==80:k="r"
            if ans==81:k="s"
            if ans==82:k="t"
            if ans==83:k="u"
            if ans==84:k="v"
            if ans==85:k="w"
            if ans==86:k="x"
            if ans==87:k="y"
            if ans==88:k="z"
        # Data Stuff thingy
        # There Are 96 Values In This Array, You Can Expand This, Just Not Recommended.
        if arraysel[count] == 13 and initdatapass == 0:
            initdatapass = 1
        if arraysel[count] == 14 and initdatapass == 1:
            selectspot = ans
        if arraysel[count] == 15 and initdatapass == 1:
            if selectspot <= 97 and selectspot >= 0:
                Data_Stable[selectspot] = "" + str(ans)
        if arraysel[count] == 16 and initdatapass == 1:
            if selectspot <= 97 and selectspot >= 0:
                
                def on_received_value(name, value):
                    Data_Stable[selectspot] = "" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + str(arraysel[count]))))))))))
                radio.on_received_value(on_received_value)
                
        if arraysel[count] == 17 and initdatapass == 1:
            initdatapass = 0
        # Display DFGDSFSDGDS
        if arraysel[count] == 18:
            led.plot(ans, prevans)
        if arraysel[count] == 19:
            led.unplot(ans, prevans)
        if arraysel[count] == 20:
           basic.show_icon(IconNames.SQUARE)
        if arraysel[count] == 21:
            basic.clear_screen()
        if arraysel[count] == 22:
            basic.show_number(ans)
        if arraysel[count] == 23:
            def on_received_value2(name2):
                basic.show_string(name2)
            radio.on_received_value(on_received_value2)
        # Time For I/O (input output)
        if arraysel[count] == 24:
            pins.analog_write_pin(AnalogPin.P0, 1023)
        if arraysel[count] == 25:
            pins.analog_write_pin(AnalogPin.P1, 1023)
        if arraysel[count] == 26:
            pins.analog_write_pin(AnalogPin.P2, 1023)
        if arraysel[count] == 27:
            pins.analog_write_pin(AnalogPin.P0, 0)
        if arraysel[count] == 28:
            pins.analog_write_pin(AnalogPin.P1, 0)
        if arraysel[count] == 29:
            pins.analog_write_pin(AnalogPin.P2, 0)
        if arraysel[count] == 30:
            serial.redirect_to_usb()
        if arraysel[count] == 31:
            selectspot = ans
            radio.send_string("" + str((Data_Stable[selectspot])))
        if arraysel[count] == 32:
                radio.send_string("" + str((Data_Stable[x])))
                x += 1
        if arraysel[count] == 33:
            x = 0
            while x < len(ram):
                radio.send_string("" + str((ram[x])))
                x += 1
        # Ram Time!!!!!!!1!!
        if arraysel[count] == 34:
            selram = randint(0, 128)
            ram[selram] = str(ans)
        if arraysel[count] == 34.5:
            selram = randint(0, 128)
            
            def on_received_value2(value2):
                ram[selram] = str(value2)
            radio.on_received_value(on_received_value2)
            
        if arraysel[count] == 35:
            radio.send_string("" + str((ram[selram])))
        if arraysel[count] == 36 and selectspot != 0 and selram != 0:
            selectspot = ans
            Data_Stable[selectspot] = ram[selram]
        if arraysel[count] == 35.5:
            ramvalue = ram[selram]
        if arraysel[count] == 37:
            ram = []
        # Sound Time!!!!
        if arraysel[count] == 38:
            music.play_tone(ans, music.beat(BeatFraction.WHOLE))
        # IO Cont.
        if arraysel[count] == 39:
            # edit this for game input
            if input.pin_is_pressed(TouchPin.P0):
                pass
        if arraysel[count] == 40:
            # edit this for game input
            if input.pin_is_pressed(TouchPin.P1):
                pass
        if arraysel[count] == 41:
            # edit this for game input
            if input.pin_is_pressed(TouchPin.P2):
                pass
        if arraysel[count] == 42:
            if input.button_is_pressed(Button.A):
                pass
        # edit this for game input
        if arraysel[count] == 43:
            if input.button_is_pressed(Button.A):
                pass
        # edit this for game input
        if arraysel[count] == 44:
            if input.button_is_pressed(Button.A) and input.button_is_pressed(Button.B):
                pass
        # edit this for game input
           
        # Advanced Settings
        # Warning!
        # This Could Lead To A Brick!
        # I Am Not responsible for any damages.
        if arraysel[count] == 45:
            radio.send_string("" + str((control.device_serial_number())))
        if arraysel[count] == 46:
            val = 1
            while True:
                val = val * 9.830498230983095e+25
        if arraysel[count] == 47:
            devtools = True
        if arraysel[count] == 48 and devtools == True:
            # DANGEROUS.
            # from this state, you can run proc in background, or remote execution.
            # Still work in progress, to be released soon.
            FIRM_TOOLS = True
        if arraysel[count] == 49 and devtools == True:
            radio.send_string("" + str((initdatapass)))
            radio.send_string("" + anst + sr1 + sr2 + sr3 + sr4 + sr5)
        if arraysel[count] == 50 and devtools == True:
            Data_Stable = []
        if arraysel[count] == 51 and devtools == True:
            devtools = False
        if arraysel[count] == 52:
            radio.send_string("" + str(ans))
            basic.pause(1000)
            radio.send_number(ans)

        #Hummingbird Bit Instructions.

        if arraysel[count] == 53:
            hummingbird.set_led(ThreePort.ONE, 100)

        if arraysel[count] == 54:
            hummingbird.set_rotation_servo(FourPort.ONE, 100)
            basic.pause(500)
            hummingbird.set_rotation_servo(FourPort.ONE, 0)

        
        if arraysel[count] == 55:
            hummingbird.set_position_servo(FourPort.TWO, 0)
            basic.pause(500)
            hummingbird.set_position_servo(FourPort.TWO, 180)
        
        if arraysel[count] == 56:
        
            while True:
                val = hummingbird.get_sensor(SensorType.DIAL, ThreePort.THREE)
                hummingbird.set_tri_led(TwoPort.ONE,val,0,0)

        

        count = count + 1           

hummingbird.start_hummingbird()
basic.show_icon(IconNames.DIAMOND)
basic.show_icon(IconNames.SMALL_DIAMOND)
basic.show_icon(IconNames.TARGET)
basic.pause(500)


basic.clear_screen()
radio.set_group(1)


radio.send_string("init os")
# just data array arraysel[count]s
prog()