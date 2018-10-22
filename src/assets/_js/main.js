import 'bootstrap';
// Alternatively we can import features individually.
// Also make sure to update the project.config.js if you are going to take this approach
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';


function bgImage() {
  var bgimage = $('#preload img').attr('src');
  $('.hero').css('background-image', 'url(' + bgimage + ')');
  $('.hero .overlay').fadeTo("slow", 0, function() {
    $('.hero').removeClass('loading');
  });
}

  // homepage video
  $('#intro .overlay').fadeTo("slow", 0, function() {
    $('.video-background:first').get(0).play();
    $('.line').addClass('active');
  });
  $('#preload img').on('load', function(){
    bgImage();
  });

  $('#intro-contest .overlay').fadeTo("slow", 0);

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });


// import App from './App';
// import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";
// const tl = new TimelineMax();