$(document).ready(function() {
    var currentTimeEl = $("#currentDay");
    var timeNow = moment ();
    timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentTimeEl.text(timeNow);

    var saveBtn = $('.saveBtn');
    var fieldArray =[];

    saveBtn.on("click", function (){
        var value = $(this).siblings('textarea').val()
        var time = $(this).parent().attr('id')
        localStorage.setItem(time, value)
    });
 
    var hour = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log ("hour"+ hour);
    
    //getting element from localStorage

    $(".task-9").val(localStorage.getItem('9'))
    $(".task-10").val(localStorage.getItem('10'))
    $(".task-11").val(localStorage.getItem('11'))
    $(".task-12").val(localStorage.getItem('12'))
    $(".task-13").val(localStorage.getItem('13'))
    $(".task-14").val(localStorage.getItem('14'))
    $(".task-15").val(localStorage.getItem('15'))
    $(".task-16").val(localStorage.getItem('16'))
    $(".task-17").val(localStorage.getItem('17'))


});

    var objDate = new Date();
    var hours = objDate.getHours();
     if (hours >= 9 && hours <= 17){
        $(".hour").addClass("present");
    }

    else if(hours < 9){
        $(".hour").addClass("past");
    }
    else{
        $(".hour").addClass("future");
    }

