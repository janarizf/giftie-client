import http from "../http-common";

class AdminDataService {
    async adminLogin(data) {
        return await http.get("/admin/login", data)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }

    async adminThemeAdd(data) {
        return await http.post("/admin/themeadd", data)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }

    adminThemeDelete(id) {
        return http.delete(`/admin/themedelete/${id}`);
    }

    async adminThemeEdit(id, data) {
        return await http.patch(`/admin/themeedit/${id}`, data)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }

    async editListLink(id, data) {
        return await http.patch(`/admin/listedit/${id}`, data)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }

    async adminFeaturedAdd(data) {
        return await http.post("/admin/featureadd", data)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }

    adminFeaturedDelete(id) {
        return http.delete(`/admin/featuredelete/${id}`);
    }

    async adminFeaturedEdit(id, data) {
        return await http.patch(`/admin/featureedit/${id}`, data)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }
    //featured list
    //manage links

    async getAllListCategories() {
        return await http.get("/admin/getAllListCategories")
        .then((response) => { return response })
        .catch((err) => {
            console.log(err);
        });
    }

    async getAllThemes() {
        return await http.get("/admin/getAllThemes")
        .then((response) => { return response })
        .catch((err) => {
            console.log(err);
        });
    }
}

export default new AdminDataService();