class Invoice {
	constructor(private signatureFilePath: string = '') {
	}

	generate(invoiceObj: Object) {
		console.log(invoiceObj)
	}
}


export default Invoice
