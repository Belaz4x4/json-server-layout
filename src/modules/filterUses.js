import { render } from "./render"

export const filterUsers = (url) => {
    const btnIsChildren = document.getElementById('btn-isChildren')
    const btnIsPermissions = document.getElementById('btn-isPermissions')
    const btnIsAll = document.getElementById('btn-isAll')

    btnIsChildren.addEventListener('click', () => {
        userService.getData(url, '?children=true').then(users => {
            render(users)
        })
    })

    btnIsPermissions.addEventListener('click', () => {
        userService.getData(url, '?permissions=true').then(users => {
            render(users)
        })
    })

    btnIsAll.addEventListener('click', () => {
        userService.getData(url).then(users => {
            render(users)
        })
    })
}