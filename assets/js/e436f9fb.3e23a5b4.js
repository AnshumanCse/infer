(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(254)),a={title:"Loop Hoisting",description:"Detect opportunities to hoist function calls that are invariant outside of loop bodies for efficiency."},c={unversionedId:"checker-loop-hoisting",id:"checker-loop-hoisting",isDocsHomePage:!1,title:"Loop Hoisting",description:"Detect opportunities to hoist function calls that are invariant outside of loop bodies for efficiency.",source:"@site/docs/checker-loop-hoisting.md",slug:"/checker-loop-hoisting",permalink:"/docs/next/checker-loop-hoisting",version:"current",sidebar:"docs",previous:{title:"Liveness",permalink:"/docs/next/checker-liveness"},next:{title:"Parameter Not Null Checked",permalink:"/docs/next/checker-parameter-not-null-checked"}},l=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Detect opportunities to hoist function calls that are invariant outside of loop bodies for efficiency."),Object(i.b)("p",null,"Activate with ",Object(i.b)("inlineCode",{parentName:"p"},"--loop-hoisting"),"."),Object(i.b)("p",null,"Supported languages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),Object(i.b)("li",{parentName:"ul"},"C#/.Net: No"),Object(i.b)("li",{parentName:"ul"},"Erlang: No"),Object(i.b)("li",{parentName:"ul"},"Java: Yes")),Object(i.b)("p",null,"This checker detects opportunities to hoist function calls that are invariant to outside of loop bodies. The hoisting analysis relies on ",Object(i.b)("a",{parentName:"p",href:"/docs/next/checker-purity"},"purity")," analysis to determine whather a function is pure or not."),Object(i.b)("p",null,"It has an additional mode that reports ",Object(i.b)("a",{parentName:"p",href:"/docs/next/all-issue-types#expensive_loop_invariant_call"},"loop-invariant functions that are expensive")," (i.e. at least linear). This is enabled by the flag ",Object(i.b)("inlineCode",{parentName:"p"},"--hoisting-report-only-expensive"),"."),Object(i.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(i.b)("p",null,"The following issue types are reported by this checker:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#expensive_loop_invariant_call"},"EXPENSIVE_LOOP_INVARIANT_CALL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#invariant_call"},"INVARIANT_CALL"))))}p.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(a,".").concat(f)]||u[f]||b[f]||i;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);