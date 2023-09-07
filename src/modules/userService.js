export class UserService {
    getData(url, urlParameters = '') {
        return fetch(`${url}${urlParameters}`)
            .then(response => response.json())
            .catch(error => {
                console.log(`Ошибка получения данных!\n${error.message}`)
            })
    }

    changeData(url, method, urlParameters = '', data = {}) {
        let requestParameters
        if (method !== 'DELETE') {
            requestParameters = {
                method: method,
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        } else {
            requestParameters = {
                method: method,
            }
        }

        return fetch(`${url}${urlParameters}`, requestParameters)
            .then(response => response.json())
            .catch(error => {
                console.log(`Ошибка отправки данных!\n${error.message}`)
            })
    }
}