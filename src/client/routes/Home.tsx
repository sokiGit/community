import { useState } from 'react'

import Main from '../components/global/Main/Main';
import { GrPowerReset } from "react-icons/gr";
import CodeBlock from '../components/codingElements/CodeBlock/CodeBlock';

export default function Home() {
    const [ count, setCount ] = useState(0);
    const cur_btn = document.getElementById("NavigationButtonHome");
    if (cur_btn) {
        cur_btn.setAttribute("data-current", "true");
        cur_btn.removeAttribute("href");
    }

    return (
        <Main>
            <h1>Header one testing</h1>
            <h2>Using Vite, React and Vercel!</h2>
            <h3>This is a testing home page :3</h3>
            <h4>Idk what else to write...</h4>
            <h5>Just... one more</h5>
            <h6>Hey did u hear about the SuperSecretRoute?</h6>
            <code>Discord: @sokiuwu</code><br/>
            <code>Server: discord.gg/uuAXCFfFhD</code>
            <div style={{background: "#aaa1", margin:".5rem", border: "1px solid #aaa5", padding: "1.5rem 1rem", borderRadius: ".25rem", display: "flex", gap: ".5rem", alignItems: "center", justifyContent: "center", flexFlow: "row wrap"}}>
            <h3 style={{width: "100%", textAlign: 'center'}}>Counter testing yay</h3>
            <button onClick={() => setCount(count+1)}>
                +
            </button>
            {count}
            <button onClick={() => setCount(count-1)}>
                -
            </button>
            <button onClick={() => setCount(0)}>
                <GrPowerReset />
                Reset
            </button>
            </div>
            <h4>lang: lua, show_controls: true, stretch: true</h4>
            <CodeBlock lang="lua" show_controls={true} stretch={true}>
                {`local awesome = website.author == "sokiGit"\n
                if awesome then\n
                    print("This is awesome!")\n
                end`}
            </CodeBlock>
            <h4>output :3</h4>
            <CodeBlock>
                {"> This is awesome!"}
            </CodeBlock>
            <h4>lang: js, stretch: true</h4>
            <CodeBlock stretch={true}>
                {`const ipv4 = computer.getIPv4();\n
                console.log("haha I haked u "+ipv4);\n`}
            </CodeBlock>
            <h4>haker output</h4>
            <CodeBlock>
                {"> haha I haked u 192.168.0.4"}
            </CodeBlock>
            <h4>loooooooooong code</h4>
            <CodeBlock>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa
            </CodeBlock>
        </Main>
    );
}