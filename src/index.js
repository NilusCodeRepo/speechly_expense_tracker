import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {Provider} from './context/context'
import {SpeechProvider} from '@speechly/react-client'

ReactDOM.render(
<SpeechProvider appId="61252dca-cea1-43ac-afe6-958ea984c2ca" language="en-us">   
<Provider>
<App />
</Provider>
</SpeechProvider> ,document.getElementById('root'))
