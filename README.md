# idera-adds-sample-app
App to show "How to display the Add"


##Use Configuration file
const URL_LOCAL = "./sample-data.json?vendor=idera&id=1009";
const URL_SERVER = "https://getaddsdata.getsandbox.com/get-idera-sample-add";

const VENDOR_DETAILS = {
	verndorName: 'Idera',
	vendorId: 9001
}

export { URL_SERVER, URL_LOCAL, VENDOR_DETAILS };

##Use of config file
import { URL_LOCAL, URL_SERVER, VENDOR_DETAILS } from './env.js'


##Minification tool
https://javascript-minifier.com/