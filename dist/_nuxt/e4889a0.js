(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{361:function(t,e,o){var content=o(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("4515da2b",content,!0,{sourceMap:!1})},362:function(t,e,o){var content=o(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("6e2511c2",content,!0,{sourceMap:!1})},375:function(t,e,o){"use strict";o(361)},376:function(t,e,o){var r=o(61)((function(i){return i[1]}));r.push([t.i,':root{--text-color:#000;--light-text-color:#161616;--surface-color:#fff;--grey-color:#8f8f8f;--primary-color:#1253a2;--light-primary-color:#2f8cff;--lighther-primary-color:#a6b7d4;--error-color:#ae0a0a;--main-background:#fbfcfd;--border-color:#eeeff1;--action-border-color:#ccc;--main-font-family:"Myriad Pro";--action-height:35px;--root-radius:5px;--mq-desktop:1280px;--mq-mobile:960px;--desktop-padding:25px 25px;--mobile-padding:10px 16px;--main-padding:25px}.columns-resize-bar:before{background-color:#ccc;background-color:var(--action-border-color);bottom:0;display:block;left:50%;margin-left:-1px;position:absolute;top:0;width:1px}.columns-resize-bar:hover:before{content:""}',""]),r.locals={},t.exports=r},377:function(t,e,o){"use strict";o(362)},378:function(t,e,o){var r=o(61)((function(i){return i[1]}));r.push([t.i,'[data-v-34f088a4]:root{--text-color:#000;--light-text-color:#161616;--surface-color:#fff;--grey-color:#8f8f8f;--primary-color:#1253a2;--light-primary-color:#2f8cff;--lighther-primary-color:#a6b7d4;--error-color:#ae0a0a;--main-background:#fbfcfd;--border-color:#eeeff1;--action-border-color:#ccc;--main-font-family:"Myriad Pro";--action-height:35px;--root-radius:5px;--mq-desktop:1280px;--mq-mobile:960px;--desktop-padding:25px 25px;--mobile-padding:10px 16px;--main-padding:25px}.table[data-v-34f088a4]{border-spacing:0;width:100%}.table__td[data-v-34f088a4],.table__th[data-v-34f088a4]{align-items:center;bottom:0;display:inline-flex;left:0;max-width:100%;overflow:hidden;padding:0 10px;position:absolute;right:0;top:0;width:100%}.table__th[data-v-34f088a4]{font-weight:600;text-align:left;white-space:nowrap}.table__td[data-v-34f088a4],.table__th[data-v-34f088a4]{font-size:16px}.table thead th[data-v-34f088a4]{border-bottom:1px solid #eeeff1;border-bottom:1px solid var(--border-color);border-right:1px solid #eeeff1;border-right:1px solid var(--border-color);border-top:1px solid #eeeff1;border-top:1px solid var(--border-color);height:45px;position:relative;vertical-align:middle}.table thead th[data-v-34f088a4]:last-of-type{border-right:none}.table tbody td[data-v-34f088a4]{height:45px;position:relative}',""]),r.locals={},t.exports=r},383:function(t,e,o){"use strict";o.r(e);o(114),o(46);var r={name:"AtomTableDesktop",emits:["update:data","move-item","update:draggableItem"],props:{fields:{type:Array,required:!0},data:{type:Array,required:!0},draggableItem:{type:null|Object}},data:function(){return{key:1,test:[]}},computed:{localData:{get:function(){return this.data},set:function(t){this.$emit("update:data",t)}},localDraggableItem:{get:function(){return this.draggableItem},set:function(t){this.$emit("update:draggableItem",t)}}},watch:{fields:{handler:function(t){this.forceRerender()},deep:!0}},mounted:function(){var t=this;window.addEventListener("resize",(function(){t.forceRerender()}))},beforeDestroy:function(){var t=this;window.removeEventListener("resize",(function(){t.forceRerender()}))},methods:{forceRerender:function(){var t=this;this.$refs.table.querySelector(".vue-columns-resizable").remove(),this.$nextTick().then((function(){t.key+=1}))},moveItem:function(t){this.$emit("move-item",t)},saveDraggableItem:function(t){this.localDraggableItem=this.localData[t.oldIndex]}}},l=(o(375),o(377),o(32)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{key:"table-".concat(t.key),ref:"table"},[e("table",{directives:[{name:"columns-resizable",rawName:"v-columns-resizable"}],staticClass:"table"},[e("thead",[e("tr",t._l(t.fields,(function(o,r){return e("th",{key:"th-".concat(r,"-").concat(o.name),attrs:{width:"".concat(100/t.fields.length,"%")}},[e("span",{staticClass:"table__th",domProps:{textContent:t._s(o.title)}})])})),0)]),t._v(" "),e("draggable",{class:"draggable-dropzone",attrs:{handle:".tr-handle","swap-threshold":.5,"empty-insert-threshold":50,tag:"tbody"},on:{end:t.moveItem,start:t.saveDraggableItem},model:{value:t.localData,callback:function(e){t.localData=e},expression:"localData"}},t._l(t.data,(function(o,r){return e("tr",{key:"tr-".concat(r)},t._l(t.fields,(function(l,n){return e("td",{key:"td-".concat(r,"-").concat(n)},[t.$slots[l.name]||t.$scopedSlots[l.name]?e("div",{staticClass:"table__td"},[t._t(l.name,null,{item:o})],2):e("span",{staticClass:"table__td",domProps:{textContent:t._s(o[l.name]?o["".concat(l.name)]:"")}})])})),0)})),0)],1)])}),[],!1,null,"34f088a4",null);e.default=component.exports}}]);