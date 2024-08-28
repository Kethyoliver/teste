import Logo from '../../assets/log_1.png'

import bolo_brigadeiro from '../../assets/bolo_brigadeiro.png'
import bolo_maracuja from '../../assets/bolo_maracuja.png'
import bolo_morango from '../../assets/bolo_morango.png'
import bolo_nozses from '../../assets/bolo_nozses.png'
import bolo_sonho from '../../assets/bolo_sonho.png'
import bolo_ninho from '../../assets/bolo_ninho.png'
import doces from '../../assets/doces.jpg'
import salgados from '../../assets/salgados.jpg'

const produto = {
    topo: {
        titulo: "Detalhes dos produtos",
    },
    detalhes: {
        nome: "Kit para Festas",
        logo: Logo,
        detalhes:"Você poderá escolher um bolo, um centro de docinhos e um centro de salgados variados:",
        preco: "R$48,00 Kilos",
        botao:"Lista de Desejos", 
    },
    itens: {
        titulo: "Itens",
        lista: [
            {
                nome: "Bolo de Brigadeiro",
                imagem: bolo_brigadeiro,
            },
            {
                nome:"Bolo de Maracuja com Trufado",
                imagem: bolo_maracuja,
            },
            {
                nome:"Bolo de Morango",
                imagem: bolo_morango,
            },
            {
                nome:"Bolo com Nozes",
                imagem: bolo_nozses,
            },
            {
                nome:"Bolo de Sonho de Valsa",
                imagem: bolo_sonho,
            },
            {
                nome:"Bolo Ninho",
                imagem: bolo_ninho,
            },
            {
                nome:"Doces Gourmet",
                imagem: doces,
            },
            {
                nome:"Salgados váriados",
                imagem: salgados,
            }
        ]
    }
}

export default produto;
