<script>
	import { onMount } from "svelte";

	let messageArray = [];
	let message;
	let newMessage;
	const socket = new WebSocket("ws://web-socket-playground.herokuapp.com");
	socket.addEventListener("message", function (event) {
		message = JSON.parse(event.data)
	});

	$: if (message) {
		if(Array.isArray(message)){
			messageArray = (message)
		} else if (typeof message ==='string') {
			messageArray = [...messageArray, message]
		}
	}

	const submitNewMessage = () => {
		socket.send(newMessage)
	}


	

	onMount(async () => {
		
	});
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Welcome to Svelte Chat!</h1>

	<div class="messages-container">
		{#each messageArray as singleMessage}
			<p>{singleMessage}</p>
		{/each}
	</div>
	<input bind:value={newMessage}>
	<button on:click={submitNewMessage}>Send!</button>



</main>
