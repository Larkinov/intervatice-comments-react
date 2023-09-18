import React from "react";

const UseInput = (initialValue: string | number) => {
    const [value, setValue] = React.useState(initialValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const clearValue = () => {
        if (typeof (value) === "number") {
            setValue(0);
        }
        if (typeof (value) === "string") {
            setValue("");
        }
    }

    return {
        value, onChange: handleChange, clear:clearValue
    };
}

export default UseInput;