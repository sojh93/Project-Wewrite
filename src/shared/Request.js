import axios from "axios";

const instance = axios.create({
    baseURL: "http://3.36.75.74:8080/",
    headers: {
        "content-type": "application/json;charset-UTF-8",
        accept: "application/json,",
    },
});

export const chatAPI = {
    createRoom: function (data) {
        return axios.post(`/api/chat/rooms`, data);
    },
    getChatList: function () {
        return axios.get(`/api/chat/rooms`);
    },
    getChatMessages: function (roomId) {
        return axios.get(`/api/chat/rooms/${roomId}/messages`);
    },
    selectCategory: function (category) {
        return axios.get(`/api/chat/rooms/search/${category}`);
    },
};

export default instance;
