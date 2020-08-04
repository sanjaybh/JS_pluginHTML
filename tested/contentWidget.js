/**!
* @license JavaScript Library
* @by Sanjay Bhan
* @ 2 Aug, 2020 at 5:20 PM
* @version 1.1.1
* https://obfuscator.io/
*/

class TriggerEvent {
	constructor(){
		this.verndorName =  "DEFAULT"; 
		this.vendorId = "0";
		this.domain = "";
		this.element = "";
		this.URL = "";
	}

	getData (detailsObject){
		function getURL(){
			return "https://getaddsdata.getsandbox.com/get-idera-sample-add";
		}
		
		var elementId = detailsObject.elementId;		
		(async(elementId) => { 
			detailsObject.domain = getDomain(detailsObject.domain);
			var apiUrl = getURL();
			const data = detailsObject;
	    	Object.freeze(data);
	    	// get the element Id
		    var element = document.getElementById(elementId);
		    let htmlDataVal = false;

		    fetch(apiUrl, {
		        method: 'POST',
		        mode: 'cors',
		        cache: 'no-cache',
		        //credentials: 'same-origin',
		        //redirect: 'follow', 
		        referrerPolicy: 'no-referrer',
		        headers: {
		            'Content-Type': 'application/json','name':'yajnas_nahb'
		        },         
		        body: JSON.stringify({"reqdata":data})
		    })
		    .then(response => response.json())
		    .then(json => {
		    	if(Object.entries(json).length > 0){        
		            for (const [key, value] of Object.entries(json)) {
		                if(value["htmlData"]){
		                    element.innerHTML = value["htmlData"];
		                    htmlDataVal = true;
		                }else if(value["mainDimension"]){
		                    if(htmlDataVal == true){
		                        setSize(value.mainDimension);
		                    }else{
		                        setError("Error! there is an error while loading the element or property is missing.");
		                    }
		                }           
		            }
		        } else{
		            setError("There is an error! please check console.");
		        }
			});

			function getDomain(domainHost) {
		        var hostName = domainHost;
		        var hostNameString = hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);
		        //console.log("hostname - "+ hostName+" and hostNameString - "+ hostNameString);
		        return hostNameString;
		    }

		    function setError(errorMessage){
		        element.innerHTML = errorMessage;
		        //console.log(errorMessage);
		    }

		    function setSize(dimension){
		        element.style.height = dimension['height'];
		        element.style.width  = dimension["width"];
		    }

		})(elementId)		
	}

	init(Obj, dimension = {}) {
		var VENDOR_DETAILS = {
			vendorName : Obj.vendorName,
			vendorId : Obj.vendorId,
			domain : Obj.domain,
			elementId : Obj.el
		}
		//debugger;
		if(dimension){
			//mainDimension
		}
		this.getData(VENDOR_DETAILS);
	}	
}
