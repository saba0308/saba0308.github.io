"use strict";(self.webpackChunkdashboardUI=self.webpackChunkdashboardUI||[]).push([[494],{8494:(k,f,n)=>{n.r(f),n.d(f,{UserModule:()=>q});var a=n(9808),l=n(6696),t=n(5e3),Z=n(2750),d=n(1274),u=n(3188);function C(e,r){if(1&e&&(t.TgZ(0,"tm-card",1)(1,"tm-card-body")(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"div")(6,"span"),t._uU(7,"Name:"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"div")(10,"span"),t._uU(11,"Price:"),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"div")(14,"span"),t._uU(15,"Description:"),t.qZA(),t._uU(16),t.qZA()()(),t.TgZ(17,"tm-card-footer")(18,"button",5),t._uU(19,"Buy Now "),t.qZA()()()),2&e){const o=r.$implicit;t.xp6(3),t.s9C("src",o.productImage,t.LSH),t.xp6(5),t.Oqu(o.productName),t.xp6(4),t.Oqu(o.productPrice),t.xp6(4),t.Oqu(o.productDescription)}}let g=(()=>{class e{constructor(o){this.apiService=o}ngOnInit(){this.getAllData()}getAllData(){this.apiService.getAll().subscribe(o=>{console.log(o),this.products=o})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(Z.M))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-products"]],decls:1,vars:1,consts:[["size","tiny",4,"ngFor","ngForOf"],["size","tiny"],[1,"imageContainer"],["alt","",3,"src"],[1,"detailsContainer"],["tmButton","","status","primary"]],template:function(o,s){1&o&&t.YNc(0,C,20,4,"tm-card",0),2&o&&t.Q6J("ngForOf",s.products)},dependencies:[a.sg,d.Mo,d.Ix,d.IO,u.rF],styles:["tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]{display:flex}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]{width:200px;padding:10px}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]{width:600px;padding:20px}tm-card[_ngcontent-%COMP%]   tm-card-footer[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),e})();var i=n(3075),v=n(520),P=n(570),m=n(839),h=n(8330),c=n(2311);function y(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function U(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1," Password must be at least 6 characters "),t.qZA())}function _(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1," Username must not exceed 40 characters "),t.qZA())}function T(e,r){if(1&e&&(t.TgZ(0,"div",18),t.YNc(1,y,2,0,"div",19),t.YNc(2,U,2,0,"div",19),t.YNc(3,_,2,0,"div",19),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",null==o.f.password.errors?null:o.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",null==o.f.password.errors?null:o.f.password.errors.minlength),t.xp6(1),t.Q6J("ngIf",o.f.password.errors.maxlength)}}const A=function(e){return{"is-invalid":e}},M=[{path:"profile",component:(()=>{class e{constructor(o,s,p,F){this.formBuilder=o,this.router=s,this._http=p,this.apiService=F}ngOnInit(){this.userdata=JSON.parse(localStorage.getItem("currentuser")||"{}"),this.id=this.userdata.id,console.log(this.id),this.profileForm=this.formBuilder.group({id:[this.userdata.id],userName:[this.userdata.userName],email:[this.userdata.email],phoneNumber:[this.userdata.phoneNumber],gender:[this.userdata.gender],address:[this.userdata.address],password:[this.userdata.password,[i.kI.required,i.kI.minLength(6),i.kI.maxLength(40)]]})}updateProfile(){this.submitted=!0,!this.profileForm.invalid&&(localStorage.setItem("currentuser",JSON.stringify(this.profileForm.value)),this.apiService.update(this.id,this.profileForm.value).subscribe(o=>{console.log("user updated successfully!")}))}getInputType(){return this.showPassword?"text":"password"}toggleShowPassword(){this.showPassword=!this.showPassword}get f(){return this.profileForm.controls}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(i.qu),t.Y36(l.F0),t.Y36(v.eN),t.Y36(P.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile"]],decls:55,vars:10,consts:[["align","center",1,"userName"],["width","100","height","100","viewBox","0 0 24 24","fill","grey","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.9847 15.3462C8.11707 15.3462 4.81421 15.931 4.81421 18.2729C4.81421 20.6148 8.09611 21.2205 11.9847 21.2205C15.8523 21.2205 19.1542 20.6348 19.1542 18.2938C19.1542 15.9529 15.8733 15.3462 11.9847 15.3462Z","stroke","#31384F","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.9846 12.0059C14.5227 12.0059 16.5799 9.94779 16.5799 7.40969C16.5799 4.8716 14.5227 2.81445 11.9846 2.81445C9.44655 2.81445 7.38845 4.8716 7.38845 7.40969C7.37988 9.93922 9.42369 11.9973 11.9523 12.0059H11.9846Z","stroke","#31384F","stroke-width","1.42857","stroke-linecap","round","stroke-linejoin","round"],[3,"formGroup"],[1,"table","table-user-information"],["type","text","fullWidth","","formControlName","id","tmInput",""],["type","text","fullWidth","","formControlName","userName","tmInput",""],["type","email","fullWidth","","formControlName","email","tmInput",""],["placeholder","gender","formControlName","gender","fullWidth",""],["value","male"],["value","female"],["type","tel","placeholder","Phone Number","fullWidth","","tmInput","","formControlName","phoneNumber"],["shape","semi-round","placeholder","password","fullWidth","","formControlName","password","tmInput","",1,"form-control",3,"type","ngClass"],["tmSuffix","","tmButton","","ghost","",3,"click"],["class","invalid-feedback",4,"ngIf"],["placeholder","address","tmInput","","fullWidth","","formContolName","address"],["tmButton","","status","primary",3,"click"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(o,s){1&o&&(t.TgZ(0,"tm-card")(1,"tm-card-body")(2,"div",0),t.O4$(),t.TgZ(3,"svg",1),t._UZ(4,"path",2)(5,"path",3),t.qZA(),t._uU(6),t.qZA(),t.kcU(),t.TgZ(7,"form",4)(8,"table",5)(9,"tbody")(10,"tr")(11,"td"),t._uU(12,"Id"),t.qZA(),t.TgZ(13,"td"),t._UZ(14,"input",6),t.qZA()(),t.TgZ(15,"tr")(16,"td"),t._uU(17,"Name"),t.qZA(),t.TgZ(18,"td"),t._UZ(19,"input",7),t.qZA()(),t.TgZ(20,"tr")(21,"td"),t._uU(22,"Email"),t.qZA(),t.TgZ(23,"td"),t._UZ(24,"input",8),t.qZA()(),t.TgZ(25,"tr")(26,"td"),t._uU(27,"Gender"),t.qZA(),t.TgZ(28,"td")(29,"tm-select",9)(30,"tm-option",10),t._uU(31,"Male"),t.qZA(),t.TgZ(32,"tm-option",11),t._uU(33,"Female"),t.qZA()()()(),t.TgZ(34,"tr")(35,"td"),t._uU(36,"Phone Number"),t.qZA(),t.TgZ(37,"td"),t._UZ(38,"input",12),t.qZA()(),t.TgZ(39,"tr")(40,"td"),t._uU(41,"Password"),t.qZA(),t.TgZ(42,"td")(43,"tm-form-field"),t._UZ(44,"input",13),t.TgZ(45,"button",14),t.NdJ("click",function(){return s.toggleShowPassword()}),t._UZ(46,"i"),t.qZA(),t.YNc(47,T,4,3,"div",15),t.qZA()()(),t.TgZ(48,"tr")(49,"td"),t._uU(50,"Address"),t.qZA(),t.TgZ(51,"td"),t._UZ(52,"textarea",16),t.qZA()()()(),t.TgZ(53,"button",17),t.NdJ("click",function(){return s.updateProfile()}),t._uU(54," submit"),t.qZA()()()()),2&o&&(t.xp6(6),t.hij(" ",s.userdata.userName," "),t.xp6(1),t.Q6J("formGroup",s.profileForm),t.xp6(37),t.Q6J("type",s.getInputType())("ngClass",t.VKq(8,A,s.submitted&&s.f.password.errors)),t.xp6(2),t.Tol(s.showPassword?"fa fa-eye":"fa fa-eye-slash"),t.uIk("aria-label",s.showPassword?"hide password":"show password"),t.xp6(1),t.Q6J("ngIf",s.submitted&&s.f.password.errors))},dependencies:[a.mk,a.O5,d.Mo,d.Ix,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,m.Xw,m.As,h.J,u.rF,c.UE,c.u0],styles:["tm-card[_ngcontent-%COMP%]{width:100%;height:600px}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]{align-items:center}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;font-size:18pt;color:var(--text-basic-color)}tm-card[_ngcontent-%COMP%]   tm-card-body[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}"]}),e})()},{path:"products",component:g},{path:"**",component:g}];let w=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(M),l.Bz]}),e})();var O=n(2972),x=n(4617),b=n(7532),N=n(164),I=n(6729);let q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez,w,O.St,x.vu.forRoot(),b.C,I.lf,N.nx,d.Ei,i.u5,i.UX,m.mY,h.V,u.lE,c.uE]}),e})()}}]);