import { Marca } from "../models/Marca.js"
import { Vinho } from "../models/Vinho.js"

//função de get - vai listar os marcas no insomnia
export async function marcaIndex(req, res) {
    try {
        const marcas = await Marca.findAll({
            include: Vinho
        })
        res.status(200).json(marcas)
    } catch (error) {
        res.status(400).send(error)
    }
}

// função de create - vai criar um novo registro no insomnia
export async function marcaCreate(req, res) {
    const { nome, cidade } = req.body

    if (!nome || !cidade ){
        res.status(400).json("Erro... Informe nome e cidade.")
        return
    }

    try {
        const marca = await Marca.create({
            nome, cidade
        })
        res.status(201).json(marca)
    } catch (error) {
        res.status(400).send(error)
    }
}

// função de update/alterar registro no insomnia
export async function marcaUpdate(req, res) {
    const { id } = req.params

    const { nome, cidade } = req.body

    if (!nome || !cidade) {
        res.status(400).json("Erro... Informe nome e cidade.")
        return
    }

    try {
        const marca = await marca.update({
            nome, cidade
        }, {
            where: { id }
        })
        res.status(200).json(marca)
    } catch (error) {
        res.status(400).send(error)
    }
}

//função de deletar registro no insomnia
export async function marcaDelete(req, res) {
    const { id } = req.params

    try {
        await Marca.destroy({
            where: { id }
        })
        res.status(200).json({ msg: "Ok! Removido com sucesso :)" })
    } catch (error) {
        res.status(400).send(error)
    }
}

// //função de retornar os marcas por ordem de ano em ordem desc
// export async function marcaOrdem(req, res) {

//     try {
//         const marcas = await marca.findAll({
//             order: [
//                 // Will escape title and validate DESC against a list of valid direction parameters
//                 ['ano', 'DESC']

//             ]
//         })
//         res.status(200).json(marcas)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// }