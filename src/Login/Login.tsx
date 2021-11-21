import * as React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

function Login(props: Props) {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/admin")}>Login</button>
    </div>
  );
}

export default Login;
