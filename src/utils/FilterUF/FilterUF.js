import { useEffect } from 'react'
import api from '../../api/api'
import LocalStorage from '../LocalStorage/LocalStorage'

/*
    bora separar todas essas funções

    1º - assim que a pagina for renderizada devemos pegar o resultado da api e armazenar em um variavel de estado
    2º - ao clicar no botão devemos executar uma função que faça essa procura dentro dos dados recebidos da api

*/



const FilterUF = (valor, form) => {
    let UF = form.UF
    let closed = form.displayClosed

    // se o usuario quiser que mostre as unidades fechadas será retornado true 
    let listaUni = []

    for(let i = 0; i < valor.length; i++) {

        // O split vai dividir a string que veio da api e retorna uma lista
        const streetSeparate = valor[i].content.split(" ")

        // dentro da lista o ultimo quase sempre armazena a UF 
        const lastStreet = streetSeparate[streetSeparate.length - 1]
        
        // se esse elemento que possivelmente está armazenado a UF conter a uf passada como parametro, mostre ela
        if(lastStreet.includes(UF)) {

            if(!closed && valor[i].opened === true ) {
                const result = valor[i]
                listaUni.push(result)

            } else if(closed) {
                const result = valor[i]
                listaUni.push(result)


            }
            

        } 

    }
    // console.log(listaUni)
    return listaUni
}

export default FilterUF