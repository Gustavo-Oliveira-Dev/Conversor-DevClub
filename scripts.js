const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const selectCurrency = document.querySelector(".select-only")


function convertValues() {

    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const real = 1.0
    const dolarToday = 5.48
    const euroToday = 6.43
    const libraToday = 7.52
    const francoToday = 6.87
    const yuanToday = 0.76
    const ieneToday = 0.038



    if (selectCurrency.value == "real")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    if (selectCurrency.value == "dolar")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    if (selectCurrency.value == "euro")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    if (selectCurrency.value == "libra")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    if (selectCurrency.value == "franco")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("SRf", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue)

    if (selectCurrency.value == "yuan")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("zh-Hans", {
            style: "currency",
            currency: "CNY"
        }).format(inputCurrencyValue)

    if (selectCurrency.value == "iene")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)





    if (currencySelect.value == "real")
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / real)


    if (currencySelect.value == "dolar")
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    if (currencySelect.value == "euro")
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    if (currencySelect.value == "libra")
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    if (currencySelect.value == "franco")
        currencyValueConverted.innerHTML = new Intl.NumberFormat("SFr", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue / francoToday)


    if (currencySelect.value == "yuan")
        currencyValueConverted.innerHTML = new Intl.NumberFormat("zh-Hans", {
            style: "currency",
            currency: "CNY"
        }).format(inputCurrencyValue / yuanToday)

    if (currencySelect.value == "iene")
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)

}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("flag")
    const currencyImgIn = document.getElementById("flago")
    const currencyNameIn = document.getElementById("name-only")



    if (selectCurrency.value == "real") {
        currencyNameIn.innerHTML = "Real"
        currencyImgIn.src = "./assets/real.png"
    }
    if (selectCurrency.value == "dolar") {
        currencyNameIn.innerHTML = "Dólar americano"
        currencyImgIn.src = "./assets/dolar.png"
    }
    if (selectCurrency.value == "euro") {
        currencyNameIn.innerHTML = "Euro"
        currencyImgIn.src = "./assets/euro.png"
    }
    if (selectCurrency.value == "libra") {
        currencyNameIn.innerHTML = "Libra"
        currencyImgIn.src = "./assets/libra.png"
    }

    if (selectCurrency.value == "franco") {
        currencyNameIn.innerHTML = "Franco suiço"
        currencyImgIn.src = "./assets/suica1.png"
    }

    if (selectCurrency.value == "yuan") {
        currencyNameIn.innerHTML = "Yuan"
        currencyImgIn.src = "./assets/china.png"
    }

    if (selectCurrency.value == "iene") {
        currencyNameIn.innerHTML = "Iene"
        currencyImgIn.src = "./assets/jp.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"

    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }
    if (currencySelect.value == "franco") {
        currencyName.innerHTML = "Franco suíço"
        currencyImg.src = "./assets/suica.png"
    }

    if (currencySelect.value == "yuan") {
        currencyName.innerHTML = "Yuan chinês"
        currencyImg.src = "./assets/china.png"
    }

    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene"
        currencyImg.src = "./assets/jp.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


