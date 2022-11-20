import React from 'react';

function  LunchTitle(props) {


    return (
        <div className="title">
            <h1>{props.children}</h1>
        </div>
      );
}

export default LunchTitle;