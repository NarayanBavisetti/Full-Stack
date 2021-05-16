import { useContext } from "react";
import { UserContext } from "../App";

function About() {
  let { user } = useContext(UserContext);
  return (
    <div>
      <h1>Welcome  {user ? user.displayName : undefined} to About page</h1>
    </div>
  );
}
export default About;
