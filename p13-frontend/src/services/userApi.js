import axios from "axios";

// Requêter un utilisateur avec un ID donné.
export async function userLogIn(email, password) {
  console.log(email, password);
  let response;
  try {
      response =  await axios
      .post("http://localhost:3001/api/v1/user/login", {
        email: email,
        password: password,
      })
    }
    catch (error) {
      if (error.response) {
        return error.response.data
      }
    };
    return response;
};
export async function getUserProfileData(JWT) {
  return await axios.post("http://localhost:3001/api/v1/user/profile", {}, {
    headers: {
      Authorization: "Bearer " + JWT
    }
  })
}