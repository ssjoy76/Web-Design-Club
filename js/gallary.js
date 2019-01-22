
// scrole  navbar
                $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 140) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 141) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });




// heare and nav js ends
$('#prebtn').click(function(){
    $('.president').show("slow");
    $('.vice').hide("slow");
    $('.admis').hide("slow");
    $('.admin').hide("slow");
    $('.meet').hide("slow");
    $('.member').hide("slow");
    $('.other').hide("slow");
            
});
        
$('#adminbtn').click(function(){
    $('.admin').show("slow");
    $('.vice').hide("slow");
    $('.admis').hide("slow");
    $('.president').hide("slow");
    $('.meet').hide("slow");
    $('.member').hide("slow");
    $('.other').hide("slow");
});

$('#vicebtn').click(function(){
    $('.vice').show("slow");
    $('.admis').show("slow");
    $('.president').hide("slow");
    $('.admin').hide("slow");
    $('.meet').hide("slow");
    $('.member').hide("slow");
    $('.other').hide("slow");
            
});
        
$('#meetbtn').click(function(){
    $('.meet').show("slow");
    $('.vice').hide("slow");
    $('.admis').hide("slow");
    $('.president').hide("slow");
    $('.admin').hide("slow");
    $('.member').hide("slow");
    $('.other').hide("slow");
});

$('#memberbtn').click(function(){
    $('.member').show("slow");
    $('.vice').hide("slow");
    $('.admis').hide("slow");
    $('.admin').hide("slow");
    $('.meet').hide("slow");
    $('.president').hide("slow");
    $('.other').hide("slow");
            
});
        
$('#otherbtn').click(function(){
    $('.other').show("slow");
    $('.vice').hide("slow");
    $('.admis').hide("slow");
    $('.president').hide("slow");
    $('.meet').hide("slow");
    $('.member').hide("slow");
    $('.admin').hide("slow");
});

$('#allbtn').click(function(){
    $('.other').show("slow");
    $('.vice').show("slow");
    $('.admis').show("slow");
    $('.president').show("slow");
    $('.meet').show("slow");
    $('.member').show("slow");
    $('.admin').show("slow");
});

//picnic sec starts

$('#picnicbtn').click(function(){
    $('.picnic').show("slow");
    $('.cele').hide("slow");
    $('.prog').hide("slow");
});

$('#celebtn').click(function(){
    $('.picnic').hide("slow");
    $('.cele').show("slow");
    $('.prog').hide("slow");
});

$('#progbtn').click(function(){
    $('.picnic').hide("slow");
    $('.cele').hide("slow");
    $('.prog').show("slow");
});

$('#allbtn2').click(function(){
    $('.picnic').show("slow");
    $('.cele').show("slow");
    $('.prog').show("slow");
});