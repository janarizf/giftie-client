import http from "../../http-common";

class FeaturedListDataService {
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

}

export default new FeaturedListDataService();