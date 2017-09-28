var carinfo = [
    {
        "make": "",
        "model": "",
        "regnum": "",
        "faultno": "",
        "typeofservice": ""


    },
]

function content(carinfo){
    for (let i = 0; i < carinfo.length; i++){
        for(let carData in carinfo[i]){
            let H5 = document.createElement('P');
             H5.setAttribute("id", "checko");
            let add = document.createTextNode(carinfo[i][carData])
            H5.appendChild(add);
            let element = document.getElementById("checko");
            element.appendChild(H5);
        }
    }
}

   function deletecontent(carinfo){
        for (let i = 0; i < carinfo.length; i++){
            for(let carData in carinfo[i]){
                let parent = document.getElementById('content')
                let child = document.getElementById("checko")
                H5.textContent = carinfo[i][carData];
               parent.removeChild(child);
    }
        }
    }



function checkin(carinfo){
var newcarinfo = {
    "make" : document.getElementById("carmake").value,
    "model" : document.getElementById("carmodel").value,
    "regnum" : document.getElementById("carreg").value,
    "faultno": document.getElementById("faultno").value,
    "typeofservice": document.getElementById("typeofservice").value
}

carinfo.push(newcarinfo);
document.getElementById("carmake").value = "";
document.getElementById("carmodel").value = "";
document.getElementById("carreg").value = "";
document.getElementById("faultno").value = "";
document.getElementById("typeofservice").value = "";
}

function checkout(carinfo){
    for (let j = 0; j< carinfo.length; j ++){
        if (carinfo[j].regnum == document.getElementById("carreg").value){
            carinfo.splice(j,1);
        }
    }
}

