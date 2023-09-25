// JavaScript source code
function makeSubmenu(value) {
    var citiesByState = {
        Andhra_Pradesh: ["Hyderabad", "Visakhapatnam"],
        Arunachal_Pradesh: ["Itanagar", "Tawang"],
        Assam: ["Dispur", "Guwahati"],
        Bihar: ["Patna", "Gaya"],
        Chhattisgarh: ["Raipur", "Bilaspur"],
        Goa: ["Panaji", "Vasco-da-Gama"],
        Gujarat: ["Gandhinagar", "Ahmedabad"],
        Haryana: ["Chandigarh", "Faridabad"],
        Himachal_Pradesh: ["Shimla", "Dharamshala"],
        Jharkhand: ["Ranchi", "Jamshedpur"],
        Karnataka: ["Bengaluru", "Mysore"],
        Kerala: ["Thiruvananthapuram", "Kochi"],
        Madhya_Pradesh: ["Bhopal", "Indore"],
        Maharashtra: ["Mumbai", "Pune"],
        Manipur: ["Imphal", "Bishnupur"],
        Meghalaya: ["Shillong", "Cherrapunji"],
        Mizoram: ["Aizawl", "Serchhip"],
        Nagaland: ["Kohima", "Tuensang"],
        Odisha: ["Bhubaneswar", "Rourkela"],
        Punjab: ["Chandigarh", "Amritsar"],
        Rajasthan: ["Jaipur", "Bikaner"],
        Sikkim: ["Gangtok", "Namchi"],
        Tamil_Nadu: ["Chennai", "Tiruchirappalli"],
        Telangana: ["Hyderabad", "Warangal"],
        Tripura: ["Agartala", "Amarpur"],
        Uttar_Pradesh: ["Lucknow", "Noida"],
        Uttarakhand: ["Dehradun", "Roorkee"],
        West_Bengal: ["Kolkata", "Darjeeling"]
    }

    if (value.length == 0)
        document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
        var citiesOptions = "";
        for (cityId in citiesByState[value]) {
            citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
        }
        document.getElementById("citySelect").innerHTML = citiesOptions;
    }
    //}
    function displaySelected() {
        var country = document.getElementById("stateSelect").value;
        var city = document.getElementById("citySelect").value;
        alert(country + "\n" + city);
    }
    function resetSelection() {
        document.getElementById("stateSelect").selectedIndex = 0;
        document.getElementById("citySelect").selectedIndex = 0;
    }
}