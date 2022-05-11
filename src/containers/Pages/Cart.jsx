import {useSelector, useDispatch} from 'react-redux';
import {deleteProductFromCart} from '../../redux/actions/cart';

function Cart() {

  const dispatch = useDispatch();
  const {cart} = useSelector(state =>({
    ...state.cart
  }));

  console.log(cart);
  
  return (
      
      <main id ="cart">
	  	<h1>ZE CART</h1>

		{
			cart.length ?
				<section>
					{
						cart.map((item)=>{
							return (

								<article key={item.id}>
									<div>
										<img src={item.thumbnailUrl} alt="" />

									</div>
									<section>
										<h2>{item.title}</h2>
										<p>quantity: {item.quantity}</p>
										<button onClick={()=>dispatch(deleteProductFromCart(cart, item))}>supprimer</button>
									</section>
								</article>

							)


						})
					}


				</section>
			:
			<p> no products in ze cart wesh</p>
		}
	  
	  
	  </main>





  )
}

export default Cart