
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from './store'
import App from './components/App'
import LoadingView from './components/LoadingView'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
     <Router>
     <PersistGate loading={<LoadingView />} persistor={persistor}>
      <App />
      </PersistGate>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
