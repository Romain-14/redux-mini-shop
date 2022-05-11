import {LOAD_ALL_PRODUCTS, LOAD_ALL_PRODUCTS_ERROR} from '../type';

export const loadAllProducts = () => async dispatch => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');
        const resJSON = await res.json();
        return dispatch({
            type: LOAD_ALL_PRODUCTS,
            payload: resJSON,
        })        
    } catch (error) {
        console.log('error-----');
        return dispatch({
            type: LOAD_ALL_PRODUCTS_ERROR,
            payload: {msg: "probleme de récupération des produits dans la base de données"}
        })
    }
}