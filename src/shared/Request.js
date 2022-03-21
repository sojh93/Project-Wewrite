import axios from "axios";

const instance = axios.create({
    // baseURL: "http://binscot.shop/",
    // baseURL: "http://13.209.70.1/",
    // baseURL: "http://3.34.179.104/",
    baseURL: "http://3.34.179.104/",

    headers: {
        "content-type": "application/json;charset-UTF-8",
        accept: "application/json,",
    },
});

export default instance;
