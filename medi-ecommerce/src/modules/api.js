export const domain = "http://localhost:8000/api/v1/";

export const Api = {
    getProductList(){
        return fetch(`${domain}products`, {
            method: 'GET',
        })
    },
    postToError(data){
        return fetch(`https://httpbin.org/status/400`, {
            method: 'post',
            body: data
        })
    }
}