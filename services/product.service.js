"use strict";
let productsdb=[{id:1,name:"tv",price:50000,model:"Mi 4A"},
	{id:2,name:"mobile",price:20000,model:"xioami note7"}];
    
module.exports={
	name:"product",
	
	actions:{
		showProducts(){
			return this.getProducts();
		},
		addProduct(ctx){
			let newProduct={id:ctx.params.id,
				name:ctx.params.name,
				model:ctx.params.model,
				price:ctx.params.price};
			productsdb.push(newProduct);
			console.log(productsdb);
			return productsdb;
		},
       
		getProduct(ctx){
            
			return productsdb.find(prod=>prod.id==ctx.params.id);
            
		}

	},
	methods:{
		getProducts(){
			return productsdb;
		}
	}

};