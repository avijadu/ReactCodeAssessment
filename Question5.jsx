import React from 'react';
import ReactDOM from 'react-dom';

const SortObject = ()=>{
    var obj  = [
        {
           id : 4,
           name:"abc"
        },
        {
           id : 10,
           name:"ab2"
        },
        {
           id : 5,
           name:"abc3"
        },
        { 
           id : 6,
           name:"abc5"
        }
    ];
    obj.sort((a, b) => {
        return a.id - b.id;
    });
    return obj.forEach((e) => console.log(`${e.id} ${e.name}`));
}

ReactDOM.render(
    <>Our repeated number is : {SortObject()}</>
    ,document.getElementById('root')
    );
