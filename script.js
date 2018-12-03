/*
    Program Name: Recipe Display Application

    Author: Liam Wirsansky

    Date: December 3, 2018

    Filename: script.js
*/

/* global $ */

//displays the next element after the current target
function display(event) {

     $(event.currentTarget).next().fadeIn(1,2); 

}//end of display

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);