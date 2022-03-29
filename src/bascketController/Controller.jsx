export default class BascketController {
	static arr = BascketController.getList();
	
	static saveToLocal(product) {

		if (!this.checkProductInStorage(product.id)) {
			BascketController.arr.push(product);
			localStorage.setItem("backet", JSON.stringify(BascketController.arr))
		}
	}

	static updateToLocal(updatedProduct,product){
			BascketController.arr.map(item=>{
				if (item.id === product.id) {
					let index = BascketController.arr.indexOf(item)
					BascketController.arr.splice(index,1,updatedProduct)
					localStorage.setItem('backet',JSON.stringify(BascketController.arr))
					if (updatedProduct.count < 1 && updatedProduct.id === updatedProduct.id) {
						let index = BascketController.arr.indexOf(updatedProduct)
						BascketController.arr.splice(index,1)
						localStorage.setItem('backet',JSON.stringify(BascketController.arr))
					}
				}
			})
	}

	static removeToLocal(product){
		console.log(typeof(product));
		let index = BascketController.arr.indexOf(product)
		BascketController.arr.splice(index,1)
		console.log(index);
		localStorage.setItem('backet',JSON.stringify(BascketController.arr))
	}

	static checkProductInStorage(id) {
		let result = BascketController.arr.some(elem => elem.id === id );
		return result
	}
	static getList() {
		return JSON.parse(localStorage.getItem("backet")) || [];
	}


}
