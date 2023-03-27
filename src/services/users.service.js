import http from "../http-common";

class UsersDataService {

  signIn(email) {
    return http.post(`/users/signin/${email}`);
  }

  signUp(data) {

    return http.post(`/users/create/`,data);
  }
  get(id) {
    return http.get(`/users/getOne/${id}`);
  }
  async update(id, data) {
    return await http.patch(`/users/update/${id}`, data)
    .then((response)=> {return response})
    .catch((err) => {
      console.log(err);
  });
  }

  getAll() {
    return http.get("/users/getAll/");
  }

  
  delete(id) {
    return http.delete(`/users/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/users`);
  }

  findByEmail(email) {
    return http.get(`/users/findbyemail/${email}`);
  }
}

export default new UsersDataService();