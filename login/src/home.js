import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./App";

function Home() {
  let { user } = useContext(UserContext);
  return (
    <div>
      <div className="App">
        {user ? user.displayName : undefined}
        <div>
          {" "}
          <Link to="/spam">spam</Link>
        </div>
        <div>
          {" "}
          <Link to="/about">about</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
