import {LOAD_ALL_PRODUCTS, LOAD_ALL_PRODUCTS_ERROR} from '../type';

const initial_state = {
    products: [],
}

 const productReducer = (state = initial_state, action) => {
    switch (action.type) {
        case LOAD_ALL_PRODUCTS:            
            return {
                ...state,
                products: [...action.payload],
            }
        case LOAD_ALL_PRODUCTS_ERROR:
            return {
                error: action.payload
            }   
        default: return state;
    }

}

export default productReducer;