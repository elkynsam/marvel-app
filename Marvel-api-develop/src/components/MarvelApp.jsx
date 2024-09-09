import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters"
import { useState } from "react"

export const MarvelApp = () => {


    const [page, setPage] = useState(1)
    const {characters} = useCharacters(page)
    
    const handleChange = (e, value) => {
        setPage(value)
    }

    return (
        <>
            <h1>current page {page}</h1>
            <GridCharacters characters={characters}/>
            <Pagination style={{width: "100%", display: "flex", justifyContent: "center"}} count={10} page={page} onChange={handleChange} />
        </>
    )
}
  
/*data.results.map((characters) => {
                console.log(characters.name)
                setCharacters(characters.name)
            })*/