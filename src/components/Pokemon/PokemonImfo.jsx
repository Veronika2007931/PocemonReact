import { PureComponent } from "react";




export class PokemonInfo extends PureComponent{

state={
    pokemon:"",
    loading: false

}

componentDidUpdate(prevProps){

    if(prevProps.pokemonName !== this.props.pokemonName){   
        this.setState({isLoading: true, pokemon: null})
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
    .then(res => res.json())
    .then(pokemon=>{
        this.setState({pokemon})
        this.setState({isLoading: false})
    })}
}

 render(){
    const {pokemon}=this.state
    return(
        <>
       {pokemon && <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
        </div>}
        </>
    )
 }
 
}