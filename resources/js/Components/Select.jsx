import React from "react";

const Select = ({
    name,
    value,
    onChange,
    options = [],
    placeholder,
    error,
}) => {
    return (
        <div>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className={`border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 w-64 h-12 p-2
                    ${
                        error
                            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-400"
                            : "border-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-400"
                    }
                `}
            >
                <option value="">{placeholder}</option>

                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default Select;
