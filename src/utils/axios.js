import axios from 'axios';
import qs from 'qs';
class Axios {
  constructor () {
    this.Instance = axios.create();
    this.requestCount = 0;
    this.loading = false; //  所有请求的loading，所有请求完成后位false
    this.setInterceptor();
  }
  /* A function that is used to set the interceptor. */
  setInterceptor () {
    this.Instance.interceptors.request.use( config => {
      this.loading = true;
      this.requestCount++;
      return config;
    });
    this.Instance.interceptors.response.use( res => {
      this.requestCount--;
      if(this.requestCount === 0){
        this.loading = false;
      }
      if(res.status === 200){
        return Promise.resolve(res.data);
      }
    },
    error => {
      return Promise.reject(error.message);
    })
  }
  /**
   * "This function is used to make a get request to the server use get method."
   *
   * @param url - The url to which the request is sent.
   * @param params - {}
   * @param options - {}
   * @returns The return value is the promise object.
   */
  get (url, params = {}, options) {
    return this.Instance.request({
      url: url,
      method: 'get',
      params: {
        ...params
      },
      ...options
    })
  }
  /**
   * "This function is used to make a get request to the server use post method."
   *
   * @param url - The url to which the request is sent.
   * @param data - {}
   * @param options - {}
   * @returns The return value is the promise object.
   */
  post (url, data = {}, options = {dataType:'json'}) {
    return this.Instance.request({
      url: url,
      method: 'post',
      data: options.dataType === 'qs' ? qs.stringify(data) : {
        ...data
      },
      ...options
    })
  }
  /* A function to cancel the request. */
  cancelSource () {
    const CancelToken = axios.CancelToken;
    return CancelToken.source();
  }
}
export default new Axios();
