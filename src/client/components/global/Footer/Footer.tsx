import "./Footer.css"
import { RxCross2, RxCheck, RxEnvelopeClosed, RxDiscordLogo } from "react-icons/rx";

export default function Footer() {
    return (
        <footer id="GlobalFooter">
            <section>
                <h3>Copyright</h3>
                <p>Copyright {"\u00a9"} 2024 sokiGit</p>
                <p>This software is protected under the <a href="https://github.com/sokiGit/community/blob/main/LICENSE">MIT License</a>.</p>
                <ul className="FooterPermissions">
                    <li>
                        <b>Permissions</b>
                    </li>
                    <li>
                        <RxCheck/><span>Commercial use</span>
                    </li>
                    <li>
                        <RxCheck/><span>Modification</span>
                    </li>
                    <li>
                        <RxCheck/><span>Distribution</span>
                    </li>
                    <li>
                        <RxCheck/><span>Private use</span>
                    </li>
                </ul>
                <ul className="FooterLimtations">
                    <li>
                        <b>Limitations</b>
                    </li>
                    <li>
                        <RxCross2/><span>Liability</span>
                    </li>
                    <li>
                        <RxCross2/><span>Warranty</span>
                    </li>
                </ul>
            </section>
            <section>
                <h3>Contacts</h3>
                <ul>
                    <li>
                        <RxEnvelopeClosed />
                        <span>
                            <a href="mailto://soki.personal@gmail.com">
                                soki.personal@gmail.com
                            </a>
                            <span>
                                {" (prob won't respond)"}
                            </span>
                        </span>
                    </li>
                    <li>
                        <RxDiscordLogo />
                        <span>
                            @
                            <a href="https://discordapp.com/users/466270219132731392">
                                sokiuwu
                            </a>
                        </span>
                    </li>
                    <li>
                        <RxDiscordLogo />
                        <span>
                            Server:{" "}
                            <a href="https://discord.com/invite/uuAXCFfFhD">
                                soki's portfolio
                            </a>
                        </span>
                    </li>
                </ul>
            </section>
        </footer>
    );
}