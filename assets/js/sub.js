var nameError=document.getElementById("name-error");
var emailError=document.getElementById("email-error");
var cityError=document.getElementById("city-error");
var phoneError=document.getElementById("phone-error");
var messageError=document.getElementById("message-error");


function validateName(){
    var name=document.getElementsByClassName('contactName')[0].value;
    if(name.length==0){
        nameError.innerHTML="Name required";
        return false;
    }
    return true;
    
}


function validateMail(){
    var mail=document.getElementsByClassName('contactEmail')[0].value;
    console.log(mail);
    if(mail.length==0){
        emailError.innerHTML="Email is required";
        return false;
    }
    return true;
   
}

function validateCity(){

    var city=document.getElementsByClassName('contactCity')[0].value;
    if(city.length==0){
        cityError.innerHTML="City required";
        return false;
    }
    return true;
    
}

function validatePhone(){
    var phno=document.getElementsByClassName('contactPhone')[0].value;
    var required=10;
    var left=required-phno.length
    if(left<10){
        phoneError.innerHTML=left+"number needed"
    }
    // if(!phno.match(/^0[0-9]{9}$/)){
    //     phoneError.innerHTML="only digits";
    // }

    if(phno.length===0){
        phoneError.innerHTML="Phone number required";
    }
   
    return true;

}

function validateMessage(){
    var message=document.getElementsByClassName('contactMessage')[0].value;
    var required=10;
    var left=required-message.length;
    if(left>0){
        messageError.innerHTML=left+"words required";
        return false;  
    }
    messageError.innerHTML="Done";
    return true;

}
