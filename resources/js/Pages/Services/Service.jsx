import React from "react";
import data from "../../../../public/data.json";
import { FaRegFileAlt, FaClipboardList } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const Service = () => {
    console.log(data);
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 align-center justify-center gap-8  ">
                {data.map((item, id) => (
                    <div
                        key={id}
                        className="relative m-5 p-5 border border-gray-200 shadow-2xl h-72 w-80 rounded-xl  transition-transform duration-300 ease-in-out"
                    >
                        <FaClipboardList
                            size={30}
                            color="#16a085"
                            className="absolute -top-7 hover:scale-105 left-32 bg-white p-2 h-12 w-12 rounded-full border border-gray-200 shadow-md"
                        />

                        {/* Optional image section */}
                        {/* <img
                        src={item.image}
                        alt={item.name}
                        className="w-40 h-40 object-cover mx-auto mb-4 rounded-md"
                    /> */}

                        <h2 className="text-center text-2xl font-semibold mb-2 text-gray-800">
                            {item.name}
                        </h2>
                        <p className="text-center text-gray-600">
                            {item.details}
                        </p>

                        <h4 className="text-center text-teal-600 font-semibold mt-4 flex items-center justify-center gap-2 cursor-pointer hover:underline">
                            Read More <FaArrowRightLong />
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
