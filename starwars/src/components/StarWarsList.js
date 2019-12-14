import React, {useState, useEffect} from 'react'
import axios from "axios"
import StarWarsCard from "./StarWarsCard"

const url = `https://swapi.co/api/people/`;

export default function Datalist(){
    const [state, setState] = useState([])
    useEffect(() => {
        axios
          .get(url)
          .then(response => {
            console.log(response.data);
            const characters = response.data.results;
            setState(characters);
          })
          .catch(error => {
            console.log("the data was not return", error);
          });
      }, [])

return (
    <div>
        <>
    {state.map(character => {
    return <StarWarsCard
    key={character.id}
    name={character.name}
    birthYear={character.birth_year}
    homeworld={character.homeworld}/>
    })}
    </>
    </div>
)
}
