function growLine() {
    $(".lineGrow").addClass("growit");
};
function removeGrowLine() {
    $(".lineGrow").removeClass("growit");
};

$(document).ready(function() {
    
    console.log("Hi")
    //Inexpensive way to attach a scroll handler to the window
    var didScroll = false, group2Distance = $('#group-2').offset().top,
    $window = $(window), parallaxContainer = $(".parallax");;
    
    parallaxContainer.scroll(function() {
      didScroll = true;  
    });
    
    //Reduce the amount of times the functions fire on scroll to increase performance
    setInterval(function() {
        if ( didScroll ) {
           
            didScroll = false;
            
            // Do stuff...
            console.log("Scrolling");
            
            //Check to see when the #group-2 div reaches the top of the screen, when it does, animate the line by adding a class
            if ( parallaxContainer.scrollTop() >= group2Distance ) {
                // Your div has reached the top
                console.log("Hit it");
                growLine();
            } else {
                removeGrowLine();
            }
        }
    }, 250);
    
    //Shake the input on invalid key press - non-alphanumeric characters
    $("#shake-test").keypress(function(event){
        var el = String.fromCharCode(event.which),
            notvalid = new RegExp('^[a-zA-Z0-9_]*$').test(el);
        console.log(el);
        if (notvalid === false) {
            console.log(el + " was typed, which is not allowed!");
            $("#shake-test").addClass("active");
        } else {
            console.log(el + " was typed, which is allowed!");
            $("#shake-test").removeClass("active");
        }
    });
    
}); //End JS ready function