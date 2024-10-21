import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Pokemon } from '../../types'
import type { RootState } from '../store'

export const fetchPokemonByName = createAsyncThunk<Pokemon, string>(
  'pokemon/fetchByName',
  async (name, { rejectWithValue }) => {
    const response = await fetch(https://pokeapi.co/api/v2/pokemon/${name})
    const data = await response.json()
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data)
    }
    return data
  },
)