import {MODIFY_CART} from "../type";

const initial_state = {
    cart: [],
};

const cartReducer = (state = initial_state, action) => {
    switch (action.type) {
        case MODIFY_CART:
            return { ...state, cart: action.payload };

        default:
            return state;
    }
};

export default cartReducer;
