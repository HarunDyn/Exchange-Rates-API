const amount = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");
const outputFirst = document.getElementById("outputFirst");
const outputSecond = document.getElementById("outputSecond");
const outputResult = document.getElementById("outputResult");



// Events

firstCurrency.addEventListener("change", changeFirstCurrency);

secondCurrency.addEventListener("change", changeSecondCurrency);

amount.addEventListener("input", convertMoney)



// Functions

function changeFirstCurrency() {
    outputFirst.innerText = firstCurrency.value;

}


function changeSecondCurrency() {
    outputSecond.innerText = secondCurrency.value;

}

function convertMoney() {
    getExchangeRatesFromAPI().then(response => {
        let total = Number(amount.value) * response;
        outputResult.setAttribute("placeholder", total);
    }).catch(error => alert("Hata oluştu, Geçerli para birimi giriniz"));
}




// getExchangeRatesFromAPI


async function getExchangeRatesFromAPI() {
    let response = await fetch(`https://api.vatcomply.com/rates?base=${firstCurrency.value}`)
    let data = await response.json();
    return data.rates[secondCurrency.value];
}