import URL from './env.js'


(async (apiUrl, elementId) => {

    // get the element Id
    var element = document.getElementById(elementId);
    let htmlDataVal = false;

    // get data from API
    let response = await fetch(apiUrl);
    let json = await response.json();
    
    // Display based on condition
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

    function setError(errorMessage){
        element.innerHTML = errorMessage;
        console.log(errorMessage);
    }

    function setSize(dimension){
        element.style.height = dimension['height'];
        element.style.width  = dimension["width"];
    }
  })(URL, "app-embed-ed-qus");
  
  
