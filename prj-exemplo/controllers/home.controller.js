module.exports.home = async function home(req, res){
    const pessoa = {
        nome: 'Yago Menezes',
        idade: 21,
        altura: 1.85,
        cursos: {
            nome: 'Aframe.io',
            tecnologias: 'nodejs+github'
        },
        comidasPreferidas: ['pizza', 'lanche', 'salgados'],
        amigos: [
            {
                nome: 'Higor',
                idade: 21
            },
            {
                nome: 'Lucas',
                idade: 22
            }
        ]
    }

    //console;console.log("\n" + pessoa.cursos.nome)
    //res.json(pessoa)
    res.send(pessoa)
}