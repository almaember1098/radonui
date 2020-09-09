export function incode(id) {
    var el = document.getElementById(id)
    var result = el.innerHTML
    el.remove()
    return result
}