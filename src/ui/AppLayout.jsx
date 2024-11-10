import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Laoder";

const AppLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  const IsLoading = navigation.state === "loading";

  return (
    <div>
      {IsLoading && <Loader />}
      <Header />

      <main className="bordering">
        <h1>Content here...(outlet)</h1>
        <div className="bordering">
          <Outlet />
        </div>
      </main>

      <CartOverview />
    </div>
  );
};
export default AppLayout;
