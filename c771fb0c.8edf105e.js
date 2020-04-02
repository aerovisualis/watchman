(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),r=(n(0),n(209)),o={id:"casefolding",title:"Case-Insensitivity"},c={id:"casefolding",title:"Case-Insensitivity",description:"Watchman is currently completely unaware of case-insensitivity in file",source:"@site/docs/casefolding.md",permalink:"/watchman/docs/casefolding",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/casefolding.md",sidebar:"sidebar",previous:{title:"BSER Binary Protocol",permalink:"/watchman/docs/bser"},next:{title:"Contributing",permalink:"/watchman/docs/contributing"}},s=[{value:"Why doesn&#39;t Watchman support case-folding properly?",id:"why-doesnt-watchman-support-case-folding-properly",children:[]},{value:"Does this matter?",id:"does-this-matter",children:[]},{value:"Credits",id:"credits",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Watchman is currently completely unaware of case-insensitivity in file\nsystems, and does not attempt to do any case-folding of file names. On a\ncase-insensitive file system like Mac macOS's\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/HFS_Plus"}),"HFS+"),", this can manifest itself in\ndifferent ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If a file ",Object(r.b)("inlineCode",{parentName:"li"},"foo.txt")," is renamed to ",Object(r.b)("inlineCode",{parentName:"li"},"FOO.txt"),", Watchman will report ",Object(r.b)("inlineCode",{parentName:"li"},"FOO.txt"),"\nas created and ",Object(r.b)("inlineCode",{parentName:"li"},"foo.txt")," separately as changed."),Object(r.b)("li",{parentName:"ul"},"If a file ",Object(r.b)("inlineCode",{parentName:"li"},"foo.txt")," is removed and another file ",Object(r.b)("inlineCode",{parentName:"li"},"FOO.txt")," is later added,\nWatchman will report ",Object(r.b)("inlineCode",{parentName:"li"},"FOO.txt")," as added, but it might report ",Object(r.b)("inlineCode",{parentName:"li"},"foo.txt")," as\neither removed or changed.")),Object(r.b)("p",null,"In general, both ",Object(r.b)("inlineCode",{parentName:"p"},"foo.txt")," and ",Object(r.b)("inlineCode",{parentName:"p"},"FOO.txt")," can be reported, sometimes with\ndifferent stat data, sometimes with the same stat data."),Object(r.b)("h2",{id:"why-doesnt-watchman-support-case-folding-properly"},"Why doesn't Watchman support case-folding properly?"),Object(r.b)("p",null,"One problem is that 'properly' is hard to pin down. There are at least four\nlevels of correctness here:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"handle ASCII case-folding only (95% solution)"),Object(r.b)("li",{parentName:"ul"},"handle ASCII + accented ASCII case-folding only (98%)"),Object(r.b)("li",{parentName:"ul"},"full handling of current Unicode spec using a Unicode database (99%)"),Object(r.b)("li",{parentName:"ul"},"using the special folding table written to a hidden file on disk at file\nsystem creation time that matches Apple's interpretation of Unicode at the\ntime of the OS release + their own quirks (100%)")),Object(r.b)("p",null,"Clients of Watchman might have their own idea of case-folding, which might or\nmight not be compatible with Watchman's idea of it. So far, clients have\nmanaged to handle case-folding outside of Watchman, with some success."),Object(r.b)("h2",{id:"does-this-matter"},"Does this matter?"),Object(r.b)("p",null,"It depends on your application."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example 1:")," Your application is a build system that has a pre-baked list of\nfiles. Your application expects files to be on disk in the correct case even\non case-insensitive file systems, and you declare that the behavior is\nundefined if they aren't. You invoke Watchman by asking it what files have\nchanged. In this case, Watchman should work without you having to do anything\nspecial."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example 2:")," Your application is a build system rule to generate CSS rules\nthat is run by a Watchman trigger on ",Object(r.b)("inlineCode",{parentName:"p"},"*.scss"),". You expect all files you care\nabout to end with the string ",Object(r.b)("inlineCode",{parentName:"p"},".scss")," on case-insensitive file systems, and not\nanother variant of it like ",Object(r.b)("inlineCode",{parentName:"p"},".SCSS"),". In this case, Watchman should work fine --\nat most, it will provide you the same file multiple times with different case\nvariants. You might be dealing with that in your build system anyway."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example 3:")," Like example 2, except you expect ",Object(r.b)("inlineCode",{parentName:"p"},".SCSS")," and other variants to\nwork too. In that case the only way is to explicitly add all possible variants\nto the trigger rule."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example 4:")," You're a source control system that has its own ideas about\ncase-folding that might or might not match up with the operating system's. You\nperform case-folding against an internal data structure, so that if the data\nstructure has ",Object(r.b)("inlineCode",{parentName:"p"},"foo.txt")," and the file system has ",Object(r.b)("inlineCode",{parentName:"p"},"FOO.txt")," you make ",Object(r.b)("inlineCode",{parentName:"p"},"foo.txt"),"\ntake precedence. In that case, Watchman will tell you about both ",Object(r.b)("inlineCode",{parentName:"p"},"FOO.txt")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"foo.txt"),", and it's up to you to perform normalization.\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://bitbucket.org/facebook/hgwatchman"}),"hgwatchman")," just consults the file\nsystem in the rare case that a file changes case."),Object(r.b)("h2",{id:"credits"},"Credits"),Object(r.b)("p",null,"The levels of correctness were proposed by Matt Mackall ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:mpm@selenic.com"}),"mpm@selenic.com"),"."))}p.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||r;return n?i.a.createElement(u,c({ref:t},l,{components:n})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);