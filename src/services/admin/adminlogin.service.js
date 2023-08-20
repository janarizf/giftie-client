import http from "../../http-common";

class AdminLoginDataService {
    async adminLogin(data) {
        return await http.get("/admin/login", data)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default new AdminLoginDataService();