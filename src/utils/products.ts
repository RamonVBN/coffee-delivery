import expressoTradicionalImage from '../assets/Type=Expresso.png'
import expressoAmericanoImage from '../assets/Type=Americano.png'
import expressoCremosoImage from '../assets/Type=Expresso Cremoso.png'
import expressoGeladoImage from '../assets/Type=Café Gelado.png'
import cafeComLeiteImage from '../assets/Type=Café com Leite.png'
import latteImage from '../assets/Type=Latte.png'
import capuccinoImage from '../assets/Type=Capuccino.png'
import macchiatoImage from '../assets/Type=Macchiato.png'
import mocaccinoImage from '../assets/Type=Mochaccino.png'
import chocolateQuenteImage from '../assets/Type=Chocolate Quente.png'
import cubanoImage from '../assets/Type=Cubano.png'
import havaianoImage from '../assets/Type=Havaiano.png'
import arabeImage from '../assets/Type=Árabe.png'
import irlandesImage from '../assets/Type=Irlandês.png'




export const coffees = [
    {
        image: expressoTradicionalImage ,
        categories: ['tradicional'] ,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos' ,
        price: 9.90 ,

    },
    
    {
        image: expressoAmericanoImage ,
        categories: ['tradicional'] ,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional' ,
        price: 9.90 ,

    },

    {
        image: expressoCremosoImage ,
        categories: ['tradicional'] ,
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa' ,
        price: 9.90 ,

    },

    {
        image:  expressoGeladoImage ,
        categories: ['tradicional', 'gelado'] ,
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo' ,
        price: 9.90 ,

    },

    {
        image:  cafeComLeiteImage ,
        categories: ['tradicional', 'com leite'] ,
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado' ,
        price: 9.90 ,

    },

    {
        image:  latteImage ,
        categories: ['tradicional', 'com leite'] ,
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa' ,
        price: 9.90 ,

    },

    {
        image: capuccinoImage ,
        categories: ['tradicional', 'com leite'] ,
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma' ,
        price: 9.90 ,

    },

    {
        image: macchiatoImage ,
        categories: ['tradicional', 'com leite'] ,
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma' ,
        price: 9.90 ,

    },

    {
        image: mocaccinoImage ,
        categories: ['tradicional', 'com leite'] ,
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma' ,
        price: 9.90 ,

    },

    {
        image: chocolateQuenteImage ,
        categories: ['especial', 'com leite'] ,
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café' ,
        price: 9.90 ,

    },

    {
        image: cubanoImage ,
        categories: ['especial', 'alcoólico', 'gelado'] ,
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã' ,
        price: 9.90 ,

    },

    {
        image: havaianoImage ,
        categories: ['especial'] ,
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco' ,
        price: 9.90 ,

    },

    {
        image: arabeImage ,
        categories: ['especial'] ,
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias' ,
        price: 9.90 ,

    },

    {
        image: irlandesImage ,
        categories: ['especial', 'alcoólico'] ,
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly' ,
        price: 9.90 ,

    },
    
    
]