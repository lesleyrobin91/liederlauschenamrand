// Hamburger nav
$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

// initializing the pop-up gallery
lightGallery(document.getElementById('lightgallery'), {
    download: false,
    speed: 500
  });
  
  lightGallery(document.getElementById('lightgallery-2'), {
    download: false,
    speed: 500
  });


// filterable gallery
$('#portfolio-filter span').click(function(){
    
  // Remove class 'active' from any <span> that is currently active 
  $('#portfolio-filter .active').removeClass('active');
    
  // give this <span> that was clicked on a class of 'active' 
  $(this).addClass('active');

  // get the name of the category from this <span>, remove up to two spaces from the text and replace them with dashes, and make it lowercase 
  var filterVal = $(this).text().replace(' ','-').replace(' ','-').toLowerCase();

  // This is something new, it's an 'each' function which basically iterates through each element that matches the selector and applies the function one by one.
  $('#filterable-gallery .gallery-item').each(function() {
    
    // If the filter value that they have clicked on is 'all' then remove the class of hidden from each gallery-item. 
    if (filterVal == 'alle-tage') {
      $(this).removeClass('hidden');
    }
    
    // If it's not all, then 
    else {
      if($(this).hasClass(filterVal)) {
        $(this).removeClass('hidden'); // show those that have the filter class
      }
      else {
        $(this).addClass('hidden'); // hide those that do not have the filter
      }
    }
  });
});

// filterable gallery polish
$('#portfolio-filter-pl span').click(function(){
    
  // Remove class 'active' from any <span> that is currently active 
  $('#portfolio-filter-pl .active').removeClass('active');
    
  // give this <span> that was clicked on a class of 'active' 
  $(this).addClass('active');

  // get the name of the category from this <span>, remove up to two spaces from the text and replace them with dashes, and make it lowercase 
  var filterVal = $(this).text().replace(' ','-').replace(' ','-').toLowerCase();

  // This is something new, it's an 'each' function which basically iterates through each element that matches the selector and applies the function one by one.
  $('#filterable-gallery .gallery-item').each(function() {
    
    // If the filter value that they have clicked on is 'all' then remove the class of hidden from each gallery-item. 
    if (filterVal == 'wszystkie-dni') {
      $(this).removeClass('hidden');
    }
    
    // If it's not all, then 
    else {
      if($(this).hasClass(filterVal)) {
        $(this).removeClass('hidden'); // show those that have the filter class
      }
      else {
        $(this).addClass('hidden'); // hide those that do not have the filter
      }
    }
  });
});

//click-show
$('.show-hide').click(function(){

  $('.clickshow').fadeToggle();

});

// sticky header
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}