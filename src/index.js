import { render } from "./modules/render";
import { UserService } from "./modules/userService";
import { addUsers } from "./modules/addUsers";
import { removeUsers } from "./modules/removeUsers";
import { changePermissions } from "./modules/changePermissions";
import { editUsers } from "./modules/editUsers";
import { filterUsers } from "./modules/filterUses";
import { sortUsers } from "./modules/sortUsers";
import { searchUsers } from "./modules/searchUsers";

const url = 'https://grey-amethyst-hydrogen.glitch.me/users/' //rs/

window.userService = new UserService // мы создаем новое поле в глобальном объекте window, после чего это поле может вызываться откуда угодно.

const start = (url) => {
    const loader = document.querySelector('.loading-container')
    loader.style.display = 'block'
    userService.getData(url).then(data => {
        loader.style.display = 'none'
        render(data)
    })
}


start(url)
addUsers(url)
removeUsers(url)
changePermissions(url)
editUsers(url)
filterUsers(url)
sortUsers(url)
searchUsers(url)