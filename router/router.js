import Navigo from 'navigo'

const test = require('../components/test')
const index = require('../components/index')
const board = require('../components/board')
const register = require('../components/register')

const router = new Navigo()
let content = {"component": ""}

router.on({
    '/': () => {
        content.component = renderComponent('index')
    },
    '/test': () => {
        content.component = renderComponent('test')
    },
    '/board': () => {
        content.component = renderComponent('board')
    },
    '/register': () => {
        content.component = renderComponent('register')
    }
}).resolve()

function renderComponent(param) {
    var boa = eval(param).component.name
    return `<${boa}></${boa}>`
}


export default {content}