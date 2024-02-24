import { Component } from "react";
import { PokemonForm } from "./Pokemon/PokemonForm";
import { PokemonInfo } from "./Pokemon/PokemonImfo";

export class App extends Component {
state={
  pokemon:""
}

onNameChange=(name)=>{
  this.setState({
    pokemon:name
  })
  console.log(name)
}

 render(){ 
  return (
   <div>
   <PokemonForm onNameChange={this.onNameChange}/>
   <PokemonInfo pokemonName={this.state.pokemon}/>
   </div>
  )}
};
