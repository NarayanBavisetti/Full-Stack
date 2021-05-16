import { useContext } from "react";
import { UserContext } from "../App";

function Spam() {
  let { user } = useContext(UserContext);
  return (
    <div>
      <h1>Welcome  {user ? user.displayName : undefined} to Home page</h1>
    </div>
  );
}
export default Spam;
