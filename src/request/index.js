import axios from 'axios';
// axios.defaults.withCredentials = true

// axios.interceptors.request.use(
//     config => {
//         if (config.method == 'post') {
//             config.data = {
//                 ...config.data,
//                 _t: Date.parse(new Date()) / 1000
//             }
//         }
//         return config
//     },
//     function(error) {
//         return Promise.reject(error)
//     }
// )


// 基础配置

let service = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 3000,

})

// 配置拦截器 

service.interceptors.response.use(function(response) {
    return response.data;
}, function(error) {
    return Promise.reject(error);
});





export default service