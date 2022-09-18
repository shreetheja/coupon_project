import axios from 'axios';
import authHeader from './auth-header';

const userService = process.env.REACT_APP_USER_SERVICE;
class UserService {
  getPublicContent() {
    return axios.get(`${userService}/company_name`);
  }
  getUserBoard() {
    return axios.get(`${userService}/user`, { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(`${userService}/company`, { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(`${userService}/admin`, { headers: authHeader() });
  }
}
export default new UserService();