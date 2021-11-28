import React, {useContext} from "react";
import {AccountImg, LogoImg, NavIcons, Wrapper} from "./NavBar.styles";

import Logo from "../../images/logo.svg";
import PersonImg from "../../images/account.svg";
import ListImg from "../../images/list.svg";
import RefreshImg from "../../images/replay.svg";
import ChartImg from "../../images/analytics.svg";
import {AuthTokenContext, emptyProduct} from "../../App";
import {AuthState, PreviewProduct} from "../../reducer/reducer";

type Props = {
    setState: React.Dispatch<React.SetStateAction<boolean>>
}


const NavBar: React.FC<Props> = ({setState}) => {
    const context = useContext(AuthTokenContext);

    return (
        <Wrapper>
            <LogoImg src={Logo} alt={"logo"}/>
            <NavIcons>
                <img src={ListImg} alt="list"
                     onClick={() => {
                         context.tokenDispatch({type: AuthState.PREVIEW_ITEM, payload: emptyProduct})
                         context.tokenDispatch({type: AuthState.EDIT_ITEM, payload: false})
                     }}/>
                <img src={RefreshImg} alt="refresh" onClick={() => setState((prevState => !prevState))}/>
                <img src={ChartImg} alt="trends"/>
            </NavIcons>
            <AccountImg src={PersonImg} alt={"account"}/>
        </Wrapper>
    );
};

export default NavBar;
