import { render } from "./render"

export const editUsers = (url) => {
    const tbody = document.querySelector('#table-body')
    const form = document.querySelector('form')
    const nameInput = document.querySelector('#form-name')
    const emailInput = document.querySelector('#form-email')
    const childenInput = document.querySelector('#form-children')

    try {
        tbody.addEventListener('click', (e) => {
            if (e.target.closest('.btn-edit')) {
                const tr = e.target.closest('tr')
                const id = tr.dataset.key

                userService.getData(url, id).then((user) => {
                    nameInput.value = user.name
                    emailInput.value = user.email
                    childenInput.checked = user.children

                    form.dataset.method = id
                })
            }
        })
    } catch (error) {
        console.log(`Ошибка запроса!\n${error.message}`)

        const errorBlock = document.createElement('div')
        errorBlock.innerHTML = `<div style="text-align: center; color: red; font-size: 22px;">Произошла ошибка, данные не были получены!</div>`
        document.querySelector('.table').after(errorBlock)
    }


    form.addEventListener('submit', (e) => {
        e.preventDefault()

        try {
            if (form.dataset.method) {
                const id = form.dataset.method
                const user = {
                    "name": nameInput.value,
                    "email": emailInput.value,
                    "children": childenInput.checked,
                    "permissions": false
                }

                userService.changeData(url, 'PUT', id, user).then(() => {
                    userService.getData(url).then(users => {
                        render(users)
                        form.reset()
                        form.removeAttribute('data-method')
                    })
                })
            }
        } catch (error) {
            console.log(`Ошибка отправки данных!\n${error.message}`)

            const errorBlock = document.createElement('div')
            errorBlock.innerHTML = `<div style="text-align: center; color: red; font-size: 22px;">Произошла ошибка, данные не были отправлены!</div>`
            document.querySelector('.table').after(errorBlock)
        }
    })
}