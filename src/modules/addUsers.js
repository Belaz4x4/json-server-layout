import { render } from "./render"

export const addUsers = (url) => {
    const form = document.querySelector('form')
    const nameInput = document.querySelector('#form-name')
    const emailInput = document.querySelector('#form-email')
    const childenInput = document.querySelector('#form-children')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        if (!form.dataset.method) {
            const user = {
                "name": nameInput.value,
                "email": emailInput.value,
                "children": childenInput.checked,
                "permissions": false
            }

            userService.changeData(url, 'POST', undefined, user).then(() => {
                userService.getData(url).then(users => {
                    render(users)
                    form.reset()
                })
            })
        }
    })
}