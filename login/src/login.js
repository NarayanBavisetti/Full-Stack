import { useContext, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { UserContext } from "./App";
import { firebase } from "./firebase";

function Login() {
  const { user, setUser } = useContext(UserContext);

  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };
  useEffect(() => {
firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
  }, []);
  return (
    <div className="App">
      {
        user ? (
          <button
            onClick={() => {
             firebase.auth().signOut()
            }}
          >
            Logout
          </button>
        ) : (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )
        //   (
        //     <button
        //       onClick={() => {
        //         setUser("yeh Hamara user hai");
        //       }}
        //     >
        //       Login
        //     </button>
        //   )
      }
    </div>
  );
}

export default Login;
