import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllProducts } from "../../redux/actions/product";
import { addToCart } from "../../redux/actions/cart";


function Home() {
    const dispatch = useDispatch();
    const { products, error, cart } = useSelector((state) => ({
        ...state.products,
        ...state.cart,
    }));
    
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);

    useEffect(() => {
        dispatch(loadAllProducts());
    }, []);

    const prevPage = () => {
        if (min === 0) {
            setMin(products.length - 10);
            setMax(products.length);
        } else {
            setMin(min - 10);
            setMax(max - 10);
        }
    };

    const nextPage = () => {
        if (max >= products.length) {
            setMin(0);
            setMax(10);
        } else {
            setMin(min + 10);
            setMax(max + 10);
        }
    };

    return (
        <main id="home">
            <h2>Voici nos produits phares !!</h2>

            <section>
                {products?.length && 
                    products.map((product, index) => {                        
               
                        return (
                            index >= min &&
                            index < max && (
                                <article key={product.id}>
                                    <h3>{product.title.substring(0, 20)}...</h3>
                                    <img src={product.thumbnailUrl} alt="" />
                                    <button onClick={()=> dispatch(addToCart(cart, product))}>add</button>
                                </article>
                            )
                        );
                    })                    

                }

                {error?.msg ? 
                    <p>{error.msg}</p> 
                    :
                    <div className="blockBtn">
                           <button onClick={(e) => prevPage(e)}>prev</button>
                           <span>page {(min / 10) +1}</span>
                          <button onClick={(e) => nextPage(e)}>next</button>
                    </div>    
                }
                                     
            </section>
        </main>
    );
}

export default Home;
