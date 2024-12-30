import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./Store/CartContext";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import PaymentPage from "./Pages/PaymentPage";

const App = () => {
  return (
    <CartContextProvider>
      <RouterProvider
        router={createBrowserRouter([
          { path: "/", element: <HomePage /> },
          {
            path: "/cart",
            element: <CartPage />,
          },
          {
            path: "/payment",
            element: <PaymentPage />,
          },
        ])}
      />
    </CartContextProvider>
  );
};

export default App;
