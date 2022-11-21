import http from "../http-common";

class UsersDataService {
    

signIn = (formData) => http.post('/user/signin', formData);
signUp = (formData) => http.post('/user/signup', formData);

  getAll() {
    return http.get("/lists/getAll");
  }

  get(id) {
    return http.get(`/lists/getOne/${id}`);
  }

  create(data) {
     return http.post("/lists/create",data);
  }

  update(id, data) {
    return http.patch(`/lists/update/${id}`, data);
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
}

export default new UsersDataService();