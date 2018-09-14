function Convo(el, breadth, source, target) {
    this.el = el
    this.breadth = breadth
    this.target = target

    function change() {
        let values = []
        Array.from(el.querySelectorAll('tr')).forEach((tr, i) => {
            
            let iva = []
            Array.from(tr.querySelectorAll('td')).forEach((td, j) => {
                iva.push(parseFloat(td.innerText))
            })
            values.push(iva)
        })
    
        let output = []

        let vals = source.getValues()

        for (var i = 1; i < vals.length - 1; i++) {
            let ivals = []
            for (var j = 1; j < vals[i].length - 1; j++) {
                ivals.push(
                    values[0][0] * vals[i - 1][j - 1] +
                    values[0][1] * vals[i - 1][j] +
                    values[0][2] * vals[i - 1][j + 1] +
                    values[1][0] * vals[i][j - 1] +
                    values[1][1] * vals[i][j] +
                    values[1][2] * vals[i][j + 1] +
                    values[2][0] * vals[i + 1][j - 1] +
                    values[2][1] * vals[i + 1][j] +
                    values[2][2] * vals[i + 1][j + 1]
                )
            }
            output.push(ivals)
        }

        to.setValues(output)
        to.draw()
    }
    
    el.innerHTML = ''

    let table = document.createElement('table')
    table.className = 'convo'
    for (var i = 0; i < breadth; i++) {
        let tr = document.createElement('tr')
        for (var j = 0; j < breadth; j++) {
            let td = document.createElement('td')
            td.setAttribute('contenteditable', true)
            td.addEventListener('keyup', change)
            td.innerText = 0
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

    el.appendChild(table)
    return this
}
