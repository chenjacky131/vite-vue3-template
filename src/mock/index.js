import Mock from 'mockjs';
export default [
  {
    url: '/test/getUserInfo', // 注意，这里只能是string格式
    method: 'get',
    response: () => {
      return {
        'id': '@guid',
        'name': '@cname',
        'url': '@url',
        'age': '@natural(1,99)',
        'county': Mock.mock('@county(true)'), //  县
        'time': '@datetime'
      }
    }
  }
]
