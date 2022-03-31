console.log("Hello");

var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "130px";
    }
    else
    {
        menuList.style.maxHeight = "0px";
    }
}

function myForm(){
    var dogUser = document.getElementById("form_user").value;
    var dogName = document.getElementById("form_name").value;
    var dogDate = document.getElementById("form_date").value;
    var dogEmail = document.getElementById("form_email").value;
    
    alert(" Dog Username : "+dogUser+"\n Dog's Name : "+dogName+"\n Email : "+dogEmail+"\n Dog's Date Of Birth : "+dogDate+"\n  Form Submitted Successfully......");
    }
    
    