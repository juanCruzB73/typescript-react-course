import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
//import { store } from './todo-dad-redux/redux/store/store.ts'
//import {App} from './todo-dad-redux/App.tsx'
import PokedexApp from './pokedex-redux/PokedexApp.tsx'
import { store } from './pokedex-redux/store/store.ts'



createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <Provider store={store}>
      <PokedexApp/>
    </Provider>
  </StrictMode>
)
