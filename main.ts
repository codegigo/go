
//% color=#0031AF icon="\uf06e" 
//% groups='["Basic", "Ball", "Face", "Card", "Color", "Tracking", "Learn"]'
namespace AILens {
    const CameraAdd = 0X14;
    let DataBuff = pins.createBuffer(9);
    /**
    * Status List of Ball
    */
    export enum FuncList {
        //% block="Card recognition"
        Card = 2,
        //% block="Face detection" 
        Face = 6,
        //% block="Ball recognition"
        Ball = 7,
        //% block="Tracking line"
        Tracking = 8,
        //% block="Color recognition"
        Color = 9,
        //% block="Learn Object"
        Things = 10
    }
    /**
    * Status List of Ball
    */
    export enum Ballstatus {
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="Size"
        Size = 4,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Ball ID"
        ID = 8
    }
    /**
    * Status List of Face
    */
    export enum Facestatus {
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="W"
        W = 4,
        //% block="H"
        H = 5,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Face ID"
        ID = 8
    }
    /**
    * Status List of Card
    */
    export enum Cardstatus {
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="Size"
        Size = 4,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Card ID"
        ID = 8
    }
    /**
    * Status List of Color
    */
    export enum Colorstatus {
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="Size"
        Size = 4,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Color ID"
        ID = 8
    }
    /**
    * Status List of Color
    */
    export enum ColorLs {
        //% block="Black"
        black = 4,
        //% block="Blue"
        blue = 2,
        //% block="Green"
        green = 1,
        //% block="Red"
        red = 5,
        //% block="White"
        white = 6,
        //% block="Yellow"
        yellow = 3
    }

    export enum Linestatus {
        //% block="Angle"
        angle = 1,
        //% block="Width"
        width = 2,
        //% block="Len"
        len = 3
    }
    export enum LineTrend {
        //% block="Left"
        left,
        //% block="Right"
        right,
        //% block="Front"
        front,
        //% block="None"
        none
    }
    /**
    * Number Cards List
    */
    export enum numberCards {
        //% block="0"
        zero = 1,
        //% block="1"
        one = 2,
        //% block="2"
        two = 3,
        //% block="3"
        three = 4,
        //% block="4"
        four = 5,
        //% block="5"
        five = 6,
        //% block="6"
        six = 7,
        //% block="7"
        seven = 8,
        //% block="8"
        eight = 9,
        //% block="9"
        nine = 10
    }
    /*
    * Letters Cards List
    */
    export enum letterCards {
        //% block="A"
        A = 1,
        //% block="B"
        B = 2,
        //% block="C"
        C = 3,
        //% block="D"
        D = 4,
        //% block="E"
        E = 5
    }
    /*
    * Traffic Cards List
    */
    export enum trafficCards {
        //% block="Forward"
        forward = 18,
        //% block="Back"
        back = 20,
        //% block="Stop"
        stop = 19,
        //% block="Turn left"
        turnleft = 16,
        //% block="Turn right"
        turnright = 17
    }
    /*
    * Other Cards List
    */
    export enum otherCards {
        //% block="Mouse"
        mouse = 1,
        //% block="micro:bit"
        microbit = 2,
        //% block="Ruler"
        ruler = 3,
        //% block="Cat"
        cat = 4,
        //% block="Pear"
        pear = 5,
        //% block="Ship"
        ship = 6,
        //% block="Apple"
        apple = 7,
        //% block="Car"
        car = 8,
        //% block="Pen"
        pen = 9,
        //% block="Dog"
        dog = 10,
        //% block="Umbrella"
        umbrella = 11,
        //% block="Airplane"
        airplane = 12,
        //% block="Clock"
        clock = 13,
        //% block="Grape"
        grape = 14,
        //% block="Cup"
        cup = 15
    }
    export enum learnID {
        ID1 = 1,
        ID2 = 2,
        ID3 = 3,
        ID4 = 4,
        ID5 = 5
    }
    export enum ballColorList {
        //% block="Red"
        Red = 2,
        //% block="Blue"
        Blue = 1
    }

    export enum vocabularyList {
        //% block="Hi, Shaun"
        Hi_Shaun = 1,
        //% block="Lights on"
        Turn_on_lights = 16,
        //% block="Lights off"
        Turn_off_lights = 17,
        //% block="Turn left"
        Turn_left = 18,
        //% block="Turn right"
        Turn_right = 19,
        //% block="Full speed ahead"
        Go_forward = 20,
        //% block="Reversing"
        Go_Backwards = 21,
        //% block="Line Tracking"
        Line_tacking = 22,
        //% block="Avoid object"
        Avoid_object = 23,
        //% block="Stop"
        Stop_car = 24,
        //% block="Start device"
        Start_device = 32,
        //% block="Turn off device"
        Close_device = 33,
        //% block="Pause"
        Pause_device = 34,
        //% block="Keep going"
        Keep_going = 35,
        //% block="Raise a level"
        Add_a_level = 36,
        //% block="Lower a level"
        Lower_a_level = 37,
        //% block="Music on"
        Music_on = 38,
        //% block="Music off"
        Music_off = 39,
        //% block="Switch music"
        Switch_music = 40,
        //% block="Execute function one"
        Execute_function_one = 49,
        //% block="Execute function two"
        Execute_function_two = 50,
        //% block="Learning entry 1"
        Learning_entry_1 = 80,
        //% block="Learning entry 2"
        Learning_entry_2 = 81,
        //% block="Learning entry 3"
        Learning_entry_3 = 82,
        //% block="Learning entry 4"
        Learning_entry_4 = 83,
        //% block="Learning entry 5"
        Learning_entry_5 = 84,
        //% block="Learning entry 6"
        Learning_entry_6 = 85,
        //% block="Learning entry 7"
        Learning_entry_7 = 86,
        //% block="Learning entry 8"
        Learning_entry_8 = 87,
        //% block="Learning entry 9"
        Learning_entry_9 = 88,
        //% block="Learning entry 10"
        Learning_entry_10 = 89
    }
    /**
    * TODO: Waiting for module initialize.
    */
    //% block="Initialize AI-Lens"
    //% group="Basic" weight=100 
    //% color=#00B1ED
    export function initModule(): void {
        let timeout = input.runningTime()
        while (!(pins.i2cReadNumber(CameraAdd, NumberFormat.Int8LE))) {
            if (input.runningTime() - timeout > 30000) {
                while (true) {
                    basic.showString("Init AILens Error!")
                }
            }
        }
    }
    /**
    * TODO: Switch recognition objects.
    * @param fun Function list eg: FuncList.Face
    */
    //% block="Mode %fun"
    //% fun.fieldEditor="gridpicker"
    //% fun.fieldOptions.columns=3
    //% group="Basic" weight=95 
    //% color=#00B1ED
    export function switchfunc(fun: FuncList): void {
        let funcBuff = pins.i2cReadBuffer(CameraAdd, 9)
        funcBuff[0] = 0x20
        funcBuff[1] = fun
        pins.i2cWriteBuffer(CameraAdd, funcBuff)
    }

