import React from "react";

const Input = ({ type, name, value, placeholder, onChange, error, label }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            {label && (
                <label className="text-2xl  pl-1 text-start text-gray-500">
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`w-64 px-4 py-3 border rounded-lg pl-4 transition outline-none
          ${
              error
                  ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-400"
                  : "border-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-400"
          }
        `}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default Input;
