import http from "../../http-common";

class AdminLoginDataService {
    async adminLogin(data) {
        return await http.get("/admin/user/login", data)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }

    async getAllAdminUsers() {
        return await http.get("/admin/user/getAll")
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }

    async getAdminUserById(themeId) {
        return await http
          .get(`/admin/user/getById/${themeId}`)
          .then((response) => {
            return response;
          })
          .catch((err) => {
            console.log(err);
          });
      }
      async createAdminUser(data) {
        return await http.post("/admin/user/create", data)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }
    async updateAdminUser(id, data) {
        return await http
            .patch(`/admin/user/update/${id}`, data)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    deleteAdminUser(id) {
        return http.delete(`/admin/user/delete/${id}`);
    }
}

export default new AdminLoginDataService();