import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
//import axios from 'axios';
/*id:number;
    name:string;
    types:string;
    stats:string[]
    urlFront:string;
    urlBack:string; */
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

export const fetchPokemons=createAsyncThunk<IPokemon[]>("pokemons/fetchPokemons",async(_, { rejectWithValue })=>{
    try{
        const response=await fetch('https://pokeapi.co/api/v2/pokemon');
        const data=response.json();
        console.log(data);
        return data;
        
    }catch(error){
        return rejectWithValue('Failed to fetch Pokémon data');
    }
})