function Grid(el, minval = 0, maxval = 255) {
    this.el = el

    this.minval = minval
    this.maxval = maxval

    return this
}
Grid.prototype.setValues = function(values) {
    this.values = values
}
Grid.prototype.getValues = function() {
    return this.values
}
Grid.prototype.draw = function() {
    this.el.innerHTML = ''
    let table = document.createElement('table')
    table.classList.add('grid')
    this.values.forEach((rowValues) => {
        let tr = document.createElement('tr')
        rowValues.forEach((value) => {
            let td = document.createElement('td')
            td.innerText = value
            let x = Math.floor(100 * (1 - (value - this.minval) / (this.maxval - this.minval)))
            let y = Math.floor(360 * (1 - (value - this.minval) / (this.maxval - this.minval)))
            td.style.backgroundColor = `hsl(100,0%,${x}%)`
            td.style.color = `hsl(${y},100%,50%)`
            tr.appendChild(td)
        })
        table.appendChild(tr)
    })
    this.el.appendChild(table)
}