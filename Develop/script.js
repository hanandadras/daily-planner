$(document).ready(function() {
    var currentTimeEl = $("#currentDay");
    var timeNow = moment ();
    timeNow = moment().format("dddd, MMM DD, YYYY");
    currentTimeEl.text(timeNow);

    var saveBtn = $('.saveBtn');
    var fieldArray =[];

    saveBtn.on("click", function (){
        var value = $(this).siblings('textarea').val()
        var time = $(this).parent().attr('id')
        localStorage.setItem(time, value)
    });
 
    var hour =moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log ("hour"+ hour);
    

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