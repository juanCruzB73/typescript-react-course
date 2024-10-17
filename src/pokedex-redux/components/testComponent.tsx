import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../store/thunks/pokemonThunk';
import { RootState, useAppDispatch } from '../store/store';

export const testComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pokemons, loading, error } = useSelector((state: RootState) => state.yourSlice);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {pokemons.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

