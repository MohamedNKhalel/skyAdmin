"use strict";(self.webpackChunksky_admin=self.webpackChunksky_admin||[]).push([[998],{7998:($,_,s)=>{s.r(_),s.d(_,{ContactsComponent:()=>T});var l=s(177),d=s(541),t=s(7705),m=s(8490),C=s(5794),g=s(4341);let p=(()=>{class o{transform(n,c){if(!c)return n;const e=new Date(c);return e.setHours(0,0,0,0),n.filter(a=>{const r=new Date(a.date);return r.setHours(0,0,0,0),r.getTime()===e.getTime()})}static{this.\u0275fac=function(c){return new(c||o)}}static{this.\u0275pipe=t.EJ8({name:"sendDateSearch",type:o,pure:!0})}}return o})();function f(o,i){if(1&o){const n=t.RV6();t.j41(0,"div",4)(1,"div",22)(2,"div",23),t.nrm(3,"img",24),t.k0s(),t.j41(4,"div",25)(5,"h2"),t.EFF(6),t.k0s(),t.j41(7,"span"),t.EFF(8),t.k0s()(),t.j41(9,"div",26)(10,"button",27),t.bIt("click",function(){const a=t.eBV(n).$implicit,r=t.XpG(2);return t.Njj(r.openLayer(a))}),t.EFF(11,"Show Message"),t.k0s()(),t.j41(12,"i",28),t.bIt("click",function(){const a=t.eBV(n).$implicit,r=t.XpG(2);return t.Njj(r.passId(a._id))}),t.k0s()()()}if(2&o){const n=i.$implicit;t.R7$(6),t.JRh(n.name),t.R7$(2),t.JRh(n.email)}}function M(o,i){if(1&o&&(t.j41(0,"div",20),t.DNE(1,f,13,2,"div",21),t.k0s()),2&o){const n=t.XpG();t.R7$(1),t.Y8G("ngForOf",n.contacts)}}function O(o,i){1&o&&t.nrm(0,"i",29)}function P(o,i){1&o&&t.nrm(0,"i",30)}function h(o,i){1&o&&(t.j41(0,"span"),t.EFF(1,"Filter By"),t.k0s())}function u(o,i){1&o&&(t.j41(0,"span"),t.EFF(1,"reset Filter"),t.k0s())}function k(o,i){1&o&&(t.j41(0,"span"),t.EFF(1,"Sending Date"),t.k0s())}function b(o,i){if(1&o){const n=t.RV6();t.j41(0,"input",31),t.bIt("ngModelChange",function(e){t.eBV(n);const a=t.XpG();return t.Njj(a.sendDate=e)}),t.k0s()}if(2&o){const n=t.XpG();t.Y8G("ngModel",n.sendDate)}}function x(o,i){if(1&o){const n=t.RV6();t.j41(0,"i",32),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.isEdit=!e.isEdit)}),t.k0s()}}function y(o,i){if(1&o){const n=t.RV6();t.j41(0,"i",33),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.isEdit=!e.isEdit)}),t.k0s()}}function v(o,i){1&o&&(t.j41(0,"th"),t.EFF(1,"Details"),t.k0s())}function j(o,i){1&o&&(t.j41(0,"th"),t.EFF(1,"Delete"),t.k0s())}function F(o,i){if(1&o){const n=t.RV6();t.j41(0,"td",38),t.bIt("click",function(){t.eBV(n);const e=t.XpG().$implicit,a=t.XpG(2);return t.Njj(a.openLayer(e))}),t.nrm(1,"i",39),t.k0s()}if(2&o){const n=t.XpG().even;t.AVh("bg-row",n)}}function E(o,i){if(1&o){const n=t.RV6();t.j41(0,"td",38),t.bIt("click",function(){t.eBV(n);const e=t.XpG().$implicit,a=t.XpG(2);return t.Njj(a.passId(e._id))}),t.nrm(1,"i",40),t.k0s()}if(2&o){const n=t.XpG().even;t.AVh("bg-row",n)}}function D(o,i){if(1&o&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.nrm(4,"img",36),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td"),t.EFF(8),t.k0s(),t.j41(9,"td"),t.EFF(10),t.k0s(),t.j41(11,"td"),t.EFF(12),t.nI1(13,"date"),t.k0s(),t.DNE(14,F,2,2,"td",37),t.DNE(15,E,2,2,"td",37),t.k0s()),2&o){const n=i.$implicit,c=i.index,e=i.even,a=t.XpG(2);t.R7$(1),t.AVh("bg-row",e),t.R7$(1),t.JRh(c+1),t.R7$(1),t.AVh("bg-row",e),t.R7$(2),t.AVh("bg-row",e),t.R7$(1),t.JRh(n.name),t.R7$(1),t.AVh("bg-row",e),t.R7$(1),t.JRh(n.email),t.R7$(1),t.AVh("bg-row",e),t.R7$(1),t.JRh(n.phone),t.R7$(1),t.AVh("bg-row",e),t.R7$(1),t.JRh(t.i5U(13,19,n.date,"dd/MMMM/yyyy")),t.R7$(2),t.Y8G("ngIf",!a.isEdit),t.R7$(1),t.Y8G("ngIf",a.isEdit)}}function I(o,i){if(1&o&&(t.j41(0,"table",34)(1,"thead")(2,"tr")(3,"th"),t.EFF(4,"Num"),t.k0s(),t.j41(5,"th"),t.EFF(6,"Avatar"),t.k0s(),t.j41(7,"th"),t.EFF(8,"Sender Name"),t.k0s(),t.j41(9,"th"),t.EFF(10,"Sender Email"),t.k0s(),t.j41(11,"th"),t.EFF(12,"Sender Phone"),t.k0s(),t.j41(13,"th"),t.EFF(14,"Sending Date"),t.k0s(),t.DNE(15,v,2,0,"th",10),t.DNE(16,j,2,0,"th",10),t.k0s()(),t.j41(17,"tbody"),t.DNE(18,D,16,22,"tr",35),t.nI1(19,"sendDateSearch"),t.k0s()()),2&o){const n=t.XpG();t.R7$(15),t.Y8G("ngIf",!n.isEdit),t.R7$(1),t.Y8G("ngIf",n.isEdit),t.R7$(2),t.Y8G("ngForOf",t.i5U(19,3,n.contacts,n.sendDate))}}function w(o,i){if(1&o){const n=t.RV6();t.j41(0,"div",41),t.bIt("keydown",function(e){t.eBV(n);const a=t.XpG();return t.Njj(a.handleKeyboardEvent(e))})("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.isClicked=!e.isClicked)}),t.j41(1,"div",42),t.bIt("click",function(e){t.eBV(n);const a=t.XpG();return t.Njj(a.stop(e))}),t.j41(2,"div")(3,"h2",43),t.EFF(4),t.nrm(5,"i",44),t.k0s()(),t.j41(6,"div",45)(7,"h3"),t.nrm(8,"i",46),t.EFF(9),t.j41(10,"a",47),t.nrm(11,"i",48),t.k0s()(),t.j41(12,"h3"),t.nrm(13,"i",49),t.EFF(14),t.k0s()(),t.j41(15,"div",50)(16,"div",51)(17,"h4",52),t.EFF(18,"Message "),t.nrm(19,"i",53),t.k0s(),t.j41(20,"span"),t.nrm(21,"i",54),t.EFF(22),t.nI1(23,"date"),t.k0s()(),t.j41(24,"div",55)(25,"p"),t.EFF(26),t.k0s()()(),t.j41(27,"i",56),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.isClicked=!e.isClicked)}),t.k0s()()()}if(2&o){const n=t.XpG();t.R7$(4),t.JRh(n.contact.name),t.R7$(5),t.SpI(" ",n.contact.email," "),t.R7$(1),t.Y8G("href","https://mail.google.com/mail/?view=cm&fs=1&to="+n.contact.email+"&su=Skybuilders Suport&body=Dear "+n.contact.name,t.B4B),t.R7$(4),t.SpI(" ",n.contact.phone,""),t.R7$(8),t.SpI(" ",t.i5U(23,6,n.contact.date,"EEEE, MMMM d, y, h:mm:ss a zzzz"),""),t.R7$(4),t.JRh(n.contact.description)}}function R(o,i){if(1&o){const n=t.RV6();t.j41(0,"div",57),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.isDelClicked=!e.isDelClicked)}),t.j41(1,"div",58),t.bIt("click",function(e){t.eBV(n);const a=t.XpG();return t.Njj(a.stop(e))}),t.j41(2,"h2"),t.EFF(3,"Are you sure you want to delete this item?"),t.k0s(),t.j41(4,"p",59)(5,"strong"),t.EFF(6,"Note : "),t.k0s(),t.EFF(7,"This action cannot be undone."),t.k0s(),t.j41(8,"div",60)(9,"button",61),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.isDelClicked=!e.isDelClicked)}),t.EFF(10,"Discard"),t.k0s(),t.j41(11,"button",62),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.deleteContact(e.contactId))}),t.EFF(12,"Delete"),t.k0s()()()()}}function G(o,i){1&o&&(t.j41(0,"div",63)(1,"h1",64),t.EFF(2,"Empty \u{1f614}"),t.k0s(),t.j41(3,"p"),t.EFF(4,"There is no contacts yet, please be patient"),t.k0s(),t.j41(5,"div",65),t.nrm(6,"div")(7,"div")(8,"div")(9,"div")(10,"div")(11,"div"),t.k0s()())}let T=(()=>{class o{handleKeyboardEvent(n){"Escape"===n.key&&(this.isClicked=!1,this.isDelClicked=!1)}ngOnInit(){this.getContacts()}constructor(n,c){this._DataService=n,this._ToastrService=c,this.isEdit=!1,this.contacts=[],this.isClicked=!1,this.isDelClicked=!1,this.successFlag=!1,this.contactId="",this.date=(new Date).toISOString(),this.sendDate="",this.sendDateFlag=!1}openLayer(n){this.isClicked=!this.isClicked,this.contact=n}getContacts(){this._DataService.getContacts().subscribe({next:n=>{this.contacts=n},error:n=>{console.log(n)}})}stop(n){n.stopPropagation()}passId(n){this.isDelClicked=!this.isDelClicked,this.contactId=n}resetFilter(){this.sendDateFlag=!1}clearSearch(){this.sendDate="",this.resetFilter()}toggleFilter(n){this.resetFilter(),this[n]=!this[n]}deleteContact(n){this._DataService.deleteContact(n).subscribe({next:c=>{this.isDelClicked=!1,this._ToastrService.success(c.message),this.getContacts()},error:c=>{console.log(c),this._ToastrService.error(c.error.message)}})}static{this.\u0275fac=function(c){return new(c||o)(t.rXU(m.u),t.rXU(C.tw))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-contacts"]],hostBindings:function(c,e){1&c&&t.bIt("keydown",function(r){return e.handleKeyboardEvent(r)},!1,t.EBC)},standalone:!0,features:[t.Jv_([]),t.aNF],decls:24,vars:14,consts:[[1,"container-fluid","py-5","main","d-none"],["class","row g-4",4,"ngIf","ngIfElse"],[1,"container-fluid","py-4","main-content"],[1,"row","g-4","justify-content-between","align-items-center"],[1,"col-md-4"],[1,"filter"],[1,"list-unstyled","text-white"],[3,"click"],["class","fa-solid fa-filter",4,"ngIf"],["class","fa-solid fa-filter-circle-xmark",4,"ngIf"],[4,"ngIf"],["type","date","title","send date",3,"ngModel","ngModelChange",4,"ngIf"],[1,"col-md-8"],[1,"text-end"],["class","fa fa-edit  fa-2x",3,"click",4,"ngIf"],["class","fa fa-x fa-2x",3,"click",4,"ngIf"],["class","my-table m-auto",4,"ngIf","ngIfElse"],["class","position-fixed top-0 bottom-0 start-0 end-0 message-layer d-flex justify-content-center align-items-center",3,"keydown","click",4,"ngIf"],["class","position-fixed top-0 bottom-0 end-0 start-0 d-flex flex-column  justify-content-center align-items-center confirm",3,"click",4,"ngIf"],["msg",""],[1,"row","g-4"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"contact"],[1,"contact-head"],["src","../../../assets/images/user.png","alt",""],[1,"contact-body"],[1,"contact-footer"],["type","button",3,"click"],[1,"fa-regular","fa-trash-can","delete-contact",3,"click"],[1,"fa-solid","fa-filter"],[1,"fa-solid","fa-filter-circle-xmark"],["type","date","title","send date",3,"ngModel","ngModelChange"],[1,"fa","fa-edit","fa-2x",3,"click"],[1,"fa","fa-x","fa-2x",3,"click"],[1,"my-table","m-auto"],[4,"ngFor","ngForOf"],["src","./assets/images/user.png","alt",""],["class","show-details",3,"bg-row","click",4,"ngIf"],[1,"show-details",3,"click"],[1,"fa","fa-eye"],[1,"fa","fa-trash-can"],[1,"position-fixed","top-0","bottom-0","start-0","end-0","message-layer","d-flex","justify-content-center","align-items-center",3,"keydown","click"],[1,"message","d-flex","flex-column","gap-4",3,"click"],[1,"sender","text-capitalize"],[1,"fa","fa-user-alt"],[1,"d-flex","flex-wrap","gap-3","justify-content-between","align-items-center","message-title"],[1,"fa","fa-envelope","pt-1"],["target","_blank","title","reply",1,"text-decoration-none","text-white-50",3,"href"],[1,"fa","fa-reply"],[1,"fa","fa-phone"],[1,"main-message"],[1,"d-flex","flex-wrap","gap-2","justify-content-between","align-items-center","content-title"],[1,"d-flex","align-items-center","gap-2"],[1,"fa","fa-message","pt-1"],[1,"fa-regular","fa-calendar-days"],[1,"content","mt-2"],[1,"fa-solid","fa-xmark","close-layer",3,"click"],[1,"position-fixed","top-0","bottom-0","end-0","start-0","d-flex","flex-column","justify-content-center","align-items-center","confirm",3,"click"],[1,"confirm-form","gap-3","w-50","text-center","p-4","d-flex","flex-column",3,"click"],[1,"text-muted"],[1,"d-flex","justify-content-center","align-items-center","gap-4","flex-wrap"],["type","button",1,"discard",3,"click"],["type","button",1,"delete",3,"click"],[1,"msg","flex-column"],[1,"text-white"],[1,"dots"]],template:function(c,e){if(1&c&&(t.j41(0,"div",0),t.DNE(1,M,2,1,"div",1),t.k0s(),t.j41(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"ul",6)(7,"li",7),t.bIt("click",function(){return e.clearSearch()}),t.DNE(8,O,1,0,"i",8),t.DNE(9,P,1,0,"i",9),t.DNE(10,h,2,0,"span",10),t.DNE(11,u,2,0,"span",10),t.k0s(),t.j41(12,"li",7),t.bIt("click",function(){return e.toggleFilter("sendDateFlag")}),t.DNE(13,k,2,0,"span",10),t.DNE(14,b,1,1,"input",11),t.k0s()()()(),t.j41(15,"div",12)(16,"div",13),t.DNE(17,x,1,0,"i",14),t.DNE(18,y,1,0,"i",15),t.k0s()()(),t.DNE(19,I,20,6,"table",16),t.k0s(),t.DNE(20,w,28,9,"div",17),t.DNE(21,R,13,0,"div",18),t.DNE(22,G,12,0,"ng-template",null,19,t.C5r)),2&c){const a=t.sdS(23);t.R7$(1),t.Y8G("ngIf",e.contacts[0])("ngIfElse",a),t.R7$(7),t.Y8G("ngIf",!e.sendDateFlag),t.R7$(1),t.Y8G("ngIf",e.sendDateFlag),t.R7$(1),t.Y8G("ngIf",!e.sendDateFlag),t.R7$(1),t.Y8G("ngIf",e.sendDateFlag),t.R7$(2),t.Y8G("ngIf",!e.sendDateFlag),t.R7$(1),t.Y8G("ngIf",e.sendDateFlag),t.R7$(3),t.Y8G("ngIf",!e.isEdit),t.R7$(1),t.Y8G("ngIf",e.isEdit),t.R7$(1),t.Y8G("ngIf",e.contacts[0])("ngIfElse",a),t.R7$(1),t.Y8G("ngIf",e.isClicked),t.R7$(1),t.Y8G("ngIf",e.isDelClicked)}},dependencies:[l.MD,l.Sq,l.bT,l.vh,d.G,g.me,g.BC,g.vS,p],styles:[".main[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{background-color:#000;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:20px;gap:15px;border-radius:50px;color:#fff!important;position:relative}.main[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:50%;margin:auto}.main[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-body[_ngcontent-%COMP%]{text-align:center;font-size:16px}.main[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.8em;text-transform:capitalize}.main[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1em;color:#ffffffb3}.main[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--bg-color);padding:15px 25px;border:none;color:#fff;border-radius:30px;transition:all .3s ease-in-out}.main[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--forth-color)}.main[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .delete-contact[_ngcontent-%COMP%]{position:absolute;top:35px;font-size:30px;right:25px;cursor:pointer;transition:animation .5s ease,color .2s}.main[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .delete-contact[_ngcontent-%COMP%]:hover{animation:_ngcontent-%COMP%_shake .5s infinite alternate;color:#cc1f00}.main-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:pointer;color:#fff;transition:all .4s ease}.main-content[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%]:hover{color:#dab500}.main-content[_ngcontent-%COMP%]   .fa-x[_ngcontent-%COMP%]:hover{color:#ffffff80}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]{width:100%;text-align:center;border-collapse:collapse;border-radius:20px;overflow:hidden}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#323d4e;color:#fff;font-weight:700}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-block:15px}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#273142;color:#fff;border-top:solid 2px #323D4E;transition:all .3s ease}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-block:20px!important}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .show-details[_ngcontent-%COMP%]{background-color:#0006;cursor:pointer}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .show-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:pointer;font-size:25px;transition:all .2s ease}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .show-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#323d4e;box-shadow:0 0 15px 2px #273142}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .fa-trash-can[_ngcontent-%COMP%], .main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%]{cursor:pointer;transition:all .3s ease}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%]:hover{color:#dab500}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .fa-trash-can[_ngcontent-%COMP%]:hover{color:red}@keyframes _ngcontent-%COMP%_shake{0%{transform:rotate(-45deg)}to{transform:rotate(45deg)}}.message-layer[_ngcontent-%COMP%]{background-color:#000c}.message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#d9d9d9;width:50%;padding:40px;border-radius:40px;position:relative}.message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0}.message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]{font-size:25px;color:#000000e6;font-weight:700;display:flex;align-items:center;gap:10px;text-decoration:underline}.message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-title[_ngcontent-%COMP%]{background-color:var(--bg-color);color:#fff;padding:10px 20px;border-radius:20px;box-shadow:0 0 40px -3px #000c}.message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:600;display:flex;align-items:center;gap:10px}.message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .main-message[_ngcontent-%COMP%]{box-shadow:0 0 40px -3px #000c;background-color:#fff;padding:20px;border-radius:30px}.message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .main-message[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]{border-bottom:solid 2px rgba(0,0,0,.6);padding-bottom:5px}.message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .main-message[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .main-message[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .main-message[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000000b3;font-weight:700}.message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .main-message[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:150px;overflow:auto}.message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .main-message[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:400}.message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .main-message[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none!important}.message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .close-layer[_ngcontent-%COMP%]{position:absolute;right:30px;font-size:30px;top:20px;color:#00000080;cursor:pointer;transition:all .2s ease}.message-layer[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .close-layer[_ngcontent-%COMP%]:hover{color:#000}@media screen and (max-width: 768px){.message[_ngcontent-%COMP%]{width:90%!important}.main-content[_ngcontent-%COMP%]{overflow:auto}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{font-size:8px}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .show-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px!important}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px!important}.main-content[_ngcontent-%COMP%]   .my-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{font-size:7px!important}}"]})}}return o})()}}]);