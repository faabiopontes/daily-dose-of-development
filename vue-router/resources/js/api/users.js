import axios from "axios";
const apiUsers = axios.create({
    baseURL: "/api/users"
});

export default {
    all() {
        return apiUsers.get("/");
    },
    find(id) {
        return apiUsers.get(`/${id}`);
    },
    update(id, data) {
        return apiUsers.put(`/${id}`, data);
    }
};
