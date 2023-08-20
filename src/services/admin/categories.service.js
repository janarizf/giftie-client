import http from "../../http-common";

class CategoriesDataService {
    async getAllListCategories() {
        return await http.get("/admin/getAllListCategories")
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }
    async getAllThemesCategories() {
        return await http.get("/admin/themes/getAllThemesCategories")
            .then((response) => { return response })
            .catch((err) => {
                console.log(err);
            });
    }
    
}

export default new CategoriesDataService();