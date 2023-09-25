// JavaScript source code

function validateForm() {
    
    makeSubmenu(value);
    
    var fn = document.forms["registration"]["firstname"].value;
    var ln = document.forms["registration"]["lastname"].value;
    var dob = document.forms["registration"]["birthday"].value;
    var age = document.forms["registration"]["age"].value;
    var gender = document.forms["registration"]["g"].value;
    var phn = document.forms["registration"]["phn"].value;
    var email = document.forms["registration"]["email"].value;
    var add = document.forms["registration"]["add"].value;
    var usern = document.forms["registration"]["username"].value;
    var pass = document.forms["registration"]["password"].value;
    
    var cpass = document.forms["registration"]["cpassword"].value;
    var state = document.forms["registration"]["c_state"].value;
    var city = document.forms["registration"]["city"].value;
    if (fn == "")
        {
        alert("Firstname cannot be blank");
        return false;
    }
        if (ln == "")
        {
        alert("Lastname cannot be blank");
        return false;
    }

        if (dob == "")
        {
        alert("Dob cannot be blank");
        return false;
    }

        if (age == "")
        {
        alert("Age cannot be blank");
        return false;
    }
        if (gender == "")
        {
        alert("Choose a gender");
        return false;
    }
        if (phn == "")
        {
        alert("Phonenumber cannot be blank");
        return false;
    }
        if (phn.length < 10)
        {
        alert("Mobile number cannot be less than 10 digits");
        return false;
    }

        if (email == "")
        {
        alert("Email cannot be blank");
        return false;
    }
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
        if (atpos < 1 || (dotpos - atpos < 2))
        {
        alert("Please enter correct email ID");
        document.registration.email.focus();
        return false;
    }
        if (add == "")
        {
        alert("Address cannot be blank");
        return false;
    }
    
        if (usern == "")
        {
        alert("username cannot be blank");
        return false;
    }
        if (usern.length < 6)
        {
        alert("username must be at least of 6 characters.");
        document.registration.usern.focus();
        return false;

    }
    if ((usern >= 65 && username <= 90) || usern >= 97 && username <= 122)
        return true;
    else
    {
        alert("username can contain only letters.");
        document.registration.usern.focus();
        return false;
    }
        if (pass == "")
        {
        alert("password cannot be blank");
        return false;
    }
        if (cpass == "")
        {
        alert("Enter the same password");
        return false;
    }
        if (pass != cpass)
        {
        alert("Password mismatch");
        return false;
    }

        if (pass.length < 8)
        {
        alert("password must contain at least of 8 digits");
        document.registration.pass.focus();
        return false;
    }

}

