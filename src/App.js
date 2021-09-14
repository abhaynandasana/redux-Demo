import { useSelector } from "react-redux";
import { Fragment } from "react";

import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {auth ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
