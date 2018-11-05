var mapLatest = {};
var mapCurrencies = {};
var tasaActual;

function getLatest() {
    axios.get('https://nzyuo0jri6.execute-api.us-east-1.amazonaws.com/prod/latest').then(function (response) {
        for (i in response.data["rates"]) {
            mapLatest[i] = response.data["rates"][i];
        }
        setMessageStatus(response.status + " " + response.statusText);
        setTasaActual();
    }).catch(function (error) {
        console.log(error);
    }).then(function () {
        setMessageStatus(response.status + " " + response.statusText);
    });
}

function getCurrents() {
    axios.get('https://nzyuo0jri6.execute-api.us-east-1.amazonaws.com/prod/currencies').then(function (response) {
        var base = document.getElementById("SelectBase");
        var cotizada = document.getElementById("SelectCotizada");
        for (i in response.data) {
            mapCurrencies[i] = response.data[i];
            var option = document.createElement("option");
            var option2 = document.createElement("option");
            option.text = response.data[i];
            option2.text = response.data[i];
            if (i == "USD") {
                option.setAttribute("selected", "selected")
            }
            if (i == "COP") {
                option2.setAttribute("selected", "selected")
            }
            base.add(option);
            cotizada.add(option2);
        }
        setMessageStatus(response.status + " " + response.statusText);
    }).catch(function (error) {
        console.log(error);
    }).then(function () {
        setMessageStatus(response.status + " " + response.statusText);
    });
}

function setValor(num, id1, id2) {
    console.log(num);
    var num = parseInt(num);
    if (!isNaN(num)) {
        console.log(num);
        if (id1 == "InputBase") {
            console.log("cambia cotizada");
            document.getElementById(id2).value = (num * tasaActual).toFixed(4);
        } else {
            console.log("cambia base");
            document.getElementById(id2).value = (num / tasaActual).toFixed(4);
        }
    } else {
        console.log("error");
        document.getElementById(id1).setAttribute("value", 0);
        document.getElementById(id2).setAttribute("value", 0);
    }
}

function setTasaActual() {
    var base;
    var cotizada;
    var selectBase = document.getElementById("SelectBase");
    var valueIdBase = selectBase.options[selectBase.selectedIndex].value;
    var selectCotizada = document.getElementById("SelectCotizada");
    var valueIdCotizada = selectCotizada.options[selectCotizada.selectedIndex].value;
    for (i in mapCurrencies) {
        if (mapCurrencies[i] == valueIdBase) {
            base = mapLatest[i];
        }
        if (mapCurrencies[i] == valueIdCotizada) {
            cotizada = mapLatest[i];
        }
    }
    tasaActual = cotizada / base;
    var alert = document.getElementById("Tasa");
    alert.innerHTML = "1 " + valueIdBase + " equals " + tasaActual + " " + valueIdCotizada;
}

function setMessageStatus(message) {
    var alert = document.getElementById("Status");
    alert.innerHTML = "Http status: " + message;
}

function main() {
    getCurrents();
    getLatest();
}
