import {useRef} from "react";
export function Input() {
    const inputRef = useRef();

    function focus() {
        inputRef.current.focus();
        console.log(inputRef.current);
    }

    return (
        <div>
            
        </div>
    );
}