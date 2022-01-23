import axios from 'axios'

const api = {

    getData: axios.get("https://test-frontend-developer.s3.amazonaws.com/data/locations.json")
    // .then( (res) => res.data)
    // .catch( (err) => err)
}

export default api