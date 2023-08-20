import dotenv from 'dotenv'
import { getRequest } from '../utils/axios.js'

dotenv.config('../.env')

const url = 'https://api.nasa.gov/neo/rest/v1' // nasa API

// list of asteroids based on their closest approach date to earth
export const feed = async (req, res) => {
    const { start_date, end_date } = req.query

    let completeUrl = ''

    if (start_date) {
        completeUrl += `start_date=${start_date}&`
    }
    if (end_date) {
        completeUrl += `end_date=${end_date}&`
    }

    getRequest(`${url}/feed?${completeUrl}api_key=${process.env.API_KEY}`, res)
}

// lookup for a specific asteorid based on its id
export const lookUp = (req, res) => {
    const { id } = req.params

    getRequest(`${url}/neo/${id}?api_key=${process.env.API_KEY}`, res)
}

// overall asteroids data
export const browse = (req, res) => {
    getRequest(`${url}/neo/browse?api_key=${process.env.API_KEY}`, res)
}