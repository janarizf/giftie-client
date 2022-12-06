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

  create(data) {
    return http.post("/lists/create", data);
  }

   update(id, data) {
    return  http.patch(`/lists/update/${id}`, data);
  }
   additem(id, data) {
    return  http.put(`/lists/update/${id}`, data);
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

      var response = http.postForm("/lists/fileupload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      .then((res) => 
      { 
        console.log(res);
        alert(res);
        return res;
      });
     return response;
    } catch (error) {
      console.log(error)
    }
  }
}
export default new ListsDataService();