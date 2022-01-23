
const LocalStorage = {


    savaDataForm(data) {
        localStorage.setItem('dataForm', JSON.stringify(data))
    },

    getDataForm() {
        const data = localStorage.getItem('dataForm');
        if(!data) {
            return null
        }

        const parsedData = JSON.parse(data)
        return parsedData
    },

    clearData() {
        localStorage.removeItem('dataForm')
    }
}

export default LocalStorage