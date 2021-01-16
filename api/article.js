import request from './request'

/**
 * 获取文章列表
 * @return {promise}
 */
export function list() {
    return request({
        method: 'GET',
        url: '/api/v1/articles',
    })
}

/**
 * 获取栏目列表
 * @return {promise}
 */
export function categories() {
    return request({
        method: 'GET',
        url: '/api/v1/articles/categories',
    })
}

/**
 * 获取文章详情
 * @param {int} id
 * @return {promise}
 */
export function detail(id) {
    return request({
        method: 'GET',
        url: '/api/v1/articles/' + id,
    })
}