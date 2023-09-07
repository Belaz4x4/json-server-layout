export class UserService {
    getData(url, requestParameters = '') {
        return fetch(`${url}${requestParameters}`).then(response => response.json())
    }

    changeData(url, method, requestParameters = '', data = {}) {
        if (method !== 'DELETE') {
            return fetch(`${url}${requestParameters}`, {
                method: method,
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(response => response.json())
        } else {
            return fetch(`${url}${requestParameters}`, {
                method: method,
            }).then(response => response.json())
        }
    }
}