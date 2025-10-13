import React, { useState } from "react";
import Label from "../../Components/Label";
import Input from "../../Components/Input";
import Select from "../../Components/Select";
import Button from "../../Components/Button";
import { createProductAPI } from "../../API/ProductAPI";

const AddProject = () => {
    const [formdata, setFormdata] = useState({
        name: "",
        class: "",
        rating: "",
        status: "",
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validation()) return;
        createProductAPI(formdata).then((res) => {
            const { message, status, data } = res.data || {};
            if (status) {
                console.log(data);
            }
        });
    };

    const validation = () => {
        const errors = {};

        if (!formdata.name) errors.name = "Name is required";
        if (!formdata.class) errors.class = "Class is required";
        if (!formdata.rating) errors.rating = "Rating is required";
        if (!formdata.status) errors.status = "Status is required";

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const optionsvalue = [
        { value: "deliver", label: "deliver" },
        { value: "Running", label: "Running" },
        { value: "Cancel", label: "Cancel" },
    ];
    return (
        <div className=" h-full justify-center  items-center">
            <div className=" gap-6 w-2/3 md:w-2/3 m-auto  shadow-2xl my-10 p-10 border items-center justify-center border-gray-300">
                <div>
                    <Label label={"Add New Project"} />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 justify-center "
                >
                    <div>
                        <Label label={"Name"} />
                        <Input
                            type="text"
                            name="name"
                            value={formdata.name || ""}
                            placeholder="Enter project name"
                            onChange={handleChange}
                            error={errors.name}
                        />
                    </div>
                    <div>
                        <Label label={"Class"} />
                        <Input
                            type="text"
                            name="class"
                            value={formdata.class}
                            placeholder="Enter project Class"
                            onChange={handleChange}
                            error={errors.class}
                        />
                    </div>
                    <div>
                        <Label label={"Rating"} />
                        <Input
                            type="number"
                            name="rating"
                            value={formdata.rating}
                            placeholder="Enter project Rating"
                            onChange={handleChange}
                            error={errors.rating}
                        />
                    </div>
                    <div>
                        <Label label={"Project Status"} />
                        <Select
                            name="status"
                            value={formdata.status}
                            onChange={handleChange}
                            placeholder="Select Status"
                            options={optionsvalue}
                            error={errors.status}
                        ></Select>
                    </div>
                    <div></div>
                    <div className="items-end flex justify-end my-5">
                        <Button className="" type="submit"></Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProject;
