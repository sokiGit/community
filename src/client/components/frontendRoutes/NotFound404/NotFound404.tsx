import "./NotFound404.css"

import { NavLink } from "react-router-dom";
import { TbError404Off } from "react-icons/tb";
import Main from "../../global/Main/Main"

export default function NotFound404() {
    return (
        <Main className="NotFound404">
            <h1>
                404 Not found
            </h1>
            <img src="https://http.cat/404" alt="http.cat/404"/>
            <h2>
                <TbError404Off />
                Oopsie :3 couln't find that site!
            </h2>
            <p>
                You can <NavLink to="/">go home</NavLink>, or <NavLink to="#GlobalFooter" onClick={() => {document.querySelector('#GlobalFooter')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}}>contact me</NavLink> via one of the ways in the footer.
            </p>
        </Main>
    );
}