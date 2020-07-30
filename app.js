//import { cube, foo, CONST } from './env.js';

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

(async(apiUrl, elementId) => {
    
    const data = { ...CONST.VENDOR_DETAILS, domain: getDomain() };

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
        body: JSON.stringify(data)
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
                        setError("Error! There is an Error while loading the element or property is missing.");
                    }
                }           
            }
        } else{
            setError("There is an Error! Please check console log.");
        }
    })

    function getDomain() {
        var hostName = window.location.hostname;
        var hostNameString = hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);

        console.log("hostname - "+ hostName+" and hostNameString - "+ hostNameString);

        return hostNameString;
    }
    
    function setError(errorMessage){
        element.innerHTML = errorMessage;
        console.log(errorMessage);
    }

    function setSize(dimension){
        element.style.height = dimension['height'];
        element.style.width  = dimension["width"];
    }
  })(CONST.URL_SERVER, "app-embed-ed-qus");