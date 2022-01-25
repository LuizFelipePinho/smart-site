import axios from 'axios'

const api = async () => {

    return await axios.get("https://test-frontend-developer.s3.amazonaws.com/data/locations.json")
}

export default api