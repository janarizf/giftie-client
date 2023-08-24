import http from "../../http-common";

class CategoriesDataService {
    async getAllListCategory() {
        return await http.get("/admin/category/list/getAllCategories")
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }

    async getListCategoryById(themeId) {
        return await http
            .get(`/admin/category/list/getCategoryById/${themeId}`)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    async createListCategory(data) {
        return await http.post("/groups/category/list/create", data)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }

    async updateListCategories(id, data) {
        return await http
            .patch(`/admin/category/list/update/${id}`, data)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    deleteListCategory(id) {
        return http.delete(`/admin/category/list/delete/${id}`);
    }

    async getAllThemesCategories() {
        return await http.get("/admin/category/themes/getAllCategories")
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }

    async getThemeCategoryById(themeId) {
        return await http
            .get(`/admin/category/themes/getCategoryById/${themeId}`)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    async createThemesCategory(data) {
        return await http.post("/groups/category/themes/create", data)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }

    async updateThemesCategory(id, data) {
        return await http
            .patch(`/admin/category/themes/update/${id}`, data)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    deleteThemesCategory(id) {
        return http.delete(`/admin/category/themes/delete/${id}`);
    }

    async getAllItemsCategories() {
        return await http.get("/admin/category/item/getAllCategories")
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }

    async getItemCategoryById(themeId) {
        return await http
            .get(`/admin/category/item/getCategoryById/${themeId}`)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    async createItemCategory(data) {
        return await http.post("/groups/category/item/create", data)
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }

    async updateItemCategory(id, data) {
        return await http
            .patch(`/admin/category/item/update/${id}`, data)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    deleteItemCategory(id) {
        return http.delete(`/admin/category/item/delete/${id}`);
    }
}

export default new CategoriesDataService();