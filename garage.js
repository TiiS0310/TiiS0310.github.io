var carinfo = [
    {
        "make": "",
        "model": "",
        "regnum": "",
        "faultno": "",
        "typeofservice": "",
        "bill" : ""


    },
]

function content(carinfo){
    for (let i = 0; i < carinfo.length; i++){
        for(let carData in carinfo[i]){
            let H1 = document.createElement('h3')
            H1.setAttribute("id", "parag")
            H1.textContent = carinfo[i][carData];
            document.getElementsByTagName('body')[0].appendChild(H1);
        }
    }
}
/* 
   function deletecontent(carinfo){
        for (let i = 0; i < carinfo.length; i++){
            for(let carData in carinfo[i]){
                let parent = document.getElementById('content')
                let child = document.getElementById("checko")
                H5.textContent = carinfo[i][carData];
               parent.removeChild(child);
    }
        }
    } */

function checkin(carinfo){
var newcarinfo = {
    "make" : document.getElementById("carmake").value,
    "model" : document.getElementById("carmodel").value,
    "regnum" : document.getElementById("carreg").value,
    "faultno": document.getElementById("faultno").value,
    "typeofservice": document.getElementById("typeofservice").value,
}

carinfo.push(newcarinfo);
document.getElementById("carmake").value = "";
document.getElementById("carmodel").value = "";
document.getElementById("carreg").value = "";
document.getElementById("faultno").value = "";
document.getElementById("typeofservice").value = "";
document.getElementById("totalcost").value = "";
}

function checkout(carinfo){
    for (let j = 0; j< carinfo.length; j ++){
        if (carinfo[j].regnum == document.getElementById("carreg").value){
            carinfo.splice(j,1);
        
        
        }
    }
}

/* function calculatebill(carinfo){
    var calcbill
    for (let i = 0; i < carinfo.length; i++) {
     if (carinfo[i].reg_no === document.getElementById('carreg').value){
    if (carinfo[i].faultno == 0){
        calcbill = 'No Bill! There are no faults.'
    }
    else {
        calcbill = carinfo[i].faultno * 50;
    }
    document.getElementById("bill").innerHTML = carinfo[i][carData];
    document.getElementById("bill").innerHTML = "The total bill is : " + calcbill; 
}
    }
} */