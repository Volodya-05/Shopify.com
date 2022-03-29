export const sendRequest = (url, method, body = null, formData = false) => {
    const headers = {}
    if (!formData) {
        headers['Content-type'] = 'application/json; charset = utf-8';
    }
    return fetch(url, {
        method,
        body
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            throw err
        })
}