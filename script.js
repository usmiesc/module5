// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var button = $(".saveBtn");
  button.click(function () {
    // console.log(this);
    // console.log($(this).siblings());
    // console.log($(this).siblings(".description"));
    // console.log($(this).siblings(".description").val());
    var textareaInfo = $(this).siblings(".description").val();
    console.log($(this).parent())
    console.log($(this).parent().attr('id'))
    var Idvalue = $(this).parent().attr('id')
    localStorage.setItem(Idvalue,textareaInfo);
    


  });
  //add a n click listener on save button!! will set local storage and show notifications.Michael E.
  
  
  //localStorage.getItem(Idvalue)
  //console.log(localStorage.getItem(Idvalue))
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  for (let i = 9; i < cars.length; i++) 
  
  //.val


  //update hour!-michael E.

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
