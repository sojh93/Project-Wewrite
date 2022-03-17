import axios from "axios";

const instance = axios.create({
    baseURL: "http://13.209.70.1:8080/ws-stomp",
    // baseURL: "http://binscot.shop/",
    headers: {
        "content-type": "application/json;charset-UTF-8",
        accept: "application/json,",
    },
});

export default instance;
