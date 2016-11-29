const baseUrl = location.origin + '/admin'

export const getApis = project => fetch(baseUrl + '/project').then(res => res.json())

export const saveApi = (url, data) => fetch(baseUrl + '/project', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({data, url})
}).then(res => res.json())

export const removeApi = url => fetch(baseUrl + '/project', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({url}),
}).then(res => res.json())

export default {
    getApis,
    saveApi,
    removeApi
}