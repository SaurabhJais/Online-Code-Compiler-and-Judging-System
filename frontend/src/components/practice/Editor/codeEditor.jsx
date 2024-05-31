import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";

import "ace-builds/src-noconflict/mode-c_cpp"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-javascript"


let CodeEditor = ({ settings }) => {

    // alert(settings.language)

    async function handleSubmit(enteredCode) {

    }

    return (
        <>
            <AceEditor
                id="editor"
                setOptions={{ useWorker: false }}
                mode={settings.language ? settings.language : "java"}
                theme={settings.theme ? settings.theme : "monokai"}
                name="editor"
                onChange={handleSubmit}
                editorProps={{ $blockScrolling: true }}
                width=''
                height='calc(100vh - 8rem)'
                fontSize={settings.fontSize ? settings.fontSize : 14}
            />
            
        </>
    )
}

export default CodeEditor;