import{a as x,S as B,i as c}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const E=x.create({baseURL:"https://pixabay.com/api/",params:{key:"50386790-558288da927f62b3f4194a21d"}});async function m(e,r,s=15){const a=await E.get("",{params:{q:e,page:r,per_page:s,image_type:"photo",orientation:"horizontal",safesearch:!0}});return{hits:a.data.hits,total:a.data.totalHits}}let l;const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=document.querySelector(".more-btn");function H(e,r,s,a,t,o,n){return`
        <li class="card">
          <div class="img-container">
            <a href="${t}">
              <img class="card-image" src="${o}" alt="${n}" />
            </a>
          </div>
          <ul class="card-stats">
            <li><b>Likes</b><span>${r}</span></li>
            <li><b>Views</b><span>${s}</span></li>
            <li><b>Comments</b><span>${e}</span></li>
            <li><b>Downloads</b><span>${a}</span></li>
          </ul>
        </li> 
    `}function h(e){return e.map(r=>{const{comments:s,likes:a,views:t,downloads:o,largeImageURL:n,webformatURL:M,tags:q}=r;return H(s,a,t,o,n,M,q)}).join("")}function I(){u.innerHTML=""}//!=============================================================
function O(e){I(),u.innerHTML=h(e),y()}//!=============================================================
function P(e){u.insertAdjacentHTML("beforeend",h(e)),y()}//!=============================================================
function y(){l?l.refresh():l=new B(".card a",{captionsData:"alt",captionDelay:250})}function b(){g.classList.remove("is-hidden")}function L(){g.classList.add("is-hidden")}function v(){p.classList.add("is-visible")}function w(){p.classList.remove("is-visible")}const T=15;let i=1,S="",d=0;//!=============================================================
const f=document.querySelector(".form"),G=document.querySelector(".more-btn");f.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.elements["search-text"].value.trim();if(S=r,i=1,!!r){v();try{const{hits:s,total:a}=await m(r,i);if(d=a,b(),O(s),!s.length){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),L();return}$()}catch(s){c.error({title:"Error",message:`${s}`})}finally{w()}f.reset()}});//!=============================================================
function $(){i*T<d?b():(c.error({title:"Error",message:"We're sorry, but you've reached the end of search results."}),L())}//!=============================================================
G.addEventListener("click",async()=>{i+=1,v();try{const{hits:e,total:r}=await m(S,i);d=r,P(e),D(),$()}catch(e){c.error({title:"Error",message:`${e}`})}finally{w()}});//!=============================================================
function D(){const e=document.querySelector(".gallery .card");if(!e)return;const r=e.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
