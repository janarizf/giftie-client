import http from "../http-common";

class GroupsDataService {
  getAll() {
    return http.get("/groups/getAll");
  }

  getByUser(id) {
    return http.get(`/groups/getByUser/${id}`);
  }

  get(id) {
    return http.get(`/groups/getOne/${id}`);
  }

  async create(data) {
    return await http.post("/groups/create", data)
        .then((response)=> {return response})
        .catch((err) => {
          console.log(err);
      });
  }
  async sendInvite(data) {
    return await http.post("/groups/sendinvite", data)
        .then((response)=> {return response})
        .catch((err) => {
          console.log(err);
      });
  }
  async addMember(data) {
    return await http.post("/groups/addmember", data)
        .then((response)=> {return response})
        .catch((err) => {
          console.log(err);
      });
  }

  async update(id, data) {
    return await http.patch(`/groups/update/${id}`, data)
    .then((response)=> {return response})
    .catch((err) => {
      console.log(err);
  });
  }

  async updatebyid(groupid,listid) {
    return await http.patch(`/groups/updatebyid/${groupid}/${listid}`)
    .then((response)=> {return response})
    .catch((err) => {
      console.log(err);
  });
  }

   additem(id, data) {
    return  http.put(`/groups/update/${id}`, data);
  }
  delete(id) {
    return http.delete(`/groups/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/groups`);
  }

  findByTitle(name) {
    return http.get(`/groups?title=${name}`);
  }
  fileupload(data) {
    //return http.post("/groups/fileupload", data,);
    try {
      let formData = new FormData();
      formData.append("image", data);

      var response = http.postForm("/groups/fileupload", formData, {
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
export default new GroupsDataService();