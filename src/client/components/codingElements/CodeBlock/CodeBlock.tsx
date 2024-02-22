import "./CodeBlock.css"

export default function CodeBlock(props) {
    return (
        <code className={"CodeBlock "+(props.stretch ? "CodeBlockStretch" : "")}>
            {props.children}
        </code>
    );
}