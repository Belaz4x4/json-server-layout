import { render } from "./render"

export const editUsers = (url) => {
    const tbody = document.querySelector('#table-body')
    const form = document.querySelector('form')
    const nameInput = document.querySelector('#form-name')
    const emailInput = document.querySelector('#form-email')
    const childenInput = document.querySelector('#form-children')

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


    form.addEventListener('submit', (e) => {
        e.preventDefault()

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
    })
}