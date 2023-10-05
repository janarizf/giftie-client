import http from "../../http-common";

class ListsDataService {
  getAll() {
    return http.get("/admin/listurl/getAll");
  }
  getbyid(id) {
    return http.get(`/admin/listurl/getbyid/${id}`);
  }
  async update(id, data) {
    return await http
      .patch(`/admin/listurl/update/${id}`, data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async create(data) {
    return await http
      .post("/admin/listurl/create", data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  }


}

export default new ListsDataService();