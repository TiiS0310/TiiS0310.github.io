let person;
let string1 = "He said \"My Name is Tahira";

function square2() {
    let a = document.getElementById("textbox1").value;
    let b = a * a;
    document.getElementById("square").innerHTML = b;

}

function output() {
    let a = parseInt(document.getElementById("FirstNum").value);
    let b = parseInt(document.getElementById("SecondNum").value);
    let c = parseInt(document.getElementById("ThirdNum").value);
    let d = a + b + c;
    document.getElementById("result").innerHTML = d;

}

window.onload = function () {
    person = {
        name: "Tahira",
        age: 25,
        occupation: "Student"
    }
};

function printperson(person) {
    document.getElementById("name").innerHTML = person.name;
    document.getElementById("age").innerHTML = person.age;
    document.getElementById("occupation").innerHTML = person.occupation;

}

function newperson(person) {
    person.name = (document.getElementById("newname").value);
    person.age = (document.getElementById("newage").value);
    person.occupation = (document.getElementById("newoccupation").value);

}

function changeage(person) {

    let a = person.age;
    newage = a + 1;
    person.age = newage;
    document.getElementById("changeage").innerHTML = newage;

}

function outputstring() {
    document.getElementById("sentence").innerHTML = string1;

}

function stringtoupper() {
    document.getElementById("sentence1").innerHTML = string1.toUpperCase();
}


function strings2() {
    let a = "Hello";
    let b = 5;
    document.getElementById("numandstring").innerHTML = a + " " + b;
}


function array1() {
    let name = [" hello ", " world ", " ..."]
    document.getElementById("array1").innerHTML = name;
    delete name.splice(2, 2);
    document.getElementById("array1").innerHTML = name;
}

function conditionals(person) {
    let pAge = person.age;
    if (person.age >= 20 && person.age <= 40) {
        document.getElementById("conditionals1").innerHTML = "true";
    } else {
        document.getElementById("conditionals1").innerHTML = "false";
    }
}

function iteration1() {
    for (let i = 0; i < 11; i++) {
        // document.getElementById("iteration").innerHTML = document.getElementById("iteration").innerHTML + " " + i;
        if (i % 2 == 0) {
            document.getElementById("iteration2").innerHTML += " " + i;

        }
    }

}

function iteration3() {
    for (let i = 0; i <= 100; i++) {
        document.getElementById("divthree").innerHTML += " " + i;
        if (i % 3 == 0) {
            document.getElementById("divthree").innerHTML += "\n " + "Fizz";
        }
        if (i % 5 == 0) {
            document.getElementById("divthree").innerHTML += " " + " Buzz";
        }
    }
    if (i % 3 == 0 && i % 5 == 0) {
        document.getElementById("divthree").innerHTML += " " + " FizzBuzz";

    }
}

function iteration4() {
    let count = 0;
    let num = 0;
    num = parseInt(document.getElementById("number4").value);
    document.getElementById("number").innerHTML = num;
    for (; num >= 1;) {
        if (num % 3 == 0) {
            num = num / 3;
            document.getElementById("number").innerHTML += "</br>" + num;
        } else if ((num + 1) % 3 == 0) {
            num = num + 1;
            num = num / 3;
            document.getElementById("number").innerHTML += "</br>" + num;
        } else if ((num - 1) % 3 == 0) {

            num = num - 1;
            num = num / 3;
            document.getElementById("number").innerHTML += "</br>" + num;
        }
        count++;
    }
    document.getElementById("number2").innerHTML += count;
}

function triples() {
    let count = 0;
    let str = document.getElementById("str").value;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == str.charAt(i + 1) && (str.charAt(i + 1) == str.charAt(i + 2))) {
            count = count + 1
        }
    }
    document.getElementById("triples").innerHTML += " " + count;

}

function dom1() {
    let para = document.createElement("p");
    para.setAttribute("id", "dom1");
    let add = document.createTextNode("Hello");
    para.appendChild(add);
    let element = document.getElementById("dom");
    element.appendChild(para);
}

function dom2() {
    document.getElementById("dom1").innerHTML = document.getElementById("newtext").value;

}

function dom3() {
    let parent = document.getElementById("dom");
    let child = document.getElementById("dom1");
    parent.removeChild(child);
}

function json1() {
    let requestURL = 'https://raw.githubusercontent.com/ewomackqa/JSONDataRepo/master/example.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function () {
        let requestData = request.response;
        for (let object in requestData) {
            if (Array.isArray(requestData[object])) {
                for (let i = 0; i < requestData[object].length; i++) {
                    for (let mem in requestData[object][i]) {
                        if (Array.isArray(requestData[object][i][mem])) {
                            for (let j = 0; j < requestData[object][i][mem].length; j++) {
                                let H2 = document.createElement('h3')
                                H2.textContent = object + ": " + requestData[object][i][mem][j];
                                document.getElementsByTagName('body')[0].appendChild(H2);
                            }
                        } else {
                            let H3 = document.createElement('h3')
                            H3.textContent = mem + ": " + requestData[object][i][mem];
                            document.getElementsByTagName('body')[0].appendChild(H3);
                        }
                    }
                }
            } else {
                let H1 = document.createElement('h3')
                H1.textContent = requestData[object];
                document.getElementsByTagName('body')[0].appendChild(H1);
            }
        }
    }
}

function json2() {
    let requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function () {
        let kingDataSearch = request.response;
        let search = document.getElementById("search").value;
        for (let i = 0; i < kingDataSearch.length; i++) {
            for (let Data in kingDataSearch[i]) {
                let info = kingDataSearch[i][Data];
                if (info.toLowerCase().includes(search.toLowerCase())) {
                    for (let Data2 in kingDataSearch[i]) {
                        let H5 = document.createElement('h3')
                        H5.textContent = kingDataSearch[i][Data2];
                        document.getElementsByTagName('body')[0].appendChild(H5);
                    }
                }
            }

        }

    }
}

