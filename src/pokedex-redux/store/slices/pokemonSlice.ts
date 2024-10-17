import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemons } from '../thunks/pokemonThunk';

interface IPokemon{
    id: number;
    name: string;
    url: string;
}

interface IPokemonState{
    pokemons:IPokemon[];
    loading:boolean;
    error:string|null;
}

const initialState:IPokemonState={
    pokemons:[],
    loading:false,
    error:null,
}

const pokemonSlice=createSlice({
    name: 'pokemons',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchPokemons.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchPokemons.fulfilled,(state,action)=>{
            state.loading = false;
            state.pokemons = action.payload;
        })
        .addCase(fetchPokemons.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string
        });
    },
});

export default pokemonSlice.reducer;