import React from 'react';
import ReactDOM from 'react-dom';

        //Question 2(find maxlength of cosecutive 1's in binary string)
const FindMaxConsecutiveOnes = ()=> {
    const nums = '00110001001110';
    let largestCount = 0;
    let currentCount = 0;
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === '0') {
            currentCount = 0;
        } else {
            currentCount++;
        };
        if (currentCount > largestCount) largestCount = currentCount;
    };
    return `The largest length of consecutive 1's is : ${largestCount}`;
};

ReactDOM.render(
    <>{FindMaxConsecutiveOnes()}</>
    ,document.getElementById('root')
    );
