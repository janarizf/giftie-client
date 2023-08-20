import http from "../../http-common";

class ThemesDataService {
    async getAll() {
        return await http.get("/admin/themes/getallthemes")
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }
    async getById(themeId) {
        return await http.get(`/admin/themes/getThemesById/${themeId}`)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }
    async getByCategory(catId) {
        return await http.get(`/admin/themes/getThemesByCategory/${catId}`)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }
    async create(data) {
        return await http.post("/admin/themes/create", data)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }

    async update(id, data) {
        return await http.patch(`/admin/themes/update/${id}`, data)
        .then((response)=> {return response})
        .catch((err) => {
          console.log(err);
      });
    }

    delete(id) {
        return http.delete(`/admin/themes/delete/${id}`);
    }
}


export default new ThemesDataService();