import React, {useContext} from "react";
import {AccountImg, LogoImg, NavIcons, Wrapper} from "./NavBar.styles";

import Logo from "../../images/logo.svg";
import PersonImg from "../../images/account.svg";
import ListImg from "../../images/list.svg";
import RefreshImg from "../../images/replay.svg";
import ChartImg from "../../images/analytics.svg";
import {AuthTokenContext} from "../../App";


const NavBar: React.FC = () => {
    const context = useContext(AuthTokenContext);
    const token = context.tokenState.token;
    return (
        <Wrapper>
            <LogoImg src={Logo} alt={"logo"}/>
            <NavIcons>
                <img src={ListImg} alt="list"/>
                <img src={RefreshImg} alt="refresh"/>
                <img src={ChartImg} alt="trends"/>
            </NavIcons>
            <AccountImg src={PersonImg} alt={"account"}/>
        </Wrapper>
    );
};

export default NavBar;
