import{a as x,S as B,i as u}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const E=x.create({baseURL:"https://pixabay.com/api/",params:{key:"50386790-558288da927f62b3f4194a21d"}});function p(e,r,s=15){return E.get("",{params:{q:e,page:r,per_page:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(n=>({hits:n.data.hits,total:n.data.totalHits}))}let c;const d=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=document.querySelector(".more-btn");function H(e,r,s,n,t,o,a){return`
        <li class="card">
          <div class="img-container">
            <a href="${t}">
              <img class="card-image" src="${o}" alt="${a}" />
            </a>
          </div>
          <ul class="card-stats">
            <li><b>Likes</b><span>${r}</span></li>
            <li><b>Views</b><span>${s}</span></li>
            <li><b>Comments</b><span>${e}</span></li>
            <li><b>Downloads</b><span>${n}</span></li>
          </ul>
        </li> 
    `}function y(e){return e.map(r=>{const{comments:s,likes:n,views:t,downloads:o,largeImageURL:a,webformatURL:$,tags:q}=r;return H(s,n,t,o,a,$,q)}).join("")}function I(){d.innerHTML=""}//!=============================================================
function O(e){I(),d.innerHTML=y(e),b()}//!=============================================================
function P(e){d.insertAdjacentHTML("beforeend",y(e)),b()}//!=============================================================
function b(){c?c.refresh():c=new B(".card a",{captionsData:"alt",captionDelay:250})}function L(){h.classList.remove("is-hidden")}function f(){h.classList.add("is-hidden")}function v(){g.classList.add("is-visible")}function w(){g.classList.remove("is-visible")}const T=15;let i=1,S="",l=0;//!=============================================================
const m=document.querySelector(".form"),G=document.querySelector(".more-btn");m.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.elements["search-text"].value.trim();if(S=r,i=1,!!r){v();try{const{hits:s,total:n}=await p(r,i);if(l=n,L(),O(s),console.log(l),!s.length){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),f();return}M()}catch(s){u.error({title:"Error",message:`${s}`})}finally{w()}m.reset()}});//!=============================================================
function M(){i*T<l?L():(u.error({title:"Error",message:"We're sorry, but you've reached the end of search results."}),f())}//!=============================================================
G.addEventListener("click",async()=>{i+=1,v();const{hits:e,total:r}=await p(S,i);l=r,console.log(e),console.log(l),P(e),D(),w(),f(),M()});//!=============================================================
function D(){const e=document.querySelector(".gallery .card");if(!e)return;const r=e.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
