"use strict";(self.webpackChunkdashboardUI=self.webpackChunkdashboardUI||[]).push([[630],{5539:(xt,M,a)=>{a.r(M),a.d(M,{UserModule:()=>Mt});var d=a(9808),_=a(6696),A=a(1047),m=a(3585),t=a(5e3),S=a(3605),c=a(3075);const U=["*"];let x=(()=>{class o{constructor(e,n,i){this.el=e,this.zone=n,this.platformId=i,this.afterChange=new t.vpe,this.beforeChange=new t.vpe,this.breakpoint=new t.vpe,this.destroy=new t.vpe,this.init=new t.vpe,this.currentIndex=0,this.slides=[],this.initialized=!1,this._removedSlides=[],this._addedSlides=[]}ngOnDestroy(){this.unslick()}ngAfterViewInit(){this.ngAfterViewChecked()}ngAfterViewChecked(){if(!(0,d.PM)(this.platformId)&&(this._addedSlides.length>0||this._removedSlides.length>0)){const e=this.slides.length-this._removedSlides.length+this._addedSlides.length;this.initialized?0===e?this.unslick():(this._addedSlides.forEach(n=>{this.slides.push(n),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickAdd",n.el.nativeElement)})}),this._addedSlides=[],this._removedSlides.forEach(n=>{const i=this.slides.indexOf(n);this.slides=this.slides.filter(s=>s!==n),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickRemove",i)})}),this._removedSlides=[]):e>0&&this.initSlick()}}initSlick(){this.slides=this._addedSlides,this._addedSlides=[],this._removedSlides=[],this.zone.runOutsideAngular(()=>{this.$instance=jQuery(this.el.nativeElement),this.$instance.on("init",(e,n)=>{this.zone.run(()=>{this.init.emit({event:e,slick:n})})}),this.$instance.slick(this.config),this.zone.run(()=>{var e;this.initialized=!0,this.currentIndex=(null===(e=this.config)||void 0===e?void 0:e.initialSlide)||0}),this.$instance.on("afterChange",(e,n,i)=>{this.zone.run(()=>{this.afterChange.emit({event:e,slick:n,currentSlide:i,first:0===i,last:n.$slides.length===i+n.options.slidesToScroll}),this.currentIndex=i})}),this.$instance.on("beforeChange",(e,n,i,s)=>{this.zone.run(()=>{this.beforeChange.emit({event:e,slick:n,currentSlide:i,nextSlide:s}),this.currentIndex=s})}),this.$instance.on("breakpoint",(e,n,i)=>{this.zone.run(()=>{this.breakpoint.emit({event:e,slick:n,breakpoint:i})})}),this.$instance.on("destroy",(e,n)=>{this.zone.run(()=>{this.destroy.emit({event:e,slick:n}),this.initialized=!1})})})}addSlide(e){this._addedSlides.push(e)}removeSlide(e){this._removedSlides.push(e)}slickGoTo(e){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickGoTo",e)})}slickNext(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickNext")})}slickPrev(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPrev")})}slickPause(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPause")})}slickPlay(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPlay")})}unslick(){this.$instance&&(this.zone.runOutsideAngular(()=>{this.$instance.slick("unslick")}),this.$instance=void 0),this.initialized=!1}ngOnChanges(e){if(this.initialized){const n=e.config;if(n.previousValue!==n.currentValue&&void 0!==n.currentValue){const i=n.currentValue.refresh,s=Object.assign({},n.currentValue);delete s.refresh,this.zone.runOutsideAngular(()=>{this.$instance.slick("slickSetOption",s,i)})}}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(t.Lbi))},o.\u0275cmp=t.Xpm({type:o,selectors:[["ngx-slick-carousel"]],inputs:{config:"config"},outputs:{afterChange:"afterChange",beforeChange:"beforeChange",breakpoint:"breakpoint",destroy:"destroy",init:"init"},exportAs:["slick-carousel"],features:[t._Bn([{provide:c.JU,useExisting:(0,t.Gpc)(()=>o),multi:!0}]),t.TTD],ngContentSelectors:U,decls:1,vars:0,template:function(e,n){1&e&&(t.F$t(),t.Hsn(0))},encapsulation:2}),o})(),I=(()=>{class o{constructor(e,n,i,s){this.el=e,this.renderer=n,this.platformId=i,this.carousel=s}ngOnInit(){this.carousel.addSlide(this),(0,d.PM)(this.platformId)&&this.carousel.slides.length>0&&this.renderer.setStyle(this.el,"display","none")}ngOnDestroy(){this.carousel.removeSlide(this)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(t.Lbi),t.Y36(x,1))},o.\u0275dir=t.lG2({type:o,selectors:[["","ngxSlickItem",""]]}),o})(),D=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez]}),o})();function q(o,r){if(1&o&&(t.TgZ(0,"div",14),t._UZ(1,"img",15),t.qZA(),t._UZ(2,"div",16)),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",e.carouselImage,t.LSH)}}function F(o,r){1&o&&t.YNc(0,q,3,1,"ng-template",13)}function N(o,r){if(1&o&&(t.TgZ(0,"div",17),t._UZ(1,"img",18),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.s9C("src",e.img,t.LSH)}}let H=(()=>{class o{constructor(e,n,i){this.cdr=n,this.interfaceService=i,this.slides=[{img:"../../../../../assets/productsImage/1667820020_3.jpg"},{img:"../../../../../assets/productsImage/1677063124_Mac_Book_Air_Desktop.jpg"},{img:"../../../../../assets/productsImage/1673344093_6.jpg"},{img:"../../../../../assets/productsImage/1677025875_ProVedic_Desktop.jpg"},{img:"../../../../../assets/productsImage/1677026046_Livflame_Desktop.jpg"},{img:"../../../../../assets/productsImage/1677063124_Mac_Book_Air_Desktop.jpg"}],this.slideConfig={slidesToShow:4,slidesToScroll:4},this.arrayLength=10,e.interval=2e3,e.keyboard=!0,e.pauseOnHover=!0}slickInit(e){console.log("slick initialized")}breakpoint(e){console.log("breakpoint")}afterChange(e){console.log("afterChange")}beforeChange(e){console.log("beforeChange")}getArray(e){return new Array(e)}ngOnInit(){this.interfaceService.getAll().subscribe(e=>{this.carouselData=e,this.cdr.detectChanges()},e=>{console.log(e)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.Lu),t.Y36(t.sBO),t.Y36(S.k))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-landing-page"]],features:[t._Bn([m.Lu])],decls:28,vars:3,consts:[[1,"carouselConatiner"],[4,"ngFor","ngForOf"],[1,"slickContainer"],["width","100%","src","../../../../../assets/pic-5.jpg","alt",""],[1,"imageContainer"],["src","../../../../../assets/productsImage/phone-4-removebg-preview.png","alt","errors"],[1,"sticker"],["src","../../../../../assets/productsImage/fashion-removebg-preview.png","alt","errors"],["src","../../../../../assets/productsImage/kitchen.jpg","alt","errors"],["src","../../../../../assets/productsImage/staples.jpg","alt","errors"],[1,"carousel",3,"config","init","breakpoint","afterChange","beforeChange"],["slickModal","slick-carousel"],["ngxSlickItem","","class","slide",4,"ngFor","ngForOf"],["ngbSlide",""],[1,"wrapper"],["alt","Random first slide",1,"d-block","w-100",3,"src"],[1,"carousel-caption"],["ngxSlickItem","",1,"slide"],["alt","","width","100%",1,"slideImage",2,"padding","20px",3,"src"]],template:function(e,n){1&e&&(t.TgZ(0,"ngb-carousel",0),t.YNc(1,F,1,0,null,1),t.qZA(),t.TgZ(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",2)(5,"div",4),t._UZ(6,"img",5),t.TgZ(7,"div",6)(8,"h6"),t._uU(9,"Electronics"),t.qZA()()(),t.TgZ(10,"div",4),t._UZ(11,"img",7),t.TgZ(12,"div",6)(13,"h6"),t._uU(14,"Fashion"),t.qZA()()(),t.TgZ(15,"div",4),t._UZ(16,"img",8),t.TgZ(17,"div",6)(18,"h6"),t._uU(19,"Kitchen"),t.qZA()()(),t.TgZ(20,"div",4),t._UZ(21,"img",9),t.TgZ(22,"div",6)(23,"h6"),t._uU(24,"Groceries"),t.qZA()()()(),t.TgZ(25,"ngx-slick-carousel",10,11),t.NdJ("init",function(s){return n.slickInit(s)})("breakpoint",function(s){return n.breakpoint(s)})("afterChange",function(s){return n.afterChange(s)})("beforeChange",function(s){return n.beforeChange(s)}),t.YNc(27,N,2,1,"div",12),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",n.carouselData),t.xp6(24),t.Q6J("config",n.slideConfig),t.xp6(2),t.Q6J("ngForOf",n.slides))},dependencies:[d.sg,m.uo,m.xl,x,I],styles:[".carouselConatiner[_ngcontent-%COMP%]{background-color:#696868}.slickContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;width:100%;gap:20px;position:relative;top:10px;z-index:1;margin-bottom:30px;justify-content:space-around}.slickContainer[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]{width:220px;height:200px;position:relative;background-color:#fff;border-top-right-radius:35px;border-bottom-left-radius:35px}.slickContainer[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;position:relative;left:40px;-webkit-box-reflect:below 0px -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(70%,transparent),to(rgba(250,250,250,.1)))}.slickContainer[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]   .sticker[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;z-index:1;background-color:#107ee6;width:100%;border-bottom-left-radius:35px}.slickContainer[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]   .sticker[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{text-align:center;color:#fff}.gridGallery[_ngcontent-%COMP%]{display:flex;gap:20px;padding-top:10px;padding-bottom:30px}.slideImage[_ngcontent-%COMP%]{padding:20px}"]}),o})();var C=a(520),b=a(7160),k=a(3183),p=a(1274),O=a(3188);function J(o,r){1&o&&(t.TgZ(0,"tm-card")(1,"tm-card-body")(2,"div",3),t._UZ(3,"img",4),t.TgZ(4,"h4"),t._uU(5," You Have No Order"),t.qZA()()()())}function z(o,r){if(1&o&&(t.TgZ(0,"div")(1,"div",14),t._UZ(2,"img",15),t.TgZ(3,"span"),t._uU(4),t.qZA()()()),2&o){const e=r.$implicit;t.xp6(2),t.s9C("src",e.productImage,t.LSH),t.xp6(2),t.Oqu(e.productName)}}function B(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",16)(1,"button",17),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.cancel(i.id))}),t._uU(2,"cancel"),t.qZA()()}}function Y(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",7)(1,"tm-card")(2,"tm-card-body")(3,"div",8),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"div",9),t.YNc(7,z,5,2,"div",10),t.qZA(),t.TgZ(8,"div",11)(9,"h4"),t._uU(10),t.ALo(11,"currency"),t.qZA(),t.TgZ(12,"h5"),t._uU(13),t.qZA()(),t.YNc(14,B,3,0,"div",12),t.qZA(),t.TgZ(15,"tm-card-footer")(16,"button",13),t.NdJ("click",function(){const s=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.orderDetails(s))}),t._uU(17," View Details "),t.qZA()()()()}if(2&o){const e=r.$implicit;t.xp6(4),t.hij(" ",t.lcZ(5,5,e.date)," "),t.xp6(3),t.Q6J("ngForOf",e.product),t.xp6(3),t.hij("Total: ",t.lcZ(11,7,e.totalvalue),""),t.xp6(3),t.Oqu(e.status),t.xp6(1),t.Q6J("ngIf","Delivered"!=e.status)}}function $(o,r){if(1&o&&(t.TgZ(0,"div",5),t.YNc(1,Y,18,9,"div",6),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.orderData)}}function j(o,r){if(1&o&&(t.TgZ(0,"tr")(1,"td",24),t._UZ(2,"img",15),t.TgZ(3,"span"),t._uU(4),t.qZA()(),t.TgZ(5,"td")(6,"span"),t._uU(7),t.qZA()(),t.TgZ(8,"td")(9,"span"),t._uU(10),t.qZA()(),t.TgZ(11,"td")(12,"span"),t._uU(13),t.ALo(14,"currency"),t.qZA()()()),2&o){const e=r.$implicit;t.xp6(2),t.s9C("src",e.productImage,t.LSH),t.xp6(2),t.Oqu(e.productName),t.xp6(3),t.Oqu(e.productDescription),t.xp6(3),t.Oqu(e.quantity),t.xp6(3),t.Oqu(t.lcZ(14,5,e.quantity*e.productPrice))}}function E(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"div",8)(2,"button",19),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.back())}),t.O4$(),t.TgZ(3,"svg",20),t._UZ(4,"path",21)(5,"path",22),t.qZA(),t._uU(6," back"),t.qZA(),t.kcU(),t.TgZ(7,"span"),t._uU(8),t.ALo(9,"date"),t.qZA()(),t.TgZ(10,"div",9)(11,"table")(12,"thead")(13,"tr")(14,"th"),t._uU(15,"Product"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Description"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Quantity"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Price"),t.qZA()()(),t.YNc(22,j,15,7,"tr",10),t.qZA()(),t.TgZ(23,"div",11),t._UZ(24,"h5"),t.TgZ(25,"h4"),t._uU(26),t.ALo(27,"currency"),t.qZA()(),t.TgZ(28,"div",23)(29,"table")(30,"tr")(31,"td")(32,"span"),t._uU(33,"Address: "),t.qZA(),t.TgZ(34,"p"),t._uU(35),t.qZA()(),t.TgZ(36,"td")(37,"span"),t._uU(38,"Payment:"),t.qZA(),t.TgZ(39,"p"),t._uU(40),t.qZA(),t.TgZ(41,"span"),t._uU(42,"Status:"),t.qZA(),t.TgZ(43,"p"),t._uU(44),t.qZA()()()()()()}if(2&o){const e=r.$implicit;t.xp6(8),t.hij(" ",t.lcZ(9,7,e.date),""),t.xp6(14),t.Q6J("ngForOf",e.product),t.xp6(4),t.hij("Total: ",t.lcZ(27,9,e.totalvalue),""),t.xp6(9),t.AsE(" ",e.address,",",e.pincode,""),t.xp6(5),t.Oqu(e.payment),t.xp6(4),t.Oqu(e.status)}}function L(o,r){if(1&o&&(t.TgZ(0,"div",18)(1,"div",7)(2,"tm-card")(3,"tm-card-body"),t.YNc(4,E,45,11,"div",10),t.qZA()()()()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.orderFilter)}}let R=(()=>{class o{constructor(e,n,i){this.http=e,this.cartService=n,this.toastrService=i,this.orderdeatils=!1}ngOnInit(){this.userData=JSON.parse(localStorage.getItem("currentuser")||"{}"),this.getData()}getData(){this.cartService.getAllOrder().subscribe(e=>{this.orderData=e.sort((n,i)=>new Date(i.date).getTime()-new Date(n.date).getTime()),console.log(this.orderData),this.orderData=this.orderData.filter(n=>n.email===this.userData.email),this.orderDate=this.orderData.map(n=>this.orderDate=n.date),console.log(this.orderDate)})}orderDetails(e){this.orderdeatils=!0,this.orderFilter=this.orderData.filter(n=>n.id===e.id)}back(){this.orderdeatils=!1}sortRalliesByDateDesc(){}cancel(e){this.cartService.deleteOrder(e).subscribe(n=>({})),this.showToast(1e3)}showToast(e){this.toastrService.danger("**","order canceled",{duration:e})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C.eN),t.Y36(b.N),t.Y36(k.qK))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-orders"]],decls:3,vars:3,consts:[[4,"ngIf"],["class","orderContainer",4,"ngIf"],["class","filterContainer",4,"ngIf"],[1,"noProducts"],["src","../../../../../assets/emptycart.svg ","alt","","width","200px"],[1,"orderContainer"],["class","orderHistory",4,"ngFor","ngForOf"],[1,"orderHistory"],[1,"dateContainer"],[1,"container"],[4,"ngFor","ngForOf"],[1,"totalValue"],["class","cancelContainer",4,"ngIf"],["tmButton","","shape","semi-round","status","primary",3,"click"],[1,"productDetails"],["width","100px","alt","",3,"src"],[1,"cancelContainer"],["tmButton","","status","danger",3,"click"],[1,"filterContainer"],["tmButton","","shape","semi-round",3,"click"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.25 12.2739L19.25 12.2739","stroke","#31384F","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],["d","M10.2998 18.2985L4.2498 12.2745L10.2998 6.24951","stroke","#31384F","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],[1,"addressValue"],[2,"display","flex","flex-direction","column"]],template:function(e,n){1&e&&(t.YNc(0,J,6,0,"tm-card",0),t.YNc(1,$,2,1,"div",1),t.YNc(2,L,5,1,"div",2)),2&e&&(t.Q6J("ngIf",0===n.orderData.length),t.xp6(1),t.Q6J("ngIf",0!=n.orderData.length&&!n.orderdeatils),t.xp6(1),t.Q6J("ngIf",n.orderdeatils))},dependencies:[d.sg,d.O5,p.Mo,p.Ix,p.IO,O.rF,d.H9,d.uU],styles:["tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .noProducts[_ngcontent-%COMP%]{position:relative;top:20%;left:35%}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .noProducts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:300}.orderContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.orderContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(1){background-color:#2c8cf4;color:var(--header-background-color)}.orderContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .orderContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px}.orderContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+2){background-color:#2c8cf4}.orderContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4)   input[_ngcontent-%COMP%]{width:80px}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column-reverse}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]{width:100%}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-footer[_ngcontent-%COMP%]{text-align:center}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;gap:20px}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .productDetails[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px;text-align:center;gap:5px;border:1px solid rgb(155,154,154)}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .dateContainer[_ngcontent-%COMP%]{position:absolute;inset:10% 0% 0% 88%;background-color:#2c8cf4;color:#fff;padding-top:8px;padding-left:3px;border-radius:10px;width:100px;height:40px;box-shadow:-1px 7px 13px -3px #574f4fbf}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .cancelContainer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .totalValue[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]{width:100%}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]{width:100%;height:100%}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-footer[_ngcontent-%COMP%]{text-align:center}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-flow:row;gap:20px;position:relative;top:10px}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#2c8cf4;color:#fff}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .productDetails[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px;gap:5px;border:1px solid rgb(155,154,154)}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .dateContainer[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:row;justify-content:space-between}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .dateContainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#2c8cf4;color:#fff;padding-top:8px;padding-left:3px;border-radius:10px;width:100px;height:40px;box-shadow:-1px 7px 13px -3px #574f4fbf}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .totalValue[_ngcontent-%COMP%]{display:flex;justify-content:space-between;position:relative;top:10px}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .addressValue[_ngcontent-%COMP%]{position:relative;top:10px}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .addressValue[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;padding:5px}@media screen and (max-width: 600px) and (min-width: 0px){tm-card[_ngcontent-%COMP%]{width:100%;height:500px}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .noProducts[_ngcontent-%COMP%]{position:relative;top:20%;left:5%}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .noProducts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:300}}"]}),o})();var V=a(2750),Q=a(3662),h=a(839),P=a(8330),g=a(2311);const K=function(o){return{color:o}},G=function(){return{standalone:!0}};function W(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"tm-card")(1,"tm-card-body")(2,"div",10),t._UZ(3,"img",11),t.qZA(),t.TgZ(4,"div",12)(5,"div")(6,"span"),t._uU(7,"Name:"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"div")(10,"span"),t._uU(11,"Price:"),t.qZA(),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.TgZ(14,"div")(15,"span"),t._uU(16,"Description:"),t.qZA(),t._uU(17),t.qZA(),t.TgZ(18,"div")(19,"span"),t._uU(20,"Status:"),t.qZA(),t.TgZ(21,"span",13),t._uU(22),t.qZA()(),t.TgZ(23,"div")(24,"span",14),t._uU(25),t.qZA()()(),t.TgZ(26,"div",14)(27,"h6"),t._uU(28),t.qZA()()(),t.TgZ(29,"tm-card-footer")(30,"div")(31,"tm-form-field",15)(32,"button",16),t.NdJ("click",function(){const s=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.decrement(s))}),t._uU(33,"-"),t.qZA(),t.TgZ(34,"input",17),t.NdJ("ngModelChange",function(i){const u=t.CHM(e).$implicit;return t.KtG(u.quantity=i)}),t.qZA(),t.TgZ(35,"button",18),t.NdJ("click",function(){const s=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.increment(s))}),t._uU(36,"+"),t.qZA()()(),t.TgZ(37,"button",19),t.NdJ("click",function(){const s=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.addToCart(s))}),t.O4$(),t.TgZ(38,"svg",20),t._UZ(39,"defs"),t.TgZ(40,"g",21),t._UZ(41,"path",22)(42,"circle",23)(43,"circle",24)(44,"path",25),t.qZA()()()()()}if(2&o){const e=r.$implicit,n=t.oxw();t.xp6(3),t.s9C("src",e.productImage,t.LSH),t.xp6(5),t.Oqu(e.productName),t.xp6(4),t.Oqu(t.lcZ(13,15,e.productPrice)),t.xp6(5),t.Oqu(e.productDescription),t.xp6(4),t.Q6J("ngStyle",t.VKq(17,K,"Out of stock"===e.productStatus?"red":"green")),t.xp6(1),t.hij("",e.productStatus," "),t.xp6(2),t.Q6J("ngClass",n.getClassofQuantity(e.productCount,e.productStatus)),t.xp6(1),t.hij("Only ",e.productCount," Products Left !"),t.xp6(1),t.Q6J("ngClass",n.getClassOf(e.productOffer)),t.xp6(2),t.hij(" ",e.productOffer," % "),t.xp6(4),t.Q6J("disabled",0===e.quantity),t.xp6(2),t.s9C("value",e.quantity),t.Q6J("ngModel",e.quantity)("ngModelOptions",t.DdM(19,G)),t.xp6(1),t.Q6J("disabled",0===e.productCount)}}let X=(()=>{class o{constructor(e,n,i,s,u,y,v){this.apiService=e,this.dialogService=n,this.currencyPipe=i,this.toastrService=s,this.http=u,this.router=y,this.cartService=v,this.products=[],this.filterProducts=[],this.cartsData=[],this.carouselData=[],this.items=[],this.selectedItem="",this.disabled=!1,this.isDisabled=!1}ngOnInit(){this.getAllData(),this.userData=JSON.parse(localStorage.getItem("currentuser")||"{}"),console.log(this.userData),console.log(this.userData.email)}getAllData(){this.cartService.getAllCartItems().subscribe(e=>{this.products=e,this.filterProducts=e,this.products.map(n=>{Object.assign(n,{total:n.productPrice})})})}showToast(e){this.toastrService.success("check in cart","Product added succesfully",{duration:e})}addToCart(e){this.cartService.itemInCart(e)||(e.qtyTotal=1,this.showToast(1e3),this.cartService.addToCart(e),this.apiService.update(e.id,e).subscribe(i=>{}),console.log(e),this.items=[...this.cartService.getItems()])}filterData(e){this.filterProducts=this.products.filter(n=>n.productCategory===e||""===e)}getClassOf(e){return 0===e?"offerNone":"offerBatch"}getClassofQuantity(e,n){return 0===e||"Out of stock"===n?"outofStock":"inStock"}increment(e){e.quantity++,e.productCount--,0===e.productCount&&(e.productStatus="Out of stock"),console.log(e.productCount)}decrement(e){e.quantity--,e.productCount++,0!=e.productCount&&(e.productStatus="In stock")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(V.M),t.Y36(Q.Q9),t.Y36(d.H9),t.Y36(k.qK),t.Y36(C.eN),t.Y36(_.F0),t.Y36(b.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:23,vars:2,consts:[[1,"container"],["tmButton","",1,"filterModule",3,"click"],[1,"dropdown"],["placeholder","Filter By",3,"ngModel","ngModelChange"],["value"," "],["value","Electronics"],["value","Fashion"],["value","Home & kitchen"],[1,"flexContainer"],[4,"ngFor","ngForOf"],[1,"imageContainer"],["alt","",3,"src"],[1,"detailsContainer"],[3,"ngStyle"],[3,"ngClass"],["appearance","legacy",2,"width","50x"],["tmPrefix","","status","primary","tmButton","",3,"disabled","click"],["tmInput","","min","1","type","number","name","",1,"form-control",2,"text-align","center",3,"ngModel","ngModelOptions","value","ngModelChange"],["tmSuffix","","status","primary","tmButton","",3,"disabled","click"],["tmButton","","status","primary",2,"width","50px","padding","0px",3,"click"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","version","1.1","width","30","height","30","viewBox","0 0 256 256",0,"xml","space","preserve"],["transform","translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)",2,"stroke","none","stroke-width","0","stroke-dasharray","none","stroke-linecap","butt","stroke-linejoin","miter","stroke-miterlimit","10","fill","none","fill-rule","nonzero","opacity","1"],["d","M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 h -6.021 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 H 86.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z","transform"," matrix(1 0 0 1 0 0) ","stroke-linecap","round",2,"stroke","none","stroke-width","1","stroke-dasharray","none","stroke-linecap","butt","stroke-linejoin","miter","stroke-miterlimit","10","fill","rgb(250,250,250)","fill-rule","nonzero","opacity","1"],["cx","28.88","cy","74.33","r","6.16","transform","  matrix(1 0 0 1 0 0) ",2,"stroke","none","stroke-width","1","stroke-dasharray","none","stroke-linecap","butt","stroke-linejoin","miter","stroke-miterlimit","10","fill","rgb(245, 245, 245)","fill-rule","nonzero","opacity","1"],["cx","74.59","cy","74.33","r","6.16","transform","  matrix(1 0 0 1 0 0) ",2,"stroke","none","stroke-width","1","stroke-dasharray","none","stroke-linecap","butt","stroke-linejoin","miter","stroke-miterlimit","10","fill","rgb(247, 243, 243)","fill-rule","nonzero","opacity","1"],["d","M 62.278 19.546 H 52.237 V 9.506 c 0 -1.933 -1.567 -3.5 -3.5 -3.5 s -3.5 1.567 -3.5 3.5 v 10.04 h -10.04 c -1.933 0 -3.5 1.567 -3.5 3.5 s 1.567 3.5 3.5 3.5 h 10.04 v 10.04 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -10.04 h 10.041 c 1.933 0 3.5 -1.567 3.5 -3.5 S 64.211 19.546 62.278 19.546 z","transform"," matrix(1 0 0 1 0 0) ","stroke-linecap","round",2,"stroke","none","stroke-width","1","stroke-dasharray","none","stroke-linecap","butt","stroke-linejoin","miter","stroke-miterlimit","10","fill","rgb(250,250,250)","fill-rule","nonzero","opacity","1"]],template:function(e,n){1&e&&(t.TgZ(0,"tm-card")(1,"tm-card-body")(2,"div",0)(3,"button",1),t.NdJ("click",function(){return n.filterData("")}),t._uU(4,"All Products"),t.qZA(),t.TgZ(5,"button",1),t.NdJ("click",function(){return n.filterData("Electronics")}),t._uU(6,"Electronics"),t.qZA(),t.TgZ(7,"button",1),t.NdJ("click",function(){return n.filterData("Fashion")}),t._uU(8,"Fashion"),t.qZA(),t.TgZ(9,"button",1),t.NdJ("click",function(){return n.filterData("Home & kitchen")}),t._uU(10,"Home & kitchen"),t.qZA()(),t.TgZ(11,"div",2)(12,"tm-select",3),t.NdJ("ngModelChange",function(s){return n.filterData(s)}),t.TgZ(13,"tm-option",4),t._uU(14,"All Products"),t.qZA(),t.TgZ(15,"tm-option",5),t._uU(16,"Electronics"),t.qZA(),t.TgZ(17,"tm-option",6),t._uU(18,"Fashion"),t.qZA(),t.TgZ(19,"tm-option",7),t._uU(20,"Home & kitchen"),t.qZA()()()()(),t.TgZ(21,"div",8),t.YNc(22,W,45,20,"tm-card",9),t.qZA()),2&e&&(t.xp6(12),t.Q6J("ngModel",n.selectedItem),t.xp6(10),t.Q6J("ngForOf",n.filterProducts))},dependencies:[d.mk,d.sg,d.PC,p.Mo,p.Ix,p.IO,c.Fj,c.wV,c.JJ,c.qQ,c.On,h.Xw,h.n,h.As,P.J,O.rF,g.UE,g.u0,d.H9],styles:[".flexContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;gap:10px;position:relative;top:10px;padding-left:30px}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]{width:280px}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]{display:flex;flex-flow:column}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]{width:200px;padding:5px}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]{padding:10px}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]   .inStock[_ngcontent-%COMP%]{color:green}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]   .outofStock[_ngcontent-%COMP%]{display:none}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .offerBatch[_ngcontent-%COMP%]{position:absolute;top:1px;right:10px;height:60px;width:60px;text-align:center;padding:13px 10px 10px;clip-path:polygon(51% 100%,0 68%,0 0,100% 0,99% 68%);background-color:#1d7af5}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .offerBatch[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:13pt;color:#fff}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .offerNone[_ngcontent-%COMP%]{display:none}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-footer[_ngcontent-%COMP%]   tm-form-field[_ngcontent-%COMP%]{width:120px}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-footer[_ngcontent-%COMP%]   tm-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-footer[_ngcontent-%COMP%]   tm-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.carouselConatiner[_ngcontent-%COMP%]{height:180px;background-color:#d3d1d1}tm-card[_ngcontent-%COMP%]{width:100%}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{display:none}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;gap:10px}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .filterModule[_ngcontent-%COMP%]{width:120px;text-align:center;height:30px}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .filterModule[_ngcontent-%COMP%]:focus{background-color:#0775f1;color:#fff;width:120px;height:30px;border:1px solid rgb(7,117,241)}@media screen and (max-width: 600px) and (min-width: 0px){tm-card[_ngcontent-%COMP%]{width:100%}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{display:block}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:none}}"]}),o})();var tt=a(570);function et(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function nt(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Password must be at least 6 characters "),t.qZA())}function ot(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Username must not exceed 40 characters "),t.qZA())}function it(o,r){if(1&o&&(t.TgZ(0,"div",18),t.YNc(1,et,2,0,"div",19),t.YNc(2,nt,2,0,"div",19),t.YNc(3,ot,2,0,"div",19),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.password.errors?null:e.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.f.password.errors?null:e.f.password.errors.minlength),t.xp6(1),t.Q6J("ngIf",e.f.password.errors.maxlength)}}const rt=function(o){return{"is-invalid":o}},st=[{path:"profile",component:(()=>{class o{constructor(e,n,i,s){this.formBuilder=e,this.router=n,this._http=i,this.apiService=s}ngOnInit(){this.userdata=JSON.parse(localStorage.getItem("currentuser")||"{}"),this.id=this.userdata.id,console.log(this.id),this.profileForm=this.formBuilder.group({id:[this.userdata.id],userName:[this.userdata.userName],email:[this.userdata.email],phoneNumber:[this.userdata.phoneNumber],gender:[this.userdata.gender],address:[this.userdata.address],password:[this.userdata.password,[c.kI.required,c.kI.minLength(6),c.kI.maxLength(40)]]})}updateProfile(){this.submitted=!0,!this.profileForm.invalid&&(localStorage.setItem("currentuser",JSON.stringify(this.profileForm.value)),this.apiService.update(this.id,this.profileForm.value).subscribe(e=>{console.log("user updated successfully!")}))}getInputType(){return this.showPassword?"text":"password"}toggleShowPassword(){this.showPassword=!this.showPassword}get f(){return this.profileForm.controls}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.qu),t.Y36(_.F0),t.Y36(C.eN),t.Y36(tt.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-profile"]],decls:55,vars:10,consts:[["align","center",1,"userName"],["width","100","height","100","viewBox","0 0 24 24","fill","grey","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.9847 15.3462C8.11707 15.3462 4.81421 15.931 4.81421 18.2729C4.81421 20.6148 8.09611 21.2205 11.9847 21.2205C15.8523 21.2205 19.1542 20.6348 19.1542 18.2938C19.1542 15.9529 15.8733 15.3462 11.9847 15.3462Z","stroke","#31384F","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.9846 12.0059C14.5227 12.0059 16.5799 9.94779 16.5799 7.40969C16.5799 4.8716 14.5227 2.81445 11.9846 2.81445C9.44655 2.81445 7.38845 4.8716 7.38845 7.40969C7.37988 9.93922 9.42369 11.9973 11.9523 12.0059H11.9846Z","stroke","#31384F","stroke-width","1.42857","stroke-linecap","round","stroke-linejoin","round"],[3,"formGroup"],[1,"table","table-user-information"],["type","text","fullWidth","","formControlName","id","tmInput",""],["type","text","fullWidth","","formControlName","userName","tmInput",""],["type","email","fullWidth","","formControlName","email","tmInput",""],["placeholder","gender","formControlName","gender","fullWidth",""],["value","male"],["value","female"],["type","tel","placeholder","Phone Number","fullWidth","","tmInput","","formControlName","phoneNumber"],["shape","semi-round","placeholder","password","fullWidth","","formControlName","password","tmInput","",1,"form-control",3,"type","ngClass"],["tmSuffix","","tmButton","","ghost","",3,"click"],["class","invalid-feedback",4,"ngIf"],["placeholder","address","tmInput","","fullWidth","","formContolName","address"],["tmButton","","status","primary",3,"click"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(e,n){1&e&&(t.TgZ(0,"tm-card")(1,"tm-card-body")(2,"div",0),t.O4$(),t.TgZ(3,"svg",1),t._UZ(4,"path",2)(5,"path",3),t.qZA(),t._uU(6),t.qZA(),t.kcU(),t.TgZ(7,"form",4)(8,"table",5)(9,"tbody")(10,"tr")(11,"td"),t._uU(12,"Id"),t.qZA(),t.TgZ(13,"td"),t._UZ(14,"input",6),t.qZA()(),t.TgZ(15,"tr")(16,"td"),t._uU(17,"Name"),t.qZA(),t.TgZ(18,"td"),t._UZ(19,"input",7),t.qZA()(),t.TgZ(20,"tr")(21,"td"),t._uU(22,"Email"),t.qZA(),t.TgZ(23,"td"),t._UZ(24,"input",8),t.qZA()(),t.TgZ(25,"tr")(26,"td"),t._uU(27,"Gender"),t.qZA(),t.TgZ(28,"td")(29,"tm-select",9)(30,"tm-option",10),t._uU(31,"Male"),t.qZA(),t.TgZ(32,"tm-option",11),t._uU(33,"Female"),t.qZA()()()(),t.TgZ(34,"tr")(35,"td"),t._uU(36,"Phone Number"),t.qZA(),t.TgZ(37,"td"),t._UZ(38,"input",12),t.qZA()(),t.TgZ(39,"tr")(40,"td"),t._uU(41,"Password"),t.qZA(),t.TgZ(42,"td")(43,"tm-form-field"),t._UZ(44,"input",13),t.TgZ(45,"button",14),t.NdJ("click",function(){return n.toggleShowPassword()}),t._UZ(46,"i"),t.qZA(),t.YNc(47,it,4,3,"div",15),t.qZA()()(),t.TgZ(48,"tr")(49,"td"),t._uU(50,"Address"),t.qZA(),t.TgZ(51,"td"),t._UZ(52,"textarea",16),t.qZA()()()(),t.TgZ(53,"button",17),t.NdJ("click",function(){return n.updateProfile()}),t._uU(54," submit"),t.qZA()()()()),2&e&&(t.xp6(6),t.hij(" ",n.userdata.userName," "),t.xp6(1),t.Q6J("formGroup",n.profileForm),t.xp6(37),t.Q6J("type",n.getInputType())("ngClass",t.VKq(8,rt,n.submitted&&n.f.password.errors)),t.xp6(2),t.Tol(n.showPassword?"fa fa-eye":"fa fa-eye-slash"),t.uIk("aria-label",n.showPassword?"hide password":"show password"),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.password.errors))},dependencies:[d.mk,d.O5,p.Mo,p.Ix,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,h.Xw,h.As,P.J,O.rF,g.UE,g.u0],styles:["tm-card[_ngcontent-%COMP%]{width:100%;height:600px}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]{align-items:center}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;font-size:18pt;color:var(--text-basic-color)}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}"]}),o})(),data:{title:"ShoppingKart"}},{path:"products",component:X,data:{title:"ShoppingKart"}},{path:"orders",component:R,data:{title:"ShoppingKart"}},{path:"cart",component:A.Is,data:{title:"ShoppingKart"}},{path:"**",component:H,data:{title:"ShoppingKart"}}];let at=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.Bz.forChild(st),_.Bz]}),o})();var ct=a(2972),dt=a(4617),lt=a(7532),ut=a(164),pt=a(6729),gt=a(6623),l=a(4954);a(1159),a(7579),a(6451),a(2722),a(8505),a(8675),a(3900),a(9300);let vt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,c.u5,l.gvI,p.Ei,g.IN,g.IN]}),o})(),Mt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[d.H9],imports:[d.ez,C.JF,m.IJ,at,ct.St,dt.vu.forRoot(),D,lt.C,pt.lf,ut.nx,p.Ei,c.u5,c.UX,h.mY,P.V,O.lE,g.uE,gt.y,vt]}),o})()}}]);