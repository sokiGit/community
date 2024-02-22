/* eslint-disable @typescript-eslint/no-explicit-any */
import "./CodeBlock.css"

export default function CodeBlock(props:any) {
    return (
        <code className={"CodeBlock "+(props.stretch ? "CodeBlockStretch" : "")}>
            {props.children}
        </code>
    );
}