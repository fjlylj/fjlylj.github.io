const config= apiConfig;
const {accessTokenField,accessKey,successCode} = apiConfig;
function encryptData(data) {
  let newData = JSON.parse(JSON.stringify(data));
  newData["key"] = config.secretKey;
  let sortData = {};
  Object.keys(newData)
    .sort()
    .map((key) => {
      sortData[key] = newData[key];
      return newData[key];
    });
  return CryptoJS.MD5(Qs.stringify(sortData)).toString().toUpperCase();
}

function headerData(token,data){
    let newData = JSON.parse(JSON.stringify(data));
    const t = dayjs().unix();
    newData['t'] = t;
    newData['token'] = token;
    newData['client-type'] = 'wap';
    return {
        token,
        t,
        'client-type':newData['client-type'],
        'sign':encryptData(newData)
    }
}

const axiosRequest = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: '',
    // 超时
    timeout: 300000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
})


// 响应拦截器
axiosRequest.interceptors.response.use(res => {
        // 未设置状态码则默认成功状态
        return res.data
    },
    error => {
        mui.toast(error)
        return Promise.reject(error)
    }
)

