import { render } from "./render"

export const sortUsers = (url) => {
    const thead = document.querySelector('.table-dark')

    thead.addEventListener('click', (e) => {
        const th = e.target.closest('th')

        if (th.dataset.column !== 'actions') {
            const colName = th.dataset.column
            let isSort = th.dataset.sort === 'false' ? false : true

            userService.getData(url, `?_sort=${colName}&_order=${isSort ? 'asc' : 'desc'}`)
                .then(users => {
                    render(users)
                })

            th.dataset.sort = !isSort
        }
    })
}
