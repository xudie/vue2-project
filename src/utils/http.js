import axiosInstance from './axios'

/**
 * GET请求
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @param {object} config 其他配置
 * @returns {Promise}
 */
export function get(url, params = {}, config = {}) {
  return axiosInstance({
    method: 'get',
    url,
    params,
    ...(config || {}) // 确保config是可迭代对象
  })
}

/**
 * POST请求
 * @param {string} url 请求地址
 * @param {object} data 请求体数据
 * @param {object} config 其他配置
 * @returns {Promise}
 */
export function post(url, data = {}, config = {}) {
  return axiosInstance({
    method: 'post',
    url,
    data,
    ...(config || {}) // 确保config是可迭代对象
  })
}

/**
 * PUT请求
 * @param {string} url 请求地址
 * @param {object} data 请求体数据
 * @param {object} config 其他配置
 * @returns {Promise}
 */
export function put(url, data = {}, config = {}) {
  return axiosInstance({
    method: 'put',
    url,
    data,
    ...(config || {}) // 确保config是可迭代对象
  })
}

/**
 * DELETE请求
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @param {object} config 其他配置
 * @returns {Promise}
 */
export function del(url, params = {}, config = {}) {
  return axiosInstance({
    method: 'delete',
    url,
    params,
    ...(config || {}) // 确保config是可迭代对象
  })
}

/**
 * PATCH请求
 * @param {string} url 请求地址
 * @param {object} data 请求体数据
 * @param {object} config 其他配置
 * @returns {Promise}
 */
export function patch(url, data = {}, config = {}) {
  return axiosInstance({
    method: 'patch',
    url,
    data,
    ...(config || {}) // 确保config是可迭代对象
  })
}

// 导出所有方法
export default {
  get,
  post,
  put,
  delete: del,
  patch
}

// 若要 挂载到Vue原型上，将下列代码替换上面 export default，并在 main.js 中 导入
// const http = {
//   get,
//   post,
//   put,
//   delete: del
// };
// export default http;
