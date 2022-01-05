import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthTokenContext } from "../App";
import { AuthState } from "../reducer/reducer";
import axios from "axios";
import { newItemEndpoint } from "../API";

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
				context.tokenDispatch({
					type: AuthState.LOGIN,
					payload: token,
				});
				const result = await axios.get(
					`https://nectar-server-api.herokuapp.com/api/me`,
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				);
				console.log("====================================");
				console.log(token);
				console.log("====================================");
				console.log("====================================");
				console.log(result.data);
				console.log("====================================");
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