    /**
    * TODO: Get the image in a frame
    */
    //% block="Get one image from AI-Lens"
    //% group="Basic" weight=90 
    //% color=#00B1ED
    export function cameraImage(): void {
        DataBuff = pins.i2cReadBuffer(CameraAdd, 9)
        basic.pause(30)
    }

    /**
    * TODO: Judge the image contains a ball
    */
    //% block="Image contains ball(s)"
    //% group="Ball" weight=85 
    //% color=#00B1ED
    export function checkBall(): boolean {
        return DataBuff[0] == 7
    }
    //% block="Image contains %ballcolor ball"
    //% group="Ball" weight=84
    //% ballcolor.fieldEditor="gridpicker"
    //% ballcolor.fieldOptions.columns=2
    //% color=#00B1ED
    export function ballColor(ballcolor: ballColorList): boolean {
        if (DataBuff[0] == 7) {
            return ballcolor == DataBuff[1]
        }
        else {
            return false
        }
    }
    //% block="In the image get ball(s)' total"
    //% group="Ball" weight=83 
    //% color=#00B1ED
    export function BallTotalNum(): number {
        if (DataBuff[0] == 7) {
            return DataBuff[7]
        }
        else {
            return 0
        }
    }
    /**
    * TODO: In the image get ball(s)' info
    */
    //% block="In the image get ball(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Ball" weight=80 
    //% color=#00B1ED
    export function ballData(status: Ballstatus): number {
        if (DataBuff[0] == 7) {
            switch (status) {
                case Ballstatus.X:
                    return DataBuff[2]
                    break
                case Ballstatus.Y:
                    return DataBuff[3]
                    break
                case Ballstatus.Size:
                    return DataBuff[4]
                    break
                case Ballstatus.Confidence:
                    return 100 - DataBuff[6]
                    break
                case Ballstatus.ID:
                    return DataBuff[8]
                    break
                default:
                    return 0;
            }
        }
        else {
            return 0
        }
    }


