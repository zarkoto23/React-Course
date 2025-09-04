const baseUrl = "http://localhost:3030/jsonstore/users";

export default {
  async getAll() {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const users = Object.values(result);
    return users;
  },

  formatingDate(dateToFormat) {
    const date = new Date(dateToFormat);
    const formatedData = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formatedData;
  },

  async create(userData) {
    const { country, city, street, streetNumber, ...postData } = userData;
    postData.address = { country, city, street, streetNumber };
    postData.createdAt = new Date().toISOString();
    postData.updatedAt = new Date().toISOString();

    const response = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(postData),
    });

    const result = await response.json();

    return result;
  },

  async update(userId, userData) {
    const { country, city, street, streetNumber, ...postData } = userData;

    postData.address = { country, city, street, streetNumber };

    postData._id = userId;

    postData.updatedAt = new Date().toISOString();


    const response = await fetch(`${baseUrl}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const result = await response.json();

    return result;
  },
  async getOne(_id) {
    const response = await fetch(`${baseUrl}/${_id}`);
    const user = await response.json();

    return user;
  },


  async delUser(_id){
       const response = await fetch(`${baseUrl}/${_id}`, {
      method: "DELETE",
     
    });

    
  }
};
