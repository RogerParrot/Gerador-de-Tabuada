const form = document.querySelector("#form")
const tabDo = document.querySelector("#tab-do")
const multAte = document.querySelector("#mult-ate")

const resultado = document.querySelector("#resultado")

// console.log(form, tabDo, multAte)

const createTable = function (number, multNumber) {
    resultado.innerHTML = ""; // error

    for(i = 0; i <= multNumber; i++) {
        const result = number * i

        // console.log(result)

        const template = `<div class="tabuada">
                <p>${number} x ${i} = ${result}</p>
            </div>`

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html") // transforma uma string em html
        const tabuada = htmlTemplate.querySelector(".tabuada") // seleciona o item "tabuada" do html
        resultado.appendChild(tabuada) // adiciona o item "tabuada" dentro do item "resultado" com appendChild()
        
        // esse processo vai ser feito em varias linhas, ja que é um loop
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const tabNumber = +tabDo.value
    const multNumber = +multAte.value

    // console.log(tabNumber, multNumber)
    
    if(!tabNumber || !multNumber) return

    createTable(tabNumber, multNumber)
})