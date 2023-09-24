// JavaScript source code

function validateForm() {


    var fn = document.forms["registration"]["firstname"].value;
    var ln = document.forms["registration"]["lastname"].value;
    var dob = document.forms["registration"]["birthday"].value;
    var age = document.forms["registration"]["age"].value;
    var gender = document.forms["registration"]["g"].value;
    var phn = document.forms["registration"]["phn"].value;
    var email = document.forms["registration"]["email"].value;
    var add = document.forms["registration"]["add"].value;
    var state = document.forms["registration"]["c_state"].value;
    //var city = document.forms["registration"]["city"].value;
    var usern = document.forms["registration"]["username"].value;
    var pass = document.forms["registration"]["password"].value;
    var cpass = document.forms["registration"]["cpassword"].value;


    if (fn == "") {
        alert("Firstname cannot be blank");
        return false;
    }
    if (ln == "") {
        alert("Lastname cannot be blank");
        return false;
    }

    if (dob == "") {
        alert("Dob cannot be blank");
        return false;
    }

    if (age == "") {
        alert("Age cannot be blank");
        return false;
    }
    if (gender == "") {
        alert("Choose a gender");
        return false;
    }
    if (phn == "") {
        alert("Phonenumber cannot be blank");
        return false;
    }
    if (phn.length < 10) {
        alert("Mobile number cannot be less than 10 digits");
        return false;
    }

    if (email == "") {
        alert("Email cannot be blank");
        return false;
    }
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID");
        document.registration.email.focus();
        return false;
    }
    if (add == "") {
        alert("Address cannot be blank");
        return false;
    }
    if (state == "") {
        alert("Choose the state");
        return false;
    }

    //if (city == "") {
      //  alert("choose the city");
       // return false;
    //}
    if (usern == "") {
        alert("username cannot be blank");
        return false;
    }
    if (usern.length < 6) {
        alert("username must be at least of 6 characters.");
        document.registration.usern.focus();
        return false;

    }
    if ((usern >= 65 && username <= 90) || usern >= 97 && username <= 122)
        return true;
    else {
        alert("username can contain only letters.");
        document.registration.usern.focus();
        return false;
    }
    if (pass == "") {
        alert("password cannot be blank");
        return false;
    }
    if (cpass == "") {
        alert("Enter the same password");
        return false;
    }
    if (pass != cpass) {
        alert("Password mismatch");
        return false;
    }

    if (pass.length < 8) {
        alert("password must contain at least of 8 digits");
        document.registration.pass.focus();
        return false;
    }

}

