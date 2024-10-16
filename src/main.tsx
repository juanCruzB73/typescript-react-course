import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './todo-dad-redux/App.tsx'
import { Provider } from 'react-redux'
import { store } from './todo-dad-redux/redux/store/store.ts'



createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
)
