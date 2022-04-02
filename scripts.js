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

