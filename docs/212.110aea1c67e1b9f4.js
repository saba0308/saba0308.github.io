"use strict";(self.webpackChunkdashboardUI=self.webpackChunkdashboardUI||[]).push([[212],{3212:(Ct,M,s)=>{s.r(M),s.d(M,{UserModule:()=>mt});var d=s(9808),C=s(6696),A=s(1047),t=s(5e3),f=s(520),v=s(7160),x=s(3183),p=s(1274),_=s(3188);function k(o,r){1&o&&(t.TgZ(0,"tm-card")(1,"tm-card-body")(2,"div",3),t._UZ(3,"img",4),t.TgZ(4,"h4"),t._uU(5," You Have No Order"),t.qZA()()()())}function U(o,r){if(1&o&&(t.TgZ(0,"div")(1,"div",14),t._UZ(2,"img",15),t.TgZ(3,"span"),t._uU(4),t.qZA()()()),2&o){const e=r.$implicit;t.xp6(2),t.s9C("src",e.productImage,t.LSH),t.xp6(2),t.Oqu(e.productName)}}function S(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",16)(1,"button",17),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.cancel(i.id))}),t._uU(2,"cancel"),t.qZA()()}}function I(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",7)(1,"tm-card")(2,"tm-card-body")(3,"div",8),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"div",9),t.YNc(7,U,5,2,"div",10),t.qZA(),t.TgZ(8,"div",11)(9,"h4"),t._uU(10),t.ALo(11,"currency"),t.qZA(),t.TgZ(12,"h5"),t._uU(13),t.qZA()(),t.YNc(14,S,3,0,"div",12),t.qZA(),t.TgZ(15,"tm-card-footer")(16,"button",13),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.orderDetails(a))}),t._uU(17," View Details "),t.qZA()()()()}if(2&o){const e=r.$implicit;t.xp6(4),t.hij(" ",t.lcZ(5,5,e.date)," "),t.xp6(3),t.Q6J("ngForOf",e.product),t.xp6(3),t.hij("Total: ",t.lcZ(11,7,e.totalvalue),""),t.xp6(3),t.Oqu(e.status),t.xp6(1),t.Q6J("ngIf","Delivered"!=e.status)}}function D(o,r){if(1&o&&(t.TgZ(0,"div",5),t.YNc(1,I,18,9,"div",6),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.orderData)}}function q(o,r){if(1&o&&(t.TgZ(0,"tr")(1,"td",24),t._UZ(2,"img",15),t.TgZ(3,"span"),t._uU(4),t.qZA()(),t.TgZ(5,"td")(6,"span"),t._uU(7),t.qZA()(),t.TgZ(8,"td")(9,"span"),t._uU(10),t.qZA()(),t.TgZ(11,"td")(12,"span"),t._uU(13),t.ALo(14,"currency"),t.qZA()()()),2&o){const e=r.$implicit;t.xp6(2),t.s9C("src",e.productImage,t.LSH),t.xp6(2),t.Oqu(e.productName),t.xp6(3),t.Oqu(e.productDescription),t.xp6(3),t.Oqu(e.quantity),t.xp6(3),t.Oqu(t.lcZ(14,5,e.quantity*e.productPrice))}}function N(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"div",8)(2,"button",19),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.back())}),t.O4$(),t.TgZ(3,"svg",20),t._UZ(4,"path",21)(5,"path",22),t.qZA(),t._uU(6," back"),t.qZA(),t.kcU(),t.TgZ(7,"span"),t._uU(8),t.ALo(9,"date"),t.qZA()(),t.TgZ(10,"div",9)(11,"table")(12,"thead")(13,"tr")(14,"th"),t._uU(15,"Product"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Description"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Quantity"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Price"),t.qZA()()(),t.YNc(22,q,15,7,"tr",10),t.qZA()(),t.TgZ(23,"div",11),t._UZ(24,"h5"),t.TgZ(25,"h4"),t._uU(26),t.ALo(27,"currency"),t.qZA()(),t.TgZ(28,"div",23)(29,"table")(30,"tr")(31,"td")(32,"span"),t._uU(33,"Address: "),t.qZA(),t.TgZ(34,"p"),t._uU(35),t.qZA()(),t.TgZ(36,"td")(37,"span"),t._uU(38,"Payment:"),t.qZA(),t.TgZ(39,"p"),t._uU(40),t.qZA(),t.TgZ(41,"span"),t._uU(42,"Status:"),t.qZA(),t.TgZ(43,"p"),t._uU(44),t.qZA()()()()()()}if(2&o){const e=r.$implicit;t.xp6(8),t.hij(" ",t.lcZ(9,7,e.date),""),t.xp6(14),t.Q6J("ngForOf",e.product),t.xp6(4),t.hij("Total: ",t.lcZ(27,9,e.totalvalue),""),t.xp6(9),t.AsE(" ",e.address,",",e.pincode,""),t.xp6(5),t.Oqu(e.payment),t.xp6(4),t.Oqu(e.status)}}function H(o,r){if(1&o&&(t.TgZ(0,"div",18)(1,"div",7)(2,"tm-card")(3,"tm-card-body"),t.YNc(4,N,45,11,"div",10),t.qZA()()()()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.orderFilter)}}let F=(()=>{class o{constructor(e,n,i){this.http=e,this.cartService=n,this.toastrService=i,this.orderdeatils=!1}ngOnInit(){this.userData=JSON.parse(localStorage.getItem("currentuser")||"{}"),this.getData()}getData(){this.cartService.getAllOrder().subscribe(e=>{this.orderData=e.sort((n,i)=>new Date(i.date).getTime()-new Date(n.date).getTime()),console.log(this.orderData),this.orderData=this.orderData.filter(n=>n.email===this.userData.email),this.orderDate=this.orderData.map(n=>this.orderDate=n.date),console.log(this.orderDate)})}orderDetails(e){this.orderdeatils=!0,this.orderFilter=this.orderData.filter(n=>n.id===e.id)}back(){this.orderdeatils=!1}sortRalliesByDateDesc(){}cancel(e){this.cartService.deleteOrder(e).subscribe(n=>({})),this.showToast(1e3)}showToast(e){this.toastrService.danger("**","order canceled",{duration:e})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.eN),t.Y36(v.N),t.Y36(x.qK))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-orders"]],decls:3,vars:3,consts:[[4,"ngIf"],["class","orderContainer",4,"ngIf"],["class","filterContainer",4,"ngIf"],[1,"noProducts"],["src","../../../../../assets/emptycart.svg ","alt","","width","200px"],[1,"orderContainer"],["class","orderHistory",4,"ngFor","ngForOf"],[1,"orderHistory"],[1,"dateContainer"],[1,"container"],[4,"ngFor","ngForOf"],[1,"totalValue"],["class","cancelContainer",4,"ngIf"],["tmButton","","shape","semi-round","status","primary",3,"click"],[1,"productDetails"],["width","100px","alt","",3,"src"],[1,"cancelContainer"],["tmButton","","status","danger",3,"click"],[1,"filterContainer"],["tmButton","","shape","semi-round",3,"click"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.25 12.2739L19.25 12.2739","stroke","#31384F","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],["d","M10.2998 18.2985L4.2498 12.2745L10.2998 6.24951","stroke","#31384F","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],[1,"addressValue"],[2,"display","flex","flex-direction","column"]],template:function(e,n){1&e&&(t.YNc(0,k,6,0,"tm-card",0),t.YNc(1,D,2,1,"div",1),t.YNc(2,H,5,1,"div",2)),2&e&&(t.Q6J("ngIf",0===n.orderData.length),t.xp6(1),t.Q6J("ngIf",0!=n.orderData.length&&!n.orderdeatils),t.xp6(1),t.Q6J("ngIf",n.orderdeatils))},dependencies:[d.sg,d.O5,p.Mo,p.Ix,p.IO,_.rF,d.H9,d.uU],styles:["tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .noProducts[_ngcontent-%COMP%]{position:relative;top:20%;left:35%}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .noProducts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:300}.orderContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.orderContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(1){background-color:#2c8cf4;color:var(--header-background-color)}.orderContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .orderContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px}.orderContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+2){background-color:#2c8cf4}.orderContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4)   input[_ngcontent-%COMP%]{width:80px}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column-reverse}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]{width:100%}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-footer[_ngcontent-%COMP%]{text-align:center}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;gap:20px}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .productDetails[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px;text-align:center;gap:5px;border:1px solid rgb(155,154,154)}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .dateContainer[_ngcontent-%COMP%]{position:absolute;inset:10% 0% 0% 88%;background-color:#2c8cf4;color:#fff;padding-top:8px;padding-left:3px;border-radius:10px;width:100px;height:40px;box-shadow:-1px 7px 13px -3px #574f4fbf}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .cancelContainer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.orderContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .totalValue[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]{width:100%}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]{width:100%;height:100%}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-footer[_ngcontent-%COMP%]{text-align:center}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-flow:row;gap:20px;position:relative;top:10px}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#2c8cf4;color:#fff}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .productDetails[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px;gap:5px;border:1px solid rgb(155,154,154)}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .dateContainer[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:row;justify-content:space-between}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .dateContainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#2c8cf4;color:#fff;padding-top:8px;padding-left:3px;border-radius:10px;width:100px;height:40px;box-shadow:-1px 7px 13px -3px #574f4fbf}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .totalValue[_ngcontent-%COMP%]{display:flex;justify-content:space-between;position:relative;top:10px}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .addressValue[_ngcontent-%COMP%]{position:relative;top:10px}.filterContainer[_ngcontent-%COMP%]   .orderHistory[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .addressValue[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;padding:5px}@media screen and (max-width: 600px) and (min-width: 0px){tm-card[_ngcontent-%COMP%]{width:100%;height:500px}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .noProducts[_ngcontent-%COMP%]{position:relative;top:20%;left:5%}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .noProducts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:300}}"]}),o})();var J=s(2750),E=s(3605),B=s(3662),c=s(3075),m=s(839),O=s(8330),g=s(2311);const Y=function(o){return{color:o}},R=function(){return{standalone:!0}};function j(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"tm-card")(1,"tm-card-body")(2,"div",27),t._UZ(3,"img",28),t.qZA(),t.TgZ(4,"div",29)(5,"div")(6,"span"),t._uU(7,"Name:"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"div")(10,"span"),t._uU(11,"Price:"),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"div")(14,"span"),t._uU(15,"Description:"),t.qZA(),t._uU(16),t.qZA(),t.TgZ(17,"div")(18,"span"),t._uU(19,"Status:"),t.qZA(),t.TgZ(20,"span",30),t._uU(21),t.qZA()(),t.TgZ(22,"div")(23,"span",31),t._uU(24),t.qZA()()(),t.TgZ(25,"div",31)(26,"h6"),t._uU(27),t.qZA()()(),t.TgZ(28,"tm-card-footer")(29,"div")(30,"tm-form-field",32)(31,"button",33),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.decrement(a))}),t._uU(32,"-"),t.qZA(),t.TgZ(33,"input",34),t.NdJ("ngModelChange",function(i){const u=t.CHM(e).$implicit;return t.KtG(u.quantity=i)}),t.qZA(),t.TgZ(34,"button",35),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.increment(a))}),t._uU(35,"+"),t.qZA()()(),t.TgZ(36,"button",36),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.addToCart(a))}),t.O4$(),t.TgZ(37,"svg",37),t._UZ(38,"defs"),t.TgZ(39,"g",38),t._UZ(40,"path",39)(41,"circle",40)(42,"circle",41)(43,"path",42),t.qZA()()()()()}if(2&o){const e=r.$implicit,n=t.oxw();t.xp6(3),t.s9C("src",e.productImage,t.LSH),t.xp6(5),t.Oqu(e.productName),t.xp6(4),t.Oqu(e.productPrice),t.xp6(4),t.Oqu(e.productDescription),t.xp6(4),t.Q6J("ngStyle",t.VKq(15,Y,"Out of stock"===e.productStatus?"red":"green")),t.xp6(1),t.hij("",e.productStatus," "),t.xp6(2),t.Q6J("ngClass",n.getClassofQuantity(e.productCount,e.productStatus)),t.xp6(1),t.hij("Only ",e.productCount," Products Left !"),t.xp6(1),t.Q6J("ngClass",n.getClassOf(e.productOffer)),t.xp6(2),t.hij(" ",e.productOffer," % "),t.xp6(4),t.Q6J("disabled",0===e.quantity),t.xp6(2),t.s9C("value",e.quantity),t.Q6J("ngModel",e.quantity)("ngModelOptions",t.DdM(17,R)),t.xp6(1),t.Q6J("disabled",0===e.productCount)}}let b=(()=>{class o{constructor(e,n,i,a,u,P,y,ht){this.apiService=e,this.interfaceService=n,this.dialogService=i,this.currencyPipe=a,this.toastrService=u,this.http=P,this.router=y,this.cartService=ht,this.products=[],this.filterProducts=[],this.cartsData=[],this.carouselData=[],this.items=[],this.selectedItem="",this.disabled=!1,this.isDisabled=!1}ngOnInit(){this.getAllData(),this.userData=JSON.parse(localStorage.getItem("currentuser")||"{}"),console.log(this.userData),console.log(this.userData.email)}getAllData(){this.cartService.getAllCartItems().subscribe(e=>{this.products=e,this.filterProducts=e,this.products.map(n=>{Object.assign(n,{total:n.productPrice})})})}showToast(e){this.toastrService.success("check in cart","Product added succesfully",{duration:e})}addToCart(e){this.cartService.itemInCart(e)||(e.qtyTotal=1,this.showToast(1e3),this.cartService.addToCart(e),this.apiService.update(e.id,e).subscribe(i=>{}),console.log(e),this.items=[...this.cartService.getItems()])}filterData(e){this.filterProducts=this.products.filter(n=>n.productCategory===e||""===e)}getClassOf(e){return 0===e?"offerNone":"offerBatch"}getClassofQuantity(e,n){return 0===e||"Out of stock"===n?"outofStock":"inStock"}increment(e){e.quantity++,e.productCount--,0===e.productCount&&(e.productStatus="Out of stock"),console.log(e.productCount)}decrement(e){e.quantity--,e.productCount++,0!=e.productCount&&(e.productStatus="In stock")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(J.M),t.Y36(E.k),t.Y36(B.Q9),t.Y36(d.H9),t.Y36(x.qK),t.Y36(f.eN),t.Y36(C.F0),t.Y36(v.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:44,vars:2,consts:[[1,"carouselConatiner"],["id","carouselExampleIndicators","data-ride","carousel",1,"carousel","slide"],[1,"carousel-indicators"],["data-target","#carouselExampleIndicators","data-slide-to","0",1,"active"],["data-target","#carouselExampleIndicators","data-slide-to","1"],["data-target","#carouselExampleIndicators","data-slide-to","2"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","../../../../../assets/pic-4.jpg","alt","First slide",1,"d-block","w-100"],[1,"carousel-item"],["src","../../../../../assets/pic-2.jpg","alt","Second slide",1,"d-block","w-100"],["src","../../../../../assets/pic-3.jpg","alt","Third slide",1,"d-block","w-100"],["href","#carouselExampleIndicators","role","button","data-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"sr-only"],["href","#carouselExampleIndicators","role","button","data-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"container"],["tmButton","",1,"filterModule",3,"click"],[1,"dropdown"],["placeholder","Filter By",3,"ngModel","ngModelChange"],["value"," "],["value","Electronics"],["value","Fashion"],["value","Home & kitchen"],[1,"flexContainer"],[4,"ngFor","ngForOf"],[1,"imageContainer"],["alt","",3,"src"],[1,"detailsContainer"],[3,"ngStyle"],[3,"ngClass"],["appearance","legacy",2,"width","50x"],["tmPrefix","","status","primary","tmButton","",3,"disabled","click"],["tmInput","","min","1","type","number","name","",1,"form-control",2,"text-align","center",3,"ngModel","ngModelOptions","value","ngModelChange"],["tmSuffix","","status","primary","tmButton","",3,"disabled","click"],["tmButton","","status","primary",2,"width","50px","padding","0px",3,"click"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","version","1.1","width","30","height","30","viewBox","0 0 256 256",0,"xml","space","preserve"],["transform","translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)",2,"stroke","none","stroke-width","0","stroke-dasharray","none","stroke-linecap","butt","stroke-linejoin","miter","stroke-miterlimit","10","fill","none","fill-rule","nonzero","opacity","1"],["d","M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 h -6.021 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 H 86.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z","transform"," matrix(1 0 0 1 0 0) ","stroke-linecap","round",2,"stroke","none","stroke-width","1","stroke-dasharray","none","stroke-linecap","butt","stroke-linejoin","miter","stroke-miterlimit","10","fill","rgb(250,250,250)","fill-rule","nonzero","opacity","1"],["cx","28.88","cy","74.33","r","6.16","transform","  matrix(1 0 0 1 0 0) ",2,"stroke","none","stroke-width","1","stroke-dasharray","none","stroke-linecap","butt","stroke-linejoin","miter","stroke-miterlimit","10","fill","rgb(245, 245, 245)","fill-rule","nonzero","opacity","1"],["cx","74.59","cy","74.33","r","6.16","transform","  matrix(1 0 0 1 0 0) ",2,"stroke","none","stroke-width","1","stroke-dasharray","none","stroke-linecap","butt","stroke-linejoin","miter","stroke-miterlimit","10","fill","rgb(247, 243, 243)","fill-rule","nonzero","opacity","1"],["d","M 62.278 19.546 H 52.237 V 9.506 c 0 -1.933 -1.567 -3.5 -3.5 -3.5 s -3.5 1.567 -3.5 3.5 v 10.04 h -10.04 c -1.933 0 -3.5 1.567 -3.5 3.5 s 1.567 3.5 3.5 3.5 h 10.04 v 10.04 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -10.04 h 10.041 c 1.933 0 3.5 -1.567 3.5 -3.5 S 64.211 19.546 62.278 19.546 z","transform"," matrix(1 0 0 1 0 0) ","stroke-linecap","round",2,"stroke","none","stroke-width","1","stroke-dasharray","none","stroke-linecap","butt","stroke-linejoin","miter","stroke-miterlimit","10","fill","rgb(250,250,250)","fill-rule","nonzero","opacity","1"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"ol",2),t._UZ(3,"li",3)(4,"li",4)(5,"li",5),t.qZA(),t.TgZ(6,"div",6)(7,"div",7),t._UZ(8,"img",8),t.qZA(),t.TgZ(9,"div",9),t._UZ(10,"img",10),t.qZA(),t.TgZ(11,"div",9),t._UZ(12,"img",11),t.qZA()(),t.TgZ(13,"a",12),t._UZ(14,"span",13),t.TgZ(15,"span",14),t._uU(16,"Previous"),t.qZA()(),t.TgZ(17,"a",15),t._UZ(18,"span",16),t.TgZ(19,"span",14),t._uU(20,"Next"),t.qZA()()()(),t.TgZ(21,"tm-card")(22,"tm-card-body")(23,"div",17)(24,"button",18),t.NdJ("click",function(){return n.filterData("")}),t._uU(25,"All Products"),t.qZA(),t.TgZ(26,"button",18),t.NdJ("click",function(){return n.filterData("Electronics")}),t._uU(27,"Electronics"),t.qZA(),t.TgZ(28,"button",18),t.NdJ("click",function(){return n.filterData("Fashion")}),t._uU(29,"Fashion"),t.qZA(),t.TgZ(30,"button",18),t.NdJ("click",function(){return n.filterData("Home & kitchen")}),t._uU(31,"Home & kitchen"),t.qZA()(),t.TgZ(32,"div",19)(33,"tm-select",20),t.NdJ("ngModelChange",function(a){return n.filterData(a)}),t.TgZ(34,"tm-option",21),t._uU(35,"All Products"),t.qZA(),t.TgZ(36,"tm-option",22),t._uU(37,"Electronics"),t.qZA(),t.TgZ(38,"tm-option",23),t._uU(39,"Fashion"),t.qZA(),t.TgZ(40,"tm-option",24),t._uU(41,"Home & kitchen"),t.qZA()()()()(),t.TgZ(42,"div",25),t.YNc(43,j,44,18,"tm-card",26),t.qZA()),2&e&&(t.xp6(33),t.Q6J("ngModel",n.selectedItem),t.xp6(10),t.Q6J("ngForOf",n.filterProducts))},dependencies:[d.mk,d.sg,d.PC,p.Mo,p.Ix,p.IO,c.Fj,c.wV,c.JJ,c.qQ,c.On,m.Xw,m.n,m.As,O.J,_.rF,g.UE,g.u0],styles:[".flexContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;gap:10px;position:relative;top:10px}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]{width:300px}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]{display:flex;flex-flow:column}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]{width:200px;padding:5px}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]{padding:10px}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]   .inStock[_ngcontent-%COMP%]{color:green}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]   .outofStock[_ngcontent-%COMP%]{display:none}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .offerBatch[_ngcontent-%COMP%]{position:absolute;top:1px;right:10px;height:60px;width:60px;text-align:center;padding:13px 10px 10px;clip-path:polygon(51% 100%,0 68%,0 0,100% 0,99% 68%);background-color:#1d7af5}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .offerBatch[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:13pt;color:#fff}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .offerNone[_ngcontent-%COMP%]{display:none}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-footer[_ngcontent-%COMP%]   tm-form-field[_ngcontent-%COMP%]{width:120px}.flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-footer[_ngcontent-%COMP%]   tm-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .flexContainer[_ngcontent-%COMP%]   tm-card[_ngcontent-%COMP%]   tm-card-footer[_ngcontent-%COMP%]   tm-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.carouselConatiner[_ngcontent-%COMP%]{height:180px;background-color:#d3d1d1}tm-card[_ngcontent-%COMP%]{width:100%}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{display:none}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;gap:10px}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .filterModule[_ngcontent-%COMP%]{width:120px;text-align:center;height:30px}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .filterModule[_ngcontent-%COMP%]:focus{background-color:#0775f1;color:#fff;width:120px;height:30px;border:1px solid rgb(7,117,241)}@media screen and (max-width: 600px) and (min-width: 0px){tm-card[_ngcontent-%COMP%]{width:100%}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{display:block}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:none}}"]}),o})();var z=s(570);function Q(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function V(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Password must be at least 6 characters "),t.qZA())}function $(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Username must not exceed 40 characters "),t.qZA())}function K(o,r){if(1&o&&(t.TgZ(0,"div",18),t.YNc(1,Q,2,0,"div",19),t.YNc(2,V,2,0,"div",19),t.YNc(3,$,2,0,"div",19),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.password.errors?null:e.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.f.password.errors?null:e.f.password.errors.minlength),t.xp6(1),t.Q6J("ngIf",e.f.password.errors.maxlength)}}const L=function(o){return{"is-invalid":o}},W=[{path:"profile",component:(()=>{class o{constructor(e,n,i,a){this.formBuilder=e,this.router=n,this._http=i,this.apiService=a}ngOnInit(){this.userdata=JSON.parse(localStorage.getItem("currentuser")||"{}"),this.id=this.userdata.id,console.log(this.id),this.profileForm=this.formBuilder.group({id:[this.userdata.id],userName:[this.userdata.userName],email:[this.userdata.email],phoneNumber:[this.userdata.phoneNumber],gender:[this.userdata.gender],address:[this.userdata.address],password:[this.userdata.password,[c.kI.required,c.kI.minLength(6),c.kI.maxLength(40)]]})}updateProfile(){this.submitted=!0,!this.profileForm.invalid&&(localStorage.setItem("currentuser",JSON.stringify(this.profileForm.value)),this.apiService.update(this.id,this.profileForm.value).subscribe(e=>{console.log("user updated successfully!")}))}getInputType(){return this.showPassword?"text":"password"}toggleShowPassword(){this.showPassword=!this.showPassword}get f(){return this.profileForm.controls}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.qu),t.Y36(C.F0),t.Y36(f.eN),t.Y36(z.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-profile"]],decls:55,vars:10,consts:[["align","center",1,"userName"],["width","100","height","100","viewBox","0 0 24 24","fill","grey","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.9847 15.3462C8.11707 15.3462 4.81421 15.931 4.81421 18.2729C4.81421 20.6148 8.09611 21.2205 11.9847 21.2205C15.8523 21.2205 19.1542 20.6348 19.1542 18.2938C19.1542 15.9529 15.8733 15.3462 11.9847 15.3462Z","stroke","#31384F","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.9846 12.0059C14.5227 12.0059 16.5799 9.94779 16.5799 7.40969C16.5799 4.8716 14.5227 2.81445 11.9846 2.81445C9.44655 2.81445 7.38845 4.8716 7.38845 7.40969C7.37988 9.93922 9.42369 11.9973 11.9523 12.0059H11.9846Z","stroke","#31384F","stroke-width","1.42857","stroke-linecap","round","stroke-linejoin","round"],[3,"formGroup"],[1,"table","table-user-information"],["type","text","fullWidth","","formControlName","id","tmInput",""],["type","text","fullWidth","","formControlName","userName","tmInput",""],["type","email","fullWidth","","formControlName","email","tmInput",""],["placeholder","gender","formControlName","gender","fullWidth",""],["value","male"],["value","female"],["type","tel","placeholder","Phone Number","fullWidth","","tmInput","","formControlName","phoneNumber"],["shape","semi-round","placeholder","password","fullWidth","","formControlName","password","tmInput","",1,"form-control",3,"type","ngClass"],["tmSuffix","","tmButton","","ghost","",3,"click"],["class","invalid-feedback",4,"ngIf"],["placeholder","address","tmInput","","fullWidth","","formContolName","address"],["tmButton","","status","primary",3,"click"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(e,n){1&e&&(t.TgZ(0,"tm-card")(1,"tm-card-body")(2,"div",0),t.O4$(),t.TgZ(3,"svg",1),t._UZ(4,"path",2)(5,"path",3),t.qZA(),t._uU(6),t.qZA(),t.kcU(),t.TgZ(7,"form",4)(8,"table",5)(9,"tbody")(10,"tr")(11,"td"),t._uU(12,"Id"),t.qZA(),t.TgZ(13,"td"),t._UZ(14,"input",6),t.qZA()(),t.TgZ(15,"tr")(16,"td"),t._uU(17,"Name"),t.qZA(),t.TgZ(18,"td"),t._UZ(19,"input",7),t.qZA()(),t.TgZ(20,"tr")(21,"td"),t._uU(22,"Email"),t.qZA(),t.TgZ(23,"td"),t._UZ(24,"input",8),t.qZA()(),t.TgZ(25,"tr")(26,"td"),t._uU(27,"Gender"),t.qZA(),t.TgZ(28,"td")(29,"tm-select",9)(30,"tm-option",10),t._uU(31,"Male"),t.qZA(),t.TgZ(32,"tm-option",11),t._uU(33,"Female"),t.qZA()()()(),t.TgZ(34,"tr")(35,"td"),t._uU(36,"Phone Number"),t.qZA(),t.TgZ(37,"td"),t._UZ(38,"input",12),t.qZA()(),t.TgZ(39,"tr")(40,"td"),t._uU(41,"Password"),t.qZA(),t.TgZ(42,"td")(43,"tm-form-field"),t._UZ(44,"input",13),t.TgZ(45,"button",14),t.NdJ("click",function(){return n.toggleShowPassword()}),t._UZ(46,"i"),t.qZA(),t.YNc(47,K,4,3,"div",15),t.qZA()()(),t.TgZ(48,"tr")(49,"td"),t._uU(50,"Address"),t.qZA(),t.TgZ(51,"td"),t._UZ(52,"textarea",16),t.qZA()()()(),t.TgZ(53,"button",17),t.NdJ("click",function(){return n.updateProfile()}),t._uU(54," submit"),t.qZA()()()()),2&e&&(t.xp6(6),t.hij(" ",n.userdata.userName," "),t.xp6(1),t.Q6J("formGroup",n.profileForm),t.xp6(37),t.Q6J("type",n.getInputType())("ngClass",t.VKq(8,L,n.submitted&&n.f.password.errors)),t.xp6(2),t.Tol(n.showPassword?"fa fa-eye":"fa fa-eye-slash"),t.uIk("aria-label",n.showPassword?"hide password":"show password"),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.password.errors))},dependencies:[d.mk,d.O5,p.Mo,p.Ix,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,m.Xw,m.As,O.J,_.rF,g.UE,g.u0],styles:["tm-card[_ngcontent-%COMP%]{width:100%;height:600px}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]{align-items:center}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;font-size:18pt;color:var(--text-basic-color)}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}"]}),o})(),data:{title:"ShoppingKart"}},{path:"products",component:b,data:{title:"ShoppingKart"}},{path:"orders",component:F,data:{title:"ShoppingKart"}},{path:"cart",component:A.Is,data:{title:"ShoppingKart"}},{path:"**",component:b,data:{title:"ShoppingKart"}}];let G=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[C.Bz.forChild(W),C.Bz]}),o})();var X=s(2972),tt=s(4617),et=s(7532),nt=s(164),ot=s(6729),rt=s(6623),l=s(4954);s(1159),s(7579),s(6451),s(2722),s(8505),s(8675),s(3900),s(9300);let gt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,c.u5,l.gvI,p.Ei,g.IN,g.IN]}),o})(),mt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[d.H9],imports:[d.ez,f.JF,G,X.St,tt.vu.forRoot(),et.C,ot.lf,nt.nx,p.Ei,c.u5,c.UX,m.mY,O.V,_.lE,g.uE,rt.y,gt]}),o})()}}]);