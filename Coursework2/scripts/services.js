

$(function(){

    //SERVICES PAGE
    var servId; 

    //when the cursor hovers over a service box
    $(".service").on("mouseenter", function(){
        servId = $(this).attr("id");
        //alert(servId);
        //increase font size of the header
        $("#service-header-"+servId).css({"font-size":"22px"});
        //increase font size for description
        $("#service-description-"+servId).css({"font-size":"18px"});
        //increase fint size for box size
        $("#"+servId).css({"height":"340px", "width":"590px"});

        // the cursor should change to a pointer
        $(".service").css({"cursor":"pointer"});
    })

    //when the cursor leaves a service box
    $(".service").on("mouseleave", function(){
       
        $("#service-header-"+servId).css({"font-size":"20px"});
        $("#service-description-"+servId).css({"font-size":"16px"});
        $("#"+servId).css({"height":"300px", "width":"550px"});
    })


    //when a service is clicked, show the information about that service
    $(".service").on("click", function(){
        servId = $(this).attr("id");

        //save the heder and decription of the currently clicked html
        var header = $("#service-header-"+servId).html();
        var desc = $("#service-description-"+servId).html();

        //change the content of the header, description and image
        $("#pop-out-header").html(header);
        $("#pop-out-description").html(desc);
        $("#pop-out-image-"+servId).css({"display":"flex"});


        //show the pop out
        $(".pop-out-container").css({"display":"flex"});
        $("#pop-out-overlay").css({"display":"flex"});
    })

    //when the close button is clicked, hide the pop-out
    $("#pop-out-close-button").on("click", function(){
        //servId = $(this).attr("id");
        
        //css({"font-size":"22px"});
        //hide the pop-out
        $("#pop-out-image-"+servId).css({"display":"none"});
        $(".pop-out-container").css({"display":"none"});
        $("#pop-out-overlay").css({"display":"none"});
    })

})