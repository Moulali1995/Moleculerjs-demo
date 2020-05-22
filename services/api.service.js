"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
	settings: {
		port: process.env.PORT || 3001,

		routes: [{
			path: "/api",
			whitelist: [
				// Access to any actions in all services under "/api" URL
				"**"
			],
			
			aliases:{
				
				"GET /hello":"greeter.hello",
				"GET /hello1":"greeter.hello1",
				"GET /welcome":"greeter.welcome",
				"POST /login":"greeter.login",
				"GET Products":"product.showProducts",
				"POST Products":"product.addProduct"
			},
			//mappingPolicy:"restrict"
			
		}],

		// Serve assets from "public" folder
		assets: {
			folder: "public"
		}
	}
};
