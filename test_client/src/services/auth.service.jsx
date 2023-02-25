import axios from "axios";

const API_URL = "http://localhost:5050/user/";

class AuthService {
  login(id, password) {
    try {
    return axios
      .post(API_URL + "login", {
        id,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
    } catch (e) {
        console.log("user login failed!")
        console.log(e)
    }
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();