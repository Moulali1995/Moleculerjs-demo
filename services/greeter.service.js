"use strict";
module.exports = {
	name: "greeter",
	/**
	 * Service settings
	 */
	
	/**
	 * Service dependencies
	 */
	dependencies: [],	

	/**
	 * Actions
	 */
	actions: {
		
		/**
		 * Say a 'Hello'
		 *
		 * @returns
		 */
		hello() {
			return this.hellomethod();
		},
		hello1() {
			return "Hello Moleculer111";
		},
		login: {
			params: {
				name: "string"
			},
			handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		},

		/**
		 * Welcome a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			params: {
				name: "string"
			},
			handler(ctx) {
				return `Welcome, ${ctx.params.name},age is ${ctx.params.age}`;
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {
		hellomethod(){
			return ("hello");
		}
	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {
		
	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};