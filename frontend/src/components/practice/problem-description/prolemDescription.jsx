import React from "react";
import ProblemMeta from "./problemMeta";




let ProblemDescription = () => {
    let x = `
    <p>Given an array A of positive integers. Your task is to find the leaders in the array.&nbsp;An element of the array is a leader if it is greater than all the elements on its right side or if it is equal to the maximum element on its right side. The rightmost element is always a leader.</p><h3><br></h3><h3><strong style="background-color: var(--background); color: var(--text-color);">Example 1:</strong></h3><p><strong>Input:</strong> n = 6 A[] = {16,17,4,3,5,2}</p><p><strong>Output</strong>: 17 5 2</p><p><strong>Explanation:</strong> The first leader is 17 as it is greater than all the elements to its right.&nbsp;Similarly, the next leader is 5. The right-most element is always a leader so it is also included.</p><p><br></p><h3><strong style="background-color: var(--background); color: var(--text-color);">Example 2:</strong></h3><p><strong>Input:</strong> n = 5 A[] = {10,4,2,4,1}</p><p><strong>Output:</strong> 10 4 4 1</p><p><strong>Explanation:</strong> 1 is the rightmost element and 4 is the element greater than all the elements to its right. Similarly, another 4 is equal to the greatest element to its right and 10 is the greatest element in the whole array.</p><p><br></p><h3><strong style="background-color: var(--background); color: var(--text-color);">Your Task:</strong></h3><p><span style="background-color: var(--background); color: var(--text-color);">You don't need to read input or print anything.&nbsp;The task is to complete the function&nbsp;</span><strong style="background-color: var(--background); color: var(--text-color);">leader</strong><span style="background-color: var(--background); color: var(--text-color);">() which takes array A and n&nbsp;as input parameters and&nbsp;returns an array of leaders in order of their appearance.</span></p><p><br></p><p><strong style="background-color: var(--background); color: var(--text-color);">Expected Time Complexity:</strong><span style="background-color: var(--background); color: var(--text-color);">&nbsp;O(n)</span></p><p><strong style="background-color: var(--background); color: var(--text-color);">Expected Auxiliary Space:</strong><span style="background-color: var(--background); color: var(--text-color);">&nbsp;O(n)</span></p><p><br></p><p><strong style="background-color: var(--background); color: var(--text-color);">Constraints:</strong></p><p><span style="background-color: var(--background); color: var(--text-color);">1 &lt;= n&nbsp;&lt;= 107</span></p><p><span style="background-color: var(--background); color: var(--text-color);">0 &lt;= Ai&nbsp;&lt;= 107</span></p>
    `
    return (
        <div className="problem bg-gray-100 py-4 px-8 w-1/2 min-w-96">
            <h2 className="text-xl font-bold">Insertion Sort using recursion</h2>
            <ProblemMeta />
            <hr />
            <div className='py-4 font-Titillium' id="problemDescription" dangerouslySetInnerHTML={{ __html: x }}>
            </div>
        </div>
    )
}

export default ProblemDescription;