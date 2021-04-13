$(document).ready(function () {

    // VARIABLES
    var calc = $('.calculator');
    var calcDisplay = calc.find('.calculator__display');
    var calcDisplay2 = calc.find('.calculator__display2');
    var calcKeys = calc.find('.calculator__key');
    var calcButton = calc.find('.calculator__button');
    var calcClear = calc.find('.calculator__clear');
    var calcEqual = calc.find('.calculator__key--equal');
    var calcPower = calc.find('.calculator__power');
    var calcSpace = calc.find('.calculator__backspace');
    var calcSquare = calc.find('.calculator__square');
    var calcRectangle = calc.find('.calculator__rectangle');
    var calcCircle = calc.find('.calculator__circle');

    // INIT CALC KEYS
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    // ADD NUMBERS TO INPUT
    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    });

    // CLEAR INPUT
    calcClear.on('click', function () {
        calcDisplay.val('');
        calcDisplay2.val('');
        hide();
    });

    // SHOW RESULT
    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
    });

    // POWER BUTTON
    calcPower.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 2) );
    });

    // BACKSPACE BUTTON
    calcSpace.on('click', function () {
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

    // SHOW HIDDEN PARAGRAPHS
    function show() {
        document.getElementById("hidden").style.display = "block";
        document.getElementById("hidden2").style.display = "block";
    }

    // HIDE PARAGRAPHS
    function hide() {
        document.getElementById("hidden").style.display = "none";
        document.getElementById("hidden2").style.display = "none";
    }

    //SQUARE BUTTON
    calcSquare.on('click', function () {
        var a = calcDisplay.val();
        calcDisplay.val( calcDisplay.val() * 4);  //PERIMETER
        calcDisplay2.val( Math.pow( a, 2) );         //AREA
        show();
    })

    //RECTANGLE BUTTON
    calcRectangle.on('click', function () {
        var a = calcDisplay.val();
        var b = calcDisplay2.val();
        calcDisplay.val( (2 * a) + (2 * b) );   //PERIMETER
        calcDisplay2.val( a * b);               //AREA
        show();
    })

    //CIRCLE BUTTON
    calcCircle.on('click', function () {
        var a = calcDisplay.val();
        var b = ( 2 * Math.PI * calcDisplay.val() ).toFixed(5);  //PERIMETER
        var c = ( Math.PI * Math.pow( a, 2) ).toFixed(5);     //AREA
        calcDisplay.val(b);
        calcDisplay2.val(c);
        show();
    })
});
