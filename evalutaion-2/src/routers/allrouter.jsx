import { Route } from "react-router-dom";
import Home from "../Pages.jsx/Home";
import Order from "../Pages.jsx/order";

export default function AllRouter() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/order">
        <Order />
      </Route>
    </div>
  );
}
