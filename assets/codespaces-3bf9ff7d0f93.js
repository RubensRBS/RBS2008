"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["codespaces"],{24496:(e,t,o)=>{o(53398);var r=o(39595),n=o(79049),a=o(65024),s=o(97797),i=o(46650);function l(e){for(let t of e.querySelectorAll(".js-toggle-hidden"))t.hidden=!t.hidden;for(let t of e.querySelectorAll(".js-toggle-disabled"))t.getAttribute("aria-disabled")?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")}async function c(){let e=document.querySelector(".js-codespaces-details-container");e&&(e.open=!1);let t=document.querySelector("new-codespace");if(t&&!t.getAttribute("data-no-submit-on-create"))try{let e=await fetch("/codespaces/new");if(e&&e.ok){let o=(0,i.B)(document,await e.text());t.replaceWith(o)}}catch(e){}}async function d(e,t){let o=document.querySelector(`#${e}`),r=await (0,a.r)({content:o.content.cloneNode(!0),dialogClass:"project-dialog"});return t&&t.setAttribute("aria-expanded","true"),r.addEventListener("dialog:remove",function(){t&&l(t)},{once:!0}),r}async function u(e){let t=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(t.ok){let o=await t.json();o.codespace_url?(window.location.href=o.codespace_url,l(e),c(),p()):(e.closest("get-repo")||e.closest("new-codespace")?(e.setAttribute("data-src",o.loading_url),e.dispatchEvent(new CustomEvent("pollvscode"))):e.closest("create-button")&&(e.setAttribute("data-src",o.loading_url),e.dispatchEvent(new CustomEvent("prpollvscode"))),l(e))}else if(422===t.status){let o=await t.json();if("concurrency_limit_error"===o.error_type)await d("concurrency-error",e);else{let t=document.querySelector("template.js-flash-template"),r=o.error;t.after(new n.i4(t,{className:"flash-error",message:r})),l(e)}}}async function p(){let e=document.querySelector(".js-codespaces-completable"),t=e&&e.getAttribute("data-src");if(!t)return;let o=await fetch(t,{method:"GET",headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});if(o.ok){let t=(0,i.B)(document,await o.text());e.replaceWith(t)}else throw Error(`Unexpected response: ${o.statusText}`)}(0,s.on)("submit",".js-toggle-hidden-codespace-form",function(e){l(e.currentTarget)}),(0,s.on)("submit",".js-create-codespaces-form-command",function(e){let t=e.currentTarget;t.classList.contains("js-open-in-vscode-form")||(c(),l(t))}),(0,s.on)("submit","form.js-open-in-vscode-form",async function(e){e.preventDefault();let t=e.currentTarget;await u(t)});let f=class ConcurrencyLimitElement extends HTMLElement{async connectedCallback(){d("concurrency-error")}};f=function(e,t,o,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(a<3?n(s):a>3?n(t,o,s):n(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s}([r.p_],f);var h=o(78350),m=o(12291);function y(e,t,o){if(!t.has(e))throw TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}function b(e,t,o,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(a<3?n(s):a>3?n(t,o,s):n(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s}var v=new WeakMap;let g=class NewCodespaceElement extends HTMLElement{async connectedCallback(){var e;let t=new URLSearchParams(new URL(document.location.href,window.location.origin).search);t.has("response_error")&&(t.delete("response_error"),window.history.replaceState({},"",`?${t.toString()}`));let{signal:o}=(e=new AbortController,!function(e,t,o){if(t.set)t.set.call(e,o);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=o}}(this,y(this,v,"set"),e),e);this.addEventListener("itemActivated",this,{signal:o})}disconnectedCallback(){var e;((e=y(this,v,"get")).get?e.get.call(this):e.value).abort()}handleEvent(e){if("itemActivated"===e.type&&e.target===this.repositorySelectPanel&&this.advancedOptionsForm&&this.repoInput){let t=e.detail.item,o=t.querySelector("[data-value]")?.getAttribute("data-value");o&&(this.repoInput.value=o),(0,h.k_)(this.advancedOptionsForm)}}toggleLoadingVscode(){let e=this.loadingVscode.hidden,t=this.children;for(let o=0;o<t.length;o++)t[o].hidden=e;this.loadingVscode.hidden=!e}machineTypeSelected(e){let t=e.currentTarget.getAttribute("data-sku-name");this.skuNameInput&&t&&(this.skuNameInput.value=t),this.advancedOptionsForm&&(0,h.k_)(this.advancedOptionsForm)}pollForVscode(e){this.toggleLoadingVscode();let t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}vscsTargetUrlUpdated(e){let t=e.currentTarget;this.vscsTargetUrl.value=t.value}geoUpdated(e){let t=e.currentTarget,o=t.selectedItems[0]?.value;this.geoInput&&o&&(this.geoInput.value=o),this.advancedOptionsForm&&(0,h.k_)(this.advancedOptionsForm)}async declarativeSecretsHashUpdated(e){let t=e.currentTarget,o=t.getAttribute("data-name");if(!o)return;let r=t.value,n=(0,m.D4)(t.getAttribute("data-public-key"));"checkbox"!==t.getAttribute("type")||t.checked||(r=""),r?this.secrets_hash.set(o,(0,m.lF)(await (0,m.w)(n,r))):this.secrets_hash.delete(o),this.declarativeSecretsHash.value=JSON.stringify(Object.fromEntries(this.secrets_hash))}constructor(...e){super(...e),function(e,t,o){(function(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,o)}(this,v,{writable:!0,value:void 0}),this.secrets_hash=new Map}};function _(e,t,o,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(a<3?n(s):a>3?n(t,o,s):n(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s}b([r.aC],g.prototype,"declarativeSecretsHash",void 0),b([r.aC],g.prototype,"vscsTargetUrl",void 0),b([r.aC],g.prototype,"loadingVscode",void 0),b([r.aC],g.prototype,"vscodePoller",void 0),b([r.aC],g.prototype,"advancedOptionsForm",void 0),b([r.aC],g.prototype,"skuNameInput",void 0),b([r.aC],g.prototype,"repositorySelectPanel",void 0),b([r.aC],g.prototype,"repoInput",void 0),b([r.aC],g.prototype,"geoInput",void 0),g=b([r.p_],g);let w=class ExportBranchElement extends HTMLElement{connectedCallback(){this.abortPoll=new AbortController,this.loadingIndicator.hidden||this.startPoll()}disconnectedCallback(){this.abortPoll?.abort()}applyPublishParams(){let e=this.form.getAttribute("data-codespace-id"),t=document.querySelector(`[data-codespace-id='${e}'][data-class="publish-codespace-form"]`);if(t){let e=Object.fromEntries(new FormData(t).entries());if(this.form){let t=`?name=${e.name}&visibility=${e.visibility}`,o=(this.form.getAttribute("action")||"").split("?")[0]+t;this.form.setAttribute("action",o)}}}async exportBranch(e){e.preventDefault(),this.form.hidden=!0,this.loadingIndicator.hidden=!1,(await fetch(this.form.action,{method:this.form.method,body:new FormData(this.form),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}})).ok?this.startPoll():(this.form.hidden=!1,this.loadingIndicator.hidden=!0)}async startPoll(){let e=this.getAttribute("data-exported-codespace-url")||"",t=await this.poll(e);if(t){if(t.ok)this.loadingIndicator.hidden=!0,this.viewBranchLink.hidden=!1;else{let e=this.getAttribute("data-export-error-redirect-url")||"";window.location.href=encodeURI(e)}}}async poll(e,t=1e3){if(this.abortPoll?.signal.aborted)return;let o=await fetch(e,{signal:this.abortPoll?.signal});return 202===o.status||404===o.status?(await new Promise(e=>setTimeout(e,t)),this.poll(e,1.5*t)):o}constructor(...e){super(...e),this.abortPoll=null}};function T(e,t,o,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(a<3?n(s):a>3?n(t,o,s):n(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s}_([r.aC],w.prototype,"form",void 0),_([r.aC],w.prototype,"loadingIndicator",void 0),_([r.aC],w.prototype,"viewBranchLink",void 0),w=_([r.p_],w),o(82896),o(95737);let E=class CodespaceZeroConfigElement extends HTMLElement{connectedCallback(){this.toggleLocationConfigs("production")}updateVscsTargets(){for(let e of(this.vscsTargetUrl.disabled="local"!==this.vscsTarget.value,this.toggleLocationConfigs(this.vscsTarget.value),this.vscsTargets))e.value=this.vscsTarget.value}updateVscsTargetUrls(){for(let e of this.vscsTargetUrls)e.value=this.vscsTargetUrl.value}updateLocations(e){let t=e.currentTarget;this.setLocationValues(t.value)}setLocationValues(e){for(let t of this.locations)t.value=e}toggleLocationConfigs(e){for(let t of this.locationConfigs)if(t.getAttribute("data-vscs-target")===e){t.hidden=!1;let e=t.querySelector("option");e&&(e.selected=!0,this.setLocationValues(e.value))}else t.hidden=!0}};T([r.aC],E.prototype,"regionConfig",void 0),T([r.aC],E.prototype,"vscsTarget",void 0),T([r.aC],E.prototype,"vscsTargetUrl",void 0),T([r.zV],E.prototype,"locationConfigs",void 0),T([r.zV],E.prototype,"vscsTargets",void 0),T([r.zV],E.prototype,"vscsTargetUrls",void 0),T([r.zV],E.prototype,"locations",void 0),E=T([r.p_],E)},12291:(e,t,o)=>{o.d(t,{D4:()=>s,lF:()=>i,w:()=>a});var r=o(79049),n=o(97797);async function a(e,t){let r=new TextEncoder().encode(t),{seal:n}=await Promise.all([o.e("vendors-node_modules_buffer_index_js"),o.e("vendors-node_modules_blakejs_index_js-node_modules_tweetnacl_nacl-fast_js"),o.e("_empty-file_js-app_assets_modules_github_tweetsodium_ts-_1f13-_b9700")]).then(o.bind(o,20136));return n(r,e)}function s(e){let t=atob(e).split("").map(e=>e.charCodeAt(0));return Uint8Array.from(t)}function i(e){let t="";for(let o of e)t+=String.fromCharCode(o);return btoa(t)}function l(e){return async function(t){let o=t.currentTarget;if(t.defaultPrevented||!o.checkValidity())return;let n=s(o.getAttribute("data-public-key"));for(let s of(t.preventDefault(),o.elements))if(s.id.endsWith("secret")){if(s.disabled=!0,s.required&&!s.value){let e=`${s.name} is invalid!`,t=document.querySelector("template.js-flash-template");t.after(new r.i4(t,{className:"flash-error",message:e}));return}let t=`${s.name}_encrypted_value`;if(!s.value){o.elements.namedItem(t).disabled=e;continue}o.elements.namedItem(t).value=i(await a(n,s.value))}o.submit()}}(0,n.on)("submit","form.js-encrypt-submit",async function(e){let t=e.currentTarget;if(e.defaultPrevented||!t.checkValidity())return;let o=t.elements.namedItem("secret_value");if(o.disabled=!0,!o.value)return;e.preventDefault();let r=s(t.getAttribute("data-public-key"));t.elements.namedItem("encrypted_value").value=i(await a(r,o.value)),t.submit()}),(0,n.on)("submit","form.js-encrypt-bulk-submit",l(!0)),(0,n.on)("submit","form.js-encrypt-bulk-submit-enable-empty",l(!1))},53398:(e,t,o)=>{o.d(t,{f:()=>i});var r=o(21403),n=o(97797),a=o(13937),s=o(78350);function i(e,t){let o;let r=t.querySelector("*"),n=e.ownerDocument.activeElement;n instanceof HTMLElement&&(o=r?.querySelector(function(e){let t=e.tagName.toLowerCase(),o=e.hasAttribute("class")?`.${e.className.split(" ").join(".")}`:"",r=e.hasAttribute("id")?`#${e.id}`:"",n=e.hasAttribute("name")?`[name="${e.getAttribute("name")}"]`:"";return`${t}${r}${o}${n}`}(n))),e.replaceWith(t),o instanceof HTMLElement&&o.focus()}function l(){let e=new URLSearchParams(new URL(document.location.href,window.location.origin).search);e.set("response_error","true"),window.location.replace(`${window.location.pathname}?${e.toString()}`)}(0,n.on)("remote-input-error","#js-codespaces-repository-select",()=>{document.querySelector("#js-codespaces-unable-load-repositories-warning").hidden=!1}),(0,a.JW)(".js-new-codespace-form",async function(e,t){let o=e.closest("[data-replace-remote-form-target]"),r=o.querySelector(".js-new-codespace-submit-button");r instanceof HTMLInputElement&&(r.disabled=!0),e.classList.remove("is-error"),e.classList.add("is-loading");try{r&&r.setAttribute("disabled","true");let e=await t.html();if(200!==e.status&&l(),i(o,e.html),"true"===o.getAttribute("data-allow-update-url")){let e=new FormData(document.querySelector("form.js-new-codespace-form"));!function(e){let t=new URLSearchParams(new URL(document.location.href,window.location.origin).search),o=["vscs_target"];for(let[r,n]of e.entries()){if(o.includes(r)||!n){t.delete(r);continue}t.set(r,n)}window.history.replaceState({},"",`?${t.toString()}`)}(e)}}catch(e){throw l(),e}});let c=null;function d(e){c=e,null!==e&&document.querySelector(".js-codespace-loading-steps").setAttribute("data-current-state",c)}(0,r.lB)(".js-codespace-loading-steps",{constructor:HTMLElement,add:e=>{let t=e.getAttribute("data-current-state");t&&d(t)}}),(0,r.lB)(".js-codespace-advance-state",{constructor:HTMLElement,add:e=>{let t=e.getAttribute("data-state");t&&d(t)}}),(0,r.lB)(".js-auto-submit-form",{constructor:HTMLFormElement,initialize:s.k_}),(0,r.lB)(".js-workbench-form-container",{constructor:HTMLElement,add:()=>{let e=document.querySelector(".js-workbench-form-container form");(0,s.k_)(e)}})},82896:(e,t,o)=>{var r=o(39595);function n(e,t,o,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(a<3?n(s):a>3?n(t,o,s):n(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s}let a=class InputDemuxElement extends HTMLElement{connectedCallback(){this.control&&(this.storedInput=Array(this.control.children.length).fill("")),this.addEventListener("input",this.relayInput.bind(this)),this.addEventListener("keydown",this.relayKeydown.bind(this));let e=this.closest("details");e&&e.addEventListener("toggle",()=>{e.open&&this.source.focus()})}relayKeydown(e){if((this.isControlTab(e.target)||e.target===this.source)&&("ArrowDown"===e.key||"Tab"===e.key))e.preventDefault(),e.stopPropagation(),this.routeCustomEvent(new CustomEvent("focus-list"));else if("Escape"===e.key){let e=this.closest("details");e&&e.removeAttribute("open")}}isControlTab(e){return!!e&&!!this.control&&Array.from(this.control.children).includes(e)}relayInput(e){if(!e.target)return;let t=e.target.value;this.routeCustomEvent(new CustomEvent("input-entered",{detail:t}))}routeCustomEvent(e){this.sinks[this.selectedIndex].dispatchEvent(e)}get selectedIndex(){if(!this.control)return 0;let e=this.control.querySelector('[aria-selected="true"]');return e?Array.from(this.control.children).indexOf(e):0}storeInput(){this.storedInput[this.selectedIndex]=this.source.value}updateInput(e){this.source.value=this.storedInput[this.selectedIndex];let t=e.detail.relatedTarget.getAttribute("data-filter-placeholder");this.source.placeholder=t,this.source.setAttribute("aria-label",t),this.notifySelected()}notifySelected(){let e=this.sinks[this.selectedIndex],t=new CustomEvent("tab-selected");e.dispatchEvent(t)}};n([r.aC],a.prototype,"source",void 0),n([r.zV],a.prototype,"sinks",void 0),n([r.aC],a.prototype,"control",void 0),a=n([r.p_],a)},65024:(e,t,o)=>{o.d(t,{r:()=>n});var r=o(97797);async function n(e){let t=document.querySelector("#site-details-dialog").content.cloneNode(!0),o=t.querySelector("details"),n=o.querySelector("details-dialog"),a=o.querySelector(".js-details-dialog-spinner");e.detailsClass&&o.classList.add(...e.detailsClass.split(" ")),e.dialogClass&&n.classList.add(...e.dialogClass.split(" ")),e.label?n.setAttribute("aria-label",e.label):e.labelledBy&&n.setAttribute("aria-labelledby",e.labelledBy),document.body.append(t);try{let t=await e.content;a.remove(),n.prepend(t)}catch(o){a.remove();let t=document.createElement("span");t.textContent=e.errorMessage||"Couldn't load the content",t.classList.add("my-6"),t.classList.add("mx-4"),n.prepend(t)}return o.addEventListener("toggle",()=>{o.hasAttribute("open")||((0,r.h)(n,"dialog:remove"),o.remove())}),n}},78350:(e,t,o)=>{o.d(t,{Cy:()=>i,K3:()=>d,Z8:()=>l,k_:()=>a,lK:()=>u,m$:()=>s});var r=o(41695);function n(e,t,o){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:o}))}function a(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,r.A)(t)),n(e,"submit",!0)&&e.submit()}function s(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}n(e,"change",!1)}function i(e,t){for(let o in t){let r=t[o],n=e.elements.namedItem(o);n instanceof HTMLInputElement?n.value=r:n instanceof HTMLTextAreaElement&&(n.value=r)}}function l(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),o=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==o&&"reset"!==o||e.isContentEditable}function c(e){return new URLSearchParams(e)}function d(e,t){let o=new URLSearchParams(e.search);for(let[e,r]of c(t))o.append(e,r);return o.toString()}function u(e){return c(new FormData(e)).toString()}},41695:(e,t,o)=>{function r(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let o=n(t);if(e.name){let r=e.matches("input[type=submit]")?"Submit":"",n=e.value||r;o||((o=document.createElement("input")).type="hidden",o.classList.add("js-submit-button-value"),t.prepend(o)),o.name=e.name,o.value=n}else o&&o.remove()}function n(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}o.d(t,{A:()=>r,C:()=>n})},51848:(e,t,o)=>{let r;o.d(t,{BI:()=>f,Ti:()=>h,lA:()=>p});var n=o(70837),a=o(18679),s=o(74572),i=o(51528);let{getItem:l}=(0,s.A)("localStorage"),c="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,n.O)("octolytics");delete e.baseContext,r=new a.s(e)}catch(e){}function u(e){let t=(0,n.O)("octolytics").baseContext||{};if(t)for(let[e,o]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=o,delete t[e]);let o=document.querySelector("meta[name=visitor-payload]");for(let[e,r]of(o&&Object.assign(t,JSON.parse(atob(o.content))),new URLSearchParams(window.location.search)))d.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,i.X)().toString(),Object.assign(t,e)}function p(e){r?.sendPageView(u(e))}function f(e,t={}){let o=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,n=o?{service:o}:{};for(let[e,o]of Object.entries(t))null!=o&&(n[e]=`${o}`);r&&(u(n),r.sendEvent(e||"unknown",u(n)))}function h(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},46650:(e,t,o)=>{o.d(t,{B:()=>i});var r=o(6440),n=o(2240);let a="parse-html-no-op",s=r.wA.createPolicy(a,{createHTML:e=>n.b.apply({policy:()=>e,policyName:a,fallback:e,sanitize:!1,fallbackOnError:!0})});function i(e,t){let o=e.createElement("template");return o.innerHTML=s.createHTML(t),e.importNode(o.content,!0)}},2240:(e,t,o)=>{o.d(t,{b:()=>c,r:()=>TrustedTypesPolicyError});var r=o(97564),n=o(51528),a=o(23780),s=o(42838),i=o.n(s),l=o(51848);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let c={apply:function({policy:e,policyName:t,fallback:o,fallbackOnError:s=!1,sanitize:c,silenceErrorReporting:d=!1}){try{if((0,r.G7)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return o;(0,n.i)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let a=e();return c&&new Promise(e=>{let o=window.performance.now(),r=i().sanitize(a,{FORBID_ATTR:[]}),n=window.performance.now();if(a.length!==r.length){let s=Error("Trusted Types policy output sanitized"),i=s.stack?.slice(0,1e3),c=a.slice(0,250);(0,l.BI)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:i,outputLength:a.length,sanitizedLength:r.length,executionTime:n-o}),e(a)}}),a}catch(e){if(e instanceof TrustedTypesPolicyError||(d||(0,a.N7)(e),(0,n.i)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!s))throw e}return o}}},6440:(e,t,o)=>{o.d(t,{wA:()=>d});var r,n=o(97156),a=o(51528);function s(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let i={createHTML:s("createHTML"),createScript:s("createScript"),createScriptURL:s("createScriptURL")},l=(r=globalThis).__TRUSTED_TYPE_POLICIES__??(r.__TRUSTED_TYPE_POLICIES__=new Map),c=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...i,...t})},d={createPolicy:(e,t)=>{if(l.has(e))return(0,a.i)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),l.get(e);{let o=Object.freeze(c.createPolicy(e,t));return l.set(e,o),o}}},u=!1;n.XC?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||u||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #prodsec-engineering if you have any additional questions about Trusted Types or CSP.`),u=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_morphdom_dist_morphdom-e-7c534c","vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js","vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-e53a3f","ui_packages_failbot_failbot_ts","app_assets_modules_github_ref-selector_ts"],()=>t(24496)),e.O()}]);
//# sourceMappingURL=codespaces-6a6ac0bc056b.js.map