function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;

var CONST = {
	URL_SERVER : "https://getaddsdata.getsandbox.com/get-idera-sample-add",
	VENDOR_DETAILS : {
		verndorName: 'Idera',
		vendorId: 9001
	},
	draw: function() {
      console.log('From graph draw function');
  	}
}
Object.freeze(CONST);
export { cube, foo, CONST };