    /**
    * TODO: Judge whether there is a face in the picture
    */
    //% block="Image contains a face"
    //% group="Face" weight=75 
    //% color=#00B1ED
    export function checkFace(): boolean {
        return DataBuff[0] == 6
    }
    //% block="In the image get face(s)' total"
    //% group="Face" weight=74 
    //% color=#00B1ED
    export function faceTotalNum(): number {
        if (DataBuff[0] == 6) {
            return DataBuff[7]
        }
        else {
            return 0
        }
    }
    /**
    * TODO: Judge whether there is a face in the picture
    * @param status Facestatus, eg: Facestatus.X
    */
    //% block="In the image get face(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Face" weight=70 
    //% color=#00B1ED
    export function faceData(status: Facestatus): number {
        if (DataBuff[0] == 6) {
            switch (status) {
                case Facestatus.X:
                    return DataBuff[2]
                    break
                case Facestatus.Y:
                    return DataBuff[3]
                    break
                case Facestatus.W:
                    return DataBuff[4]
                    break
                case Facestatus.H:
                    return DataBuff[5]
                    break
                case Facestatus.Confidence:
                    return 100 - DataBuff[6]
                    break
                case Facestatus.ID:
                    return DataBuff[8]
                    break
                default:
                    return 0
            }
        }
        else {
            return 0
        }
    }
    /**
    * TODO: Judge whether there is a digital card in the screen
    * @param status numberCards, eg: numberCards.1
    */
    //% block="Image contains number card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=65 
    //% color=#00B1ED
    export function numberCard(status: numberCards): boolean {
        if (DataBuff[0] == 2) {
            return status == DataBuff[1]
        }
        else
            return false
    }
    /**
    * TODO: Judge whether there is a letter card in the screen
    * @param status letterCards, eg: letterCards.A
    */
    //% block="Image contains letter card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=60 
    //% color=#00B1ED
    export function letterCard(status: letterCards): boolean {
        if (DataBuff[0] == 4) {
            return status == DataBuff[1]
        }
        else
            return false
    }
    /**
    * TODO: Judge whether there is a traffic card in the screen
    * @param status trafficCards, eg: trafficCards.forward
    */
    //% block="Image contains traffic card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=55 
    //% color=#00B1ED
    export function trafficCard(status: trafficCards): boolean {
        if (DataBuff[0] == 3) {
            return status == DataBuff[1]
        }
        else
            return false
    }
    /**
    * TODO: Judge whether there is a other card in the screen
    * @param status otherCards, eg: otherCards.cat
    */
    //% block="Image contains other card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" 
    //% color=#00B1ED
    export function otherCard(status: otherCards): boolean {
        if (DataBuff[0] == 3) {
            return status == DataBuff[1]
        }
        else
            return false
    }
    //% block="In the image get Card(s)' total"
    //% group="Card" weight=49 
    //% color=#00B1ED
    export function cardTotalNum(): number {
        if (DataBuff[0] == 2 || DataBuff[0] == 3 || DataBuff[0] == 4) {
            return DataBuff[7]
        }
        else {
            return 0
        }
    }
    /**
    * TODO: Card parameters in the screen
    * @param status otherCards, eg: Cardstatus.X
    */
    //% block="In the image get Card(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=45 
    //% color=#00B1ED
    export function CardData(status: Cardstatus): number {
        if (DataBuff[0] == 2 || DataBuff[0] == 3 || DataBuff[0] == 4) {
            switch (status) {
                case Cardstatus.X:
                    return DataBuff[2]
                    break
                case Cardstatus.Y:
                    return DataBuff[3]
                    break
                case Cardstatus.Size:
                    return DataBuff[4]
                    break
                case Cardstatus.Confidence:
                    return 100 - DataBuff[6]
                    break
                case Cardstatus.ID:
                    return DataBuff[8]
                    break
                default:
                    return 0
            }
        }
        else
            return 0
    }
    /**
    * TODO: Judge whether there is a color in the screen
    * @param status ColorLs, eg: ColorLs.red
    */
    //% block="Image contains color card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Color" weight=30
    //% color=#00B1ED
    export function colorCheck(status: ColorLs): boolean {
        if (DataBuff[0] == 9) {
            return status == DataBuff[1]
        }
        else
            return false
    }
    //% block="In the image get color card(s)' total"
    //% group="Color" weight=29 
    //% color=#00B1ED
    export function colorTotalNum(): number {
        if (DataBuff[0] == 9) {
            return DataBuff[7]
        }
        else {
            return 0
        }
    }
    /**
    * TODO: color parameters in the screen
    * @param status Colorstatus, eg: Colorstatus.X
    */
    //% block="In the image get color card(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Color" weight=25 
    //% color=#00B1ED
    export function colorData(status: Colorstatus): number {
        if (DataBuff[0] == 9) {
            switch (status) {
                case Colorstatus.X:
                    return DataBuff[2]
                    break
                case Colorstatus.Y:
                    return DataBuff[3]
                    break
                case Colorstatus.Size:
                    return DataBuff[4]
                    break
                case Colorstatus.Confidence:
                    return 100 - DataBuff[6]
                    break
                case Colorstatus.ID:
                    return DataBuff[8]
                    break
                default:
                    return 0
            }
        }
        else {
            return 0
        }
    }
    /**
    * TODO: line parameters in the screen
    * @param status Linestatus, eg: Linestatus.angle
    */
    //% block="In the image get line(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Tracking"
    //% weight=35 
    //% color=#00B1ED
    export function lineData(status: Linestatus): number {
        if (DataBuff[0] == 8) {
            switch (status) {
                case Linestatus.angle:
                    return DataBuff[1]
                    break
                case Linestatus.width:
                    return DataBuff[2]
                    break
                case Linestatus.len:
                    return DataBuff[3]
                    break
                default:
                    return 0
            }
        }
        else
            return 0
    }
    /**
    * TODO: line parameters in the screen
    * @param status Linestatus, eg: Linestatus.angle
    */
    //% block="Image contains line's direction towards %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=2
    //% group="Tracking"
    //% weight=34 
    //% color=#00B1ED
    export function lineDirection(status: LineTrend): boolean {
        if (DataBuff[0] == 8) {
            switch (status) {
                case LineTrend.none:
                    return false
                    break
                case LineTrend.left:
                    if (DataBuff[2] < 90) {
                        return true
                    }
                    else {
                        return false
                    }
                    break
                case LineTrend.right:
                    if (DataBuff[2] > 130) {
                        return true
                    }
                    else {
                        return false
                    }
                    break
                case LineTrend.front:
                    if (DataBuff[2] > 90 && DataBuff[2] < 130) {
                        return true
                    }
                    else {
                        return false
                    }
                    break
            }
        }
        else {
            if (status == LineTrend.none)
                return true
        }
        return false
    }

    /**
    * TODO: Learn an object in a picture
    * @param thingsID Edit a label for the object, eg: 1
    */
    //% block="Learn an object with: %thingsID"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Learn" weight=20 
    //% color=#00B1ED
    export function learnObject(thingsID: learnID): void {
        let thingsBuf = pins.createBuffer(9)
        thingsBuf[0] = 10
        thingsBuf[1] = thingsID
        pins.i2cWriteBuffer(CameraAdd, thingsBuf)
    }
    /**
    * TODO: Clear Learned Objects
    */
    //% block="Clear learned objects"
    //% group="Learn" weight=15 
    //% color=#00B1ED
    export function ClearlearnObject(): void {
        let thingsBuf = pins.createBuffer(9)
        thingsBuf[0] = 10
        thingsBuf[1] = 10
        pins.i2cWriteBuffer(CameraAdd, thingsBuf)
    }
    /**
    * TODO: Judge whether there are any learned objects in the picture
    */
    //% block="Image contains learned objects: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Learn" weight=14 
    //% color=#00B1ED
    export function objectCheck(status: learnID): boolean {
        if (DataBuff[0] == 10 && status == DataBuff[1]) {
            if (objectConfidence(status) >= 83) {
                return true
            }
            else {
                return false
            }
        }
        else
            return false
    }
    /**
    * TODO: Judge whether there are any learned objects in the picture
    */
    //% block="In the image get learn object %thingsID Confidence"
    //% group="Learn" weight=10 
    //% color=#00B1ED
    export function objectConfidence(thingsID: learnID): number {
        if (DataBuff[0] == 10 && DataBuff[2] < 30) {
            if (DataBuff[1] == thingsID) {
                return 100 - DataBuff[2]
            }
            else {
                return 0
            }
        }
        return 0
    }

}

//--------------------

//% weight=0 color=#3CB371 icon="\uf135"  groups='["Gigo Motor","Motor for workshop", "Ultrasonic Sensor", "RGB LED", "Color Sensor"]'
namespace GigoWorkshop {

