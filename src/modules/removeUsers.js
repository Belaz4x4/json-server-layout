import { render } from "./render"

export const removeUsers = (url) => {
    const tbody = document.querySelector('#table-body')

    tbody.addEventListener('click', (e) => {
        if (e.target.closest('.btn-remove')) {
            const tr = e.target.closest('tr')
            const id = tr.dataset.key

            userService.changeData(url, 'DELETE', id).then(() => {
                userService.getData(url).then(data => render(data))
            })
        }
    })
}