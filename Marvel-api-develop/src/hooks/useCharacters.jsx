import { useEffect, useState } from "react"
import { reqCharacters } from "../service/characters"
import { MarvelApp } from "../components/MarvelApp"

export const useCharacters = (page) => {

    const [characters, setCharacters] = useState([])
 
    useEffect(() => {
        reqCharacters(page).then((data) => {
            console.log("Fetched data:", data)
            setCharacters(data.results)
        })
    }, [page])

    //Retorno del Hook
    return {
        characters,
    }
}
