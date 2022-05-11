import {MODIFY_CART} from "../type";


export const addToCart = (cart, newProduct) => dispatch => {
    console.log(cart);
    console.log(newProduct);
    let index = cart.findIndex((cartIndex) => cartIndex.id === newProduct.id);

    if(index === -1){
        newProduct.quantity = 1;
        // cart.push(newProduct);
        cart = [...cart, newProduct];
    } else {
        cart[index].quantity += 1;
    }

    return dispatch({
        type: MODIFY_CART,
        payload: cart,
    })

}

export const deleteProductFromCart = (cart, productToDelete) => dispatch => {

    const newCart = cart.filter((filteredItem) => filteredItem.id !== productToDelete.id);

    return dispatch({
        type: MODIFY_CART,
        payload: newCart,
    })

}