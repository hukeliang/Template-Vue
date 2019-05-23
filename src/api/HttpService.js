import httpRequest from './HttpRequestHelper'

export { GetPayPal,UserLogin }

const GetPayPal = (params = {}) => {
  return httpRequest.get('/api/UserPermission/PayPalPayment', params)
}
/**
 * 
 * @param {} params 
 */
const UserLogin = (params) =>{
  return httpRequest.post('/api/UserPermission/login', params)
}

