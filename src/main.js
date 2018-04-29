import m from 'mithril'
import 'tachyons/css/tachyons.css'

import HelloWorld from './helloworld.jsx'

document.addEventListener('DOMContentLoaded', () => {
    var root = document.getElementById("app")
    m.render(root, m(HelloWorld, {name:'YOU'}))
});
