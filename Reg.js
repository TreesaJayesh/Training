const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const dob = document.getElementById('dob');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const phno = document.getElementById('phno');
const email = document.getElementById('email');
const address = document.getElementById('address');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const citiesByState = {
    AndhraPradesh: ["Hyderabad", "Visakhapatnam"],
    ArunachalPradesh: ["Itanagar", "Tawang"],
    Assam: ["Dispur", "Guwahati"],
    Bihar: ["Patna", "Gaya"],
    Chhattisgarh: ["Raipur", "Bilaspur"],
    Goa: ["Panaji", "Vasco-da-Gama"],
    Gujarat: ["Gandhinagar", "Ahmedabad"],
    Haryana: ["Chandigarh", "Faridabad"],
    HimachalPradesh: ["Shimla", "Dharamshala"],
    Jharkhand: ["Ranchi", "Jamshedpur"],
    Karnataka: ["Bengaluru", "Mysore"],
    Kerala: ["Thiruvananthapuram", "Kochi"],
    MadhyaPradesh: ["Bhopal", "Indore"],
    Maharashtra: ["Mumbai", "Pune"],
    Manipur: ["Imphal", "Bishnupur"],
    Meghalaya: ["Shillong", "Cherrapunji"],
    Mizoram: ["Aizawl", "Serchhip"],
    Nagaland: ["Kohima", "Tuensang"],
    Odisha: ["Bhubaneswar", "Rourkela"],
    Punjab: ["Chandigarh", "Amritsar"],
    Rajasthan: ["Jaipur", "Bikaner"],
    Sikkim: ["Gangtok", "Namchi"],
    TamilNadu: ["Chennai", "Tiruchirappalli"],
    Telangana: ["Hyderabad", "Warangal"],
    Tripura: ["Agartala", "Amarpur"],
    UttarPradesh: ["Lucknow", "Noida"],
    Uttarakhand: ["Dehradun", "Roorkee"],
    WestBengal: ["Kolkata", "Darjeeling"]
};
function makeSubmenu(value) {
    if (value.length == 0) document.getElementById("city").innerHTML = "<option></option>";
    else {
        var citiesOptions = "";
        for (cityId in citiesByState[value])
        {
            citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
        }
        document.getElementById("city").innerHTML = citiesOptions;
    }
}



const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const dobValue = dob.value;
    const ageValue = age.value.trim();
    const genderValue = gender.value;
    const phnoValue = phno.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();   
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (firstnameValue === '') {
        setError(firstname, 'Firstname is required');
    } else {
        setSuccess(firstname);
    }
  if (lastnameValue === '') {
        setError(lastname, 'Lastname is required');
    } else {
        setSuccess(lastname);
    }
    if (dobValue === '') {
        setError(dob, 'Date of Birth is required');
    } else {
        setSuccess(dob);
    }
     if (ageValue === '') {
        setError(age, 'Age is required');
    } else {
        setSuccess(age);
    }
    if (genderValue === '') {
        setError(gender, 'Gender is required');
    } else {
        setSuccess(gender);
    }
   if (phnoValue === '') {
        setError(phno, 'Phone Number is required');
    } else {
        setSuccess(phno);
    }
    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
   if (addressValue === '') {
            setError(address, 'Address is required');
     } else {
            setSuccess(address);
     }
        
       if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
