import React from 'react';
import ReactDOM from 'react-dom';

const arr = [0,1,2,3,4,5,6,7,8,9,10,10,11,12,13];
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
         result = arr[i];
        } 
    }

ReactDOM.render(
    <>Our repeated number is : {result}</>
    ,document.getElementById('root')
    );
