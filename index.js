import{a as x,S as B,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const E=x.create({baseURL:"https://pixabay.com/api/",params:{key:"50386790-558288da927f62b3f4194a21d"}});function p(t,r,s=15){return E.get("",{params:{q:t,page:r,per_page:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(n=>({hits:n.data.hits,total:n.data.totalHits}))}let c;const u=document.querySelector(".gallery"),h=document.querySelector(".loader"),g=document.querySelector(".more-btn");function H(t,r,s,n,e,o,a){return`
        <li class="card">
          <div class="img-container">
            <a href="${e}">
              <img class="card-image" src="${o}" alt="${a}" />
            </a>
          </div>
          <ul class="card-stats">
            <li><b>Likes</b><span>${r}</span></li>
            <li><b>Views</b><span>${s}</span></li>
            <li><b>Comments</b><span>${t}</span></li>
            <li><b>Downloads</b><span>${n}</span></li>
          </ul>
        </li> 
    `}function y(t){return t.map(r=>{const{comments:s,likes:n,views:e,downloads:o,largeImageURL:a,webformatURL:$,tags:q}=r;return H(s,n,e,o,a,$,q)}).join("")}function I(){u.innerHTML=""}//!=============================================================
function O(t){I(),u.innerHTML=y(t),b()}//!=============================================================
function P(t){u.insertAdjacentHTML("beforeend",y(t)),b()}//!=============================================================
function b(){c?c.refresh():c=new B(".card a",{captionsData:"alt",captionDelay:250})}function L(){g.classList.remove("is-hidden")}function d(){g.classList.add("is-hidden")}function v(){h.classList.add("is-visible")}function w(){h.classList.remove("is-visible")}const T=15;let i=1,S="",f=0;//!=============================================================
const m=document.querySelector(".form"),G=document.querySelector(".more-btn");m.addEventListener("submit",async t=>{t.preventDefault();const r=t.target.elements["search-text"].value.trim();if(S=r,i=1,!!r){v();try{const{hits:s,total:n}=await p(r,i);if(f=n,L(),O(s),!s.length){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),d();return}M()}catch(s){l.error({title:"Error",message:`${s}`})}finally{w()}m.reset()}});//!=============================================================
function M(){i*T<f?L():(l.error({title:"Error",message:"We're sorry, but you've reached the end of search results."}),d())}//!=============================================================
G.addEventListener("click",async()=>{i+=1,v();const{hits:t,total:r}=await p(S,i);f=r,P(t),D(),w(),d(),M()});//!=============================================================
function D(){const t=document.querySelector(".gallery .card");if(!t)return;const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
