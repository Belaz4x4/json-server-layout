export const changePermissions = (url) => {
    const tbody = document.querySelector('#table-body')

    tbody.addEventListener('click', (e) => {
        try {
            if (e.target.closest('input[type=checkbox]')) {
                const tr = e.target.closest('tr')
                const input = tr.querySelector('input[type=checkbox]')
                const id = tr.dataset.key

                userService.changeData(url, 'PATCH', id, { permissions: input.checked })
            }
        } catch (error) {
            console.log(`Ошибка отправки данных!\n${error.message}`)

            const errorBlock = document.createElement('div')
            errorBlock.innerHTML = `<div style="text-align: center; color: red; font-size: 22px;">Произошла ошибка, данные не были отправлены!</div>`
            document.querySelector('.table').after(errorBlock)
        }

    })

}
