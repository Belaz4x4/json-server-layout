export const debounce = (func, ms = 300) => { // функция замедляет запросы к серверу, чтобы они происходили на вводе не каждой буквы
    let timer

    return (...args) => {
        clearTimeout(timer)

        timer = setTimeout(() => {
            func.apply(this, args) // возвращаем функцию, привязанную к контексту вызова
        }, ms)

    }
}