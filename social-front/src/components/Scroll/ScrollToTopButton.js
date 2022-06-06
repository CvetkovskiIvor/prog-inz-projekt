import { bgcolor, borderBottomColor, borderColor, borderRightColor } from '@mui/system';
import React from 'react';
import {useEffect, useState} from "react";

function ScrollToTopButton() {
    const [ScrollToTopButton, setScrollToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setScrollToTopButton(true)
            }else{
                setScrollToTopButton(false)
            }
        })
    }, [])

    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return <div className="App">
        {ScrollToTopButton && (
            <button style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                height: "50px",
                fontSize: "50px",
                background: "#40464f",
                borderColor: "#1E2124"
            }}
            onClick={ScrollUp}
            >^</button>
        )}
    </div>
}

export default ScrollToTopButton;