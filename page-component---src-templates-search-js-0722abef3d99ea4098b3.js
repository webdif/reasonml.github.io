webpackJsonp([6],{"./src/components/GuideSidebar.js":function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.constructTree=t.fixPath=t.sidebarFragment=void 0;var c,s,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=n("./node_modules/react/react.js"),f=r(h),p=n("./src/components/Link.js"),m=r(p),g=n("./src/utils/typography.js"),b=n("./src/utils/colors.js"),v=function(t){function n(){var e,t,r,o;a(this,n);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return t=r=i(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(c))),r.state={closed:!0},o=t,i(r,o)}return l(n,t),d(n,[{key:"componentWillReceiveProps",value:function(e){e.current!==this.props.current&&this.setState({closed:!0})}},{key:"render",value:function(){var t=this;return e.createElement("div",{css:j.container},e.createElement("div",{css:j.navToggle,onClick:function(){return t.setState({closed:!t.state.closed})}},"Navigation"),e.createElement("div",{css:[j.contents,this.state.closed&&j.hiddenContents]},e.createElement(m.default,{to:this.props.search},"Search"),e.createElement(y,{current:this.props.current,item:this.props.root,root:!0,depth:0})))}}]),n}(f.default.Component);t.default=v;var y=function t(n){var r=n.current,o=n.root,a=n.item,i=a.title,l=a.relativePath,c=a.children,s=n.depth,u=[j.link,j["link"+s],l===r&&j.currentLink];return c.length?e.createElement("div",{css:[j.node,o&&j.rootNode]},o?null:e.createElement(m.default,{to:l,css:u},i),e.createElement("ul",{css:[j.children,o&&j.rootChildren]},c.map(function(n){return e.createElement("li",{style:j.li,key:n.relativePath},e.createElement(t,{current:r,item:n,depth:s+1}))}))):e.createElement(m.default,{css:[j.node,u],to:l},i)},x=(t.sidebarFragment="** extracted graphql fragment **","@media(max-width: 800px)"),j={container:(c={width:(0,g.rhythm)(8)},o(c,x,u({},(0,g.scale)(0),{width:"auto"})),o(c,"fontFamily",(0,g.headerFontFamily)()),c),contents:{padding:(0,g.rhythm)(1/3)+" "+(0,g.rhythm)(.5)},hiddenContents:o({},x,{display:"none"}),navToggle:o({backgroundColor:"#444",color:"white",padding:(0,g.rhythm)(1/3)+" "+(0,g.rhythm)(.5),alignSelf:"stretch",display:"none",cursor:"pointer"},x,{display:"flex"}),li:{margin:0,padding:0},link:(s={textDecoration:"none",color:"currentColor"},o(s,x,{padding:""+(0,g.rhythm)(.25)}),o(s,"display","block"),s),currentLink:{textDecoration:"underline",textDecorationColor:b.accent,color:b.accent},link1:u({fontWeight:"bold"},(0,g.scale)(0)),children:u({},(0,g.scale)(-.2),{listStyle:"none",margin:0,padding:0,paddingLeft:(0,g.rhythm)(.5),marginLeft:0,borderLeft:"1px solid #aaa"}),rootChildren:{borderLeft:"none",marginLeft:0,paddingLeft:0}},E=t.fixPath=function(e){return e.match(/\/index\.md$/)?"/"+e.slice(0,-"/index.md".length):"/"+e.slice(0,-".md".length)},w=function(e){return e.map(function(e){var t=e.relativePath,n=e.childMarkdownRemark.frontmatter,r=n.title,o=n.order;return{relativePath:E(t),title:r,order:o}})},_=function(e){return Object.keys(e).map(function(t){return e[t]})},k=function e(t){return u({},t,{children:_(t.children).sort(function(e,t){return e.order-t.order}).map(e)})};t.constructTree=function(e,t){var n={children:{}};return w(t).forEach(function(e){var t=e.relativePath,r=e.title,o=e.order,a=t.split(/\//g).slice(1),i=a.pop(),l=n;a.forEach(function(e){l.children[e]||(l.children[e]={children:{}}),l=l.children[e]}),l.children[i]=u({children:{}},l.children[i],{relativePath:t,title:r,order:o})}),k(n.children[e])}}).call(t,n("./node_modules/glamor-react/lib/index.js"))},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","add-module-exports","add-module-exports","transform-object-assign",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"babel-plugin-glamor"],"presets":["/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/babel-preset-env/lib/index.js","/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/Search.js':function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("./node_modules/react/react.js"),s=r(c),u=n("./node_modules/react-helmet/lib/Helmet.js"),d=r(u),h=n("./src/components/Section.js"),f=r(h),p=n("./src/components/GuideSidebar.js"),m=r(p),g=n("./src/utils/colors.js"),b=n("./src/utils/typography.js"),v=n("./src/components/Link.js"),y=r(v),x=n("./src/components/Header.js"),j=r(x),E=function e(t,n){[].forEach.call(t.childNodes,function(r){var o=n(r);o?t.replaceChild(o,r):e(r,n)})},w=function(e,t){E(e,function(e){if("#text"===e.nodeName&&e.nodeValue.match(t)){var n=document.createElement("span");return n.innerHTML=e.nodeValue.replace(t,function(e){return'<span class="search-highlighted-result">'+e+"</span>"}),n}})},_=function(e,t){var n=document.createElement("div");n.innerHTML=e;var r=[null];return[].forEach.call(n.childNodes,function(e){e.textContent.match(t)?(w(e,t),r.push(e.outerHTML)):null!==r[r.length-1]&&r.push(null)}),null===r[0]&&r.shift(),null===r[r.length-1]&&r.pop(),r.map(function(e){return null===e?'<p class="search-elided-section">...</p>':e}).join("\n")},k=function(e,t){var n=new RegExp(t,"ig");return e.filter(function(e){var t=e.node.childMarkdownRemark,r=t.html,o=t.frontmatter.title;if(o.match(n)||r.match(n))return!0}).map(function(e){var n=e.node,r=n.relativePath,o=n.childMarkdownRemark,a=o.html,i=o.frontmatter.title;return{relativePath:r,html:_(a,t),title:i}})},P=function(t){function n(e){o(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));T.call(t);var r=decodeURIComponent(e.location.search.slice(1));return t.state={results:r.trim().length>2?k(e.data.allFile.edges,r.toLowerCase()):[],searchText:r},t}return i(n,t),l(n,[{key:"componentDidMount",value:function(){this.input.focus()}},{key:"renderMain",value:function(){var t=this;return e.createElement("div",{css:O.container},e.createElement("div",{css:O.searchBar},"Search",e.createElement("input",{ref:function(e){return t.input=e},css:O.searchInput,onChange:function(e){return t.setText(e.target.value)},value:this.state.searchText,type:"text"})),e.createElement("div",{css:O.results},this.state.results.slice(0,10).map(function(t){return e.createElement("div",{key:t.relativePath,css:O.result},e.createElement("h4",{css:O.resultTitleWrapper},e.createElement(y.default,{css:O.resultTitle,to:(0,p.fixPath)(t.relativePath)},"‣ ",t.title)),e.createElement("div",{css:O.resultBody,dangerouslySetInnerHTML:{__html:t.html}}))})))}},{key:"render",value:function(){var t=this.props.pathContext,n=t.section,r=t.sectionTitle,o=this.props.data.allFile;return e.createElement("div",null,e.createElement(d.default,{title:r+" Search"}),e.createElement(f.default,{backgroundColor:g.accent,css:{color:"white"}},e.createElement(j.default,{inverted:!0}),e.createElement("div",{css:{alignItems:"center"}},e.createElement("h1",null,e.createElement(y.default,{css:O.topLink,to:"/"+n},r)))),e.createElement(f.default,{css:O.contentSection},e.createElement("div",{css:O.sidebar},e.createElement(m.default,{current:n+"/search",search:"/"+n+"/search",root:(0,p.constructTree)(n,o.edges.map(function(e){return e.node}))})),this.renderMain()))}}]),n}(s.default.Component),T=function(){var e=this;this.setText=function(t){window.history.replaceState({},document.title,window.location.pathname+"?"+t),e.setState({searchText:t,results:t.trim().length>2?k(e.props.data.allFile.edges,t.toLowerCase()):[]})}};t.default=P;var O={container:{flex:1,flexShrink:1},editLink:{fontSize:"14px",fontWeight:"normal",lineHeight:"25px"},title:{borderBottom:"1px solid #aaa",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end"},contentSection:{flexDirection:"row","@media(max-width: 800px)":{flexDirection:"column"}},sidebar:{},main:{position:"relative",flex:1,padding:"2em",minWidth:0},searchBar:{flexDirection:"row",alignItems:"center",padding:10},searchInput:{flex:1,padding:"5px 10px",fontSize:18,marginLeft:10},results:{padding:10},result:{},resultTitle:{fontWeight:"bold"},resultTitleWrapper:{marginBottom:(0,b.rhythm)(.5)},resultBody:{fontSize:12,paddingLeft:20,"& .search-highlighted-result":{backgroundColor:"gold",fontWeight:"bold"},"& p":{marginBottom:10},"& .search-elided-section":{color:"#aaa",height:5,marginBottom:15,marginTop:-10},"& ul":{marginBottom:5},"& code":{fontSize:"inherit"}}};t.pageQuery="** extracted graphql fragment **"}).call(t,n("./node_modules/glamor-react/lib/index.js"))}});
//# sourceMappingURL=page-component---src-templates-search-js-0722abef3d99ea4098b3.js.map