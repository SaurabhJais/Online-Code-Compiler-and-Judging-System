import React, { useState } from "react";

const EditorSettings = ({ settings, setSettings }) => {


    function languageSlectHandler(e) {
        e.preventDefault();
        setSettings({
            ...settings,
            language: e.target.value
        })
    }


    function fontSelectHandler(e) {
        e.preventDefault();
        setSettings({
            ...settings,
            fontSize: e.target.value
        })
    }


    function themeSelectHandler(e) {
        e.preventDefault();
        setSettings({
            ...settings,
            theme: e.target.value
        })
    }


    return (
        <div className="flex justify-between items-center space-x-2  mx-2" id="editorSettings">
            <div>
                <select onChange={languageSlectHandler} className="form-select text-xs w-32 rounded-sm px-2 py-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option value={"c_cpp"}>C++ (g++ 5.4)</option>
                    <option value={"java"} selected>Java (1.8)</option>
                    <option value={"python"}>Python3</option>
                    <option value={"javascript"}>Javascript (Node v12.19.0)</option>
                </select>
            </div>

            <div className="flex space-x-2">
                <div class="group flex justify-center items-center relative cursor-pointer">
                    <div class="flex justify-center items-center transition-all duration-300 group-active:scale-125">
                        <img src={require("../../../copy-icon.png")} class="w-5 group-active:animate-pulse" alt="Copy Code" title="Copy Code" />
                    </div>
                </div>
                <div>
                    <select onChange={fontSelectHandler} className="form-select text-xs w-24 rounded-sm px-2 py-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
                        <option value={"12px"}>12 px</option>
                        <option value={"14px"} selected>14 px</option>
                        <option value={"16px"}>16 px</option>
                        <option value={"18px"}>18 px</option>
                        <option value={"20px"}>20 px</option>
                        <option value={"22px"}>22 px</option>
                        <option value={"24px"}>24 px</option>
                    </select>
                </div>
                <div>
                    <select onChange={themeSelectHandler} className="form-select text-xs w-36 rounded-sm px-2 py-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
                        <option value={"monokai"} selected>Monokai</option>
                        <option value={"github"}>Github</option>
                        <option value={"github_dark"}>Github Dark</option>
                        <option value={"tomorrow"}>Tomorrow</option>
                        <option value={"dracula"}>Dracula</option>
                        <option value={"terminal"}>Terminal</option>
                        <option value={"solarized_dark"}>Solarized Dark</option>
                        <option value={"solarized_light"}>Solarized Light</option>
                    </select>
                </div>
            </div>

        </div>
    )
}


export default EditorSettings;