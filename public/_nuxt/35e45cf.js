(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{532:function(e,t,n){"use strict";n.r(t);var l={name:"SearchBox",props:{searchText:{default:"",type:String},value:{default:null,type:String}},computed:{inputVal:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},r=n(87),c=n(118),o=n.n(c),d=n(599),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-text-field",{staticClass:"searchBox",attrs:{"prepend-inner-icon":"mdi-magnify",label:e.searchText,dense:"",height:"2.9em","single-line":"",outlined:"","hide-details":"",solo:"",flat:""},model:{value:e.inputVal,callback:function(t){e.inputVal=t},expression:"inputVal"}})}),[],!1,null,"19b0b8b2",null);t.default=component.exports;o()(component,{VTextField:d.a})}}]);