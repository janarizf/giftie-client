import http from "../../http-common";

class CategoriesDataService {
    async getAllListCategories() {
        return await http.get("/admin/category/list/getAllCategories")
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }
    async getAllThemesCategories() {
        return await http.get("/admin/category/themes/getAllCategories")
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }
    async getAllItemsCategories() {
        return await http.get("/admin/category/item/getAllCategories")
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default new CategoriesDataService();