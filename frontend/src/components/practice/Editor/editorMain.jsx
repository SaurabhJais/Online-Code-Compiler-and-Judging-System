import React, { useState } from "react";
import EditorSettings from "./editorSettings";
import CodeEditor from "./codeEditor";






const Editor = () => {
    const [settings, setSettings] = useState({ });

    return (
        <div className="editor bg-gray-100 p- w-1/2 min-w-96  " >
            <EditorSettings settings={settings} setSettings={setSettings} />
            <CodeEditor settings={settings} />
            <div className="w-1/2 h-12  absolute bottom-0 z-20 right-0 bg-white rounded-t-lg p-3">
                Hey There
            </div>
        </div>
    )
}


export default Editor;