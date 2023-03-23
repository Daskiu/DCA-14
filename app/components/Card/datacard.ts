async function nombrar_pokemones() {
	try {
		for (let i = 1; i < 6; i++) {
			const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + i).then((res) => {
				return res.json();
			});
			console.log(pokemon.name);
		}
	} catch (error) {
		console.log(error);
	}
}