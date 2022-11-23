import http from "../http-common";

class UsersDataService {

  signIn(email) {
    return http.post(`/users/signin/${email}`);
  }

  signUp(data) {

    return http.post(`/users/create/`,data);
  }

  getAll() {
    return http.get("/lists/getAll/");
  }

  get(id) {
    return http.get(`/lists/getOne/${id}`);
  }

  create(data) {
    return http.post("/lists/create", data);
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

  findByEmail(email) {
    return http.get(`/users/findbyemail/${email}`);
  }
}

export default new UsersDataService();