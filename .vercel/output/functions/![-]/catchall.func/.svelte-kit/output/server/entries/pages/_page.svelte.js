import { a5 as attr_class, a6 as attr_style, a7 as stringify, a4 as derived, e as escape_html, a8 as attr } from "../../chunks/renderer.js";
function Cursor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      cSize = 20,
      cColor = "black",
      cShape = "circle",
      hoverAnimate = false
    } = $$props;
    let x = -100;
    let y = -100;
    const cx = derived(() => cSize / 2);
    const cy = derived(() => cSize / 2);
    $$renderer2.push(`<div${attr_class(`custom-cursor ${stringify(cShape)}`, "svelte-1f6cquq")}${attr_style(`left: ${stringify(x - cx())}px; top: ${stringify(y - cy())}px; --size:${stringify(cSize)}px; --background-color: ${stringify(cColor)}`)}></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let cursorColor = "#00f0ff";
    let cursorSize = 28;
    let cursorSquare = false;
    let onHoverAnimate = true;
    $$renderer2.push(`<div class="page svelte-1uha8ag"><div class="background-effects svelte-1uha8ag"><div class="glow glow-1 svelte-1uha8ag"></div> <div class="glow glow-2 svelte-1uha8ag"></div> <div class="glow glow-3 svelte-1uha8ag"></div></div> <div class="content-wrapper svelte-1uha8ag"><header class="header text-center svelte-1uha8ag"><h1 class="title svelte-1uha8ag">Svelte <span class="gradient-text svelte-1uha8ag">Swift Cursor</span></h1> <p class="description svelte-1uha8ag">A premium, highly customizable, and buttery-smooth cursor component designed to elevate
				interactions in your Svelte applications.</p> <div class="links svelte-1uha8ag"><a href="https://www.npmjs.com/package/svelte-swift-cursor" class="nav-link svelte-1uha8ag" target="_blank">Documentation <span class="arrow svelte-1uha8ag">↗</span></a> <a href="https://github.com/aqeeloffsec/svelte-swift-cursor" class="nav-link outline svelte-1uha8ag" target="_blank">View on GitHub</a></div></header> <main class="main-content svelte-1uha8ag"><div class="glass-panel controls-panel svelte-1uha8ag"><h2 class="panel-title svelte-1uha8ag">Interactive Properties</h2> <div class="control-group svelte-1uha8ag"><label for="color" class="control-label svelte-1uha8ag"><span class="svelte-1uha8ag">Color</span> <span class="value-display svelte-1uha8ag">${escape_html(cursorColor)}</span></label> <div class="input-wrapper svelte-1uha8ag"><input type="color"${attr("value", cursorColor)} id="color" class="color-picker svelte-1uha8ag"/> <input type="text"${attr("value", cursorColor)} placeholder="#00f0ff" class="text-input svelte-1uha8ag"/></div></div> <div class="control-group svelte-1uha8ag"><label for="size" class="control-label svelte-1uha8ag"><span class="svelte-1uha8ag">Size</span> <span class="value-display svelte-1uha8ag">${escape_html(cursorSize)}px</span></label> <input type="range"${attr("value", cursorSize)} min="10" max="100" id="size" class="range-slider svelte-1uha8ag"/></div> <div class="control-group row-control svelte-1uha8ag"><div class="toggle-info svelte-1uha8ag"><label for="onhover" class="control-label mb-0 svelte-1uha8ag">Hover Animation</label> <span class="sub-label svelte-1uha8ag">Animate when interacting with links</span></div> <label class="switch svelte-1uha8ag"><input type="checkbox"${attr("checked", onHoverAnimate, true)} id="onhover" class="svelte-1uha8ag"/> <span class="slider round svelte-1uha8ag"></span></label></div> <div class="control-group row-control svelte-1uha8ag"><div class="toggle-info svelte-1uha8ag"><label for="square" class="control-label mb-0 svelte-1uha8ag">Square Shape</label> <span class="sub-label svelte-1uha8ag">Toggle circle or square shape</span></div> <label class="switch svelte-1uha8ag"><input type="checkbox"${attr("checked", cursorSquare, true)} id="square" class="svelte-1uha8ag"/> <span class="slider round svelte-1uha8ag"></span></label></div></div> <div class="glass-panel output-panel svelte-1uha8ag"><div class="panel-header svelte-1uha8ag"><div class="window-controls svelte-1uha8ag"><span class="dot dot-close svelte-1uha8ag"></span> <span class="dot dot-min svelte-1uha8ag"></span> <span class="dot dot-max svelte-1uha8ag"></span></div> <span class="file-name svelte-1uha8ag">App.svelte</span> <button class="copy-btn svelte-1uha8ag" aria-label="Copy to clipboard">`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1uha8ag"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" class="svelte-1uha8ag"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" class="svelte-1uha8ag"></path></svg> Copy`);
    }
    $$renderer2.push(`<!--]--></button></div> <pre class="code-block svelte-1uha8ag"><code class="svelte-1uha8ag">`);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></code></pre></div></main> <footer class="footer svelte-1uha8ag"><p class="svelte-1uha8ag">Crafted by <a href="https://github.com/aqeeloffsec" target="_blank" class="footer-link svelte-1uha8ag">aqeeloffsec</a></p></footer></div></div> <div class="cursor-element svelte-1uha8ag">`);
    Cursor($$renderer2, {
      cColor: cursorColor,
      cSize: cursorSize,
      cShape: "circle",
      hoverAnimate: onHoverAnimate
    });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
