System.register(["./vendor.js","./frameworks.js"],(function(){"use strict";var e,t,n,s,o,r,a,i,c,l,d,u,p,m,f,h,g,j,y,v,b,L,w,k,S,T,q,E,M,A,H;return{setters:[function(v){e=v._,t=v.t,n=v.B,s=v.a7,o=v.c,r=v.h,a=v.f,i=v.n,c=v.o,l=v.l,d=v.a,u=v.r,p=v.q,m=v.m,f=v.L,h=v.R,g=v.C,j=v.a8,y=v.a9},function(e){v=e.b,b=e.q,L=e.d,w=e.bb,k=e.a,S=e.r,T=e.N,q=e.al,E=e.n,M=e.aN,A=e.p,H=e.U}],execute:function(){let I=class BranchFilterElement extends HTMLElement{constructor(){super(...arguments),this.abortSearch=null,this.originalSelectedItem=null}submit(e){e.preventDefault()}resetField(e){if("Escape"!==r(e))return;const t=this.field.value.trim();this.field.value="",t&&this.search()}reset(){this.field.focus(),this.field.value="",a(this.field,"input")}get activeFilter(){var e;return null!==(e=this.filters.find(e=>e.classList.contains("selected")))&&void 0!==e?e:null}async search(){var e;this.originalSelectedItem||(this.originalSelectedItem=this.activeFilter);const t=this.field.value.trim().length>0,n=function(e){const t=e.form;if(e.value.trim()){const n=new URL(t.action,window.location.origin),s=new URLSearchParams(n.search.slice(1)),o=t.elements.namedItem("utf8");return o instanceof HTMLInputElement&&s.append("utf8",o.value),s.append("query",e.value),n.search=s.toString(),n.toString()}return i(t,"data-reset-url")}(this.field);this.classList.toggle("is-search-mode",t),this.classList.add("is-loading");for(const r of this.filters)r.classList.remove("selected");t?this.allFilter.classList.add("selected"):this.originalSelectedItem&&(this.originalSelectedItem.classList.add("selected"),this.originalSelectedItem=null),null===(e=this.abortSearch)||void 0===e||e.abort();const{signal:s}=this.abortSearch=new AbortController;try{const e=await v(document,n,{signal:s});b(null,"",n),this.result.innerHTML="",this.result.appendChild(e)}catch(o){}s.aborted||this.classList.remove("is-loading")}};e([t],I.prototype,"field",void 0),e([t],I.prototype,"result",void 0),e([t],I.prototype,"allFilter",void 0),e([n],I.prototype,"filters",void 0),e([s(100)],I.prototype,"search",null),I=e([o],I);let _=class BranchFilterItemElement extends HTMLElement{get branch(){return this.getAttribute("branch")}get branches(){const e=this.closest("branch-filter").querySelectorAll("branch-filter-item");return Array.from(e).filter(e=>e.branch===this.branch)}loading(e){for(const t of this.branches)t.spinner.hidden=!e,t.destroyButton&&(t.destroyButton.hidden=e)}set mode(e){for(const t of this.branches)t.classList.toggle("Details--on","restore"===e)}async restore(e){e.preventDefault(),this.loading(!0);const t=e.target;let n;try{n=await fetch(t.action,{method:t.method,body:new FormData(t),headers:{"X-Requested-With":"XMLHttpRequest"}})}catch(s){}finally{n&&n.ok||location.reload(),this.loading(!1)}this.mode="destroy"}async destroy(e){e.preventDefault(),this.loading(!0);const t=e.target;let n;try{n=await fetch(t.action,{method:t.method,body:new FormData(t),headers:{"X-Requested-With":"XMLHttpRequest"}})}catch(s){}finally{n&&n.ok||location.reload(),this.loading(!1)}this.mode="restore"}};e([t],_.prototype,"destroyButton",void 0),e([t],_.prototype,"spinner",void 0),_=e([o],_),c(".js-new-badge-autodismiss",{constructor:HTMLFormElement,add:e=>{const t=l(e,"details");t.addEventListener("toggle",()=>{t.hasAttribute("open")&&L(e.action,{method:e.method,body:new FormData(e)})})}});let x=class GetRepoElement extends HTMLElement{constructor(){super(...arguments),this.shouldRefreshList=!1}showDownloadMessage(e){const t=this.findPlatform(e);t&&this.showPlatform(t)}showCodespaces(e){const t=this.findPlatform(e);t&&(this.showPlatform(t),this.loadAndUpdateContent())}refreshList(){this.shouldRefreshList&&(this.shouldRefreshList=!1,this.loadAndUpdateContent())}trackDelete(){this.shouldRefreshList=!0}hideSpinner(){this.codespaceLoadingMenu.hidden=!0}showSpinner(){this.codespaceLoadingMenu.hidden=!1}onDetailsToggle(){this.modal.hidden=!1;for(const e of this.platforms)e.hidden=!0}showPlatform(e){this.modal.hidden=!0;for(const t of this.platforms)t.getAttribute("data-platform")===e&&(t.hidden=!1)}findPlatform(e){return e.currentTarget.getAttribute("data-open-app")||w()}loadAndUpdateContent(){this.codespaceList.setAttribute("src",i(this.codespaceList,"data-src"))}};e([t],x.prototype,"modal",void 0),e([t],x.prototype,"codespaceLoadingMenu",void 0),e([t],x.prototype,"codespaceList",void 0),e([n],x.prototype,"platforms",void 0),x=e([o],x),c(".repository-import",{subscribe:e=>k(e,"socket:message",(function(e){const t=e.detail.data;t.redirect_to&&(document.location.href=t.redirect_to,e.stopImmediatePropagation())}))}),d("change","input.js-repository-import-lfs-opt",(function({currentTarget:e}){const t=parseInt(e.getAttribute("data-percent-used")||""),n=l(e,".js-repository-import-lfs-container"),s=e.getAttribute("data-used")||"";p(n,".js-repository-import-lfs-warn").classList.toggle("d-none",!(t>100)),p(n,".js-usage-bar").classList.toggle("exceeded",t>=100),p(n,".js-usage-bar").setAttribute("aria-label",`${t}%`),p(n,".js-repository-import-lfs-progress").style.width=`${t}%`,p(n,"span.js-usage-text").textContent=s})),u(".js-repository-import-author-form",(async function(e,t){const n=await t.html();l(e,".js-repository-import-author").replaceWith(n.html)})),d("click",".js-repository-import-projects-cancel-button",(function(){const e=p(document,".js-repository-import-projects-cancel-form",HTMLFormElement);S(e)}));let C=!1;function F(){const e=p(document,".js-repo-name");a(e,"input");const t=p(document,'.js-owner-container [aria-checked="true"]'),n="false"!==t.getAttribute("data-org-allow-public-repos"),s=p(document,".js-privacy-toggle[value=public]",HTMLInputElement);R(n,s,document.querySelector(".js-privacy-toggle-label-public"),document.querySelector(".js-public-description"),document.querySelector(".js-public-restricted-by-policy-description"));const o=function(e,t){let n=!1;const s=document.querySelectorAll(".js-new-repo-internal-visibility");for(const o of s){o.hidden=!0;const e=o.querySelector(".js-privacy-toggle[value=internal]");e instanceof HTMLInputElement&&e.checked&&(n=!0)}if(e){const s=document.querySelector(`#new-repo-internal-visibility-${e}`);if(s){s.hidden=!1;const e=s.querySelector(".js-privacy-toggle-label-internal"),o=s.querySelector(".js-internal-description"),r=s.querySelector(".js-internal-restricted-by-policy-description"),i=s.querySelector(".js-privacy-toggle[value=internal]");if(i instanceof HTMLInputElement)return"false"===t.getAttribute("data-org-allow-internal-repos")?(i.disabled=!0,e&&e.classList.add("text-gray-light"),o&&(o.hidden=!0),r&&(r.hidden=!1)):(n&&(i.checked=!0,a(i,"change")),i.disabled=!1,e&&e.classList.remove("text-gray-light"),o&&(o.hidden=!1),r&&(r.hidden=!0)),i}}return null}(t.getAttribute("data-business-id"),t),r="false"!==t.getAttribute("data-org-allow-private-repos"),i=p(document,".js-privacy-toggle[value=private]",HTMLInputElement),c=document.querySelector(".js-privacy-toggle-label-private"),l=document.querySelector(".js-private-description"),d=document.querySelector(".js-private-restricted-by-policy-description");R(r,i,c,l,d),function(){const e=document.querySelectorAll('.js-org-upgrade-link:not([hidden=""]');for(const t of e)t.hidden=!0}();const u="false"!==t.getAttribute("data-org-private-restricted-by-plan"),m=document.querySelector(".js-upgrade-private-description"),f="false"!==t.getAttribute("data-org-show-upgrade"),h=t.getAttribute("data-org-name"),g=h?document.querySelector(`a[data-upgrade-link="${h}"]`):null,j=document.querySelector(".js-ask-owner-message");r||!u?(m&&(m.hidden=!0),g&&(g.hidden=!0),j&&(j.hidden=!0)):(d&&(d.hidden=u),m&&(m.hidden=!1),g&&(g.hidden=!f),j&&(j.hidden=f));const y=t.getAttribute("data-default-new-repo-branch"),v=document.querySelector(".js-new-repo-owner-default-branch");v&&(v.textContent=y);const b=t.getAttribute("data-owner-settings-link-prefix"),L=document.querySelector(".js-new-repo-owner-settings-link-prefix");L&&(L.textContent=b);const w=t.getAttribute("data-owner-settings-url"),k=document.querySelector(".js-repo-owner-default-branch-settings-link-container"),S=document.querySelector(".js-org-repo-owner-default-branch-settings-info");if(w){const e=document.querySelector(".js-new-repo-owner-settings-link");e&&(e.href=w,k&&(k.hidden=!1)),S&&(S.hidden=!0)}else if(k&&(k.hidden=!0,S)){const e=t.hasAttribute("data-viewer-is-org-admin");S.hidden=!e}const T="true"===t.getAttribute("data-org-show-trade-controls"),q="true"===t.getAttribute("data-viewer-is-org-admin"),E="true"===t.getAttribute("data-user-show-trade-controls"),M=T&&!r,A=document.querySelector(".js-trade-controls-description"),H=document.querySelector(".js-individual-trade-controls-description");if(E||M){const e=!E&&!q&&M;d&&(d.hidden=!e),i.disabled=!0,l&&(l.hidden=!0),m&&(m.hidden=!0),g&&(g.hidden=!0),j&&(j.hidden=!0)}else A&&(A.hidden=!0),H&&(H.hidden=!0);E?(A&&(A.hidden=!0),H&&(H.hidden=!1)):M&&A&&(A.hidden=!q),function(e,t,n,s){let o=null;"private"!==e.getAttribute("data-default")||s.disabled?"internal"===e.getAttribute("data-default")&&n&&!n.disabled?o=n:t.disabled?n&&!n.disabled&&(o=n):o=t:o=s;if(!o)return;const r=t.disabled&&t.checked||s.disabled&&s.checked||n&&n.disabled&&n.checked,i=!(t.checked||n&&n.checked||s.checked);!1!==C&&!0!==r&&!0!==i||(o.checked=!0,a(o,"change"))}(t,s,o,i),function(e){for(const s of document.querySelectorAll(".js-with-permission-fields"))s.hidden=!e;for(const s of document.querySelectorAll(".js-without-permission-fields"))s.hidden=e;const t=document.querySelector(".errored"),n=document.querySelector("dl.warn");t&&(t.hidden=!e);n&&(n.hidden=!e)}("yes"===t.getAttribute("data-permission")),function(){const e=document.querySelector("#js-upgrade-container");if(!e)return;const t=p(document,"#js-payment-methods-form");e.firstElementChild&&t.appendChild(e.firstElementChild);const n=p(document,"input[name=owner]:checked",HTMLInputElement).value,s=t.querySelector(`.js-upgrade[data-login="${n}"]`);s&&e.appendChild(s)}(),D();const I=document.querySelector(".js-quick-install-container");if(I){const e=p(I,".js-quick-install-divider");e.hidden=!0;const t=p(document,"input[name=owner]:checked",HTMLInputElement).parentElement;if(t){const n=t.querySelector(".js-quick-install-list-template");if(n instanceof HTMLTemplateElement){const t=p(I,".js-account-apps");t.innerHTML="",t.append(n.content.cloneNode(!0)),n.children.length>0&&(e.hidden=!1)}}}}function R(e,t,n,s,o){e?(t.disabled=!1,n&&n.classList.remove("text-gray-light"),s&&(s.hidden=!1),o&&(o.hidden=!0)):(t.disabled=!0,n&&n.classList.add("text-gray-light"),s&&(s.hidden=!0),o&&(o.hidden=!1))}function D(e){const t=document.querySelector("#js-upgrade-container");if(!t)return;const n=t.querySelector(".js-billing-section"),s=t.querySelector(".js-confirm-upgrade-checkbox");let o=e?e.target:null;o||(o=document.querySelector(".js-privacy-toggle:checked")),"false"===o.value?(t.hidden=!1,n&&n.classList.remove("has-removed-contents"),s&&(s.checked=!0)):(t.hidden=!0,n&&n.classList.add("has-removed-contents"),s&&(s.checked=!1)),$()}function $(){const e=p(document,".js-repo-form"),t=e.querySelector(".js-repository-owner-choice:checked"),n=e.querySelector(".js-repo-name"),s=e.querySelector(".js-repo-url"),o=e.querySelector(".js-repo-gitignore"),r=e.querySelector(".js-repo-license");let a=!s||!s.classList.contains("is-autocheck-errored");if(a=a&&!!t,a&&n&&(a=n.classList.contains("is-autocheck-successful"),"private"===p(document,".js-privacy-toggle:checked",HTMLInputElement).value&&(a=a&&function(){const e=document.querySelector("#js-upgrade-container");if(!e)return!0;if(e.querySelector(".js-ofac-sanction-notice"))return!1;const t=e.querySelector(".js-confirm-upgrade-checkbox");if(t instanceof HTMLInputElement&&!t.checked)return!1;const n=e.querySelector(".js-zuora-billing-info");if(n&&n.classList.contains("d-none"))return!1;return!0}())),o&&o.checked){const t=p(e,'input[name="repository[gitignore_template]"]:checked',HTMLInputElement);a=a&&""!==t.value}if(r&&r.checked){const t=p(e,'input[name="repository[license_template]"]:checked',HTMLInputElement);a=a&&""!==t.value}p(e,"button[type=submit]",HTMLButtonElement).disabled=!a}async function z(e){const t=e.form;p(t,"#release_draft",HTMLInputElement).value="1",U(e,"saving");try{const n=await(await L(t.action,{method:t.method,body:new FormData(t),headers:{Accept:"application/json"}})).json();return U(e,"saved"),setTimeout(U,5e3,e,"default"),a(t,"release:saved",{release:n}),n}catch(n){throw U(e,"failed"),n}}function P(e){const t=l(e,".js-releases-marketplace-publish-container"),n=p(t,".js-releases-marketplace-publish-preview");e.checked?n.classList.remove("d-none"):n.classList.add("d-none")}function U(e,t){for(const n of e.querySelectorAll(".js-save-draft-button-state"))n.hidden=n.getAttribute("data-state")!==t;e.disabled="saving"===t}function W(e){const t=document.querySelector(".js-release-target-wrapper");if(null!=t){switch(e){case"valid":t.classList.add("d-none");break;case"loading":break;default:t.classList.remove("d-none")}for(const t of document.querySelectorAll(".js-tag-status-message"))t.hidden=t.getAttribute("data-state")!==e}}c("#js-upgrade-container .js-zuora-billing-info:not(.d-none)",$),c(".page-new-repo",(function(){const e=document.querySelector("#js-upgrade-container");e&&(e.hidden=!0),F();const t=p(document,".js-repo-form"),n=t.querySelector(".js-repo-url");if(n)return void n.focus();const s=t.querySelector(".js-template-repository-select");if(s)return void s.focus();const o=t.querySelector(".js-owner-select");o&&o.focus()})),d("click",".js-reponame-suggestion",(function(e){const t=p(document,".js-repo-name",HTMLInputElement);t.value=e.currentTarget.textContent,a(t,"input",!1)})),d("click",".js-privacy-toggle",(function(){C=!0})),d("change",".js-privacy-toggle",D),d("details-menu-selected",".js-owner-container",F,{capture:!0}),d("change","#js-upgrade-container input",$),T("#js-upgrade-container input",$),T(".js-owner-reponame .js-repo-name",(function(e){const t=document.querySelector(".js-personal");if(t){const n=document.querySelector(".js-owner-container input.js-repository-owner-is-viewer"),s=e.target,o=!(n&&n.checked&&n.defaultValue.toLowerCase()===s.value.toLowerCase());t.hidden=o,p(document,"#repo-name-suggestion").hidden=!o}$()})),d("auto-check-send",".js-repo-name-auto-check",(function(e){const t=e.currentTarget.form,n=p(t,"input[name=owner]:checked",HTMLInputElement).value;e.detail.body.append("owner",n)})),d("auto-check-complete","#repository_name",(function(){$()})),T(".js-repo-url",(function(e){const t=e.target;if(!(t instanceof HTMLInputElement))return;const n=t.closest(".form-group");if(!(n instanceof HTMLDListElement))return;const s=p(document,".js-insecure-url-warning"),o=p(document,".js-svn-url-error"),r=p(document,".js-git-url-error"),a=t.value.toLowerCase();s.hidden=!a.startsWith("http://"),o.hidden=!a.startsWith("svn://"),r.hidden=!a.startsWith("git://"),a.startsWith("svn://")||a.startsWith("git://")?(t.classList.add("is-autocheck-errored"),n.classList.add("errored")):(t.classList.remove("is-autocheck-errored"),n.classList.remove("errored")),$()})),d("change",".js-toggle-repo-init-setting",e=>{const t=e.currentTarget;t.checked||function(e){const t=e.closest(".js-repo-init-setting-container");t&&(p(t,".js-repo-init-setting-unchecked-menu-option",HTMLInputElement).checked=!0)}(t),$()}),d("change",".js-repo-init-setting-unchecked-menu-option",e=>{const t=e.currentTarget;t.checked&&function(e){const t=e.closest(".js-repo-init-setting-container");if(!t)return;const n=p(t,".js-toggle-repo-init-setting",HTMLInputElement);n.checked=!1,a(n,"change")}(t),$()}),d("change",".js-toggle-new-repo-default-branch-info",e=>{!function(e){const t=l(e,"form"),n=t.querySelector(".js-new-repo-default-branch-info");if(!n)return;const s=m(t,".js-toggle-new-repo-default-branch-info:checked",HTMLInputElement).length>0;n.hidden=!s}(e.currentTarget)}),d("tab-container-changed",".js-branches-tags-tabs",(async function(e){const t=e.detail.relatedTarget,n=e.currentTarget;if(!n)return;let s,o;for(const a of n.querySelectorAll("[data-controls-ref-menu-id]")){if(!(a instanceof f||a instanceof h))return;const e=i(a,"data-controls-ref-menu-id"),n=t.id===e;a.hidden=!n,n?o=a:s||(s=a.input?a.input.value:"")}const r=o&&o.input;r&&(o&&void 0!==s&&(r.value=s),r.focus())})),c(".js-pulse-contribution-data",e=>{!async function(e){const t=e.getAttribute("data-pulse-diffstat-summary-url");let n;try{t&&(n=await async function(e){return v(document,e)}(t),function(e,t){t.innerHTML="",t.appendChild(e)}(n,e))}catch(s){const t=p(e,".js-blankslate-loading"),n=p(e,".js-blankslate-error");t.classList.add("d-none"),n.classList.remove("d-none")}}(e)}),d("change",".js-releases-marketplace-publish-field",(function(e){P(e.currentTarget)})),c(".js-releases-marketplace-publish-field",(function(e){P(e)})),d("click",".js-save-draft",(function(e){z(e.currentTarget),e.preventDefault()})),d("click",".js-timeline-tags-expander",(function(e){const t=e.currentTarget;l(t,".js-timeline-tags").classList.remove("is-collapsed")})),d("release:saved",".js-release-form",(function(e){const t=e.detail.release,n=e.currentTarget,s=n.getAttribute("data-repo-url"),o=t.update_url||X("tag",s,t.tag_name);if(n.setAttribute("action",o),t.update_authenticity_token){n.querySelector("input[name=authenticity_token]").value=t.update_authenticity_token}const r=t.edit_url||X("edit",s,t.tag_name);b(q(),document.title,r);const a=document.querySelector("#delete_release_confirm form");if(a){const e=t.delete_url||X("tag",s,t.tag_name);if(a.setAttribute("action",e),t.delete_authenticity_token){p(a,"input[name=authenticity_token]",HTMLInputElement).value=t.delete_authenticity_token}}const i=n.querySelector("#release_id");if(!i.value){i.value=t.id;const e=document.createElement("input");e.type="hidden",e.name="_method",e.value="put",n.appendChild(e)}})),d("click",".js-publish-release",(function(){p(document,"#release_draft",HTMLInputElement).value="0"}));const B=new WeakMap;async function N(e){if(!e.value)return;if(e.value===B.get(e))return;W("loading"),B.set(e,e.value);const t=i(e,"data-url"),n=new URL(t,window.location.origin),s=new URLSearchParams(n.search.slice(1));s.append("tag_name",e.value),n.search=s.toString();try{const t=await(await L(n.toString(),{headers:{Accept:"application/json"}})).json();"duplicate"===t.status&&parseInt(e.getAttribute("data-existing-id"))===parseInt(t.release_id)?W("valid"):(p(document,".js-release-tag .js-edit-release-link").setAttribute("href",t.url),W(t.status))}catch(o){W("invalid")}}function X(e,t,n){return`${t}/releases/${e}/${n}`}function V(e){const t=l(e,"form",HTMLFormElement).querySelector(".js-previewable-comment-form");if(!t)return;let n=t.getAttribute("data-base-preview-url");n||(n=String(t.getAttribute("data-preview-url")),t.setAttribute("data-base-preview-url",n));const s=m(e,'input[name="release[tag_name]"], input[name="release[target_commitish]"]:checked',HTMLInputElement),o=new URL(n,window.location.origin),r=new URLSearchParams(o.search.slice(1));for(const a of s)a.value&&r.append(a.name,a.value);o.search=r.toString(),t.setAttribute("data-preview-url",o.toString())}c("input.js-release-tag-field",{constructor:HTMLInputElement,initialize(e){N(e),e.addEventListener("blur",(function(){N(e)}))}}),d("change",".js-release-tag",(function(e){V(e.currentTarget)})),c(".js-release-form .js-previewable-comment-form",(function(e){V(p(l(e,"form"),".js-release-tag"))})),d("auto-check-message-updated",".js-rename-branch-input",(function(e){!function(e){const t=l(e,".js-rename-branch-form"),n=m(t,".js-rename-branch-new-name");let s=e.value;if(s!==e.defaultValue&&""!==s){const e=t.querySelector(".js-rename-branch-autocheck-message");e&&e.hasAttribute("data-normalized-name")&&(s=i(e,"data-normalized-name"));for(const t of n)t.textContent=s}}(e.currentTarget)})),d("change",".js-template-repository-choice",(function(e){const t=e.target,n=t.checked&&""!==t.value,s=t.form;p(s,".js-repository-auto-init-options").classList.toggle("has-removed-contents",n);const o=m(s,".js-template-repository-setting"),r=m(s,".js-template-repository-name-display");if(n){const e=l(t,".js-template-repository-choice-container"),n=p(e,".js-template-repository-name"),o=i(t,"data-owner"),c=s.querySelector(`.js-repository-owner-choice[value="${o}"]`);if(c instanceof HTMLInputElement)c.checked=!0,a(c,"change");else{const e=p(s,".js-repository-owner-choice.js-repository-owner-is-viewer",HTMLInputElement);e.checked=!0,a(e,"change")}for(const t of r)t.textContent=n.textContent}else for(const a of r)a.textContent="";for(const a of o)a.hidden=!n})),E("keydown",".js-tree-finder-field",e=>{"Escape"===e.key&&(e.preventDefault(),history.back())});c(".js-tree-finder",e=>{const t=p(e,".js-tree-finder-field",HTMLInputElement),n=p(e,".js-tree-browser-results");if(n.childElementCount>0)return;(async e=>{if(!(e instanceof M))return;const t=i(e,"data-url"),n=p(e,".js-tree-browser-result-template",HTMLTemplateElement),{paths:s}=await(await L(t)).json();e.addLazyItems(s,e=>{const t=n.content.cloneNode(!0).firstElementChild,s=p(t,".js-tree-browser-result-anchor",HTMLAnchorElement),o=p(s,".js-tree-browser-result-path"),r=new URL(s.href,window.location.origin);return r.pathname=`${r.pathname}/${encodeURI(e)}`,s.href=String(r),s.id=`entry-${Math.random().toString().substr(2,5)}`,o.textContent=e,t}),e.sort()})(e);const s=new g(t,n);s.start(),e.addEventListener("fuzzy-list-will-sort",()=>{s.stop()}),e.addEventListener("fuzzy-list-sorted",()=>{s.start(),s.navigate()})});let G=null;c(".js-pjax-files",e=>{if(!G)return void(G=window.location.pathname);const t=e.querySelector(`a[href='${G}']`);t&&setTimeout((function(){document.activeElement&&document.activeElement!==document.body||t.focus()}),200),G=window.location.pathname});let J=null;const K=new WeakMap;function O(e){e.classList.remove("is-progress-bar");const t=l(e,".js-upload-manifest-file-container");p(t,".js-upload-progress").hidden=!0,p(t,".js-upload-meter-text .js-upload-meter-filename").textContent=""}function Q(e){O(e.currentTarget)}function Y(e){const t=l(e,"form",HTMLFormElement);return p(t,"#release_id",HTMLInputElement).value}d("file-attachment-accept",".js-upload-manifest-file",(function(e){const{attachments:t}=e.detail,n=parseInt(e.currentTarget.getAttribute("data-directory-upload-max-files")||"",10);t.length>n&&(e.preventDefault(),e.currentTarget.classList.add("is-too-many"))})),d("document:drop",".js-upload-manifest-tree-view",(async function(e){const{transfer:t}=e.detail,n=e.currentTarget,s=await j.traverse(t,!0),o=p(document,"#js-repo-pjax-container");o.addEventListener("pjax:success",()=>{p(o,".js-upload-manifest-file",y).attach(s)},{once:!0});const r=i(n,"data-drop-url");A({url:r,container:o})})),d("upload:setup",".js-upload-manifest-file",(async function(e){const{batch:t,form:n,preprocess:s}=e.detail,o=e.currentTarget;function r(){n.append("upload_manifest_id",K.get(o))}if(function(e,t){const n=l(e,".js-upload-manifest-file-container"),s=p(n,".js-upload-progress");s.hidden=!1,e.classList.add("is-progress-bar");const o=p(s,".js-upload-meter-text");p(o,".js-upload-meter-range-start").textContent=String(t.uploaded()+1),p(o,".js-upload-meter-range-end").textContent=String(t.size)}(o,t),K.get(o))return void r();if(J)return void s.push(J.then(r));const a=l(o,".js-upload-manifest-file-container").querySelector(".js-upload-manifest-form");J=fetch(a.action,{method:a.method,body:new FormData(a),headers:{Accept:"application/json"}});const[i,c]=function(){let e;return[new Promise(t=>{e=t}),e]}();s.push(i.then(r));const d=await J;if(!d.ok)return;const u=await d.json();p(document,".js-manifest-commit-form",HTMLFormElement).elements.namedItem("manifest_id").value=u.upload_manifest.id,K.set(o,u.upload_manifest.id),J=null,c()})),d("upload:start",".js-upload-manifest-file",(function(e){const{attachment:t,batch:n}=e.detail,s=l(e.currentTarget,".js-upload-manifest-file-container"),o=p(s,".js-upload-progress"),r=p(o,".js-upload-meter-text");p(r,".js-upload-meter-range-start").textContent=n.uploaded()+1,p(r,".js-upload-meter-filename").textContent=t.fullPath})),d("upload:complete",".js-upload-manifest-file",(function(e){const{attachment:t,batch:n}=e.detail,s=p(document,".js-manifest-commit-file-template",HTMLElement),o=p(s,".js-manifest-file-entry").cloneNode(!0);p(o,".js-filename").textContent=t.fullPath;const r=t.id;p(o,".js-remove-manifest-file-form",HTMLFormElement).elements.namedItem("file_id").value=r;const a=p(document,".js-manifest-file-list");a.hidden=!1,e.currentTarget.classList.add("is-file-list"),p(a,".js-manifest-file-list-root").appendChild(o),n.isFinished()&&O(e.currentTarget)})),d("upload:progress",".js-upload-manifest-file",(function(e){const{batch:t}=e.detail,n=l(e.currentTarget,".js-upload-manifest-file-container");p(n,".js-upload-meter").style.width=`${t.percent()}%`})),d("upload:error",".js-upload-manifest-file",Q),d("upload:invalid",".js-upload-manifest-file",Q),u(".js-remove-manifest-file-form",(async function(e,t){await t.html();const n=l(e,".js-manifest-file-list-root");if(l(e,".js-manifest-file-entry").remove(),!n.hasChildNodes()){l(n,".js-manifest-file-list").hidden=!0,p(document,".js-upload-manifest-file").classList.remove("is-file-list")}})),c(".js-manifest-ready-check",{initialize(e){!async function(e){const t=i(e,"data-redirect-url");try{await H(i(e,"data-poll-url")),window.location.href=t}catch(n){p(document,".js-manifest-ready-check").hidden=!0,p(document,".js-manifest-ready-check-failed").hidden=!1}}(e)}}),d("click",".js-release-remove-file",(function(e){const t=l(e.currentTarget,".js-release-file");t.classList.add("delete"),p(t,"input.destroy",HTMLInputElement).value="true"})),d("click",".js-release-undo-remove-file",(function(e){const t=l(e.currentTarget,".js-release-file");t.classList.remove("delete"),p(t,"input.destroy",HTMLInputElement).value=""}));let Z=null;function ee(e,t){t.append("release_id",Y(e));const n=m(document,".js-releases-field .js-release-file.delete .id",HTMLInputElement);if(n.length){const e=n.map(e=>e.value);t.append("deletion_candidates",e.join(","))}}d("release:saved",".js-release-form",(function(e){const t=e.currentTarget;Z=null;let n=!1;for(const o of t.querySelectorAll(".js-releases-field .js-release-file"))o.classList.contains("delete")?o.remove():o.classList.contains("js-template")||(n=!0);const s=p(t,".js-releases-field");s.classList.toggle("not-populated",!n),s.classList.toggle("is-populated",n)})),d("upload:setup",".js-upload-release-file",(function(e){const{form:t,preprocess:n}=e.detail,s=e.currentTarget;if(Y(s))return void ee(s,t);if(!Z){const e=p(document,".js-save-draft",HTMLButtonElement);Z=z(e)}const o=ee.bind(null,s,t);n.push(Z.then(o))})),d("upload:start",".js-upload-release-file",(function(e){const t=e.detail.policy;p(e.currentTarget,".js-upload-meter").classList.remove("d-none");const n=t.asset.replaced_asset;if(n)for(const s of m(document,".js-releases-field .js-release-file .id",HTMLInputElement))Number(s.value)===n&&l(s,".js-release-file").remove()})),d("upload:complete",".js-upload-release-file",(function(e){const{attachment:t}=e.detail,n=p(document,".js-releases-field"),s=p(n,".js-template").cloneNode(!0);s.classList.remove("d-none","js-template"),p(s,"input.id",HTMLInputElement).value=t.id;const o=t.name||t.href.split("/").pop();for(const a of s.querySelectorAll(".js-release-asset-filename"))a instanceof HTMLInputElement?a.value=o:a.textContent=o;const r=`(${(t.file.size/1048576).toFixed(2)} MB)`;p(s,".js-release-asset-filesize").textContent=r,n.appendChild(s),n.classList.remove("not-populated"),n.classList.add("is-populated"),p(e.currentTarget,".js-upload-meter").classList.add("d-none")})),d("upload:progress",".js-upload-release-file",(function(e){const{attachment:t}=e.detail;p(e.currentTarget,".js-upload-meter").style.width=`${t.percent}%`}))}}}));
//# sourceMappingURL=repositories-d9893826.js.map