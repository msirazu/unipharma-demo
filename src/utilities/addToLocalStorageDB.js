const getFromLocalStorage = () => {
    let storedCartProducts = localStorage.getItem('unipharmaCart');
    if (storedCartProducts) {
       storedCartProducts = JSON.parse(storedCartProducts);
    } else {
        storedCartProducts = [];
    }
    return storedCartProducts;
}

const saveToLocalStorageDB = (id) => {
    const storedCartProducts = getFromLocalStorage();
    
    if (storedCartProducts.includes(id)) {
        return false;
    }

    storedCartProducts.push(id);
    const data = JSON.stringify(storedCartProducts);
    localStorage.setItem('unipharmaCart', data);
    return true;
}

const removeFromLocalStorage = (id) => {
    const storedCartProducts = getFromLocalStorage();
    const updatedCart = storedCartProducts.filter(itemId => itemId !== id);
    const data = JSON.stringify(updatedCart);
    localStorage.setItem('unipharmaCart', data);
    return updatedCart;
}

export {saveToLocalStorageDB, getFromLocalStorage, removeFromLocalStorage};