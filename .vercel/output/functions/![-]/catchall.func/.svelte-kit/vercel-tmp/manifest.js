export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.C499_yGl.js",app:"_app/immutable/entry/app.NyWQVQa6.js",imports:["_app/immutable/entry/start.C499_yGl.js","_app/immutable/chunks/D2TgcsA1.js","_app/immutable/chunks/Dn6MfMFm.js","_app/immutable/chunks/DCiZBTXz.js","_app/immutable/entry/app.NyWQVQa6.js","_app/immutable/chunks/Dn6MfMFm.js","_app/immutable/chunks/DcI829En.js","_app/immutable/chunks/CMbWaw1u.js","_app/immutable/chunks/DCiZBTXz.js","_app/immutable/chunks/BguZpBUy.js","_app/immutable/chunks/D7v-5BkM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
