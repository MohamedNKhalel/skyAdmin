"use strict";(self.webpackChunksky_admin=self.webpackChunksky_admin||[]).push([[205],{205:(F,c,r)=>{r.r(c),r.d(c,{LoginComponent:()=>b});var m=r(177),i=r(4341),d=r(541),n=r(7705),p=r(5844),f=r(3490);function u(t,a){1&t&&(n.j41(0,"p",29),n.nrm(1,"i",30),n.EFF(2," this field is required"),n.k0s())}function C(t,a){1&t&&(n.j41(0,"p",29),n.nrm(1,"i",30),n.EFF(2," please enter valid email"),n.k0s())}function M(t,a){if(1&t&&(n.j41(0,"div",27),n.DNE(1,u,3,0,"p",28),n.DNE(2,C,3,0,"p",28),n.k0s()),2&t){const l=n.XpG();let o,e;n.R7$(1),n.Y8G("ngIf",null==(o=l.loginForm.get("email"))||null==o.errors?null:o.errors.required),n.R7$(1),n.Y8G("ngIf",null==(e=l.loginForm.get("email"))||null==e.errors?null:e.errors.email)}}function O(t,a){1&t&&(n.j41(0,"p",29),n.nrm(1,"i",30),n.EFF(2," this field is required"),n.k0s())}function P(t,a){if(1&t&&(n.j41(0,"div",27),n.DNE(1,O,3,0,"p",28),n.k0s()),2&t){const l=n.XpG();let o;n.R7$(1),n.Y8G("ngIf",null==(o=l.loginForm.get("password"))||null==o.errors?null:o.errors.required)}}function h(t,a){1&t&&(n.j41(0,"span"),n.EFF(1,"Login"),n.k0s())}function v(t,a){1&t&&n.nrm(0,"i",31)}function x(t,a){if(1&t&&(n.j41(0,"p",32),n.EFF(1),n.k0s()),2&t){const l=n.XpG();n.R7$(1),n.JRh(l.errMsg)}}let b=(()=>{class t{constructor(l,o){this._AuthService=l,this._Router=o,this.isLoading=!1,this.errMsg="",this.loginForm=new i.gE({email:new i.MJ(null,[i.k0.required,i.k0.email]),password:new i.MJ(null,[i.k0.required])})}ngOnInit(){}onLoginSuccess(){this._AuthService.startCountdown()}login(){if(this.loginForm.valid&&!this.isLoading){this.isLoading=!0;const l={email:this.loginForm.get("email")?.value,password:this.loginForm.get("password")?.value};this._AuthService.login(l).subscribe({next:o=>{this.isLoading=!1,this.errMsg="",localStorage.setItem("token",o.token);let e=this._AuthService.getUserData();localStorage.setItem("email",e.email),this._AuthService.active.next(!0),this._AuthService.saveRole(e.status),this._Router.navigate(["/",e.status.toLowerCase()]),this.onLoginSuccess()},error:o=>{console.log(o),this.isLoading=!1,this.errMsg=o.error.message}})}}static{this.\u0275fac=function(o){return new(o||t)(n.rXU(p.u),n.rXU(f.Ix))}}static{this.\u0275cmp=n.VBU({type:t,selectors:[["app-login"]],standalone:!0,features:[n.aNF],decls:35,vars:7,consts:[[1,"login","py-5"],[1,"container","all","py-4","p-lg-5"],[1,"title"],[1,"text-uppercase"],[1,"row","align-items-end","py-4"],[1,"col-md-7","order-lg-0","order-1"],[1,"form","d-flex","flex-column"],[1,"login-form","px-lg-5","px-2",3,"formGroup","ngSubmit"],[1,"mb-4"],["for","email",1,"form-label","d-block"],[1,"position-relative","my-input"],["formControlName","email","type","email","required","","id","email","placeholder","username@example.com",1,"w-100"],["emailInput",""],[1,"icon"],[1,"fa","fa-envelope","fa-xl"],["class","alert d-flex flex-column gap-2 alert-danger mt-2",4,"ngIf"],[1,"my-input"],["formControlName","password","type","password","required","","id","email","placeholder","Enter your Password",1,"w-100"],["passwordInput",""],[1,"fa","fa-lock","fa-xl"],["type","submit",1,"login-btn",3,"disabled"],[4,"ngIf"],["class","fa fa-spinner fa-spin",4,"ngIf"],["class","alert alert-danger mt-2 m-0 text-center",4,"ngIf"],[1,"col-md-5","order-lg-1","order-0"],[1,"p-lg-0","p-4"],["src","./assets/images/Logo.png","alt","",1,"w-100"],[1,"alert","d-flex","flex-column","gap-2","alert-danger","mt-2"],["class","m-0 text-capitalize",4,"ngIf"],[1,"m-0","text-capitalize"],[1,"fa-solid","fa-circle-exclamation"],[1,"fa","fa-spinner","fa-spin"],[1,"alert","alert-danger","mt-2","m-0","text-center"]],template:function(o,e){if(1&o&&(n.j41(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3),n.EFF(4,"SKYBUILDERS DASHBOARD"),n.k0s()(),n.j41(5,"div",4)(6,"div",5)(7,"div",6)(8,"form",7),n.bIt("ngSubmit",function(){return e.login()}),n.j41(9,"div",8)(10,"label",9),n.EFF(11,"Email"),n.k0s(),n.j41(12,"div",10),n.nrm(13,"input",11,12),n.j41(15,"div",13),n.nrm(16,"i",14),n.k0s()(),n.DNE(17,M,3,2,"div",15),n.k0s(),n.j41(18,"div",8)(19,"label",9),n.EFF(20,"Password"),n.k0s(),n.j41(21,"div",16),n.nrm(22,"input",17,18),n.j41(24,"div",13),n.nrm(25,"i",19),n.k0s()(),n.DNE(26,P,2,1,"div",15),n.k0s(),n.j41(27,"div")(28,"button",20),n.DNE(29,h,2,0,"span",21),n.DNE(30,v,1,0,"i",22),n.k0s()(),n.DNE(31,x,2,1,"p",23),n.k0s()()(),n.j41(32,"div",24)(33,"div",25),n.nrm(34,"img",26),n.k0s()()()()()),2&o){const _=n.sdS(14),E=n.sdS(23);let s,g;n.R7$(8),n.Y8G("formGroup",e.loginForm),n.R7$(9),n.Y8G("ngIf",(null==(s=e.loginForm.get("email"))?null:s.errors)&&((null==(s=e.loginForm.get("email"))?null:s.touched)||_.value.length>0)),n.R7$(9),n.Y8G("ngIf",(null==(g=e.loginForm.get("password"))?null:g.errors)&&((null==(g=e.loginForm.get("password"))?null:g.touched)||E.value.length>0)),n.R7$(2),n.Y8G("disabled",e.loginForm.invalid),n.R7$(1),n.Y8G("ngIf",!e.isLoading),n.R7$(1),n.Y8G("ngIf",e.isLoading),n.R7$(1),n.Y8G("ngIf",e.errMsg)}},dependencies:[m.MD,m.bT,d.G,i.qT,i.me,i.BC,i.cb,i.YS,i.j4,i.JD],styles:[".login[_ngcontent-%COMP%]{min-height:100vh;display:flex;justify-content:center;align-items:center;background-color:#000}.login[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]{border-radius:20px}.login[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center}.login[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#e1d87f;margin:0;padding:10px;border-radius:20px;display:inline-block}.login[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:17px;font-weight:500;color:#fff}.login[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .my-input[_ngcontent-%COMP%]{position:relative}.login[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .my-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:15px 20px 15px 50px;border-radius:4px;background-color:#fff;outline:none;border:none}.login[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .my-input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:absolute;top:50%;bottom:50%;display:flex;align-items:center;padding:8px;border-right:solid black 3px;height:100%;transform:translateY(-50%)}.login[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .my-input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.login[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{padding:10px 25px;background-color:#e1d87f;border:none;border-radius:4px;color:#000;font-weight:500;width:100%;border:solid 2px transparent;transition:all .5s ease}.login[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover{background-color:#000;color:#fff;border:solid 2px white}.login[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:disabled{background-color:#ffffff1a;color:gray}.login[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:disabled:hover{border:solid 2px transparent}@media screen and (max-width: 768px){.all[_ngcontent-%COMP%]{box-shadow:none!important}}"]})}}return t})()}}]);