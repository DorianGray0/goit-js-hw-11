import{S as m,i as d}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function p(o){const{hits:r}=o,n=document.querySelector(".photos-list"),s=r.map(({downloads:t,comments:i,views:c,likes:l,tags:u,webformatURL:f,largeImageURL:h})=>`
    <li class="gallery">
      <a href="${h}"><img src="${f}" alt="${u}" loading="lazy"></a>
      <span>Likes ${l}</span>
      <span>Views ${c}</span>
      <span>Comments ${i}</span>
      <span>Downloads ${t}</span>
    </li>`).join("");a(),n.insertAdjacentHTML("beforeend",s),new m(".gallery a").refresh()}function a(){const o=document.querySelector(".photos-list");return o.innerHTML=""}function y(o){const r="44930216-c8fe7065044399c3ab26c911d",n="https://pixabay.com/api/",s=new URLSearchParams({q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${n}?key=${r}&${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0){a(),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}return e}).catch(e=>console.error(e))}const g={form:document.querySelector(".js-form")};g.form.addEventListener("submit",L);function L(o){o.preventDefault();const r={};if(new FormData(o.target).forEach((n,s)=>r[s]=n.trim().toLowerCase()),!r.textValue){alert("it is empty");return}y(r.textValue).then(n=>p(n)),o.currentTarget.reset()}
//# sourceMappingURL=commonHelpers.js.map
