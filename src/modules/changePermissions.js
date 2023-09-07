export const changePermissions = (url) => {
    const tbody = document.querySelector('#table-body')

    tbody.addEventListener('click', (e) => {
        if (e.target.closest('input[type=checkbox]')) {
            const tr = e.target.closest('tr')
            const input = tr.querySelector('input[type=checkbox]')
            const id = tr.dataset.key

            userService.changeData(url, 'PATCH', id, { permissions: input.checked })
        }
    })

}
