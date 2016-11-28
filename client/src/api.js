const baseUrl = '/admin'


export const getProjects = () => fetch(baseUrl + '/projects').then(res => res.json())

export const getApis = project => fetch(baseUrl + '/projects/' + project).then(res => res.json())

export const addApi = (data, project) => fetch({
    url: baseUrl + '/project/' + project,
    methed: 'POST',
    body: JSON.stringify(data),
}).then(res => res.json())

export const saveApi = (data, project) => fetch({
    url: baseUrl + '/project/' + project,
    method: 'PUT',
    body: JSON.stringify(data)
}).then(res => res.json())

export const removeApi = (url, project) => fetch({
    url: baseUrl + '/project/' + project,
    method: 'DELETE',
    body: JSON.stringify({url}),
}).then(res => res.json())

export default {
    getApis,
    getProjects,
    addApi,
    saveApi,
    removeApi
}