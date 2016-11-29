const baseUrl = location.origin + '/admin'

export const getApis = project => fetch(baseUrl + '/projects').then(res => res.json())

export const saveApi = (url, data) => fetch(baseUrl + '/project', {
    method: 'POST',
    body: JSON.stringify({data, url})
}).then(res => res.json())

export const removeApi = url => fetch(baseUrl + '/project', {
    method: 'DELETE',
    body: JSON.stringify({url}),
}).then(res => res.json())

export default {
    getApis,
    saveApi,
    removeApi
}