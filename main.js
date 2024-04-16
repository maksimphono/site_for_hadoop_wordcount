import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href='/site_for_hadoop_wordcount/numbers_as_words'>Numbers</a>
    <h1>Hello Hadoop wordcount</h1>
    <p>This is a fucking simple page to count freaking words using my favourite hadoop. Lets see if it can count them right</p>
  </div>
`

setupCounter(document.querySelector('#counter'))
