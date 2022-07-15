function rolarDados (frequencia) {

    let soma = 0
    let frequenciaDosNumero = [
        {
            nome: '2',
            contador: 0
        },
        {
            nome: '3',
            contador: 0
        },
        {
            nome: '4',
            contador: 0
        },
        {
            nome: '5',
            contador: 0
        },
        {
            nome: '6',
            contador: 0
        },
        {
            nome: '7',
            contador: 0
        },
        {
            nome: '8',
            contador: 0
        },
        {
            nome: '9',
            contador: 0
        },
        {
            nome: '10',
            contador: 0
        },
        {
            nome: '11',
            contador: 0
        },
        {
            nome: '12',
            contador: 0
        },

    ]

    const body = document.querySelector('body')

    for(let i = 1; i <= frequencia; i++) {

        let dadoUm   = Math.floor(Math.random() * (6 - 1)) + 1
        let dadoDois = Math.floor(Math.random() * (6 - 1)) + 1
        soma = dadoUm + dadoDois

        for(let j = 0; j < frequenciaDosNumero.length; j++) {
            if(soma == frequenciaDosNumero[j].nome) {
                frequenciaDosNumero[j].contador += 1
                break
            }
        } 
    }

    const ul = document.createElement('ul')

    for(let k = 0; k < frequenciaDosNumero.length; k++) {
        const li = document.createElement('li')
        const p = document.createElement('p')
        
        p.innerText = `${frequenciaDosNumero[k].nome}: ${frequenciaDosNumero[k].contador}`
        li.appendChild(p)

        ul.appendChild(li)
    }

    body.appendChild(ul)

    return body
}




rolarDados (1000)