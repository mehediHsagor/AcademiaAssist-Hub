import React from "react";

const Button = ({ name, onclick }) => {
    return (
        <div>
            <button
                onClick={onclick}
                className="bg-orange-400 hover:bg-orange-600 rounded-lg text-white text-center py-4 px-5"
            >
                {name || "button"}
            </button>
        </div>
    );
};

export default Button;
