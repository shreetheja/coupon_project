import axios from 'axios';

const companyService = process.env.REACT_APP_COMPANY_SERVICE;
class Service
{
    
    getCupon()
    {
        return axios.get(`${companyService}/mapcontroller/getAlldetails`);
    }
    getbycompname(compname)
    {
        return axios.get(`${companyService}/mapcontroller/getByCompanyName/${compname}`)
    }
    addnewcoupon(data)
    {
        return axios.post(`${companyService}/mapcontroller/create`,data);
    }
    getcouponbycompId(id)
    {
        return axios.get(`${companyService}/mapcontroller/getcoupondetailsbyId/${id}`);
    }
    deleteCoupon(id)
    {
       return axios.delete(`${companyService}/mapcontroller/deleteProductsbyId/${id}`)
    }
    updateCouponById(id,data)
    {
        return axios.put(`${companyService}/mapcontroller/updateById/${id}`,data)
    }
}

export default Service