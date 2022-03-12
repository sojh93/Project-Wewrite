import axios from "axios";

const instance = axios.create({
    baseURL: "http://binscot.shop/",
    headers: {
        "content-type": "application/json;charset-UTF-8",
        accept: "application/json,",
    },
});

export default instance;
