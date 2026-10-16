export function showMessage(el,text,error=false){if(!el)return;el.textContent=text;el.classList.toggle("error",Boolean(error));}
export function make(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
export function usd(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2}).format(Number(n)||0);}
