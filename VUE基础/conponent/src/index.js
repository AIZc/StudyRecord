import logo from './assets/imgs/logo.png'
import  './assets/css/my.css'
import {sum} from './js/math'

const image = new Image()
image.src = logo
console.log('444',sum(2,3))
document.body.appendChild(image)
console.log('Hello Webpack!')
document.getElementById('root').innerHTML = '<h1>Hello2223334444</h1>'