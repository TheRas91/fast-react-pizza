import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <h1>Content here...</h1>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};
export default AppLayout;
