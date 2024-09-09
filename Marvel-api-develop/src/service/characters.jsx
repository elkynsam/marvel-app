import CryptoJS from "crypto-js"
import { MarvelApp } from "../components/MarvelApp"

const time_stamp = new Date().getTime()
const private_api_key = "a952d859e88a5fba09b82a35bb569af80d97aee9"
const public_api_key = "263b458dc71a1a6b17c3a3a788b0f2b8"

const hash = CryptoJS.MD5(time_stamp + private_api_key + public_api_key).toString()


export const reqCharacters = async (page = 1) => {
    const offset = (page - 1)*20
    const resp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}`)
    const {data} = await resp.json()
    
    return data
}