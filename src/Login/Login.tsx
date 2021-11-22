import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthTokenContext } from "../App";
import { AuthState } from "../reducer/reducer";

type Props = {};

function Login(props: Props) {
  const navigate = useNavigate();
  const context = useContext(AuthTokenContext);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  async function signIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken(true);
      if (token) {
        context.tokenDispatch({ type: AuthState.LOGIN, payload: token });
        navigate("/admin");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <button onClick={signIn}>Login</button>
    </div>
  );
}

export default Login;
