(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{450:function(e,t,r){var content=r(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("2d680400",content,!0,{sourceMap:!1})},459:function(e,t,r){"use strict";r(6),r(10),r(16),r(17);var n=r(1),o=(r(42),r(9),r(27),r(55),r(436),r(13),r(32),r(437),r(438),r(439),r(440),r(441),r(442),r(443),r(444),r(445),r(446),r(447),r(448),r(449),r(34),r(54),r(8),r(57),r(281),r(0)),c=r(82),l=r(2);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=["sm","md","lg","xl"],y=O.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),v=O.reduce((function(e,t){return e["offset"+Object(l.D)(t)]={type:[String,Number],default:null},e}),{}),j=O.reduce((function(e,t){return e["order"+Object(l.D)(t)]={type:[String,Number],default:null},e}),{}),m={col:Object.keys(y),offset:Object.keys(v),order:Object.keys(j)};function w(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var S=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=S.get(l);return d||function(){var e,t;for(t in d=[],m)m[t].forEach((function(e){var n=r[e],o=w(t,e,n);o&&d.push(o)}));var o=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),S.set(l,d)}(),e(r.tag,Object(c.a)(data,{class:d}),o)}})},470:function(e,t,r){"use strict";r.r(t);var n={name:"PageTitle"},o=(r(475),r(87)),c=r(118),l=r.n(c),f=r(459),d=r(600),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"mt-10",attrs:{justify:"space-between"}},[r("v-col",{attrs:{cols:"12",md:"auto"}},[r("p",{staticClass:"primary-color  mb-0"},[e._t("default")],2)])],1)}),[],!1,null,"231498d4",null);t.default=component.exports;l()(component,{VCol:f.a,VRow:d.a})},475:function(e,t,r){"use strict";r(450)},476:function(e,t,r){var n=r(21)(!1);n.push([e.i,".primary-color[data-v-231498d4]{font-size:1.7rem;color:#535b6c}",""]),e.exports=n}}]);