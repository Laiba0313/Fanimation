function validation()
{
    var name = document.getElementById('uname').value;
    var email = document.getElementById('uemail').value;
    var contactNum = document.getElementById('num').value;
    var Message = document.getElementById('mesg').value;

    var nameCheck = /^[a-zA-Z].{3,20}$/;
    var emailCheck = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    var numCheck = /^(\+92|0)[0-9]{10}$/;
    var MessageCheak = /^[a-zA-Z].{3,20}$/;

    // Name 

    if(nameCheck.test(name))
    {
        document.getElementById('nameError').innerHTML = "";
    }
    else
    {
        document.getElementById('nameError').innerHTML = "Invalid Username";
        return false;
    }

    // Email 

    if(emailCheck.test(email))
    {
        document.getElementById('emailError').innerHTML = "";
    }
    else
    {
        document.getElementById('emailError').innerHTML = "Invalid Useremail";
        return false;
    }
// contact 

    if(numCheck.test(contactNum))
    {
        document.getElementById('numError').innerHTML = "";
    }
    else
    {
        document.getElementById('numError').innerHTML = "Invalid Contactnum";
        return false;
    }
    // Message 
    if(MessageCheak.test(Message))
    {
        document.getElementById('MessageError').innerHTML = "";
    }
    else
    {
        document.getElementById('MessageError').innerHTML = "Invalid Message";
        return false;
    }

    if (nameCheck.test(name) && emailCheck.test(email)  && numCheck.test(contactNum) && MessageCheak.test(Message) &&
    name != "" && email != "" && contactNum != "" && Message != "") 
    {
       if (('localStorage' in window)) {
           alert("Local Storage Is Available");
           localStorage.setItem("UserName", name);
           localStorage.setItem("UserEmail", email);
           localStorage.setItem("ContactNum", contactNum);
           localStorage.setItem("Msg", Message);
       }
       else {
           alert("Local Storage Is Not Available..");
       }
       alert("Successfully Registered..");
   }
   else {
       alert("Invalid Attempt..");
   }

}

function clean()
{
    localStorage.clear();
}