let min = 0 
let hour = 0 
let status = 0 
let ST_setH = 0 
let ST_setM = 1 
let ST_CST = 2 

input.onButtonPressed(Button.AB, function () { 
    basic.pause(500); 
    status = (status + 1) % 3; 
    basic.showString("N");
 }) 

input.onButtonPressed(Button.A, function () { 
    basic.pause(500); 
    switch (status) { 
        case ST_setH: 
            hour  = hour -1; 
            if (hour < 0) { 
                hour = 23; 
            }
            basic.showNumber(hour);
            break; 
        case ST_setM: 
            min = min -1; 
            if (min < 0) { 
                min = 59; 
            }
            basic.showNumber(min);
            break; 
    } 
})

input.onButtonPressed(Button.B, function () { 
    basic.pause(500); 
    switch (status) { 
        case ST_setH: 
            hour = (hour + 1) % 24;
            basic.showNumber(hour);
            break; 
        case ST_setM: 
            min = (min + 1) % 60; 
            basic.showNumber(min);
            break;
        case ST_CST:
            basic.showString(hour + ":" + min); 
    } 
})
basic.forever(function () { 
    switch (status) { 
        case ST_CST: 
            basic.pause(60000) 
            if(min == 59) { 
                hour ++; 
                min = 0; 
            } else { 
                min ++; 
            } 
            if(hour == 23){ 
                hour = 0; 
            } 
    } 
}) 