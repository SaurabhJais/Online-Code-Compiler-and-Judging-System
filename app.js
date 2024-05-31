import express from "express";
import { config } from "dotenv";
import cors from "cors"
import { spawn } from "child_process"
import fs from "fs"
import path from "path";


config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



let sanitizeJavaCode = (code) => {
    const codeWithoutComments = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, "");

    //  const sanitizedCode = codeWithoutComments.replace(/import\s*(java\.lang\.|java\.util\.|java\.io\.|java\.net\.)/g, '');

    return `${codeWithoutComments}`;
}


let executeJavaCode = (code, options = {}, inputDate = "") => {
    const { maxCPU = 1, maxMemory = '256m' } = options; //
    const sanitizedCode = sanitizeJavaCode(code);

    return new Promise((resolve, reject) => {

        const __dirname = path.resolve(); // Kyuki modules me __dirname work nhi karta ...  Only commonJS me karta hai
        const uniqueId = `${Date.now()}${Math.floor(Math.random() * 10000000)}`;
        const tempFilePath = path.join(__dirname, `Main${uniqueId}.java`);

        // Replace the class name 
        const classNameRegex = /class\s+\w+/;
        const codeWithTemporaryClass = sanitizedCode.replace(classNameRegex, `class Main${uniqueId}`);

        fs.writeFileSync(tempFilePath, codeWithTemporaryClass);

        // Compile
        const compileProcess = spawn("javac", [tempFilePath])

        // Compile hone ke bad (Successfully ya Error kaise bhi compile hone ke bad)
        compileProcess.on("close", (compileCode) => {
            if (compileCode !== 0) {
                reject(new Error(`Java compilation failed with code ${compileCode}`));
                return;
            }

            const className = path.basename(tempFilePath, '.java');

            // Execute 
            const executeProcess = spawn("java", ['-Xmx' + maxMemory, className], {
                cwd: path.dirname(tempFilePath) 
            });

            let output = "";
            let error = "";

            if(inputDate){
                executeProcess.stdin.write(inputDate);
                executeProcess.stdin.end();
            }

            executeProcess.stdout.on("data", (data) => {
                output += data.toString();
            });

            executeProcess.stderr.on("data", (data) => {
                error += data.toString();
            });

            console.log(output)
            executeProcess.on('close', (executeCode) => {
                if (executeCode === 0) {
                    resolve(output.trim());
                } else {
                    reject(new Error(`Java execution failed with code ${executeCode}: ${error.trim()}`));
                }

                // Clean up temporary files
                fs.unlinkSync(tempFilePath);
                fs.unlinkSync(path.join(path.dirname(tempFilePath), `${className}.class`));
            });
        });
    });
}








 



app.get("/", (req, res) => {
    console.log("Hello world");
    res.send("Hello world");
})


app.post("/submit-code", async (req, res) => {
    let result = await executeJavaCode(req.body.enteredCode)
    console.log(result)
    res.send("Hello there")
})




let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server is running on port : " + port)
})













/*

gggggggg    eeeeeee    eeeeeee    kk  kk    sssssssss    fffffff       ooooo      rrrrrrrrr    gggggggg    eeeeeee    eeeeeee    kk  kk    sssssssss  
gg          ee         ee         kk kk     ss           ff          oo    oo     rr     rr    gg          ee         ee         kk kk     ss           
gg  gggg    eeee       eeee       kkkk      sssssssss    ffffff     oo      oo    rrrrrrrrr    gg  gggg    eeee       eeee       kkkk      sssssssss   
gg    gg    ee         ee         kk kk            ss    ff          oo    oo     rrrr         gg    gg    ee         ee         kk kk            ss    
gggggggg    eeeeeee    eeeeeee    kk  kk    sssssssss    ff           ooooo       rr  rrr      gggggggg    eeeeeee    eeeeeee    kk  kk    sssssssss       


*/