    //external button for roboticworkshop
    export enum ButtonChannelWS {
        //% block="A (P1)"
        A,
        //% block="B (P8)"
        B,
        //% block="C (P14)"
        C,
        //% block="D (P16)"
        D,
        //% block="I2C"
        E,
    }
    export let ButtonChannelsWS: { [key: number]: DigitalPin } = {
        [ButtonChannelWS.A]: DigitalPin.P1,
        [ButtonChannelWS.B]: DigitalPin.P8,
        [ButtonChannelWS.C]: DigitalPin.P14,
        [ButtonChannelWS.D]: DigitalPin.P16,
        [ButtonChannelWS.E]: DigitalPin.P20,

    }
    //----------------------------------



    //external sensor
    export enum SensorChannelWS {
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P8"
        P8,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
        //% block="P0"
        P0,
    }
    export let SensorChannelsWS: { [key: number]: DigitalPin } = {
        [SensorChannelWS.P1]: DigitalPin.P1,
        [SensorChannelWS.P8]: DigitalPin.P8,
        [SensorChannelWS.P0]: DigitalPin.P0,
        [SensorChannelWS.P2]: DigitalPin.P2,
        [SensorChannelWS.P13]: DigitalPin.P13,
        [SensorChannelWS.P14]: DigitalPin.P14,
        [SensorChannelWS.P15]: DigitalPin.P15,
        [SensorChannelWS.P16]: DigitalPin.P16,
    }
    export let SensorChannelAWS: { [key: number]: AnalogPin } = {
        [SensorChannelWS.P1]: AnalogPin.P1,
        [SensorChannelWS.P8]: AnalogPin.P8,
        [SensorChannelWS.P0]: AnalogPin.P0,
        [SensorChannelWS.P2]: AnalogPin.P2,
        [SensorChannelWS.P13]: AnalogPin.P13,
        [SensorChannelWS.P14]: AnalogPin.P14,
        [SensorChannelWS.P15]: AnalogPin.P15,
        [SensorChannelWS.P16]: AnalogPin.P16,
    }
    //----------------------------------
    //% color=#000000
    //% block="read Toggle $pin (0-1)"
    //% group="Read Sensor"
    export function readToggle(pin: SensorChannelWS): number {
        let read = SensorChannelsWS[pin];
        pins.setPull(SensorChannelsWS[pin], PinPullMode.PullUp);
        let reading = pins.digitalReadPin(read);
        return (reading);
    }
    //% color=#000000
    //% block="read button $pin (0-1)"
    //% group="Read Sensor"
    export function readbuttonWS(pin: ButtonChannelWS): number {
        let read = ButtonChannelsWS[pin];
        pins.setPull(ButtonChannelsWS[pin], PinPullMode.PullUp);
        let reading = pins.digitalReadPin(read);
        return (reading);
    }
    //% color=#000000    
    //% block="analog Sensor $pin (0-1023) "
    //% group="Read Sensor"
    export function lightSensorWS(pin: SensorChannelWS): number {
        let read = SensorChannelAWS[pin];
        let reading = pins.analogReadPin(read);
        //let mappin = pins.map(reading, 0, 1023, 0, 10); // แปลงค่าจาก 0-1023 เป็น 0-10
        return Math.round(reading);
    }

    //% color=#000000    
    //% block="digital Sensor $pin (0-1)"
    //% group="Read Sensor"
    export function SensorWS(pin: SensorChannelWS): number {
        let read = SensorChannelsWS[pin];
        let reading = pins.digitalReadPin(read);
        return (reading);
    }




    ////////////////////////////////
    //          DDM Motor         //
    ////////////////////////////////


    /**motor channel
    A(1,2)
    B(8,13)
    C(14,15)
    D(16,0)
    I2C(20,19)
    */
    // motor for gigotools kit 
    export enum GgMotorChannel {
        //% block="A (P2,P1)"
        A,
        //% block="B (P13,P8)"
        B,
        //% block="C (P15,P14)"
        C,
        //% block="D (P0,P16)"
        D,
    }
    export enum GgMotorShaftDirection {
        //% block="Left"
        LOW,
        //% block="Right"
        HIGH,

    }
    export let GgmotorSpeedPins: { [key: number]: AnalogPin } = {
        [GgMotorChannel.A]: AnalogPin.P1,
        [GgMotorChannel.B]: AnalogPin.P8,
        [GgMotorChannel.C]: AnalogPin.P14,
        [GgMotorChannel.D]: AnalogPin.P16,
    }
    export let GgmotorChannels: { [key: number]: DigitalPin } = {
        [GgMotorChannel.A]: DigitalPin.P2,
        [GgMotorChannel.B]: DigitalPin.P13,
        [GgMotorChannel.C]: DigitalPin.P15,
        [GgMotorChannel.D]: DigitalPin.P0,
    }


    export enum ServoNew {
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P8"
        P8,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
        //% block="P0"
        P0,
    }
    export let servoNewchanel: { [key: number]: AnalogPin } = {
        [ServoNew.P1]: AnalogPin.P1,
        [ServoNew.P2]: AnalogPin.P2,
        [ServoNew.P8]: AnalogPin.P8,
        [ServoNew.P13]: AnalogPin.P13,
        [ServoNew.P14]: AnalogPin.P14,
        [ServoNew.P15]: AnalogPin.P15,
        [ServoNew.P16]: AnalogPin.P16,
        [ServoNew.P0]: AnalogPin.P0,
    }




    //% block="servo $pin degrees $degrees"
    //% degrees.min=0 degrees.max=180
    //% degrees.defl=90
    //% group="Motor for workshop"
    export function servo(pin: ServoNew, degrees: number): void {
        let pinsmini = servoNewchanel[pin];
        return pins.servoWritePin(pinsmini, degrees);

    }

    //% block="motor $channel direction $direction speed $speed"
    //% speed.min=0 speed.max=100
    //% speed.defl=100
    //% direction.min=0 direction.max=1
    //% group="Motor for workshop"
    export function motorControl3(channel: GgMotorChannel, direction: number, speed: number): void {
        let dirPin = GgmotorChannels[channel];
        let speedPin = GgmotorSpeedPins[channel];

        pins.digitalWritePin(dirPin, direction);
        pins.analogWritePin(speedPin, pins.map(speed, 0, 100, 0, 1023));
    }


