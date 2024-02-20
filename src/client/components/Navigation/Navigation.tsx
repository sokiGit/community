import { FaDiscord, FaHome } from "react-icons/fa";
export default function Navigation(data:{"default-open":boolean|null}) {
    return (
        <nav id="GlobalNavigation" data-open={data["default-open"] ? "true" : "false"}>
            <menu>
                <a href="/"><li><FaHome />Home</li></a>
                <a href="https://discord.com/invite/uuAXCFfFhD"><li><FaDiscord />Join the Discord!</li></a>
           </menu>
        </nav>
    );
}