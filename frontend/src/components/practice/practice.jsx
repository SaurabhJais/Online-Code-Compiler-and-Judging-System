import { useEffect, useRef, React } from "react";
import Editor from "./Editor/editorMain";
import ProblemDescription from "./problem-description/prolemDescription";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import toolbarModules from "../../utils/toolbarModules";




let Practice = () => {
    let editorText = useRef();
    useEffect(() => {
        const resizer = document.getElementById('resizer');
        const leftSide = resizer.previousElementSibling;
        const rightSide = resizer.nextElementSibling;

        resizer.addEventListener('mousedown', function (e) {
            e.preventDefault();
            document.addEventListener('mousemove', resize);
            document.addEventListener('mouseup', stopResize);
        });

        function resize(e) {
            const containerWidth = resizer.parentElement.getBoundingClientRect().width;
            const leftWidth = (e.pageX / containerWidth) * 100;
            leftSide.style.width = `${leftWidth}%`;
            rightSide.style.width = `${100 - leftWidth}%`;
            resizer.style.cursor = "grabbing"
            resizer.style.borderColor = "#1bd3d3"
        }

        function stopResize() {
            document.removeEventListener('mousemove', resize);
            document.removeEventListener('mouseup', stopResize);
            resizer.style.cursor = "grab"
            resizer.style.borderColor = "#9ca3af"
        }
    })


    function showEnteredText(e) {
        console.log(editorText.current.value)
    }






    return (
        <>

            <div className="flex w-full border-t-gray-500 shadow-lg" id="practice" >
                <ProblemDescription />
                <div className="resizer border-2 border-gray-400  cursor-grab" id="resizer"></div>
                <Editor />
            </div>




            <div className="w-[1000px] h-[800px] border border-red-600 mt-24 mb-8 p-24 flex justify-center item-center">
                <ReactQuill theme="snow" ref={editorText} modules={toolbarModules} />
            </div>
            <button onClick={showEnteredText} className="bg-blue-600">Submit</button>
        </>
    )
}

export default Practice;