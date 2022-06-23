# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

##### ajax
```
 import axios from '@/utils/axios.js';
 const getData = () => { //  取消请求的实例方法
   const source = axios.cancelSource();
   axios.get('/api/geoserver/tiger/ows', {
     "service": "WFS",
     "version": "1.0.0",
     "request": "GetFeature",
     "typeName": "tiger:giant_polygon",
     "maxFeatures": "50",
     "outputFormat": "application/json"
   },{
     "cancelToken": source.token
   }).then(res => {
     console.log('返回的数据:', res)
   }).catch(err => {
     console.error(err)
   })
   source.cancel('取消请求')
 }

const getData = () => { //  post请求格式的示例
  axios.post('/api/geoserver/tiger/ows', {
    "service": "WFS",
    "version": "1.0.0",
    "request": "GetFeature",
    "typeName": "tiger:giant_polygon",
    "maxFeatures": "50",
    "outputFormat": "application/json"
  },{
    "dataType": "qs"  //  默认为json格式
  }).then(res => {
    console.log('返回的数据:', res)
  }).catch(err => {
    console.error(err)
  })
}
```
##### 读取配置文件
```
import.meta.env
```

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
