var text = ""
var lastValue
function buttons(value) {   //buttons efects
    if ((text === "" && (value === ' + ' || value === ' * ' || value === ' / '))    //signs validation
        || (((value === ' + ' || value === ' * ' || value === ' / ')
        && (lastValue === ' + ' || lastValue === ' - ' || lastValue === ' * ' || lastValue === ' / ')))
    ) {
        text = "Error"
        showtext(text)
        text = ""
    } else if (lastValue === ' / ' && (value === '0')){  //zero division error
        text = "לא ניתן לחלק באפס"
        showtext(text)
        text = ""
    } else {        //Building the equation
        text += (value)
        lastValue = value
        result = text
        showtext(text)
    }
}
function AC() {  //Clearing All screan
    text = ""
    result = ""
    showtext(text)
}
function percent() {    //percent result
    showtext(text + "%")    //show percent
    result = eval(text / 100)
    text = ""         //Clearing the equation
}
function Factorial() {   //Factorial result
    var num = eval(text)
    var Fac = num
    for (var i = 1; i < num; i++)   //Building Factorial result
        Fac = Fac * i
    showtext(text + "!")    //show Factorial
    result = Fac
    text = ""   //Clearing the equation
}
function Equal() {   //The equation results
    try {
        result = eval(result)
        showEqual(result)
    } catch (e) {
        showEqual("Error")
    }
    text = ""         //Clearing the equation 
}
function showtext(show) {  //show text on screan
    document.getElementById("screan").innerHTML = show;
}
function showEqual(show) {  //show results on screan
    document.getElementById("screan").innerHTML = show;
}

