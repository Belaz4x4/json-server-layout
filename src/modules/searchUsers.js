import { render } from "./render"
import { debounce } from "./helpers"

export const searchUsers = (url) => {
    const input = document.getElementById('search-input')

    const debounceSearch = debounce(() => {
        userService.getData(url, `?name_like=${input.value}`).then(users => {
            render(users)
            debounce()
        })
    }, 400)

    input.addEventListener('input', debounceSearch)
}