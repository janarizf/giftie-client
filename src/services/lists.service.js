import http from "../http-common";

class ListsDataService {
  getAll() {
    return http.get("/lists/getAll");
  }

  getByUser(id) {
    return http.get(`/lists/getByUser/${id}`);
  }

  get(id) {
    return http.get(`/lists/getOne/${id}`);
  }

  getImg(url) {
    return http.get(`/imgscraper/getimg/${url}`);
  }
  convertImg(file) {
    return http.get(`/imgscraper/convertImg/${file}`);
  }

  async create(data) {
    return await http
      .post("/lists/create", data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async update(id, data) {
    return await http
      .patch(`/lists/update/${id}`, data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  additem(id, data) {
    return http.put(`/lists/update/${id}`, data);
  }
  delete(id) {
    return http.delete(`/lists/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/lists`);
  }

  findByTitle(name) {
    return http.get(`/lists?title=${name}`);
  }
  fileupload(data) {
    //return http.post("/lists/fileupload", data,);
    try {
      let formData = new FormData();
      formData.append("image", data);

      var response = http
        .postForm("/lists/fileupload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then((res) => {
          console.log(res);
          return res;
        });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new ListsDataService();
