
const LocalStorage = {


    savaData(nameKay, data) {
        localStorage.setItem(nameKay, JSON.stringify(data))
    },

    getData(nameKay) {
        const data = localStorage.getItem(nameKay);
        if(!data) {
            return null
        }

        const parsedData = JSON.parse(data)
        return parsedData
    },

    clearData(nameKay) {
        localStorage.removeItem(nameKay)
    }
}

export default LocalStorage