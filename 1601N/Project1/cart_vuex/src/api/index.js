export const getProductList = ()=>{
    // let res = await fetch('src/json/data.json');
    // let body = await res.json();
    // return body;

    return fetch('src/json/data.json');
}