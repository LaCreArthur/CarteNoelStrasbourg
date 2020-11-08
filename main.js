
$(document).ready(function() {
    $('.alert').alert()
    
    $("#navList,#navContact").click(function() {
        $("#toast").toast('show');
        $("#alertMsg").show();
        setTimeout(function() {
            $("#alertMsg").hide();
        }, 1000);
    });
    
});

