import React, {useState, useEffect} from 'react';
 
function HookWithDepen({text}) {
    // const [currentText, setCurrentText] = useState(text);
 
    useEffect(() => {
        console.log(`Message Updates: ${text}`);
    }, [text]);
 
    return (
        <div>
        <h1>UseEffect with dependencies</h1>
        <h3>{text}</h3>
        </div>
    );
}
 
export default HookWithDepen;