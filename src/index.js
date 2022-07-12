import foo from './foo.js'
import bar from './bar.js'

console.log(foo + bar)

window.addEventListener('load', async function handleLoaded() {
	const dynModule = await import('./dynamic.js')
	dynModule.default()
}, false)