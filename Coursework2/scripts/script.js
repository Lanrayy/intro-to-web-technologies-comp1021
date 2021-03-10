
$(function(){
    //RESET
   // var notice = "false"; notice = localStorage.setItem("notice", notice);

    var notice;
    var message = "Privacy notice hidden";
    var message2 = "Privacy notice shown";
    

    // get the state of the privacy notice from local storage
    // i.e has privacy notice been acccepted

    notice = sessionStorage.getItem("notice");

    if(notice == "true")
    {
        // if it has been accepted, hide the privacy notice
        $(".privacy-notice-container").hide();
    }
    else
    {
        //else show the privacy notice
        $(".privacy-notice-container").hide().delay(1000).fadeIn(400);
    }
    //when the close button is pressed
    //hide the privacy notice

    $("#close-button").on("click", function(){
        $(".privacy-notice-container").hide();
        notice = "false";
        sessionStorage.setItem("notice", notice);
    })

    //if the accept button is clicked hide the privacy notice

    $(".accept-button").on("click", function(){
        $(".privacy-notice-container").hide();
        notice = "true";
        sessionStorage.setItem("notice", notice);
    })


    //Geolocation
    x = navigator.geolocation;
    x.getCurrentPosition(success, failure);

    function success(position){

        // fetch the coordinates

        var mylat = position.coords.latitude;
        var mylong = position.coords.longitude;

        $("#current-location").html("Your current location is Latitude: " +  mylat + ", Longitude: " + mylong);

        //$("#current-location").html("Your current location is" + mylat + mylong);

    }

    function failure(){
        $("#current-location").html("Your current location is: unable to get current locaation");

    }

    //$("#overlay").hide();

    //PORTFOLIO PAGE OVERLAY

   $(".overlay").hide();
    var Id;
   $(".project-container").on("mouseenter", function(){
       Id = $(this).attr("id");
       //alert("#project-title-"+Id);
        $("#overlay"+Id).fadeIn(200);
        $("#overlay"+Id).css({"width":"520px", "height":"370px"})
        $("#project-title-"+Id).css({"text-decoration":"underline", "font-size":"32px"});
        $("#project-description-"+Id).css({"font-size":"18.5px"});
        $("#project-image-"+Id).css({"width":"520px", "height":"370px"})
    });

    $(".project-container").on("mouseleave", function(){
        //alert(Id)
        $(".overlay").fadeOut(200);
        $(".project-title").css({"text-decoration":"none", "font-size":"30px"});
        $(".project-description").css({"text-decoration":"none", "font-size":"18px"});
        $(".project-image").css({"width":"500px", "height":"350px"});
        $("#overlay"+Id).css({"width":"500px", "height":"350px"})

    })




    //SERVICES PAGE
    var servId; 

    $(".service").on("mouseenter", function(){
        servId = $(this).attr("id");
        //alert(servId);
        $("#service-header-"+servId).css({"font-size":"22px"});
        $("#service-description-"+servId).css({"font-size":"18px"});
        $("#"+servId).css({"height":"320px", "width":"570px"});
    })

    $(".service").on("mouseleave", function(){
       
        $("#service-header-"+servId).css({"font-size":"20px"});
        $("#service-description-"+servId).css({"font-size":"16px"});
        $("#"+servId).css({"height":"300px", "width":"550px"});

    })

});