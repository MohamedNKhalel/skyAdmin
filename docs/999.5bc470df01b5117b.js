"use strict";(self.webpackChunksky_admin=self.webpackChunksky_admin||[]).push([[999],{2999:(re,m,l)=>{l.r(m),l.d(m,{UserComponent:()=>se});var d=l(177),u=l(5351),a=l(4341),p=l(541),e=l(7705),g=l(5844),f=l(5794),_=l(6467),b=l(9631),h=l(5951);function k(n,o){1&n&&(e.j41(0,"mat-error"),e.EFF(1," Name is required "),e.k0s())}function U(n,o){if(1&n&&(e.j41(0,"div"),e.DNE(1,k,2,0,"mat-error",6),e.k0s()),2&n){const t=e.XpG();let s;e.R7$(1),e.Y8G("ngIf",null==(s=t.addUserForm.get("name"))||null==s.errors?null:s.errors.required)}}function x(n,o){1&n&&(e.j41(0,"mat-error"),e.EFF(1," Email is required "),e.k0s())}function M(n,o){1&n&&(e.j41(0,"mat-error"),e.EFF(1," Enter a valid email address "),e.k0s())}function j(n,o){if(1&n&&(e.j41(0,"div"),e.DNE(1,x,2,0,"mat-error",6),e.DNE(2,M,2,0,"mat-error",6),e.k0s()),2&n){const t=e.XpG();let s,r;e.R7$(1),e.Y8G("ngIf",null==(s=t.addUserForm.get("email"))||null==s.errors?null:s.errors.required),e.R7$(1),e.Y8G("ngIf",null==(r=t.addUserForm.get("email"))||null==r.errors?null:r.errors.email)}}function E(n,o){1&n&&(e.j41(0,"mat-error"),e.EFF(1," Password is required "),e.k0s())}function P(n,o){1&n&&(e.j41(0,"mat-error"),e.EFF(1," Minimum password length is "),e.j41(2,"strong"),e.EFF(3,"6 characters"),e.k0s()())}function I(n,o){if(1&n&&(e.j41(0,"div"),e.DNE(1,E,2,0,"mat-error",6),e.DNE(2,P,4,0,"mat-error",6),e.k0s()),2&n){const t=e.XpG(2);let s,r;e.R7$(1),e.Y8G("ngIf",null==(s=t.addUserForm.get("password"))||null==s.errors?null:s.errors.required),e.R7$(1),e.Y8G("ngIf",null==(r=t.addUserForm.get("password"))||null==r.errors?null:r.errors.minlength)}}function O(n,o){if(1&n&&(e.j41(0,"div",3)(1,"mat-form-field",4)(2,"mat-label"),e.EFF(3,"Password"),e.k0s(),e.nrm(4,"input",17),e.k0s(),e.DNE(5,I,3,2,"div",6),e.k0s()),2&n){const t=e.XpG();let s;e.R7$(5),e.Y8G("ngIf",null==(s=t.addUserForm.get("password"))?null:s.touched)}}function G(n,o){1&n&&(e.j41(0,"mat-error"),e.EFF(1," Phone is required "),e.k0s())}function R(n,o){1&n&&(e.j41(0,"mat-error"),e.EFF(1," Enter a valid phone number "),e.k0s())}function N(n,o){if(1&n&&(e.j41(0,"div"),e.DNE(1,G,2,0,"mat-error",6),e.DNE(2,R,2,0,"mat-error",6),e.k0s()),2&n){const t=e.XpG();let s,r;e.R7$(1),e.Y8G("ngIf",null==(s=t.addUserForm.get("phone"))||null==s.errors?null:s.errors.required),e.R7$(1),e.Y8G("ngIf",null==(r=t.addUserForm.get("phone"))||null==r.errors?null:r.errors.pattern)}}function T(n,o){1&n&&(e.j41(0,"mat-error"),e.EFF(1," Status is required "),e.k0s())}function y(n,o){if(1&n&&(e.j41(0,"div"),e.DNE(1,T,2,0,"mat-error",6),e.k0s()),2&n){const t=e.XpG();let s;e.R7$(1),e.Y8G("ngIf",null==(s=t.addUserForm.get("status"))||null==s.errors?null:s.errors.required)}}function w(n,o){if(1&n&&(e.j41(0,"button",18),e.EFF(1,"Create"),e.k0s()),2&n){const t=e.XpG();e.Y8G("disabled",t.addUserForm.invalid)}}function D(n,o){if(1&n){const t=e.RV6();e.j41(0,"button",19),e.bIt("click",function(){e.eBV(t);const r=e.XpG();return e.Njj(r.updateUser())}),e.EFF(1,"Update"),e.k0s()}}let C=(()=>{class n{constructor(t,s,r,i){this._MatDialogRef=t,this.data=s,this._AuthService=r,this._ToastrService=i,this.userState=!1,this.password="**************",this.addUserForm=new a.gE({name:new a.MJ(this.data?.name||null,[a.k0.required]),email:new a.MJ(this.data?.email||null,[a.k0.required,a.k0.email]),phone:new a.MJ(this.data?.phone||null,[a.k0.required,a.k0.pattern(/^(01)[0125][0-9]{8}$/)]),password:new a.MJ(null,[a.k0.required,a.k0.minLength(6)]),status:new a.MJ(this.data?.status||null,[a.k0.required])})}ngOnInit(){this.userState=this._AuthService.userState.getValue()}addUser(){let t={name:this.addUserForm.get("name")?.value,email:this.addUserForm.get("email")?.value,password:this.addUserForm.get("password")?.value,phone:this.addUserForm.get("phone")?.value,status:this.addUserForm.get("status")?.value};this._AuthService.addUser(t).subscribe({next:s=>{console.log(s),this._ToastrService.success("Account Added Successfully"),this.closeModal()},error:s=>{console.log(s)}})}updateUser(){this.data.name=this.addUserForm.get("name")?.value,this.data.email=this.addUserForm.get("email")?.value,this.data.status=this.addUserForm.get("status")?.value,this.data.phone=this.addUserForm.get("phone")?.value,this._AuthService.updateUser(this.data._id,this.data).subscribe({next:t=>{console.log(t),this._ToastrService.success("User Update Successfully"),this.closeModal()},error:t=>{console.log(t)}}),console.log(this.data)}closeModal(){this._MatDialogRef.close(!0)}static{this.\u0275fac=function(s){return new(s||n)(e.rXU(u.CP),e.rXU(u.Vh),e.rXU(g.u),e.rXU(f.tw))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-add-user"]],standalone:!0,features:[e.aNF],decls:35,vars:8,consts:[[1,"bg-white","main","p-5"],[1,"text-uppercase","fw-bold"],["action","",3,"formGroup","ngSubmit"],[1,"mb-4"],["appearance","outline",1,"w-100"],["formControlName","name","matInput","","type","text","placeholder","Enter User Name"],[4,"ngIf"],["formControlName","email","matInput","","type","email","placeholder","Enter User Email"],["class","mb-4",4,"ngIf"],["formControlName","phone","matInput","","type","text","placeholder","Enter User Phone"],["formControlName","status","aria-label","Select Role",1,"d-flex","align-items-center"],["value","admin"],["value","user"],[1,"d-flex","gap-4","justify-content-center","align-items-center"],["type","submit","class","create-btn",3,"disabled",4,"ngIf"],["type","button","class","update-btn",3,"click",4,"ngIf"],["type","button",1,"cancel-btn",3,"click"],["formControlName","password","matInput","","type","password","placeholder","Enter User password"],["type","submit",1,"create-btn",3,"disabled"],["type","button",1,"update-btn",3,"click"]],template:function(s,r){if(1&s&&(e.j41(0,"div",0)(1,"h1",1),e.EFF(2,"Add User"),e.k0s(),e.j41(3,"form",2),e.bIt("ngSubmit",function(){return r.addUser()}),e.j41(4,"div",3)(5,"mat-form-field",4)(6,"mat-label"),e.EFF(7,"Name"),e.k0s(),e.nrm(8,"input",5),e.k0s(),e.DNE(9,U,2,1,"div",6),e.k0s(),e.j41(10,"div",3)(11,"mat-form-field",4)(12,"mat-label"),e.EFF(13,"Email"),e.k0s(),e.nrm(14,"input",7),e.k0s(),e.DNE(15,j,3,2,"div",6),e.k0s(),e.DNE(16,O,6,1,"div",8),e.j41(17,"div",3)(18,"mat-form-field",4)(19,"mat-label"),e.EFF(20,"Phone"),e.k0s(),e.nrm(21,"input",9),e.k0s(),e.DNE(22,N,3,2,"div",6),e.k0s(),e.j41(23,"div",3)(24,"mat-radio-group",10)(25,"mat-radio-button",11),e.EFF(26,"Admin"),e.k0s(),e.j41(27,"mat-radio-button",12),e.EFF(28,"User"),e.k0s()(),e.DNE(29,y,2,1,"div",6),e.k0s(),e.j41(30,"div",13),e.DNE(31,w,2,1,"button",14),e.DNE(32,D,2,0,"button",15),e.j41(33,"button",16),e.bIt("click",function(){return r.closeModal()}),e.EFF(34,"Cancel"),e.k0s()()()()),2&s){let i,c,F,v;e.R7$(3),e.Y8G("formGroup",r.addUserForm),e.R7$(6),e.Y8G("ngIf",null==(i=r.addUserForm.get("name"))?null:i.touched),e.R7$(6),e.Y8G("ngIf",null==(c=r.addUserForm.get("email"))?null:c.touched),e.R7$(1),e.Y8G("ngIf",!r.userState),e.R7$(6),e.Y8G("ngIf",null==(F=r.addUserForm.get("phone"))?null:F.touched),e.R7$(7),e.Y8G("ngIf",null==(v=r.addUserForm.get("status"))?null:v.touched),e.R7$(2),e.Y8G("ngIf",!r.userState),e.R7$(1),e.Y8G("ngIf",r.userState)}},dependencies:[d.MD,d.bT,p.G,a.qT,a.me,a.BC,a.cb,a.j4,a.JD,_.rl,_.nJ,_.TL,b.fg,h.VT,h._g]})}}return n})();var S=l(8490);let $=(()=>{class n{transform(t,s){return t.filter(r=>r.name?.toLocaleLowerCase().includes(s.toLowerCase()))}static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275pipe=e.EJ8({name:"usernamesearch",type:n,pure:!0})}}return n})(),A=(()=>{class n{transform(t,s){return t.filter(r=>r.status?.toLowerCase().includes(s.toLowerCase()))}static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275pipe=e.EJ8({name:"status",type:n,pure:!0})}}return n})(),Y=(()=>{class n{transform(t,s){return t.filter(r=>r.phone.toLowerCase().includes(s.toLowerCase()))}static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275pipe=e.EJ8({name:"phone",type:n,pure:!0})}}return n})();function V(n,o){1&n&&e.nrm(0,"i",22)}function X(n,o){1&n&&e.nrm(0,"i",23)}function B(n,o){1&n&&(e.j41(0,"span",24),e.EFF(1,"Filter By"),e.k0s())}function J(n,o){1&n&&(e.j41(0,"span",24),e.EFF(1,"Reset Filter"),e.k0s())}function L(n,o){1&n&&(e.j41(0,"span"),e.EFF(1,"Name"),e.k0s())}function H(n,o){if(1&n){const t=e.RV6();e.j41(0,"input",25),e.bIt("ngModelChange",function(r){e.eBV(t);const i=e.XpG(2);return e.Njj(i.nameSearch=r)}),e.k0s()}if(2&n){const t=e.XpG(2);e.Y8G("ngModel",t.nameSearch)}}function q(n,o){1&n&&(e.j41(0,"span"),e.EFF(1,"Status"),e.k0s())}function z(n,o){if(1&n&&(e.j41(0,"option",29),e.EFF(1),e.k0s()),2&n){const t=o.$implicit;e.Y8G("value",t),e.R7$(1),e.JRh(t)}}function K(n,o){if(1&n){const t=e.RV6();e.j41(0,"select",26),e.bIt("ngModelChange",function(r){e.eBV(t);const i=e.XpG(2);return e.Njj(i.statusSearch=r)}),e.j41(1,"option",27),e.EFF(2,"Select"),e.k0s(),e.DNE(3,z,2,2,"option",28),e.k0s()}if(2&n){const t=e.XpG(2);e.Y8G("ngModel",t.statusSearch),e.R7$(3),e.Y8G("ngForOf",t.status)}}function Z(n,o){1&n&&(e.j41(0,"span"),e.EFF(1,"Phone"),e.k0s())}function Q(n,o){if(1&n){const t=e.RV6();e.j41(0,"input",30),e.bIt("ngModelChange",function(r){e.eBV(t);const i=e.XpG(2);return e.Njj(i.phoneSearch=r)}),e.k0s()}if(2&n){const t=e.XpG(2);e.Y8G("ngModel",t.phoneSearch)}}function W(n,o){if(1&n){const t=e.RV6();e.j41(0,"tr")(1,"td"),e.EFF(2),e.k0s(),e.j41(3,"td",31),e.EFF(4),e.k0s(),e.j41(5,"td",32),e.EFF(6),e.k0s(),e.j41(7,"td"),e.EFF(8),e.k0s(),e.j41(9,"td")(10,"span"),e.EFF(11),e.k0s()(),e.j41(12,"td")(13,"i",33),e.bIt("click",function(){const i=e.eBV(t).$implicit,c=e.XpG(2);return e.Njj(c.updateUser(i))}),e.k0s()(),e.j41(14,"td")(15,"i",34),e.bIt("click",function(){const i=e.eBV(t).$implicit,c=e.XpG(2);return e.Njj(c.passId(i._id))}),e.k0s()()()}if(2&n){const t=o.$implicit,s=o.index,r=o.even;e.R7$(1),e.AVh("bg-row",r),e.R7$(1),e.JRh(s+1),e.R7$(1),e.AVh("bg-row",r),e.R7$(1),e.JRh(t.name),e.R7$(1),e.AVh("bg-row",r),e.R7$(1),e.JRh(t.email),e.R7$(1),e.AVh("bg-row",r),e.R7$(1),e.JRh(t.phone),e.R7$(1),e.AVh("bg-row",r),e.R7$(1),e.HbH("user"==t.status?"user-status":"admin-status"),e.R7$(1),e.JRh(t.status),e.R7$(1),e.AVh("bg-row",r),e.R7$(2),e.AVh("bg-row",r)}}function ee(n,o){if(1&n){const t=e.RV6();e.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"ul",7)(5,"li",8),e.bIt("click",function(){e.eBV(t);const r=e.XpG();return e.Njj(r.clearSearch())}),e.DNE(6,V,1,0,"i",9),e.DNE(7,X,1,0,"i",10),e.DNE(8,B,2,0,"span",11),e.DNE(9,J,2,0,"span",11),e.k0s(),e.j41(10,"li",8),e.bIt("click",function(){e.eBV(t);const r=e.XpG();return e.Njj(r.toggleFilter("nameFlag"))}),e.DNE(11,L,2,0,"span",12),e.DNE(12,H,1,1,"input",13),e.k0s(),e.j41(13,"li",8),e.bIt("click",function(){e.eBV(t);const r=e.XpG();return e.Njj(r.toggleFilter("statusFlag"))}),e.DNE(14,q,2,0,"span",12),e.DNE(15,K,4,2,"select",14),e.k0s(),e.j41(16,"li",8),e.bIt("click",function(){e.eBV(t);const r=e.XpG();return e.Njj(r.toggleFilter("phoneFlag"))}),e.DNE(17,Z,2,0,"span",12),e.DNE(18,Q,1,1,"input",15),e.k0s()()()(),e.j41(19,"div",5)(20,"div",16)(21,"button",17),e.bIt("click",function(){e.eBV(t);const r=e.XpG();return e.Njj(r.addUser())}),e.EFF(22,"Add User"),e.k0s()()()(),e.j41(23,"div",18)(24,"table",19)(25,"thead")(26,"tr")(27,"th"),e.EFF(28,"Num"),e.k0s(),e.j41(29,"th"),e.EFF(30,"Name"),e.k0s(),e.j41(31,"th"),e.EFF(32,"Email"),e.k0s(),e.j41(33,"th"),e.EFF(34,"Phone"),e.k0s(),e.j41(35,"th",20),e.EFF(36,"Status"),e.k0s()()(),e.j41(37,"tbody"),e.DNE(38,W,16,21,"tr",21),e.nI1(39,"phone"),e.nI1(40,"status"),e.nI1(41,"usernamesearch"),e.k0s()()()()}if(2&n){const t=e.XpG();e.R7$(6),e.Y8G("ngIf",!t.nameFlag&&!t.phoneFlag&&!t.statusFlag),e.R7$(1),e.Y8G("ngIf",t.nameFlag||t.phoneFlag||t.statusFlag),e.R7$(1),e.Y8G("ngIf",!t.nameFlag&&!t.phoneFlag&&!t.statusFlag),e.R7$(1),e.Y8G("ngIf",t.nameFlag||t.phoneFlag||t.statusFlag),e.R7$(2),e.Y8G("ngIf",!t.nameFlag),e.R7$(1),e.Y8G("ngIf",t.nameFlag),e.R7$(2),e.Y8G("ngIf",!t.statusFlag),e.R7$(1),e.Y8G("ngIf",t.statusFlag),e.R7$(2),e.Y8G("ngIf",!t.phoneFlag),e.R7$(1),e.Y8G("ngIf",t.phoneFlag),e.R7$(20),e.Y8G("ngForOf",e.i5U(39,11,e.i5U(40,14,e.i5U(41,17,t.users,t.nameSearch),t.statusSearch),t.phoneSearch))}}function te(n,o){if(1&n){const t=e.RV6();e.j41(0,"div",35),e.bIt("click",function(){e.eBV(t);const r=e.XpG();return e.Njj(r.isDelClicked=!r.isDelClicked)}),e.j41(1,"div",36),e.bIt("click",function(r){e.eBV(t);const i=e.XpG();return e.Njj(i.stop(r))}),e.j41(2,"h2"),e.EFF(3,"Are you sure you want to delete this User?"),e.k0s(),e.j41(4,"p",37)(5,"strong"),e.EFF(6,"Note : "),e.k0s(),e.EFF(7,"This action cannot be undone."),e.k0s(),e.j41(8,"div",38)(9,"button",39),e.bIt("click",function(){e.eBV(t);const r=e.XpG();return e.Njj(r.isDelClicked=!r.isDelClicked)}),e.EFF(10,"Discard"),e.k0s(),e.j41(11,"button",40),e.bIt("click",function(){e.eBV(t);const r=e.XpG();return e.Njj(r.deleteUser(r.userId))}),e.EFF(12,"Delete"),e.k0s()()()()}}function ne(n,o){1&n&&(e.j41(0,"div",41)(1,"h1",42),e.EFF(2,"Empty \u{1f614}"),e.k0s(),e.j41(3,"p"),e.EFF(4,"There is no Clients yet, please be patient"),e.k0s(),e.j41(5,"div",43),e.nrm(6,"div")(7,"div")(8,"div")(9,"div")(10,"div")(11,"div"),e.k0s()())}let se=(()=>{class n{handleKeyboardEvents(t){"Escape"===t.key&&(this.isDelClicked=!1)}constructor(t,s,r,i){this._DataService=t,this._AuthService=s,this._ToastrService=r,this._MatDialog=i,this.isDelClicked=!1,this.users=[],this.userId="",this.nameFlag=!1,this.statusFlag=!1,this.phoneFlag=!1,this.nameSearch="",this.statusSearch="",this.phoneSearch="",this.status=["admin","user"]}ngOnInit(){this.getUsers()}passId(t){this.isDelClicked=!this.isDelClicked,this.userId=t}getUsers(){this._AuthService.getUsers().subscribe({next:t=>{this.users=t},error:t=>{console.log(t)}})}logValue(t){console.log(t.target.value)}deleteUser(t){this._AuthService.deleteUser(t).subscribe({next:s=>{console.log(s),this.isDelClicked=!1,this._ToastrService.success(s.message),this.getUsers()},error:s=>{console.log(s)}})}addUser(){this._AuthService.userState.next(!1),this._MatDialog.open(C,{width:"700px"}).afterClosed().subscribe(s=>{1==s&&this.getUsers(),this.getUsers(),console.log("The dialog was closed")})}updateUser(t){this._AuthService.userState.next(!0),this._MatDialog.open(C,{data:t,width:"700px"}).afterClosed().subscribe(r=>{1==r&&this.getUsers(),console.log("The dialog was closed")})}stop(t){t.stopPropagation()}toggleFilter(t){this.resetFilter(),this[t]=!this[t]}resetFilter(){this.nameFlag=!1,this.phoneFlag=!1,this.statusFlag=!1}clearSearch(){this.nameSearch="",this.phoneSearch="",this.statusSearch="",this.resetFilter()}static{this.\u0275fac=function(s){return new(s||n)(e.rXU(S.u),e.rXU(g.u),e.rXU(f.tw),e.rXU(u.bZ))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-user"]],hostBindings:function(s,r){1&s&&e.bIt("keydown",function(c){return r.handleKeyboardEvents(c)},!1,e.EBC)},standalone:!0,features:[e.Jv_([]),e.aNF],decls:4,vars:3,consts:[["class","main container-fluid mt-4",4,"ngIf","ngIfElse"],["class","position-fixed top-0 bottom-0 end-0 start-0 d-flex flex-column  justify-content-center align-items-center confirm",3,"click",4,"ngIf"],["msg",""],[1,"main","container-fluid","mt-4"],[1,"row","g-4","logic-buttons","justify-content-between","align-items-center"],[1,"col-md-6"],[1,"text-white","filter"],[1,"list-unstyled","d-flex"],[3,"click"],["class","fa-solid fa-filter",4,"ngIf"],["class","fa-solid fa-filter-circle-xmark",4,"ngIf"],["class","p-2",4,"ngIf"],[4,"ngIf"],["type","text","placeholder","Enter Name","title","name",3,"ngModel","ngModelChange",4,"ngIf"],["title","status",3,"ngModel","ngModelChange",4,"ngIf"],["type","text","placeholder","Phone Number","title","Phone",3,"ngModel","ngModelChange",4,"ngIf"],[1,"d-flex","justify-content-between","align-items-center","w-100"],["type","button",1,"d-block","ms-auto",3,"click"],[1,"overflow-auto"],[1,"users-table"],["colspan","3",1,"text-start","ps-5"],[4,"ngFor","ngForOf"],[1,"fa-solid","fa-filter"],[1,"fa-solid","fa-filter-circle-xmark"],[1,"p-2"],["type","text","placeholder","Enter Name","title","name",3,"ngModel","ngModelChange"],["title","status",3,"ngModel","ngModelChange"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","text","placeholder","Phone Number","title","Phone",3,"ngModel","ngModelChange"],[1,"text-capitalize"],[1,"text-lowercase"],[1,"fa","fa-edit","fa-xl","me-3",3,"click"],[1,"fa","fa-trash-can","fa-xl","me-3",3,"click"],[1,"position-fixed","top-0","bottom-0","end-0","start-0","d-flex","flex-column","justify-content-center","align-items-center","confirm",3,"click"],[1,"confirm-form","gap-3","w-50","text-center","p-4","d-flex","flex-column",3,"click"],[1,"text-muted"],[1,"d-flex","justify-content-center","align-items-center","gap-4","flex-wrap"],["type","button",1,"discard",3,"click"],["type","button",1,"delete",3,"click"],[1,"msg","flex-column"],[1,"text-white"],[1,"dots"]],template:function(s,r){if(1&s&&(e.DNE(0,ee,42,20,"div",0),e.DNE(1,te,13,0,"div",1),e.DNE(2,ne,12,0,"ng-template",null,2,e.C5r)),2&s){const i=e.sdS(3);e.Y8G("ngIf",r.users[0])("ngIfElse",i),e.R7$(1),e.Y8G("ngIf",r.isDelClicked)}},dependencies:[d.MD,d.Sq,d.bT,u.hM,p.G,a.xH,a.y7,a.me,a.wz,a.BC,a.vS,$,A,Y],styles:[".main[_ngcontent-%COMP%]{min-height:calc(100vh - 80px)}.main[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]{width:100%;text-align:center;border-collapse:collapse;border-radius:20px;overflow:hidden}.main[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#323d4e;color:#fff;font-weight:700}.main[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-block:10px}.main[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#273142;color:#fff;border-top:solid 2px #323D4E;transition:all .3s ease}.main[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .admin-status[_ngcontent-%COMP%]{padding:5px 20px;border-radius:20px;font-weight:500;box-shadow:0 0 15px -5px #000}.main[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .admin-status[_ngcontent-%COMP%]{background-color:#00b69b}.main[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%]{background-color:#6226ef}.main[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-block:20px!important}.main[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#323d4e;box-shadow:0 0 15px 2px #273142}.main[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .fa-trash-can[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%]{cursor:pointer;transition:all .3s ease}.main[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%]:hover{color:#dab500}.main[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .fa-trash-can[_ngcontent-%COMP%]:hover{color:red}"]})}}return n})()}}]);