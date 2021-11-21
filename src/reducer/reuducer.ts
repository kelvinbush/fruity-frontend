export enum AuthState {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export interface TokenAction {
  type: AuthState;
  payload: string;
}

export interface TokenState {
  token: string;
}

export const reducer = (state: TokenState, action: TokenAction) => {
  const { type, payload } = action;
  switch (type) {
    case AuthState.LOGIN:
      return { ...state, token: payload };
    case AuthState.LOGOUT:
      return { ...state, token: payload };
    default:
      return state;
  }
};
