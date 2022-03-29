import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_DATABASE_BASEURL,
    headers: {
        "content-type": "application/json;charset-UTF-8",
        accept: "application/json,",
    },
});

export default instance;

