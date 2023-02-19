import instance from "./config";

const getProjects = () => {
    return instance.get("/Projects");
};

export {getProjects}