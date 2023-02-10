"use strict";(self.webpackChunkdashboardUI=self.webpackChunkdashboardUI||[]).push([[162],{7162:(ge,Z,l)=>{l.r(Z),l.d(Z,{SignInModule:()=>de});var p=l(9808),a=l(3075),d=l(6696),x=l(520);function H(n,i){return e=>{const s=e.controls[i];s.errors&&!s.errors.confirmedValidator||s.setErrors(e.controls[n].value!==s.value?{confirmedValidator:!0}:null)}}var t=l(5e3),O=l(570),g=l(839),T=l(8330),b=l(3188);function $(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function W(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Email is invalid"),t.qZA())}function K(n,i){if(1&n&&(t.TgZ(0,"div",6),t.YNc(1,$,2,0,"div",7),t.YNc(2,W,2,0,"div",7),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.email)}}const y=function(n){return{"is-invalid":n}};function z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"form",2)(1,"tm-form-field"),t._UZ(2,"input",3),t.YNc(3,K,3,2,"div",4),t.qZA(),t.TgZ(4,"button",5),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.signIn())}),t._uU(5,"Send OTP"),t.qZA()()}if(2&n){const e=t.oxw();t.Q6J("formGroup",e.signInForm),t.xp6(2),t.Q6J("ngClass",t.VKq(4,y,e.submitted&&e.f.email.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.email.errors),t.xp6(1),t.Q6J("disabled",e.show)}}function X(n,i){1&n&&(t.TgZ(0,"div",13),t._uU(1,"OTP Send Successfully"),t.qZA())}function tt(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"OTP is required"),t.qZA())}function et(n,i){if(1&n&&(t.TgZ(0,"div",6),t.YNc(1,tt,2,0,"div",7),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.otpform.otp.errors?null:e.otpform.otp.errors.required)}}function nt(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"form",8)(1,"tm-form-field"),t._UZ(2,"input",9),t.TgZ(3,"a",10),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.resendOTP())}),t._uU(4,"Resend OTP"),t.qZA(),t.YNc(5,X,2,0,"div",11),t.YNc(6,et,2,1,"div",4),t.qZA(),t.TgZ(7,"button",12),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.forgotPassword())}),t._uU(8,"Submit"),t.qZA()()}if(2&n){const e=t.oxw();t.Q6J("formGroup",e.otpForm),t.xp6(2),t.Q6J("ngClass",t.VKq(4,y,e.otpSubmitted&&e.otpform.otp.errors)),t.xp6(3),t.Q6J("ngIf",e.otpMessageSuccess),t.xp6(1),t.Q6J("ngIf",e.otpSubmitted&&e.otpform.otp.errors)}}function ot(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function it(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1," Password must be at least 6 characters "),t.qZA())}function st(n,i){if(1&n&&(t.TgZ(0,"div",6),t.YNc(1,ot,2,0,"div",7),t.YNc(2,it,2,0,"div",7),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.passwordRecover.password.errors?null:e.passwordRecover.password.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.passwordRecover.password.errors?null:e.passwordRecover.password.errors.minlength)}}function rt(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function at(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1," Password must be at least 6 characters "),t.qZA())}function ct(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1," Password does not match "),t.qZA())}function lt(n,i){if(1&n&&(t.TgZ(0,"div",6),t.YNc(1,rt,2,0,"div",7),t.YNc(2,at,2,0,"div",7),t.YNc(3,ct,2,0,"div",7),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.passwordRecover.confirmPassword.errors?null:e.passwordRecover.confirmPassword.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.passwordRecover.confirmPassword.errors?null:e.passwordRecover.confirmPassword.errors.minlength),t.xp6(1),t.Q6J("ngIf",null==e.passwordRecover.confirmPassword.errors?null:e.passwordRecover.confirmPassword.errors.confirmedValidator)}}function ut(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"form",8)(1,"tm-form-field"),t._UZ(2,"input",14),t.TgZ(3,"button",15),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.toggleShowPassword())}),t._UZ(4,"i"),t.qZA(),t.YNc(5,st,3,2,"div",4),t.qZA(),t.TgZ(6,"tm-form-field"),t._UZ(7,"input",16),t.TgZ(8,"button",15),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.toggleConformPassword())}),t._UZ(9,"i"),t.qZA(),t.YNc(10,lt,4,3,"div",4),t.qZA(),t.TgZ(11,"button",17),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.recoverPassword())}),t._uU(12,"Submit"),t.qZA()()}if(2&n){const e=t.oxw();t.Q6J("formGroup",e.passwordForm),t.xp6(2),t.Q6J("type",e.getInputType())("ngClass",t.VKq(13,y,e.recover&&e.passwordRecover.password.errors)),t.xp6(2),t.Tol(e.showPassword?"fa fa-eye":"fa fa-eye-slash"),t.uIk("aria-label",e.showPassword?"hide password":"show password"),t.xp6(1),t.Q6J("ngIf",e.recover&&e.passwordRecover.password.errors),t.xp6(2),t.Q6J("type",e.getInputconformPassType())("ngClass",t.VKq(15,y,e.recover&&e.passwordRecover.confirmPassword.errors)),t.xp6(2),t.Tol(e.conformPassword?"fa fa-eye":"fa fa-eye-slash"),t.uIk("aria-label",e.conformPassword?"hide password":"show password"),t.xp6(1),t.Q6J("ngIf",e.recover&&e.passwordRecover.confirmPassword.errors)}}let pt=(()=>{class n{constructor(e,o,s,r,c){this.formBuilder=e,this.router=o,this.apiService=s,this.route=r,this._http=c,this.submitted=!1,this.recover=!1,this.show=!1,this.showEmail=!1,this.otpMessage="Send OTP",this.otpSubmitted=!1,this.httpOptions={headers:new x.WM({"Content-Type":"application/json"})},this.showPassword=!0,this.passwordMatch=!1,this.conformPassword=!0}ngOnInit(){this.signInForm=this.formBuilder.group({email:["",[a.kI.required,a.kI.email]]}),this.otpForm=this.formBuilder.group({otp:["",[a.kI.required]]}),this.passwordForm=this.formBuilder.group({password:["",[a.kI.required,a.kI.minLength(6),a.kI.maxLength(40)]],confirmPassword:["",[a.kI.required,a.kI.minLength(6),a.kI.maxLength(40)]]},{validator:H("password","confirmPassword")})}getInputType(){return this.showPassword?"password":"text"}getInputconformPassType(){return this.conformPassword?"password":"text"}toggleShowPassword(){this.showPassword=!this.showPassword}toggleConformPassword(){this.conformPassword=!this.conformPassword}signIn(){this.submitted=!0,!this.signInForm.invalid&&(this.email=this.signInForm.value.email,console.log(this.email),this.submitted&&(this.otpMessage="Resend OTP"),(this.otpMessage="Resend OTP")&&(this.show=!0),this._http.get("https://template-json-server.vercel.app/api/usersData").subscribe(e=>{e.find(s=>{if(s.email===this.signInForm.value.email)return this.id=s.id,this.email=s.email})}))}resendOTP(){this.otpMessageSuccess=!0}forgotPassword(){this.otpSubmitted=!0,!this.otpForm.invalid&&this.otpSubmitted&&(this.showEmail=!this.showEmail,this.show=!1)}recoverPassword(){this.recover=!0,!this.passwordForm.invalid&&(this.apiService.update(this.id,this.passwordForm.value).subscribe(e=>{console.log("Post updated successfully!"),this.router.navigateByUrl("/auth/log-in")}),this.router.navigate(["/auth/log-in"]))}get f(){return this.signInForm.controls}get passwordRecover(){return this.passwordForm.controls}get otpform(){return this.otpForm.controls}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.qu),t.Y36(d.F0),t.Y36(O.e),t.Y36(d.gz),t.Y36(x.eN))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-forgot-password"]],decls:5,vars:3,consts:[["class","signinForm","action","",3,"formGroup",4,"ngIf"],["class","signinForm",3,"formGroup",4,"ngIf"],["action","",1,"signinForm",3,"formGroup"],["type","email","shape","semi-round","formControlName","email","fullWidth","","placeholder","Email","tmInput","",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["shape","semi-round","tmButton","","status","primary","fullWidth","",3,"disabled","click"],[1,"invalid-feedback"],[4,"ngIf"],[1,"signinForm",3,"formGroup"],["type","email","shape","semi-round","formControlName","otp","fullWidth","","placeholder","OTP","tmInput","",1,"form-control",3,"ngClass"],[3,"click"],["class","successMessage",4,"ngIf"],["shape","semi-round","status","primary","tmButton","",3,"click"],[1,"successMessage"],["shape","semi-round","placeholder","New Password","fullWidth","","formControlName","password","tmInput","",1,"form-control",3,"type","ngClass"],["tmSuffix","","tmButton","","ghost","",3,"click"],["shape","semi-round","placeholder","Confirm New Password","fullWidth","","formControlName","confirmPassword","tmInput","",1,"form-control",3,"type","ngClass"],["status","primary","tmButton","",3,"click"]],template:function(e,o){1&e&&(t._UZ(0,"br"),t.YNc(1,z,6,6,"form",0),t._UZ(2,"br"),t.YNc(3,nt,9,6,"form",1),t.YNc(4,ut,13,17,"form",1)),2&e&&(t.xp6(1),t.Q6J("ngIf",!o.showEmail),t.xp6(2),t.Q6J("ngIf",o.show),t.xp6(1),t.Q6J("ngIf",o.showEmail))},dependencies:[p.mk,p.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,g.Xw,g.As,T.J,b.rF],styles:[".signinForm[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;text-align:left}.signinForm[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%]{color:red}.signinForm[_ngcontent-%COMP%]   .is-invalid[_ngcontent-%COMP%]{border-color:red;color:red}.signinForm[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.signinForm[_ngcontent-%COMP%]   .successMessage[_ngcontent-%COMP%]{text-align:center;color:green}"]}),n})();var m=l(7206);let S=(()=>{class n{constructor(){this.key="DoverDigitalHydr",this.IV="MTIzNDU2Nzg="}encryptUsingTripleDES(e,o){const s=o?JSON.stringify(e):e,r=m.enc.Utf8.parse(this.key),c=m.enc.Utf8.parse(this.IV);return m.TripleDES.encrypt(s,r,{iv:c,mode:m.mode.CBC}).toString()}decryptUsingTripleDES(e){const o=m.enc.Utf8.parse(this.key),s=m.enc.Utf8.parse(this.IV);return m.TripleDES.decrypt(e,o,{iv:s,mode:m.mode.CBC}).toString(m.enc.Utf8)}encryptUsingAES(e,o){const s=o?JSON.stringify(e):e,r=m.MD5(this.key).toString();return m.AES.encrypt(s,r).toString()}decryptUsingAES(e){const o=m.MD5(this.key).toString();return m.AES.decrypt(e,o).toString(m.enc.Utf8)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function mt(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function dt(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Email is invalid"),t.qZA())}function gt(n,i){if(1&n&&(t.TgZ(0,"div",8),t.YNc(1,mt,2,0,"div",9),t.YNc(2,dt,2,0,"div",9),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.email)}}function ft(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function ht(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1," Password must be at least 6 characters "),t.qZA())}function _t(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1," Username must not exceed 40 characters "),t.qZA())}function vt(n,i){if(1&n&&(t.TgZ(0,"div",8),t.YNc(1,ft,2,0,"div",9),t.YNc(2,ht,2,0,"div",9),t.YNc(3,_t,2,0,"div",9),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.password.errors?null:e.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.f.password.errors?null:e.f.password.errors.minlength),t.xp6(1),t.Q6J("ngIf",e.f.password.errors.maxlength)}}const U=function(n){return{"is-invalid":n}};let D=(()=>{class n{constructor(e,o,s,r,c){this.encryption=e,this.formBuilder=o,this.router=s,this._http=r,this.apiService=c,this.submitted=!1,this.showPassword=!0}ngOnInit(){console.log(this.encryption.encryptUsingTripleDES("123456",!0)),this.signInForm=this.formBuilder.group({email:["",[a.kI.required,a.kI.email]],password:["",[a.kI.required,a.kI.minLength(6),a.kI.maxLength(40)]]})}getInputType(){return this.showPassword?"text":"password"}toggleShowPassword(){this.showPassword=!this.showPassword}signIn(){this.submitted=!0,this.signInForm.value.password=this.encryption.encryptUsingTripleDES(this.signInForm.value.password,!0),!this.signInForm.invalid&&(this.router.navigate(["auth/log-in"]),this._http.get("https://template-json-server.vercel.app/api/usersData").subscribe(e=>{const o=e.find(s=>s.email===this.signInForm.value.email&&s.password===this.signInForm.value.password);if(o){alert("you are successfully login");const s=o;o.status="online",localStorage.setItem("isLoggedIn","true"),localStorage.setItem("currentuser",JSON.stringify(s)),this.signInForm.reset(),console.log(o.id),console.log(o.status),this.router.navigate(["/user/products"])}else if("admin123@gmail.com"==this.f.email.value&&"admin@123"==this.f.password.value){const s=this.signInForm.value.email;localStorage.setItem("isAdminLoggedIn","true"),localStorage.setItem("adminValue",s),this.signInForm.reset(),this.router.navigate(["/admin/dashboard"])}else alert("User Not Found"),this.router.navigate(["auth/log-in"])},e=>{alert("Something was wrong")}))}get f(){return this.signInForm.controls}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(S),t.Y36(a.qu),t.Y36(d.F0),t.Y36(x.eN),t.Y36(O.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-log-in"]],decls:18,vars:13,consts:[["action","",1,"signinForm",3,"formGroup"],["type","email","shape","semi-round","formControlName","email","fullWidth","","placeholder","Email","tmInput","",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["shape","semi-round","placeholder","password","fullWidth","","formControlName","password","tmInput","",1,"form-control",3,"type","ngClass"],["tmSuffix","","tmButton","","ghost","",3,"click"],["shape","semi-round","tmButton","","status","primary","fullWidth","",3,"click"],["routerLink","/auth/sign-up"],["routerLink","/auth/forgot-passsword"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(e,o){1&e&&(t._UZ(0,"br"),t.TgZ(1,"form",0)(2,"tm-form-field"),t._UZ(3,"input",1),t.YNc(4,gt,3,2,"div",2),t.qZA(),t.TgZ(5,"tm-form-field"),t._UZ(6,"input",3),t.TgZ(7,"button",4),t.NdJ("click",function(){return o.toggleShowPassword()}),t._UZ(8,"i"),t.qZA(),t.YNc(9,vt,4,3,"div",2),t.qZA(),t.TgZ(10,"button",5),t.NdJ("click",function(){return o.signIn()}),t._uU(11,"Sign In"),t.qZA(),t.TgZ(12,"p"),t._uU(13," Don't have an account? "),t.TgZ(14,"a",6),t._uU(15,"register here"),t.qZA()(),t.TgZ(16,"a",7),t._uU(17,"Forgot Password"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("formGroup",o.signInForm),t.xp6(2),t.Q6J("ngClass",t.VKq(9,U,o.submitted&&o.f.email.errors)),t.xp6(1),t.Q6J("ngIf",o.submitted&&o.f.email.errors),t.xp6(2),t.Q6J("type",o.getInputType())("ngClass",t.VKq(11,U,o.submitted&&o.f.password.errors)),t.xp6(2),t.Tol(o.showPassword?"fa fa-eye":"fa fa-eye-slash"),t.uIk("aria-label",o.showPassword?"hide password":"show password"),t.xp6(1),t.Q6J("ngIf",o.submitted&&o.f.password.errors))},dependencies:[p.mk,p.O5,d.yS,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,g.Xw,g.As,T.J,b.rF],styles:[".signinForm[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;text-align:left}.signinForm[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%]{color:red}.signinForm[_ngcontent-%COMP%]   .is-invalid[_ngcontent-%COMP%]{border-color:red;color:red}.signinForm[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),n})();var R=l(6776);function Ct(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"UserName is required"),t.qZA())}function Tt(n,i){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,Ct,2,0,"div",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.userName.errors?null:e.f.userName.errors.required)}}function bt(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function yt(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Email is invalid"),t.qZA())}function wt(n,i){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,bt,2,0,"div",11),t.YNc(2,yt,2,0,"div",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.email)}}function Pt(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Phone Number is required"),t.qZA())}function xt(n,i){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,Pt,2,0,"div",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.phoneNumber.errors?null:e.f.phoneNumber.errors.required)}}function Ot(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function Mt(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1," Password must be at least 6 characters "),t.qZA())}function It(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1," Username must not exceed 40 characters "),t.qZA())}function kt(n,i){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,Ot,2,0,"div",11),t.YNc(2,Mt,2,0,"div",11),t.YNc(3,It,2,0,"div",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.password.errors?null:e.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.f.password.errors?null:e.f.password.errors.minlength),t.xp6(1),t.Q6J("ngIf",e.f.password.errors.maxlength)}}function Ft(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1," You have to agree the terms and condition"),t.qZA())}function Zt(n,i){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,Ft,2,0,"div",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.agree.errors?null:e.f.agree.errors.required)}}const v=function(n){return{"is-invalid":n}},St=[{path:"sign-up",component:(()=>{class n{constructor(e,o,s,r){this.encryption=e,this.formBuilder=o,this.router=s,this.apiService=r,this.submitted=!1,this.index=0,this.showPassword=!0}ngOnInit(){this.signUpForm=this.formBuilder.group({userName:["",a.kI.required],email:["",[a.kI.required,a.kI.email]],phoneNumber:["",a.kI.required],password:["",[a.kI.required,a.kI.minLength(6),a.kI.maxLength(40)]],agree:[!1,a.kI.requiredTrue]})}getInputType(){return this.showPassword?"text":"password"}toggleShowPassword(){this.showPassword=!this.showPassword}signIn(){this.submitted=!0,!this.signUpForm.invalid&&(this.signUpForm.value.password=this.encryption.encryptUsingTripleDES(this.signUpForm.value.password,!0),this.apiService.create(this.signUpForm.value).subscribe(e=>{}),this.router.navigate(["auth/log-in"]))}get f(){return this.signUpForm.controls}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(S),t.Y36(a.qu),t.Y36(d.F0),t.Y36(O.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sign-up"]],decls:26,vars:25,consts:[["action","",1,"signupForm",3,"formGroup"],["type","text","shape","semi-round","formControlName","userName","fullWidth","","placeholder","User Name","tmInput","",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","email","shape","semi-round","formControlName","email","fullWidth","","placeholder","Email","tmInput","",1,"form-control",3,"ngClass"],["type","tel","shape","semi-round","formControlName","phoneNumber","fullWidth","","placeholder","Phone Number","tmInput","",1,"form-control",3,"ngClass"],["shape","semi-round","placeholder","password","fullWidth","","formControlName","password","tmInput","",1,"form-control",3,"type","ngClass"],["tmSuffix","","tmButton","","ghost","",3,"click"],["formControlName","agree","status","basic",1,"form-control",3,"ngClass"],["href",""],["shape","semi-round","tmButton","","status","primary","fullWidth","",3,"click"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(e,o){1&e&&(t._UZ(0,"br"),t.TgZ(1,"form",0)(2,"tm-form-field"),t._UZ(3,"input",1),t.YNc(4,Tt,2,1,"div",2),t.qZA(),t.TgZ(5,"tm-form-field"),t._UZ(6,"input",3),t.YNc(7,wt,3,2,"div",2),t.qZA(),t.TgZ(8,"tm-form-field"),t._UZ(9,"input",4),t.YNc(10,xt,2,1,"div",2),t.qZA(),t.TgZ(11,"tm-form-field"),t._UZ(12,"input",5),t.TgZ(13,"button",6),t.NdJ("click",function(){return o.toggleShowPassword()}),t._UZ(14,"i"),t.qZA(),t.YNc(15,kt,4,3,"div",2),t.qZA(),t.TgZ(16,"tm-checkbox",7),t._uU(17,"I agree the "),t.TgZ(18,"a",8),t._uU(19," Terms and condition"),t.qZA(),t._uU(20," and "),t.TgZ(21,"a",8),t._uU(22,"Privacy Policy"),t.qZA()(),t.YNc(23,Zt,2,1,"div",2),t.TgZ(24,"button",9),t.NdJ("click",function(){return o.signIn()}),t._uU(25,"Sign Up"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("formGroup",o.signUpForm),t.xp6(2),t.Q6J("ngClass",t.VKq(15,v,o.submitted&&o.f.userName.errors)),t.xp6(1),t.Q6J("ngIf",o.submitted&&o.f.userName.errors),t.xp6(2),t.Q6J("ngClass",t.VKq(17,v,o.submitted&&o.f.email.errors)),t.xp6(1),t.Q6J("ngIf",o.submitted&&o.f.email.errors),t.xp6(2),t.Q6J("ngClass",t.VKq(19,v,o.submitted&&o.f.phoneNumber.errors)),t.xp6(1),t.Q6J("ngIf",o.submitted&&o.f.phoneNumber.errors),t.xp6(2),t.Q6J("type",o.getInputType())("ngClass",t.VKq(21,v,o.submitted&&o.f.password.errors)),t.xp6(2),t.Tol(o.showPassword?"fa fa-eye":"fa fa-eye-slash"),t.uIk("aria-label",o.showPassword?"hide password":"show password"),t.xp6(1),t.Q6J("ngIf",o.submitted&&o.f.password.errors),t.xp6(1),t.Q6J("ngClass",t.VKq(23,v,o.submitted&&o.f.agree.errors)),t.xp6(7),t.Q6J("ngIf",o.submitted&&o.f.agree.errors))},dependencies:[p.mk,p.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,g.Xw,g.As,T.J,b.rF,R.L],styles:[".signupForm[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;text-align:left}.signupForm[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%]{color:red}.signupForm[_ngcontent-%COMP%]   .is-invalid[_ngcontent-%COMP%]{border-color:red;color:red}"]}),n})(),data:{title:"Shoppingkart Sign up"}},{path:"log-in",component:D,data:{title:"Shoppingkart  Sign In"}},{path:"forgot-passsword",component:pt,data:{title:"Password Recovery"}},{path:"**",component:D,data:{title:"Shoppingkart  Sign In"}}];let Ut=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(St),d.Bz]}),n})();var Dt=l(2972),M=(l(4004),l(1005),l(9300)),w=l(2722),I=l(7579),q=(l(5829),l(6623)),C=l(6024),P=l(9935);let Vt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[P.F,q.y,C.wb]}),n})();var Gt=l(1274);let te=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[P.F,C.wb]}),n})();var u=l(4954),_=l(1777);function ee(n,i){if(1&n&&(t.TgZ(0,"div",4),t._UZ(1,"tm-icons",5),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("name",e.icon)}}function ne(n,i){if(1&n&&t._UZ(0,"tm-toast",1),2&n){const e=i.$implicit,o=t.oxw();t.Q6J("@fadeIn",o.fadeIn)("toast",e)}}const Q=new t.OlP("Default toastr options");class oe{constructor(i){this.position=u.wBM.TOP_END,this.status="basic",this.duration=3e3,this.destroyByClick=!0,this.preventDuplicates=!1,this.duplicatesBehaviour="previous",this.limit=null,this.toastClass="",this.hasIcon=!0,this.icon="email",this.icons={danger:"flash-outline",success:"checkmark-outline",info:"question-mark-outline",warning:"alert-triangle-outline",primary:"email-outline",control:"email-outline",basic:"email-outline"},this.patchIcon(i),Object.assign(this,i)}patchIcon(i){"icon"in i||(i.icon={icon:this.icons[i.status]||this.icons.basic,pack:"tmlib-essentials"})}}let B=(()=>{class n{constructor(e,o,s){this.renderer=e,this.elementRef=o,this.statusService=s,this.destroy=new t.vpe,this.toastClick=new t.vpe}get success(){return"success"===this.toast.config.status}get info(){return"info"===this.toast.config.status}get warning(){return"warning"===this.toast.config.status}get primary(){return"primary"===this.toast.config.status}get danger(){return"danger"===this.toast.config.status}get basic(){return"basic"===this.toast.config.status}get control(){return"control"===this.toast.config.status}get destroyByClick(){return this.toast.config.destroyByClick}get hasIcon(){const{icon:e}=this.toast.config;return"string"==typeof e||!(!e||!e.icon)}get customIcon(){return!!this.icon}get icon(){return this.toast.config.icon}get additionalClasses(){return this.statusService.isCustomStatus(this.toast.config.status)?[this.statusService.getStatusClass(this.toast.config.status)]:[]}onClick(){this.toastClick.emit()}ngOnInit(){this.toast.config.toastClass&&this.renderer.addClass(this.elementRef.nativeElement,this.toast.config.toastClass)}ngOnDestroy(){this.destroy.emit()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(u.Zy2))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tm-toast"]],hostVars:22,hostBindings:function(e,o){1&e&&t.NdJ("click",function(){return o.onClick()}),2&e&&(t.Tol(o.additionalClasses),t.ekj("status-success",o.success)("status-info",o.info)("status-warning",o.warning)("status-primary",o.primary)("status-danger",o.danger)("status-basic",o.basic)("status-control",o.control)("destroy-by-click",o.destroyByClick)("has-icon",o.hasIcon)("custom-icon",o.customIcon))},inputs:{toast:"toast"},outputs:{destroy:"destroy",toastClick:"toastClick"},decls:6,vars:3,consts:[["class","icon-container",4,"ngIf"],[1,"content-container"],[1,"title","subtitle"],[1,"message"],[1,"icon-container"],[3,"name"]],template:function(e,o){1&e&&(t.YNc(0,ee,2,1,"div",0),t.TgZ(1,"div",1)(2,"span",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t._uU(5),t.qZA()()),2&e&&(t.Q6J("ngIf",o.hasIcon&&o.icon),t.xp6(3),t.Oqu(o.toast.title),t.xp6(2),t.Oqu(o.toast.message))},dependencies:[p.O5,C.c9],styles:["[_nghost-%COMP%]{display:flex;align-items:center;width:25rem;margin:.5rem}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:.25rem}.default[_nghost-%COMP%]   .content-container[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.has-icon)   .content-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.destroy-by-click[_nghost-%COMP%]{cursor:pointer}[_nghost-%COMP%]   tm-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   tm-icons[_ngcontent-%COMP%]{font-size:2.5rem}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem}"]}),n})();const E=(0,_.oB)({transform:"translateX({{ direction }}110%)",height:0,marginLeft:"0",marginRight:"0",marginTop:"0",marginBottom:"0"}),L={params:{direction:""}};let ie=(()=>{class n{constructor(e,o){this.layoutDirection=e,this.positionHelper=o,this.destroy$=new I.x,this.content=[]}ngOnInit(){this.layoutDirection.onDirectionChange().pipe((0,w.R)(this.destroy$)).subscribe(()=>this.onDirectionChange())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onDirectionChange(){const e=this.positionHelper.isRightPosition(this.position)?"":"-";this.fadeIn={value:"",params:{direction:e}}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.qD),t.Y36(u.QMg))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tm-toastr-container"]],viewQuery:function(e,o){if(1&e&&t.Gf(B,5),2&e){let s;t.iGM(s=t.CRH())&&(o.toasts=s)}},inputs:{content:"content",context:"context",position:"position"},decls:1,vars:1,consts:[[3,"toast",4,"ngFor","ngForOf"],[3,"toast"]],template:function(e,o){1&e&&t.YNc(0,ne,1,2,"tm-toast",0),2&e&&t.Q6J("ngForOf",o.content)},dependencies:[p.sg,B],encapsulation:2,data:{animation:[(0,_.X$)("fadeIn",[(0,_.eR)(":enter",[E,(0,_.jt)(100)],L),(0,_.eR)(":leave",[(0,_.jt)(100,E)],L)])]}}),n})();class se{constructor(i,e){this.toastContainer=i,this.toast=e}close(){this.toastContainer.destroy(this.toast)}onClose(){return this.toastInstance.destroy.asObservable()}onClick(){return this.toastInstance.toastClick.asObservable()}}class re{constructor(i,e,o){this.position=i,this.containerRef=e,this.positionHelper=o,this.toasts=[],this.toastDuplicateCompareFunc=(s,r)=>s.message===r.message&&s.title===r.title&&s.config.status===r.config.status}get nativeElement(){return this.containerRef.location.nativeElement}attach(i){if(i.config.preventDuplicates&&this.isDuplicate(i))return;this.removeToastIfLimitReached(i);const e=this.attachToast(i);i.config.destroyByClick&&this.subscribeOnClick(e,i),i.config.duration&&this.setDestroyTimeout(i),this.prevToast=i;const o=new se(this,i);return o.toastInstance=e,o}destroy(i){this.prevToast===i&&(this.prevToast=null),this.toasts=this.toasts.filter(e=>e!==i),this.updateContainer()}isDuplicate(i){return"previous"===i.config.duplicatesBehaviour?this.isDuplicatePrevious(i):this.isDuplicateAmongAll(i)}isDuplicatePrevious(i){return this.prevToast&&this.toastDuplicateCompareFunc(this.prevToast,i)}isDuplicateAmongAll(i){return this.toasts.some(e=>this.toastDuplicateCompareFunc(e,i))}removeToastIfLimitReached(i){!i.config.limit||this.toasts.length<i.config.limit||(this.positionHelper.isTopPosition(i.config.position)?this.toasts.pop():this.toasts.shift())}attachToast(i){return this.positionHelper.isTopPosition(i.config.position)?this.attachToTop(i):this.attachToBottom(i)}attachToTop(i){return this.toasts.unshift(i),this.updateContainer(),this.containerRef.instance.toasts.first}attachToBottom(i){return this.toasts.push(i),this.updateContainer(),this.containerRef.instance.toasts.last}setDestroyTimeout(i){setTimeout(()=>this.destroy(i),i.config.duration)}subscribeOnClick(i,e){i.toastClick.pipe((0,M.h)(()=>e.config.destroyByClick),(0,w.R)(i.destroy)).subscribe(()=>this.destroy(e))}updateContainer(){(0,u.r$K)(this.containerRef,{content:this.toasts,position:this.position})}}let j=(()=>{class n{constructor(e,o,s,r,c){this.overlay=e,this.positionBuilder=o,this.positionHelper=s,this.cfr=r,this.document=c,this.overlays=new Map}get(e){const o=this.positionHelper.toLogicalPosition(e),s=this.overlays.get(o);return(!s||!this.existsInDom(s.toastrContainer))&&(s&&s.overlayRef.dispose(),this.instantiateContainer(o)),this.overlays.get(o).toastrContainer}instantiateContainer(e){const o=this.createContainer(e);this.overlays.set(e,o)}createContainer(e){const o=this.positionBuilder.global().position(e),s=this.overlay.create({positionStrategy:o});this.addClassToOverlayHost(s);const r=s.attach(new u.BqV(ie,null,null,this.cfr));return{overlayRef:s,toastrContainer:new re(e,r,this.positionHelper)}}addClassToOverlayHost(e){e.hostElement.classList.add("toastr-overlay-container")}existsInDom(e){return this.document.body.contains(e.nativeElement)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(u.TD8),t.LFG(u.PHT),t.LFG(u.QMg),t.LFG(t._Vd),t.LFG(u.ypt))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),ae=(()=>{class n{constructor(e,o){this.globalConfig=e,this.containerRegistry=o}show(e,o,s){const r=new oe(Object.assign(Object.assign({},this.globalConfig),s));return this.containerRegistry.get(r.position).attach({message:e,title:o,config:r})}success(e,o,s){return this.show(e,o,Object.assign(Object.assign({},s),{status:"success"}))}info(e,o,s){return this.show(e,o,Object.assign(Object.assign({},s),{status:"info"}))}warning(e,o,s){return this.show(e,o,Object.assign(Object.assign({},s),{status:"warning"}))}primary(e,o,s){return this.show(e,o,Object.assign(Object.assign({},s),{status:"primary"}))}danger(e,o,s){return this.show(e,o,Object.assign(Object.assign({},s),{status:"danger"}))}default(e,o,s){return this.show(e,o,Object.assign(Object.assign({},s),{status:"basic"}))}control(e,o,s){return this.default(e,o,Object.assign(Object.assign({},s),{status:"control"}))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Q),t.LFG(j))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),ce=(()=>{class n{static forRoot(e={}){return{ngModule:n,providers:[ae,j,{provide:Q,useValue:e}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[P.F,u.gvI,C.wb]}),n})();var le=l(4968);function ue(n,i){}const k=new t.OlP("Default dialog options");class F{constructor(i){this.hasBackdrop=!0,this.backdropClass="overlay-backdrop",this.dialogClass="",this.closeOnBackdropClick=!0,this.closeOnEsc=!0,this.hasScroll=!1,this.autoFocus=!0,Object.assign(this,i)}}let pe=(()=>{class n{constructor(e,o,s){this.config=e,this.elementRef=o,this.focusTrapFactory=s}ngOnInit(){this.config.autoFocus&&(this.focusTrap=this.focusTrapFactory.create(this.elementRef.nativeElement),this.focusTrap.blurPreviouslyFocusedElement(),this.focusTrap.focusInitialElement())}ngOnDestroy(){this.config.autoFocus&&this.focusTrap&&this.focusTrap.restoreFocus()}attachComponentPortal(e){return this.portalOutlet.attachComponentPortal(e)}attachTemplatePortal(e){return this.portalOutlet.attachTemplatePortal(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(F),t.Y36(t.SBq),t.Y36(u.zsw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tm-dialog-container"]],viewQuery:function(e,o){if(1&e&&t.Gf(u.uAF,7),2&e){let s;t.iGM(s=t.CRH())&&(o.portalOutlet=s.first)}},decls:1,vars:0,consts:[["tmPortalOutlet",""]],template:function(e,o){1&e&&t.YNc(0,ue,0,0,"ng-template",0)},dependencies:[u.uAF],encapsulation:2}),n})();class V{constructor(i){this.overlayRef=i,this.onClose$=new I.x,this.onClose=this.onClose$.asObservable(),this.onBackdropClick=this.overlayRef.backdropClick()}close(i){this.overlayRef.detach(),this.overlayRef.dispose(),this.onClose$.next(i),this.onClose$.complete()}}let G=(()=>{class n{constructor(e,o,s,r,c,f){this.document=e,this.globalConfig=o,this.positionBuilder=s,this.overlay=r,this.injector=c,this.cfr=f}open(e,o={}){const s=new F(Object.assign(Object.assign({},this.globalConfig),o)),r=this.createOverlay(s),c=new V(r),f=this.createContainer(s,r);return this.createContent(s,e,f,c),this.registerCloseListeners(s,r,c),c}createOverlay(e){const o=this.createPositionStrategy(),s=this.createScrollStrategy(e.hasScroll);return this.overlay.create({positionStrategy:o,scrollStrategy:s,hasBackdrop:e.hasBackdrop,backdropClass:e.backdropClass,panelClass:e.dialogClass})}createPositionStrategy(){return this.positionBuilder.global().centerVertically().centerHorizontally()}createScrollStrategy(e){return e?this.overlay.scrollStrategies.noop():this.overlay.scrollStrategies.block()}createContainer(e,o){const s=new u.P1w(this.createInjector(e),new WeakMap([[F,e]])),r=new u.BqV(pe,null,s,this.cfr);return o.attach(r).instance}createContent(e,o,s,r){if(o instanceof t.Rgc){const c=this.createTemplatePortal(e,o,r);s.attachTemplatePortal(c)}else{const c=this.createComponentPortal(e,o,r);r.componentRef=s.attachComponentPortal(c),e.context&&Object.assign(r.componentRef.instance,Object.assign({},e.context))}}createTemplatePortal(e,o,s){return new u.wvl(o,null,{$implicit:e.context,dialogRef:s})}createComponentPortal(e,o,s){const r=this.createInjector(e),c=new u.P1w(r,new WeakMap([[V,s]]));return new u.BqV(o,e.viewContainerRef,c)}createInjector(e){return e.viewContainerRef&&e.viewContainerRef.injector||this.injector}registerCloseListeners(e,o,s){e.closeOnBackdropClick&&o.backdropClick().subscribe(()=>s.close()),e.closeOnEsc&&(0,le.R)(this.document,"keyup").pipe((0,M.h)(r=>27===r.keyCode),(0,w.R)(s.onClose)).subscribe(()=>s.close())}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(u.ypt),t.LFG(k),t.LFG(u.PHT),t.LFG(u.TD8),t.LFG(t.zs3),t.LFG(t._Vd))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),me=(()=>{class n{static forRoot(e={}){return{ngModule:n,providers:[G,{provide:k,useValue:e}]}}static forChild(e={}){return{ngModule:n,providers:[G,{provide:k,useValue:e}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[P.F,u.gvI]}),n})(),de=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,Ut,a.u5,a.UX,Dt.St,Vt,te,Gt.Ei,g.mY,T.V,b.lE,ce.forRoot(),me.forChild(),R.a]}),n})()}}]);