    //% direction.defl=GgMotorShaftDirection.HIGH
    //% block="stop motor $channel"
    //% group="Motor for workshop"
    export function motorStop2(channel: GgMotorChannel): void {
        let dirPin = GgmotorChannels[channel];
        let speedPin = GgmotorSpeedPins[channel];

        pins.digitalWritePin(dirPin, 0);
        pins.analogWritePin(speedPin, 0);
    }

    //% block="motor $channel direction $direction speed $speed" 
    //% speed.min=0 speed.max=100
    //% speed.defl=100
    //% direction.defl=GgMotorShaftDirection.HIGH
    //% group="Motor for workshop"
    export function motorControl4(channel: GgMotorChannel, direction: GgMotorShaftDirection, speed: number): void {
        let dirPin = GgmotorChannels[channel];
        let speedPin = GgmotorSpeedPins[channel];

        pins.digitalWritePin(dirPin, direction);
        pins.analogWritePin(speedPin, pins.map(speed, 0, 100, 0, 1023));
    }

    export enum GgMotorChannelwork {
        //% block="A"
        A,
        //% block="B"
        B,
        //% block="C"
        C,
        //% block="D"
        D,
    }

    //% color=#6356b3
    //% block="motor channel $channel|speed (0~100) $speed|rotation direction(0~1) $direction" blockExternalInputs=false
    //% speed.min=0 speed.max=100
    //% speed.defl=100
    //% group="Motor for workshop"
    export function motorControl5(channel: GgMotorChannelwork, direction: number, speed: number): void {
        let dirPin = GgmotorChannels[channel];
        let speedPin = GgmotorSpeedPins[channel];

        pins.digitalWritePin(dirPin, direction);
        pins.analogWritePin(speedPin, pins.map(speed, 0, 100, 0, 1023));
    }
    //% color=#6356b3
    //% block="speed pin %MSpeedPin|speed (0~255) %MSpeedValue|direction pin %McontrolPin|rotation direction(0~1) %McontrolValue" blockExternalInputs=false
    //% McontrolValue.min=0 McontrolValue.max=1 
    //% MSpeedValue.min=0 MSpeedValue.max=255   
    //% MSpeedPin.fieldEditor="gridpicker" MSpeedPin.fieldOptions.columns=4
    //% MSpeedPin.fieldOptions.tooltips="false" MSpeedPin.fieldOptions.width="300"
    //% McontrolPin.fieldEditor="gridpicker" McontrolPin.fieldOptions.columns=4
    //% McontrolPin.fieldOptions.tooltips="false" McontrolPin.fieldOptions.width="300"
    //% group="Motor for workshop"
    export function DDMmotor(MSpeedPin: AnalogPin, MSpeedValue: number, McontrolPin: DigitalPin, McontrolValue: number): void {

        pins.digitalWritePin(McontrolPin, McontrolValue);
        pins.analogWritePin(MSpeedPin, pins.map(MSpeedValue, 0, 255, 0, 1023));
    }






    ////////////////////////////////
    //          Ultrasound            //
    ////////////////////////////////
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param trig tigger pin
     * @param echo echo pin
     * @param unit desired conversion unit
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    export enum GgsonarPort {
        //% block="A [ trig(P1) echo(P2) ]"
        A,
        //% block="B [ trig(P8) echo(P13) ]"
        B,
        //% block="C [ trig(P14) echo(P15) ]"
        C,
        //% block="D [ trig(P16) echo(P0) ]"
        D,
    }
    export let GgtrigChanel: { [key: number]: DigitalPin } = {
        [GgsonarPort.A]: DigitalPin.P1,
        [GgsonarPort.B]: DigitalPin.P8,
        [GgsonarPort.C]: DigitalPin.P14,
        [GgsonarPort.D]: DigitalPin.P16,
    }
    export let GgechoChanel: { [key: number]: DigitalPin } = {
        [GgsonarPort.A]: DigitalPin.P2,
        [GgsonarPort.B]: DigitalPin.P13,
        [GgsonarPort.C]: DigitalPin.P15,
        [GgsonarPort.D]: DigitalPin.P0,
    }
    //sonar
    export enum PingUnitgigo {
        //% block="μs"
        MicroSeconds,
        //% block="cm"
        Centimeters,
        //% block="inches"
        Inches
    }

