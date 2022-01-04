import React from "react";




const useDarkMode = () => {
    const [value, setValue] = React.useState(() => {
        if (typeof window !== "undefined") localStorage.getItem("theme") || '#272727'
    })

    const ToggleMode = () => {
        setValue(localStorage.setItem("theme", '#272727'))
        document.body.style.backgroundColor=value;
    }
    return [
        value,
        ToggleMode
    ]
}

export default useDarkMode;