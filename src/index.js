import './scss/styles.scss'
import api from './api'

const test = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=${api}`, {})
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error()
    }
}
// test().then((data) => {
//     console.log(data)
// }).catch((e) => {
//     console.log(e)
// })