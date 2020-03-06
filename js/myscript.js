/*glopal $, alert, console*/

$(function(){

    'use strict';
    
   

    $(".bar img ").click(function(){
       
        $(".main").slideToggle(600);
    });
    
    $(".bar .Services ").click(function(){
       
        $(".bar .branch").slideToggle(600);
    });
    
});