
function dataGenerator(length, top, bottom) {
    var arr = []
    length = length || 100
    top = top || 500
    bottom = bottom || 0
    for (var i = 0; i< length; i++) {
        arr.push(Math.ceil(Math.random() * (top - bottom) + bottom))
    }
    return arr
}