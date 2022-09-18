import httpClient from "./http-common";
import dotenv from "dotenv"
dotenv.config()
const paymentService = process.env.PAYMENT_SERVICE
class Service
{
    getCustomer()
    {
        return httpClient.post(`${paymentService}/submitService`);
    }
    

}
 export default new Service();