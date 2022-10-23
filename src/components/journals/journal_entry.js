import React from "react";

// functinal Component (dumb Component )
export const JournalEntry = (props) => {
  return (
    <div className='journal-entry'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
};
