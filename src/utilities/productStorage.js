const getProductDataFromLocalStorage = () => {
    let savedProductData = localStorage.getItem('unipharmaProducts');
    if (savedProductData) {
        savedProductData = JSON.parse(savedProductData);
    } else {
        savedProductData = [];
    }
    return savedProductData;
}

const saveProductDataToLocalStorage = (product) => {
    const storedProductData = getProductDataFromLocalStorage();
    console.log(storedProductData)
    storedProductData.push(product);
    const data = JSON.stringify(storedProductData);
    localStorage.setItem('unipharmaProducts', data);
}

export {getProductDataFromLocalStorage, saveProductDataToLocalStorage};