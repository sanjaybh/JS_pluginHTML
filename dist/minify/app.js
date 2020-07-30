/**!
* @license JavaScript Library
* @Sanjay Bhan
*
* @version 1.1.0
*
*/
var CONST={URL_SERVER:"https://getaddsdata.getsandbox.com/get-idera-sample-add",VENDOR_DETAILS:{verndorName:"Idera",vendorId:9001},draw:function(){console.log("From graph draw function")}};Object.freeze(CONST),(async(e,n)=>{const t={...CONST.VENDOR_DETAILS,domain:function(){var e=window.location.hostname;return e.substring(e.lastIndexOf(".",e.lastIndexOf(".")-1)+1)}()};var o=document.getElementById("app-embed-ed-qus");let r=!1;function a(e){o.innerHTML=e,console.log(e)}function i(e){o.style.height=e.height,o.style.width=e.width}fetch(e,{method:"POST",mode:"cors",cache:"no-cache",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json",name:"yajnas_nahb"},body:JSON.stringify(t)}).then(e=>e.json()).then(e=>{if(Object.entries(e).length>0)for(const[n,t]of Object.entries(e))t.htmlData?(o.innerHTML=t.htmlData,r=!0):t.mainDimension&&(1==r?i(t.mainDimension):a("Error! There is an Error while loading the element or property is missing."));else a("There is an Error! Please check console log.")})})(CONST.URL_SERVER);