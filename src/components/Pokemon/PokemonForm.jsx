




export const PokemonForm=({onNameChange})=>{
    return(
        <form onSubmit={(e)=>{
        e.preventDefault()
        onNameChange(e.currentTarget.elements.input.value)
        e.currentTarget.reset()}}>
            <input type="text" name="input" />
            <button type="submit" >Search</button>
        </form>
    )
}