import dotenv from 'dotenv'
import axios from 'axios'
const adminService = process.env.REACT_APP_ADMIN_SERVICE;
class AdminService {
    admingetcustomer()
    {
        return axios.get(`${adminService}/Admin/allcustomers`)
    }
}
export default AdminService;