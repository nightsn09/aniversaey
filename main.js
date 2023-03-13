
$(":header").click(function(){
    $("#container").append("<div id = 'heart'></div>")

    anime({
  targets: '#heart',
  scale: function(el, index) {
    return anime.random(.3, .5); 
  },
      
   rotate: {
    value: function(el, index) {
    return anime.random(-40, 40); 
  },
    duration: function(el, index) {
    return anime.random(400, 2000); 
  },
    easing: 'easeInOutExpo'
  },
  delay: 50,
  translateX: function(el, index) {
    return anime.random(10, 50); 
  },
   translateY: function(el, index) {
    return anime.random(10, 100); 
  },  
  direction: 'alternate',
  elasticity:300,
  loop: true
       
   });

      $("#heart").css("left", Math.random() *260);
        $("#heart").css("top", Math.random() *240);

  });
         

     

