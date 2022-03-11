import axios from "axios";

const instance = axios.create({
    baseURL: "http://3.36.75.74:8080/",
    // baseURL: "http://binscot.shop/",
    headers: {
        "content-type": "application/json;charset-UTF-8",
        accept: "application/json,",
    },
});

export default instance;