    //% block="sonar %channel unit %unit"
    //% group="Ultrasonic Sensor"
    //% unit.defl=PingUnitgigo.Centimeters
    export function pinggigo(channel: GgsonarPort, unit: PingUnitgigo, maxCmDistance = 500): number {
        let trig = GgtrigChanel[channel];
        let echo = GgechoChanel[channel];
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnitgigo.Centimeters: return Math.idiv(d, 58);
            case PingUnitgigo.Inches: return Math.idiv(d, 148);
            default: return d;
        }
    }


    //% color=#6356b3
    //% blockId=sonar_ping block="trig pin %trig|echo pin %echo|unit %unit"
    //% group="Ultrasonic Sensor"
    export function ping(trig: DigitalPin, echo: DigitalPin, unit: PingUnitgigo, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnitgigo.Centimeters: return Math.idiv(d, 58);
            case PingUnitgigo.Inches: return Math.idiv(d, 148);
            default: return d;
        }
    }
    //% color=#8470FF
    //% block="Serial write line %text"
    //% group="Ultrasonic Sensor"
    export function serialWriteLine(text: any): void {
        serial.writeLine(text);
    }
    //////////////////////
    //       OLD LED.   //
    //////////////////////
    //----------------------------------


    export enum LEDChannelWS {
        //% block="A (P2)"
        A,
        //% block="B (P13)"
        B,
        //% block="C (P15)"
        C,
        //% block="D (P0)"
        D,
    }
    export let LEDChannelsWS: { [key: number]: DigitalPin } = {
        [LEDChannelWS.A]: DigitalPin.P2,
        [LEDChannelWS.B]: DigitalPin.P13,
        [LEDChannelWS.C]: DigitalPin.P15,
        [LEDChannelWS.D]: DigitalPin.P0,

    }

    //----------------------------------
    //% color=#FACB09
    //% block="led $leds status $status"
    //% status.min=0 status.max=1
    //% leds.defl=LEDChannelWS.D
    //% group="Led"
    export function ledtest(leds: LEDChannelWS, status: number): void {
        let ledg = LEDChannelsWS[leds];
        pins.digitalWritePin(ledg, status);

    }



    //% color=#FACB09
    //toggle led
    //% block="led %pin $ledstate"
    //% ledstate.shadow="toggleOnOff"
    //% expandableArgumentMode="toggle"
    //% pin.defl=LEDChannelWS.D
    //% group="Led"
    export function ledBrightness(pin: LEDChannelWS, ledstate: boolean): void {
        if (ledstate) {
            let pinled = LEDChannelsWS[pin];
            pins.digitalWritePin(pinled, 1);

        }
        else {
            let pinled = LEDChannelsWS[pin];
            pins.digitalWritePin(pinled, 0);

        }
    }

    ////////////////////////////////
    //          RGB LEDS          //
    ////////////////////////////////

    /**
    * Create a RGB LED Pin and show color directly.
    */

    export enum fixRGBpin {
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P8"
        P8,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
        //% block="P0"
        P0,
    }

    export let fixRGBpinChanel: { [key: number]: DigitalPin } = {
        [fixRGBpin.P1]: DigitalPin.P1,
        [fixRGBpin.P2]: DigitalPin.P2,
        [fixRGBpin.P8]: DigitalPin.P8,
        [fixRGBpin.P13]: DigitalPin.P13,
        [fixRGBpin.P14]: DigitalPin.P14,
        [fixRGBpin.P15]: DigitalPin.P15,
        [fixRGBpin.P16]: DigitalPin.P16,
        [fixRGBpin.P0]: DigitalPin.P0,
    }




    //% color=#EE82EE
    //% block="RGB Color pin %pin red %red green %green blue %blue brightness %brightness"
    //% weight=500 blockGap=8
    //% brightness.defl=255
    //% brightness.min=0 brightness.max=255
    //% group="RGB LED"
    export function RGBLED_showColorA(pin: fixRGBpin, red: number, green: number, blue: number, brightness: number): void {
        let buf = pins.createBuffer(1 * 3);

        // Set brightness
        brightness = brightness & 0xff;
        basic.pause(1); // add a pause to stop weirdnesses

        // Set color
        let color = packRGB(red, green, blue);

        // Show color
        buf[0] = unpackG(color);
        buf[1] = unpackR(color);
        buf[2] = unpackB(color);

        light.sendWS2812BufferWithBrightness(buf, fixRGBpinChanel[pin], brightness);
    }

    //% color=#EE82EE
    //% block="pin %pin|show color %color=RGBLED_colors|brightness %brightness"
    //% weight=100 blockGap=8
    //% brightness.defl=255
    //% brightness.min=0 brightness.max=255
    //% group="RGB LED"
    export function RGBLED_showColor(pin: fixRGBpin, color: number, brightness: number): void {
        let buf = pins.createBuffer(1 * 3);

        // Set brightness
        brightness = brightness & 0xff;
        basic.pause(1); // add a pause to stop weirdnesses

        // Set color
        let red = unpackR(color);
        let green = unpackG(color);
        let blue = unpackB(color);

        buf[0] = green;
        buf[1] = red;
        buf[2] = blue;

        // Show color
        light.sendWS2812BufferWithBrightness(buf, fixRGBpinChanel[pin], brightness);
    }

    export function RGBLED_createPin(pin: DigitalPin): HaloHd {
        let RGBLED = new HaloHd();
        RGBLED.buf = pins.createBuffer(1 * 3);
        RGBLED.start = 0;
        RGBLED._length = 1; /*LED數量*/
        RGBLED.RGBLED_setBrightness(128);
        RGBLED.pin = pin;
        pins.digitalWritePin(RGBLED.pin, pin);
        return RGBLED;
    }

    export class HaloHd {
        buf: Buffer;
        pin: DigitalPin;
        brightness: number;
        start: number;
        _length: number;

        /**
         * Shows whole ZIP Halo display as a given color (range 0-255 for r, g, b). 
         * @param rgb RGB color of the LED
         */

        RGBLED_setColor(rgb: number) {
            rgb = rgb >> 0;
            this.setAllRGB(rgb);
            this.show();
        }

        /**
         * Send all the changes to the ZIP Halo display.
         */

        show() {
            // Use the pxt-microbit core version which now respects brightness (10/2020)
            light.sendWS2812BufferWithBrightness(this.buf, this.pin, this.brightness);
        }

        /**
         * Turn off all LEDs on the ZIP Halo display.
         * You need to call ``show`` to make the changes visible.
         */

        clear(): void {
            this.buf.fill(0, this.start * 3, this._length * 3);
        }

        /**
         * Set the brightness of the ZIP Halo display. This flag only applies to future show operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */

        RGBLED_setBrightness(brightness: number): void {
            // Clamp incoming variable at 0-255 as values out of this range cause unexpected brightnesses as the lower level code only expects a byte.
            if (brightness < 0) {
                brightness = 0;
            } else if (brightness > 255) {
                brightness = 255;
            }
            this.brightness = brightness & 0xff;
            basic.pause(1); // add a pause to stop weirdnesses
        }

        // Sets up the buffer for pushing LED control data out to LEDs
        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            this.buf[offset + 0] = green;
            this.buf[offset + 1] = red;
            this.buf[offset + 2] = blue;
        }

        // Separates out Red, Green and Blue data and fills the LED control data buffer for all LEDs
        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * 3, red, green, blue);
            }
        }

        // Separates out Red, Green and Blue data and fills the LED control data buffer for a single LED
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0 || pixeloffset >= this._length) return;

            pixeloffset = (pixeloffset + this.start) * 3;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            this.setBufferRGB(pixeloffset, red, green, blue);
        }
    }

    /**
     * Converts wavelength value to red, green, blue channels
     * @param wavelength value between 470 and 625. eg: 500
     */

    export function wavelength(wavelength: number): number {
        /* The LEDs we are using have centre wavelengths of 470nm (Blue) 525nm(Green) and 625nm (Red) 
        *  We blend these linearly to give the impression of the other wavelengths. 
        *  as we can't wavelength shift an actual LED... (Ye canna change the laws of physics Capt)*/
        let r = 0;
        let g = 0;
        let b = 0;
        if (wavelength >= 470 && wavelength < 525) {
            // We are between Blue and Green so mix those
            g = pins.map(wavelength, 470, 525, 0, 255);
            b = pins.map(wavelength, 470, 525, 255, 0);
        } else if (wavelength >= 525 && wavelength <= 625) {
            // we are between Green and Red, so mix those
            r = pins.map(wavelength, 525, 625, 0, 255);
            g = pins.map(wavelength, 525, 625, 255, 0);
        }
        return packRGB(r, g, b);
    }

    /**
     * Converts hue (0-360) to an RGB value. 
     * Does not attempt to modify luminosity or saturation. 
     * Colours end up fully saturated. 
     * @param hue value between 0 and 360
     */

    export function hueToRGB(hue: number): number {
        let redVal = 0;
        let greenVal = 0;
        let blueVal = 0;
        let hueStep = 2.125;
        if (hue >= 0 && hue < 120) { // RedGreen section
            greenVal = Math.floor(hue * hueStep);
            redVal = 255 - greenVal;
        } else if (hue >= 120 && hue < 240) { // GreenBlueSection
            blueVal = Math.floor((hue - 120) * hueStep);
            greenVal = 255 - blueVal;
        } else if (hue >= 240 && hue < 360) { // BlueRedSection
            redVal = Math.floor((hue - 240) * hueStep);
            blueVal = 255 - redVal;
        }
        return ((redVal & 0xFF) << 16) | ((greenVal & 0xFF) << 8) | (blueVal & 0xFF);
    }
    /**
 * Converts value to red, green, blue channels
 * @param red value of the red channel between 0 and 255. eg: 255
 * @param green value of the green channel between 0 and 255. eg: 255
 * @param blue value of the blue channel between 0 and 255. eg: 255
 */

    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * Gets the RGB value of a known color
     */
    export enum RGBLedColors {
        //% block=off
        Off = 0x000000,
        //% block=red
        Red = 0xFF0000,
        //% block=orange
        Orange = 0xFFA500,
        //% block=yellow
        Yellow = 0xFFFF00,
        //% block=green
        Green = 0x00FF00,
        //% block=blue
        Blue = 0x0000FF,

        //% block=purple
        Purple = 0xFF00FF,
        //% block=white
        White = 0xFFFFFF
    }



    //% blockId="RGBLED_colors" block="%color"
    export function colors(color: RGBLedColors): number {
        return color;
    }

    // Combines individual RGB settings to be a single number
    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }

    // Separates red value from combined number
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }

    // Separates green value from combined number
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }

    // Separates blue value from combined number
    function unpackB(rgb: number): number {
        let b = rgb & 0xFF;
        return b;
    }

    /**
     * Converts a hue saturation luminosity value into a RGB color
     */
    function hsl(h: number, s: number, l: number): number {
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);

        h = h % 360;
        s = Math.clamp(0, 99, s);
        l = Math.clamp(0, 99, l);
        let c = Math.idiv(((100 - Math.abs(2 * l - 100)) * s << 8), 10000); // chroma, [0,255]
        let h1 = Math.idiv(h, 60); // [0,6]
        let h2 = Math.idiv((h - h1 * 60) * 256, 60); // [0,255]
        let temp = Math.abs(((h1 % 2) << 8 + h2) - 256);
        let x = (c * (256 - temp)) >> 8; // [0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h1 == 0) {
            r$ = c;
            g$ = x;
            b$ = 0;
        } else if (h1 == 1) {
            r$ = x;
            g$ = c;
            b$ = 0;
        } else if (h1 == 2) {
            r$ = 0;
            g$ = c;
            b$ = x;
        } else if (h1 == 3) {
            r$ = 0;
            g$ = x;
            b$ = c;
        } else if (h1 == 4) {
            r$ = x;
            g$ = 0;
            b$ = c;
        } else if (h1 == 5) {
            r$ = c;
            g$ = 0;
            b$ = x;
        }
        let m = Math.idiv((Math.idiv(l * 2 << 8, 100) - c), 2);
        let r = r$ + m;
        let g = g$ + m;
        let b = b$ + m;
        return packRGB(r, g, b);
    }

    /**
     * Options for direction hue changes, used by rainbow block (never visible to end user)
     */
    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
    }
    //---------------------------------------------//






    //แก้สีแล้ว
    ////////////////////////////////
    //          Color sensor     //
    ////////////////////////////////

    // Initialize the color sensor
    export function colorSensorInit(): void {
        pins.i2cWriteNumber(41, 33276, NumberFormat.UInt16BE, false);
        pins.i2cWriteNumber(41, 32771, NumberFormat.UInt16BE, false);
    }

    let nowReadColor = [0, 0, 0];

    // Function to read the current color values
    export function colorSensorReadNow(): number[] {
        pins.i2cWriteNumber(41, 178, NumberFormat.Int8LE, false);
        pins.i2cWriteNumber(41, 179, NumberFormat.Int8LE, false);
        pins.i2cWriteNumber(41, 182, NumberFormat.Int8LE, true);
        let TCS_RED = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false);
        pins.i2cWriteNumber(41, 184, NumberFormat.Int8LE, true);
        let TCS_GREEN = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false);
        pins.i2cWriteNumber(41, 186, NumberFormat.Int8LE, true);
        let TCS_BLUE = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false);

        TCS_RED = Math.round(Math.map(TCS_RED, 0, 65535, 0, 255));
        TCS_GREEN = Math.round(Math.map(TCS_GREEN, 0, 65535, 0, 255));
        TCS_BLUE = Math.round(Math.map(TCS_BLUE, 0, 65535, 0, 255));

        nowReadColor = [TCS_RED, TCS_GREEN, TCS_BLUE];
        return nowReadColor;
    }

    //% weight=12
    //% block="Read RGB"
    //% group="Color Sensor"
    export function scanColorBlock(): string {
        colorSensorInit();
        let colors = colorSensorReadNow();
        let red = colors[0];
        let green = colors[1];
        let blue = colors[2];
        return `R:${red}, G:${green}, B:${blue}`;
    }
    //code สำหรับ แสดงใน serial.writeLine
    //ปิดไว้
    export function scanColor(): void {
        colorSensorInit();
        let colors = colorSensorReadNow();
        let red = colors[0];
        let green = colors[1];
        let blue = colors[2];
        serial.writeLine(`R:${red}, G:${green}, B:${blue}`);
    }

    //% block="R %WriteRed G %WriteGreen B %WriteBlue to %Name"
    //% WriteRed.min=0 WriteRed.max=255
    //% WriteGreen.min=0 WriteGreen.max=255
    //% WriteBlue.min=0 WriteBlue.max=255
    //% Name.defl="name"
    //% group="Color Sensor"
    export function readColorEqual(WriteRed: number, WriteGreen: number, WriteBlue: number): boolean { // ลบ Name
        colorSensorInit();
        let colors = colorSensorReadNow();
        let red = colors[0];
        let green = colors[1];
        let blue = colors[2];

        return (red == WriteRed && green == WriteGreen && blue == WriteBlue);
    }


    // Function to check if the color matches exactly with a list of known RGB values
    function isExactMatch(R: number, G: number, B: number, exactValues: number[][]): boolean {
        return exactValues.some(color => color[0] === R && color[1] === G && color[2] === B);
    }

    // Enum for color options
    export enum ColorOptions {
        Red,
        Black,
        Blue,
        Green,
        Yellow,
        White
    }

    // Data for exact matches (based on the information you provided)
    const redExactValues = [
        [184, 185, 140], [185, 185, 140], [191, 187, 141], [197, 190, 142], [183, 185, 140], [184, 188, 141],
        [177, 178, 135], [177, 176, 133], [177, 180, 135], [195, 185, 138], [190, 180, 136],
        [177, 180, 136], [177, 178, 135], [177, 176, 133], [177, 180, 135], [195, 185, 138], [190, 180, 136],
        [177, 180, 136]
    ];


    const blackExactValues = [
        [153, 180, 135], [155, 182, 136], [153, 179, 135], [155, 181, 135], [154, 179, 134], [156, 182, 136], [154, 180, 134], [157, 183, 136]
    ];

    const blueExactValues = [
        [159, 187, 144], [162, 196, 154], [209, 250, 186], [160, 202, 163], [159, 196, 157],
        [158, 195, 156], [158, 187, 144], [159, 198, 157], [160, 201, 162]
    ];


    const greenExactValues = [
        [164, 201, 145], [163, 200, 145], [160, 197, 144], [161, 198, 144], [171, 207, 148],
        [187, 219, 150], [168, 205, 147], [176, 212, 149]
    ];

    const yellowExactValues = [
        [210, 227, 149], [210, 226, 148], [213, 215, 148], [231, 225, 151], [241, 246, 155], [226, 244, 154],
        [219, 236, 152], [243, 251, 157], [232, 232, 152], [202, 218, 144], [203, 219, 143],
        [200, 203, 141], [225, 218, 146], [214, 208, 143], [219, 216, 145]
    ];

    const whiteExactValues = [
        [8, 27, 198], [14, 30, 196], [1, 19, 193], [1, 19, 194], [15, 30, 197], [2, 21, 195], [9, 27, 199],
        [254, 17, 192], [253, 17, 192], [3, 23, 197], [0, 20, 194], [252, 16, 193], [0, 18, 193]
    ];

    // Function to check if the color is within a specified range
    function isColorInRange(R: number, G: number, B: number, RMin: number, RMax: number, GMin: number, GMax: number, BMin: number, BMax: number): boolean {
        return (R >= RMin && R <= RMax && G >= GMin && G <= GMax && B >= BMin && B <= BMax);
    }

    // Function to check the selected color with exact match comparison or range
    //% block="Check color %color"
    //% group="Color Sensor"
    export function checkColor(color: ColorOptions): boolean {
        colorSensorInit();
        let colors = colorSensorReadNow();
        let red = colors[0];
        let green = colors[1];
        let blue = colors[2];

        switch (color) {
            case ColorOptions.Red:
                if (isExactMatch(red, green, blue, redExactValues)) {
                    return true;
                }
                return isColorInRange(red, green, blue, 177, 200, 176, 190, 133, 142);
            case ColorOptions.Black:
                if (isExactMatch(red, green, blue, blackExactValues)) {
                    return true;
                }
                return isColorInRange(red, green, blue, 150, 160, 175, 185, 130, 140);
            case ColorOptions.Blue:
                return isExactMatch(red, green, blue, blueExactValues);

            //return isColorInRange(red, green, blue, 155, 210, 185, 255, 140, 165);
            case ColorOptions.Green:
                return isExactMatch(red, green, blue, greenExactValues);

            //return  isColorInRange(red, green, blue, 160, 215, 195, 250, 140, 160);
            case ColorOptions.Yellow:
                if (isExactMatch(red, green, blue, yellowExactValues)) {
                    return true;
                }
                return isColorInRange(red, green, blue, 200, 245, 200, 255, 140, 160);
            case ColorOptions.White:
                if (isExactMatch(red, green, blue, whiteExactValues)) {
                    return true;
                }
                return isColorInRange(red, green, blue, 0, 255, 0, 255, 190, 200);
            default:
                return false;
        }
    }



}
