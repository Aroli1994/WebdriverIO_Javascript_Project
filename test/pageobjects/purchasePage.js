class PurchasePage {
    get country() {
        return $("#country")
    }
    get loadSearchCountry() {
        return $(".lds-ellipsis")
    }
    get countryName() {
        return $("=India")
    }
    get purchase() {
        return $("[value='Purchase']")
    }
    get success_message() {
        return $(".alert-success")
    }
}

export default new PurchasePage()