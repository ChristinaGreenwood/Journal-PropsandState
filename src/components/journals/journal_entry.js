import React from "react";

// functinal Component (dumb Component )
export const JournalEntry = props => {
    return (
        <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        </div>
    );
};