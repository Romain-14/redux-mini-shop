import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const {pathname} = useLocation();
    const {cart} = useSelector(state =>({
        ...state.cart
      }));

      const jpCoffe = <FontAwesomeIcon icon={regular('faCoffee')} />

    return (
        <header>
            <h1><Link to="/">Jason's Store</Link></h1>
            <nav>
                <Link to="/" className={pathname === "/" ? "active" : null}>{jpCoffe}home</Link>
                <Link to="/cart" className={pathname === "/cart" ? "active" : null }><span>{cart.length}</span>cart</Link>
            </nav>
        </header>
    );
}

export default Header;
