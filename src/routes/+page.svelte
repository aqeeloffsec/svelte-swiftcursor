<script lang="ts">
	import Cursor from '$lib/components/Cursor.svelte';

	let cursorColor = $state('black');
	let cursorSize = $state(28);
	let cursorSquare = $state(false);
	let onHoverAnimate = $state(false);

	$effect(() => {
		const cursorElement = document.querySelector('.cursor-element');
		const cursorOutput = document.querySelector('.cursor-output');
		if (cursorElement && cursorOutput) {
			cursorOutput.textContent = `<Cursor cColor="${cursorColor}" cSize="${cursorSize}" hoverAnimate=${onHoverAnimate} cShape=${cursorSquare} />`;
		}
	});
</script>

<div class="page">
	<div class="title">Svelte Swift Cursor</div>
	<div class="description">
		A swift cursor component for Screating customizable cursors in svelte applications.

		<br />
		<a href="https://www.npmjs.com/package/svelte-swift-cursor">Documentation</a>
		<a href="https://github.com/aqeeloffsec/svelte-swift-cursor">Github</a>
	</div>

	<div class="input-controls">
		<div>
			<label for="color">Color</label>
			<input type="text" bind:value={cursorColor} placeholder="Color" id="color" />
		</div>
		<div>
			<label for="size">Size</label>
			<input type="number" bind:value={cursorSize} placeholder="Size" id="size" />
		</div>

		<div>
			<label for="square">OnHover Animate</label>
			<input type="checkbox" bind:checked={onHoverAnimate} id="onhover" />
		</div>

		<div>
			<label for="square">Square</label>
			<input type="checkbox" bind:checked={cursorSquare} id="square" />
		</div>
	</div>
	<code class="cursor-output"></code>
	<div class="credits">
		Created by <a href="https://github.com/aqeeloffsec">Svelte Swift Cursor (aqeeloffsec)</a>
	</div>
</div>

<div class="cursor-element">
	<Cursor
		cColor={cursorColor}
		cSize={cursorSize}
		cShape={cursorSquare ? 'square' : 'circle'}
		hoverAnimate={onHoverAnimate}
	/>
</div>

<style scoped>
	.page {
		font-family: 'Satoshi', sans-serif;
		top: 0;
		left: 0;
		height: 100vh;
		background-color: #0097b2;
		cursor: none;
	}

	a {
		cursor: none;
		color: #fff;
	}

	.title {
		font-size: 6rem;
		text-align: center;
		font-weight: 900;
		color: #fff;
	}

	.description {
		font-size: 1.5rem;
		text-align: center;
		color: #fff;
		padding: 2rem 2rem;
	}

	.input-controls {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 2rem;
		color: #fff;
		margin: 0 4rem;
		font-size: 1.5rem;
	}

	.cursor-output {
		font-size: 1.5rem;
		text-align: center;
		color: #fff;
		background: #000;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem 2rem;
		margin: 0 4rem;
		border-radius: 2px;
		margin-top: 2rem;
	}

	.credits {
		font-size: 1.5rem;
		text-align: center;
		color: #fff;
		padding: 2rem 2rem;
		margin-top: 15rem;
	}
	.cursor-element {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
