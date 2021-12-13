<script>
	$: nationalized = fetch('/dostuff')
		.then((res) => res.json())
		.then((returned) => {
			nationalized = returned.word
		})
		.catch(err => {console.log(err)})

	const handleClick = () => {
		nationalized = fetch('/dostuff')
			.then((res) => res.json())
			.then((returned) => {
				nationalized = returned.word
			})
			.catch(err => {console.log(err)})
	}

</script>

<main>
	<h1>Nationalize Everything</h1>

	<div class='request-block'>
		<p>nationalize {nationalized}</p>
		<button on:click={handleClick}>nationalize something</button>
		
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff9ec3;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 400;
		text-shadow: 1px 1px 4px rgba(0,0,0,.15);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>