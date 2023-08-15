import React,{useEffect} from 'react';

export function Thought(props) {
    const { thought, removeThought } = props;

    useEffect(() => {
            const timeRemaining = thought.expiresAt - Date.now();
            const timeOut = setInterval(() => {
                //alert("----REMOVING----\nid: " + thought.id + "\nwith text: " + thought.text)
                removeThought(thought.id)
            }, timeRemaining)

            return () => {
                clearInterval(timeOut)
            }
        },
        [removeThought, thought])

    const handleRemoveClick = () => {
        removeThought(thought.id);
    };

    return (
        <li className="Thought">
            <button
                aria-label="Remove thought"
                className="remove-button"
                onClick={handleRemoveClick}
            >
                &times;
            </button>
            <div className="text">{thought.text}</div>
        </li>
    );
}