export const domain = "http://localhost:8000/api/v1/";

export const Api = {
    populateData(){
        return fetch(`${domain}data`, {
            method: 'GET',
        })
    },
    getProductList(){
        return fetch(`${domain}products`, {
            method: 'GET',
        })
    },
    getProductDetail(id){
        return fetch(`${domain}products/${id}/details`, {
            method: 'GET',
        })
    },
    submitPurchase(id, orderObject){
        return fetch(`${domain}products/${id}/purchase`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderObject)
        })
    }
}