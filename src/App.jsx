import { Routes, Route } from "react-router-dom";

import Header from './components/UI/Header';
import Home from "./containers/Pages/Home";
import Cart from "./containers/Pages/Cart";


function App() {
    return (
        <>

            <Header />

            <Routes>

                <Route index element={<Home />} />
                <Route path="/cart" element={<Cart />} />

            </Routes>

        </>
    );
}

export default App;
