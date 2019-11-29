import Axios from 'axios'

export function request(config){
  const instance = Axios.create({
    baseURL: '',
    timeout:3000,
  })
  //攔截器
  instance.interceptors.request.use(config => {
    console.log(config);
    return config;
  }, err => {
      console.log(err);
  })
  instance.interceptors.response.use(res => { 
    return res.data;
  }, err => { 
      console.log(err);
  })
}

// Axios({
//    //拿數據的URL
// }).then((res) => {
//  //拿到返回的數據  
// }).catch((err) => {
//   //沒有返回數據時做出處理
// });



// Axios.all([Axios({
//   url: '',
// }), Axios({
//   url: '',
//   params: {

//   }
// })
// ]).then(res => { 

// })


// Axios.defaults.baseURL = '';
// Axios.defaults.timeout = 3000;
// Axios.all([Axios({
//   url:''
// }), Axios({
//   url:'home/data',
//   params: {
//     type: 'sell',
//     page:5
//   }
// })]).then(res => { 

// })
