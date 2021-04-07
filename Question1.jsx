import React from 'react';
import ReactDOM from 'react-dom';
import FindMaxConsecutiveOnes from './Q1';

                     //question 1
function EvenArray(){
const arr = [3,2,56,74,23,86,90,56];
const evenArr = [];
for(let i=0; i<arr.length;i++){
		if(arr[i]%2 === 0){
				evenArr.push(arr[i]);
		}
}
return (
		<ol>
			{evenArr.map(even => (
				<li key={even}>{even}</li>
			))}
		</ol>
	);
}
ReactDOM.render(
    <>{EvenArray()}</>
    ,document.getElementById('root')
    );
