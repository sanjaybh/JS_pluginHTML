/**!
* @license JavaScript Library
* @by Sanjay Bhan
* @ 2 Aug, 2020 at 5:20 PM
* @version 1.1.1
*
*/
class TriggerEvent{constructor(){this.verndorName="DEFAULT",this.vendorId="0",this.domain="",this.element="",this.URL=""}getData(e){(async n=>{e.domain=function(e){var n=e;return n.substring(n.lastIndexOf(".",n.lastIndexOf(".")-1)+1)}(e.domain);const t=e;Object.freeze(t);var r=document.getElementById(n);let a=!1;function i(e){r.innerHTML=e}function o(e){r.style.height=e.height,r.style.width=e.width}fetch("https://getaddsdata.getsandbox.com/get-idera-sample-add",{method:"POST",mode:"cors",cache:"no-cache",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json",name:"yajnas_nahb"},body:JSON.stringify({reqdata:t})}).then(e=>e.json()).then(e=>{if(Object.entries(e).length>0)for(const[n,t]of Object.entries(e))t.htmlData?(r.innerHTML=t.htmlData,a=!0):t.mainDimension&&(1==a?o(t.mainDimension):i("Error! there is an error while loading the element or property is missing."));else i("There is an error! please check console.")})})(e.elementId)}init(e){var n={vendorName:e.vendorName,vendorId:e.vendorId,domain:e.domain,elementId:e.el};this.getData(n)}}