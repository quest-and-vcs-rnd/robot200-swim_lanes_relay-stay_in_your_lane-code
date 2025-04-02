input.onButtonPressed(Button.A, function () {
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    50,
    50
    )
    basic.showLeds(`
        . # . # .
        # # # # #
        . # . # .
        . # . # .
        . # . # .
        `)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(10, quest_Time_Units_Enum.Seconds)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    0,
    0
    )
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "Manual Override: Stop"
    )
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    0,
    0
    )
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
})
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"2-Sequence Animation Validates New Start"
)
basic.showIcon(IconNames.Heart)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
basic.showIcon(IconNames.Happy)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Teacher:"
)
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"micro:bit's LED Display is upside-down on bot"
)
display.rotateTo(display.Direction.UpsideDown)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Student:"
)
basic.forever(function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "Ver 0.1.2: 25-0401-1930"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "©️ 2025 Quest Institute. All rights reserved."
    )
})
