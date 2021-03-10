
$(function(){
    //checkif privacy notice should be displayed or not
    var notice;
    var message = "Privacy notice hidden";
    var message2 = "Privacy notice shown";

    
    //RESET
   // var notice = "false";
    //notice = localStorage.setItem("notice", notice);
    

    //get the state of the privacy notice from storage
    notice = localStorage.getItem("notice");


    if(notice == "true")
    {
        $("#storage").html(message);
        $(".privacy-notice-container").hide();
    }
    else
    {
        $("#storage").html(message2);
        //show the privacy notice
        $(".privacy-notice-container").hide().delay(1000).fadeIn(400);
        
    }

    //actions that should be taken

    //if the close button is pressed
    $("#close-button").on("click", function(){
        $(".privacy-notice-container").hide();
        notice = "false";
        localStorage.setItem("notice", notice);
        $("#storage").html(message);
    })

    //if the accept button is clicked hide the privacy notice
    $(".accept-button").on("click", function(){
        $(".privacy-notice-container").hide();
        notice = "true";
        localStorage.setItem("notice", notice);
        $("#storage").html(message);
    })

    
});