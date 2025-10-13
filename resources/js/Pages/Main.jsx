import React from "react";
import Label from "../Components/Label";
import Modal from "../Components/Modal";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Service from "./Services/Service";
import Title from "./Title/Title";
import AddProject from "./Projects/AddProject";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Label label="Hello, This is Main Page" />
            <Modal />
            <Title Title={"Our Services"} />
            <Service />
            <Footer />
            <AddProject />
        </div>
    );
};

export default Main;
