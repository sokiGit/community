import { NavLink } from "react-router-dom";
import "./Navigation.css"
import { FaDiscord, FaHome } from "react-icons/fa";
export default function Navigation(data:{"default-open":boolean|null}) {
    return (
        <nav id="GlobalNavigation" data-open={data["default-open"] ? "true" : "false"}>
            <menu>
                <NavLink to="/"><li><FaHome />Home</li></NavLink>
                <NavLink to="https://discord.com/invite/uuAXCFfFhD"><li><FaDiscord />Join the Discord!</li></NavLink>
           </menu>
        </nav>
    );
}