/*

    var stateData = [
        { StateName: 'Andhra Pradesh', StateId: '1' },
        { StateName: 'Arunachal Pradesh', StateId: '2' },
        { StateName: 'Assam', StateId: '3' },
        { StateName: 'Bihar', StateId: '4' },
        { StateName: 'Chhattisgarh', StateId: '5' },
        { StateName: 'Goa', StateId: '6' },
        { StateName: 'Gujarat', StateId: '7' },
        { StateName: 'Haryana', StateId: '8' },
        { StateName: 'Himachal Pradesh', StateId: '9' },
        { StateName: 'Jharkhand', StateId: '10' },
        { StateName: 'Karnataka', StateId: '11' },
        { StateName: 'Kerala', StateId: '12' },
        { StateName: 'Madhya Pradesh', StateId: '13' },
        { StateName: 'Maharashtra', StateId: '14' },
        { StateName: 'Manipur', StateId: '15' },
        { StateName: 'Meghalaya', StateId: '16' },
        { StateName: 'Mizoram', StateId: '17' },
        { StateName: 'Nagaland', StateId: '18' },
        { StateName: 'Odisha', StateId: '19' },
        { StateName: 'Punjab', StateId: '20' },
        { StateName: 'Rajasthan', StateId: '21' },
        { StateName: 'Sikkim', StateId: '22' },
        { StateName: 'Tamil Nadu', StateId: '23' },
        { StateName: 'Telangana', StateId: '24' },
        { StateName: 'Tripura', StateId: '25' },
        { StateName: 'Uttar Pradesh', StateId: '26' },
        { StateName: 'Uttarakhand', StateId: '27' },
        { StateName: 'West Bengal', StateId: '28' }
    ];
    //define the state DropDownList data
    var cityData = [
        { CityName: 'New York', StateId: '1', CityId: '101' },
        { CityName: 'Virginia ', StateId: '2', CityId: '102' },
        { CityName: 'Tasmania ', StateId: '3', CityId: '103' },
        { CityName: 'New York', StateId: '4', CityId: '104' },
        { CityName: 'Virginia ', StateId: '5', CityId: '105' },
        { CityName: 'Tasmania ', StateId: '6', CityId: '106' },
        { CityName: 'New York', StateId: '7', CityId: '107' },
        { CityName: 'Virginia ', StateId: '8', CityId: '108' },
        { CityName: 'Tasmania ', StateId: '9', CityId: '109' },
        { CityName: 'New York', StateId: '10', CityId: '110' },
        { CityName: 'Virginia ', StateId: '11', CityId: '111' },
        { CityName: 'Tasmania ', StateId: '12', CityId: '112' },
        { CityName: 'New York', StateId: '13', CityId: '113' },
        { CityName: 'Virginia ', StateId: '14', CityId: '114' },
        { CityName: 'Tasmania ', StateId: '15', CityId: '115' },
        { CityName: 'New York', StateId: '16', CityId: '116' },
        { CityName: 'Virginia ', StateId: '17', CityId: '117' },
        { CityName: 'Tasmania ', StateId: '18', CityId: '118' },
        { CityName: 'New York', StateId: '19', CityId: '119' },
        { CityName: 'Virginia ', StateId: '20', CityId: '120' },
        { CityName: 'New York', StateId: '21', CityId: '121' },
        { CityName: 'Virginia ', StateId: '22', CityId: '122' },
        { CityName: 'New York', StateId: '23', CityId: '123' },
        { CityName: 'Virginia ', StateId: '24', CityId: '124' },
        { CityName: 'New York', StateId: '25', CityId: '125' },
        { CityName: 'Virginia ', StateId: '26', CityId: '126' },
        { CityName: 'New York', StateId: '27', CityId: '127' },
        { CityName: 'Virginia ', StateId: '28', CityId: '128' }

    ];





    
            
   

    /*
        var statecityinfo = {
    "": ["Hyderabad", "Visakhapatnam"],
    "": ["Itanagar", "Tawang"],
    "": ["Dispur", "Guwahati"],
    "": ["Patna", "Gaya"],
    "": ["Raipur", "Bilaspur"],
    "": ["Panaji", "Vasco-da-Gama"],
    "": ["Gandhinagar", "Ahmedabad"],
    "": ["Chandigarh", "Faridabad"],
    "": ["Shimla", "Dharamshala"],
    "": ["Ranchi", "Jamshedpur"],
    "": ["Bengaluru", "Mysore"],
    "": ["Thiruvananthapuram", "Kochi"],
    "": ["Bhopal", "Indore"],
    "": ["Mumbai", "	Pune"],
    "": ["Imphal", "Bishnupur"],
    "": ["Shillong", "Cherrapunji"],
    "": ["Aizawl", "Serchhip"],
    "": ["Kohima", "Tuensang"],
    "": ["	Bhubaneswar", "Rourkela"],
    "": ["Chandigarh", "Amritsar"],
    "": ["Jaipur", "Bikaner"],
    "": ["Gangtok", "	Namchi"],
    "": ["Chennai", "Tiruchirappalli"],
    "": ["Hyderabad", "Warangal"],
    "": ["Agartala", "Amarpur"],
    "": ["Lucknow", "Noida"],
    "": ["Dehradun", "Roorkee"],
    "": ["Kolkata", "Darjeeling"]
};*/
