$(document).ready(function(){

// FirstName Validation
    $("input#fname").focusout(function(){
        var firstName = $("input#fname").val();
        var nameReg = new RegExp(/^[a-zA-Z ]{2,30}$/);
        
        if(nameReg.test(firstName) || firstName == ""){
            $("span#firstnameError").hide();
            
        }
        else{
            $("span#firstnameError").html("Firstname cannot contain numbers");
            $("span#firstnameError").css({"color":"red"});
            $("span#firstnameError").css({"text-align":"center"});
            $("span#firstnameError").show();
            
        }
    })

// Surname Validation 
    $("input#sname").focusout(function(){
        var Surname = $("input#sname").val();
        var nameReg = new RegExp(/^[a-zA-Z ]{2,30}$/);
        
        if(nameReg.test(Surname) || Surname == ""){
            $("span#surnameError").hide();
            
        }
        else{
            $("span#surnameError").html("Surname cannot contain numbers");
            $("span#surnameError").css({"color":"red"});
            $("span#surnameError").css({"text-align":"center"});
            $("span#surnameError").show();
            
        }
    })


// Email Validation
$("input#mail").focusout(function(){
    var email = $("input#mail").val();
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var message = "Valid";

    if(emailReg.test(email) || email == ""){
      $("span#emailError").hide();
    }
    else{
        $("span#emailError").html("Invalid Email Address");
        $("span#emailError").css({"color":"red"});
        $("span#emailError").show();
    }
})


// Phone Validation
$("input#phone").focusout(function(){
    var phone = $("input#phone").val();
    var numberReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
   

    if(numberReg.test(phone) || phone == ""){
      $("span#numberError").hide();
    }
    else{
        $("span#numberError").html("Invalid Phone Number");
        $("span#numberError").css({"color":"red"});
        $("span#numberError").show();
    }
})

// Address Validation 
$("input#address").focusout(function(){
    var userAdd = $("input#address").val();
    var pattern = new RegExp(/^[a-zA-Z ]{2,30}$/);

    if(pattern.test(userAdd) || userAdd == ""){
        $("span#addressError").hide();

    }
    else{
        $("span#addressError").html("Invalid Address");
        $("span#addressError").css({"color":"red"});
        $("span#addressError").show();
    }
})




$('#insert').bind("click",function(){
        var firstName = $("input#fname").val();
        var surname = $("input#sname").val();
        var email = $("input#mail").val();
        var phone = $("input#phone").val();
        var address = $("input#address").val();

        if(firstName == '' && surname == '' && email == ''&& phone == '' && address == ''){
            if(firstName == ""){
                $("span#firstnameError").html("Firstname cannot be empty");
                $("span#firstnameError").css({"color":"red"});
            }
            if(surname == ""){
                $("span#surnameError").html("Surname cannot be empty");
            $("span#surnameError").css({"color":"red"});
            }
            if(email == ""){
                $("span#emailError").html("Email Address cannot be empty");
                $("span#emailError").css({"color":"red"});
            }
            if(phone == ""){
                $("span#numberError").html("Phone number cannot be empty");
                $("span#numberError").css({"color":"red"});
            }
            if(address == ""){
                $("span#addressError").html("Phone number cannot be empty");
                $("span#addressError").css({"color":"red"});
            }

            
        }
        else{
            var url ="digital-cv.html?firstName=" + encodeURIComponent($("input#fname").val()) + "&surname="+encodeURIComponent($("input#sname").val()) 
        + "&email="+encodeURIComponent($("input#mail").val()) + "&phone="+encodeURIComponent($("input#phone").val()) + "&address="+encodeURIComponent($("input#address").val()) ;
        window.location.href= url;
        }

        
});

// Cv Details 
$("#cv-title").css({"color":"#2980b9"});




})







    