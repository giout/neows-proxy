import axios from "axios"

export const getRequest = (url, res) => {
    axios.get(url)
    .then(response => {
        const { status, data } = response
        res.status(status).json(data)
    })
    .catch(error => {
        const { code, http_error, error_message } = error.response.data
        
        if (code === undefined) {
            res.status(404).json({
                error: 'NOT FOUND',
                msg: 'Asteroid not found.'
            })
        } else {
            res.status(code).json({
                error: http_error,
                msg: error_message
            })
        }
    })
}