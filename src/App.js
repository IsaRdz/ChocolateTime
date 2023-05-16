import ItemListContainer from "./components/ItemList/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import CartContainer from "./components/Cart/CartContainer";
import CartContextProvider from "./context/CartContext";
import FormCheckoutContainer from "./components/FormCheckout/FormCheckoutContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<NavbarContainer />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<FormCheckoutContainer />} />
            <Route path="*" element={<h1>La ruta no existe</h1>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
