<script lang="ts">
	import Cursor from '$lib/components/Cursor.svelte';
	import { onMount } from 'svelte';

	let cursorColor = $state('#00f0ff');
	let cursorSize = $state(28);
	let cursorSquare = $state(false);
	let onHoverAnimate = $state(true);
	let mounted = $state(false);
	let copied = $state(false);

	$effect(() => {
		mounted = true;
	});

	let codeSnippet = $derived(`<Cursor
  cColor="${cursorColor}"
  cSize=${cursorSize}
  hoverAnimate={${onHoverAnimate}}
  cShape="${cursorSquare ? 'square' : 'circle'}"
/>`);

	function copyToClipboard() {
		navigator.clipboard.writeText(codeSnippet);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<div class="page">
	<div class="background-effects">
		<div class="glow glow-1"></div>
		<div class="glow glow-2"></div>
		<div class="glow glow-3"></div>
	</div>

	<div class="content-wrapper">
		<header class="header text-center">
			<h1 class="title">
				Svelte <span class="gradient-text">Swift Cursor</span>
			</h1>
			<p class="description">
				A premium, highly customizable, and buttery-smooth cursor component designed to elevate
				interactions in your Svelte applications.
			</p>
			<div class="links">
				<a
					href="https://www.npmjs.com/package/svelte-swift-cursor"
					class="nav-link"
					target="_blank"
				>
					Documentation <span class="arrow">↗</span>
				</a>
				<a
					href="https://github.com/aqeeloffsec/svelte-swift-cursor"
					class="nav-link outline"
					target="_blank"
				>
					View on GitHub
				</a>
			</div>
		</header>

		<main class="main-content">
			<div class="glass-panel controls-panel">
				<h2 class="panel-title">Interactive Properties</h2>

				<div class="control-group">
					<label for="color" class="control-label">
						<span>Color</span>
						<span class="value-display">{cursorColor}</span>
					</label>
					<div class="input-wrapper">
						<input type="color" bind:value={cursorColor} id="color" class="color-picker" />
						<input type="text" bind:value={cursorColor} placeholder="#00f0ff" class="text-input" />
					</div>
				</div>

				<div class="control-group">
					<label for="size" class="control-label">
						<span>Size</span>
						<span class="value-display">{cursorSize}px</span>
					</label>
					<input
						type="range"
						bind:value={cursorSize}
						min="10"
						max="100"
						id="size"
						class="range-slider"
					/>
				</div>

				<div class="control-group row-control">
					<div class="toggle-info">
						<label for="onhover" class="control-label mb-0">Hover Animation</label>
						<span class="sub-label">Animate when interacting with links</span>
					</div>
					<label class="switch">
						<input type="checkbox" bind:checked={onHoverAnimate} id="onhover" />
						<span class="slider round"></span>
					</label>
				</div>

				<div class="control-group row-control">
					<div class="toggle-info">
						<label for="square" class="control-label mb-0">Square Shape</label>
						<span class="sub-label">Toggle circle or square shape</span>
					</div>
					<label class="switch">
						<input type="checkbox" bind:checked={cursorSquare} id="square" />
						<span class="slider round"></span>
					</label>
				</div>
			</div>

			<div class="glass-panel output-panel">
				<div class="panel-header">
					<div class="window-controls">
						<span class="dot dot-close"></span>
						<span class="dot dot-min"></span>
						<span class="dot dot-max"></span>
					</div>
					<span class="file-name">App.svelte</span>
					<button class="copy-btn" onclick={copyToClipboard} aria-label="Copy to clipboard">
						{#if copied}
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#00f0ff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg
							>
							Copied!
						{:else}
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path
									d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
								></path></svg
							>
							Copy
						{/if}
					</button>
				</div>
				<pre class="code-block"><code
						>{#if mounted}{codeSnippet.trim()}{/if}</code
					></pre>
			</div>
		</main>

		<footer class="footer">
			<p>
				Crafted by <a href="https://github.com/aqeeloffsec" target="_blank" class="footer-link"
					>Svelte Swift Cursor (aqeeloffsec)</a
				>
			</p>
		</footer>
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
	@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');

	:global(html, body) {
		margin: 0;
		padding: 0;
		background: #09090b;
		cursor: none;
		overflow-x: hidden;
	}

	:global(*) {
		cursor: none !important;
	}

	.page {
		font-family: 'Outfit', sans-serif;
		min-height: 100vh;
		position: relative;
		color: #ffffff;
		display: flex;
		justify-content: center;
		padding: 4rem 2rem;
		box-sizing: border-box;
	}

	/* Background Glows */
	.background-effects {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		z-index: -1;
		pointer-events: none;
	}

	.glow {
		position: absolute;
		border-radius: 50%;
		filter: blur(100px);
		opacity: 0.4;
		animation: float 20s infinite ease-in-out alternate;
	}

	.glow-1 {
		top: -10%;
		left: -10%;
		width: 50vw;
		height: 50vw;
		background: radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
	}

	.glow-2 {
		bottom: -20%;
		right: -10%;
		width: 60vw;
		height: 60vw;
		background: radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
		animation-delay: -5s;
	}

	.glow-3 {
		top: 40%;
		left: 30%;
		width: 40vw;
		height: 40vw;
		background: radial-gradient(circle, rgba(0, 255, 136, 0.05) 0%, rgba(0, 0, 0, 0) 70%);
		animation-delay: -10s;
	}

	@keyframes float {
		0% {
			transform: translate(0, 0) scale(1);
		}
		100% {
			transform: translate(5%, 5%) scale(1.1);
		}
	}

	.content-wrapper {
		width: 100%;
		max-width: 1000px;
		display: flex;
		flex-direction: column;
		gap: 3.5rem;
		z-index: 10;
	}

	/* Header */
	.text-center {
		text-align: center;
	}

	.title {
		font-size: clamp(3rem, 6vw, 5rem);
		font-weight: 800;
		letter-spacing: -0.02em;
		margin: 0 0 1rem 0;
		line-height: 1.1;
	}

	.gradient-text {
		background: linear-gradient(135deg, #00f0ff 0%, #8a2be2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.description {
		font-size: 1.15rem;
		color: #a1a1aa;
		max-width: 600px;
		margin: 0 auto 2.5rem;
		line-height: 1.6;
		font-weight: 400;
	}

	.links {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.nav-link {
		cursor: none; /* override to none to let custom cursor dictate */
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.8rem 1.75rem;
		border-radius: 100px;
		font-weight: 600;
		text-decoration: none;
		color: #ffffff;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
		position: relative;
		overflow: hidden;
	}

	.nav-link::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(138, 43, 226, 0.15) 100%);
		opacity: 0;
		transition: opacity 0.3s ease;
		z-index: -1;
	}

	.nav-link:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		border-color: rgba(255, 255, 255, 0.3);
	}

	.nav-link:hover::before {
		opacity: 1;
	}

	.nav-link .arrow {
		transition: transform 0.3s ease;
	}
	.nav-link:hover .arrow {
		transform: translate(3px, -3px);
	}

	.nav-link.outline {
		background: transparent;
	}

	/* Main Content Layout */
	.main-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: start;
	}

	@media (max-width: 768px) {
		.main-content {
			grid-template-columns: 1fr;
		}
	}

	/* Glassmorphism Panels */
	.glass-panel {
		background: rgba(24, 24, 27, 0.6); /* Zinc 900 slightly transparent */
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 20px;
		padding: 2rem;
		box-shadow:
			0 20px 40px rgba(0, 0, 0, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
		transition:
			transform 0.3s ease,
			border-color 0.3s ease;
	}

	.glass-panel:hover {
		border-color: rgba(255, 255, 255, 0.15);
	}

	.panel-title {
		font-size: 1.35rem;
		font-weight: 700;
		margin: 0 0 2rem 0;
		background: linear-gradient(90deg, #fff, #a1a1aa);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	/* Controls */
	.control-group {
		margin-bottom: 1.5rem;
	}

	.control-label {
		display: flex;
		justify-content: space-between;
		font-weight: 600;
		font-size: 0.95rem;
		margin-bottom: 0.75rem;
		color: #e4e4e7;
	}

	.value-display {
		color: #00f0ff;
		font-variant-numeric: tabular-nums;
	}

	.input-wrapper {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.color-picker {
		-webkit-appearance: none;
		border: none;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		cursor: none;
		padding: 0;
		background: transparent;
		flex-shrink: 0;
	}

	.color-picker::-webkit-color-swatch-wrapper {
		padding: 0;
	}
	.color-picker::-webkit-color-swatch {
		border: 2px solid rgba(255, 255, 255, 0.15);
		border-radius: 50%;
	}

	.text-input {
		flex: 1;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.1);
		padding: 0.8rem 1rem;
		border-radius: 12px;
		color: #fff;
		font-family: 'Fira Code', monospace;
		font-size: 0.9rem;
		outline: none;
		transition: border-color 0.3s ease;
		cursor: none;
	}

	.text-input:focus {
		border-color: #00f0ff;
	}

	.range-slider {
		-webkit-appearance: none;
		width: 100%;
		height: 6px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 5px;
		outline: none;
		cursor: none;
	}

	.range-slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: #00f0ff;
		box-shadow: 0 0 12px rgba(0, 240, 255, 0.6);
		transition: transform 0.2s;
	}
	.range-slider::-webkit-slider-thumb:hover {
		transform: scale(1.15);
	}

	.row-control {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 0;
	}

	.mb-0 {
		margin-bottom: 0 !important;
	}

	.toggle-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.sub-label {
		font-size: 0.8rem;
		color: #71717a;
	}

	/* Toggle Switch */
	.switch {
		position: relative;
		display: inline-block;
		width: 50px;
		height: 28px;
		cursor: none;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(255, 255, 255, 0.1);
		transition: 0.3s;
		border: 1px solid rgba(255, 255, 255, 0.05);
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 20px;
		width: 20px;
		left: 3px;
		bottom: 3px;
		background-color: white;
		transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	input:checked + .slider {
		background-color: rgba(0, 240, 255, 0.8);
		border-color: rgba(0, 240, 255, 0.8);
	}
	input:focus + .slider {
		box-shadow: 0 0 1px #00f0ff;
	}
	input:checked + .slider:before {
		transform: translateX(22px);
	}
	.slider.round {
		border-radius: 34px;
	}
	.slider.round:before {
		border-radius: 50%;
	}

	/* Code Output Panel */
	.output-panel {
		padding: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.panel-header {
		background: rgba(0, 0, 0, 0.3);
		padding: 1rem 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	}

	.window-controls {
		display: flex;
		gap: 8px;
	}

	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.dot-close {
		background: #ff5f56;
		box-shadow: 0 0 8px rgba(255, 95, 86, 0.3);
	}
	.dot-min {
		background: #ffbd2e;
		box-shadow: 0 0 8px rgba(255, 189, 46, 0.3);
	}
	.dot-max {
		background: #27c93f;
		box-shadow: 0 0 8px rgba(39, 201, 63, 0.3);
	}

	.file-name {
		font-family: 'Fira Code', monospace;
		font-size: 0.85rem;
		color: #a1a1aa;
		flex: 1;
		text-align: center;
	}

	.copy-btn {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 6px;
		padding: 0.4rem 0.6rem;
		color: #d4d4d8;
		font-family: inherit;
		font-size: 0.8rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		cursor: none;
		transition: all 0.2s;
	}

	.copy-btn:hover {
		color: #fff;
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.2);
	}

	.code-block {
		margin: 0;
		padding: 2rem 1.5rem;
		background: transparent;
		color: #e4e4e7;
		font-family: 'Fira Code', monospace;
		font-size: 0.95rem;
		line-height: 1.6;
		overflow-x: auto;
		white-space: pre-wrap;
		tab-size: 4;
	}

	/* Footer */
	.footer {
		text-align: center;
		padding-top: 2rem;
		color: #71717a;
		font-size: 0.95rem;
	}

	.footer-link {
		color: #a78bfa;
		text-decoration: none;
		font-weight: 600;
		transition: color 0.2s;
		cursor: none;
	}

	.footer-link:hover {
		color: #00f0ff;
	}
</style>
