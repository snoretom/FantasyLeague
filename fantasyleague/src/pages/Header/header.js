import React from "react";
import { Link } from "react-router-dom";
import '../../css/header/navbar.css';
import navbarLogoimg from "../../css/imageSource/navBar/FantasyLeague logo.svg";

function Nav() {
    return(
        <div className="navbar">
            <div className="navbarWrapper">
                <Link className="navbarLogo"><img src={navbarLogoimg}></img></Link>
                <div className="navContainer">
                    <ul className="navbarMenu">
                        <li className="navbarlist">Fantasy League
                            <ul className="navbarlistlist">
                                <li className="navbarinner">내팀</li>
                                <li className="navbarinner">실제리그스텟</li>
                            </ul>
                        </li>
                        <li className="navbarlist">Major News
                            <ul className="navbarlistlist">
                                <li className="navbarinner">내팀</li>
                                <li className="navbarinner">실제리그스텟</li>
                            </ul>
                        </li>
                        <li className="navbarlist">Major News
                            <ul className="navbarlistlist">
                                <li className="navbarinner">내팀</li>
                                <li className="navbarinner">실제리그스텟</li>
                            </ul>
                        </li>
                        <li className="navbarlist">Major News
                            <ul className="navbarlistlist">
                                <li className="navbarinner">내팀</li>
                                <li className="navbarinner">실제리그스텟</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="navAccount">
                    <a href="">로그인</a>
                    <a href="">회원가입</a>
                </div>
            </div>
        </div>
    )
}

export default Nav;