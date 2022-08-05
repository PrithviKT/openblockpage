"use strict";(self.webpackChunkopen_health=self.webpackChunkopen_health||[]).push([[660],{1660:(it,C,i)=>{i.r(C),i.d(C,{OpenHealthcareModule:()=>ot});var c=i(8583),p=i(4655),t=i(7716),T=i(5917),F=i(2340),b=i(1841);let y=(()=>{class n{constructor(e){this.http=e,this.baseUrl=F.N.apiEndpoint,this.signInUrl=this.baseUrl+"/signInUser"}isLoggedIn(){return(0,T.of)(!0)}login(e,o){return this.http.post(this.signInUrl,{username:e,password:o})}logout(){}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(b.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var g=i(5618),f=i(3738),l=i(3679),Z=i(8295),O=i(9983),M=i(1095);const x=function(){return{standalone:!0}};let I=(()=>{class n{constructor(e,o){this.router=e,this.loginService=o,this.username="",this.password=""}login(){this.loginService.login(this.username,this.password).subscribe(e=>{this.router.navigate(["/app"])},e=>{alert("Invalid username/passwor")})}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:17,vars:6,consts:[["fxLayout","row","fxLayoutAlign","center",1,"login-wrapper"],[1,"box"],[1,"app-form"],["appearance","outline",1,"app-full-width"],["matInput","",3,"ngModel","ngModelOptions","ngModelChange"],["matInput","","type","password",3,"ngModel","ngModelOptions","ngModelChange"],["mat-stroked-button","",1,"btn-block",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-card",1),t.TgZ(2,"mat-card-header"),t.TgZ(3,"mat-card-title"),t._uU(4,"Sign in"),t.qZA(),t.qZA(),t.TgZ(5,"form",2),t.TgZ(6,"mat-card-content"),t.TgZ(7,"mat-form-field",3),t.TgZ(8,"mat-label"),t._uU(9,"Username"),t.qZA(),t.TgZ(10,"input",4),t.NdJ("ngModelChange",function(r){return o.username=r}),t.qZA(),t.qZA(),t.TgZ(11,"mat-form-field",3),t.TgZ(12,"mat-label"),t._uU(13,"Password"),t.qZA(),t.TgZ(14,"input",5),t.NdJ("ngModelChange",function(r){return o.password=r}),t.qZA(),t.qZA(),t.TgZ(15,"button",6),t.NdJ("click",function(){return o.login()}),t._uU(16,"Log in"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(10),t.Q6J("ngModel",o.username)("ngModelOptions",t.DdM(4,x)),t.xp6(4),t.Q6J("ngModel",o.password)("ngModelOptions",t.DdM(5,x)))},directives:[g.xw,g.Wh,f.a8,f.dk,f.n5,l._Y,l.JL,l.F,f.dn,Z.KE,Z.hX,O.Nt,l.Fj,l.JJ,l.On,M.lW],styles:[".box[_ngcontent-%COMP%]{margin-top:5%}.login-logo[_ngcontent-%COMP%]{height:60px;width:60px}.login-wrapper[_ngcontent-%COMP%]   .app-form[_ngcontent-%COMP%]{min-width:100%;max-width:100vw;width:100%;margin-top:5%}.login-wrapper[_ngcontent-%COMP%]   .app-form[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;height:35vh;width:20vw}.login-wrapper[_ngcontent-%COMP%]   .app-full-width[_ngcontent-%COMP%], .login-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]{width:100%}.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{text-align:center;width:100%;display:block;font-weight:700}.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:30px;margin:0}.login-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{padding:4%}.login-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.8375em 0}"]}),n})();var D=i(2759),J=i(4395),d=i(8002),k=i(7519),N=i(9761),B=i(8307),A=i(3017),H=i(2522),_=i(8030),L=i(6627),v=i(5435),w=i(9773),u=(()=>{return(n=u||(u={})).DARK="DARK",n.LIGHT="LIGHT",u;var n})();function z(n,a){if(1&n&&(t.TgZ(0,"mat-icon"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.icon)}}const Q=function(n){return{"light-text":n}};function S(n,a){if(1&n&&(t.TgZ(0,"li",5),t.YNc(1,z,2,1,"mat-icon",6),t.TgZ(2,"span",7),t._uU(3),t.qZA(),t.TgZ(4,"mat-icon",8),t._uU(5,"chevron_right"),t.qZA(),t.qZA()),2&n){const e=a.$implicit,o=t.oxw(2);t.Q6J("ngClass",t.VKq(4,Q,o.isLightTheme))("routerLink",e.routePath),t.xp6(1),t.Q6J("ngIf",e.icon),t.xp6(2),t.Oqu(e.label)}}function E(n,a){if(1&n&&(t.TgZ(0,"li",9),t.TgZ(1,"span",7),t._uU(2),t.qZA(),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Oqu(e.breadcrumbData.title)}}function Y(n,a){if(1&n&&(t.TgZ(0,"div",1),t.TgZ(1,"ul",2),t.YNc(2,S,6,6,"li",3),t.YNc(3,E,3,1,"li",4),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",null==e.breadcrumbData?null:e.breadcrumbData.breadcrumb)("ngForTrackBy",e.trackByIndex),t.xp6(1),t.Q6J("ngIf",e.breadcrumbData.title)}}let G=(()=>{class n{constructor(e,o){this.route=e,this.router=o,this.BreadcrumbThemes=u,this.isLightTheme=!1,this.METRICS={EVENT:"click",ACTION:"InternalLink",CATEGORY:"Breadcrumb"},this.breadcrumbData=null}trackByIndex(e,o){return e}assignData(e){var o;this.breadcrumbData=e,this.isLightTheme=(null===(o=this.breadcrumbData)||void 0===o?void 0:o.breadcrumbTheme)===u.LIGHT}ngOnInit(){(0,T.of)(this.route).pipe((0,d.U)(()=>this.route),(0,d.U)(o=>{for(;o.firstChild;)o=o.firstChild;return o}),(0,v.h)(o=>"primary"===(null==o?void 0:o.outlet)),(0,w.zg)(o=>o.data)).subscribe(o=>{this.assignData(o)}),this.router.events.pipe((0,v.h)(o=>o instanceof p.m2),(0,d.U)(()=>this.route),(0,d.U)(o=>{for(;o.firstChild;)o=o.firstChild;return o}),(0,v.h)(o=>"primary"===(null==o?void 0:o.outlet)),(0,w.zg)(o=>o.data)).subscribe(o=>{this.assignData(o)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.gz),t.Y36(p.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-breadcrumb"]],decls:1,vars:1,consts:[["class","uhc-breadcrumb-wrapper",4,"ngIf"],[1,"uhc-breadcrumb-wrapper"],[1,"uhc-breadcrumb"],["class","item",3,"ngClass","routerLink",4,"ngFor","ngForOf","ngForTrackBy"],["class","item active",4,"ngIf"],[1,"item",3,"ngClass","routerLink"],[4,"ngIf"],[1,"label"],[1,"seperator"],[1,"item","active"]],template:function(e,o){1&e&&t.YNc(0,Y,4,3,"div",0),2&e&&t.Q6J("ngIf",o.breadcrumbData)},directives:[c.O5,c.sg,c.mk,_.oO,p.rH,L.Hw],styles:[".uhc-breadcrumb[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-content:center;align-items:center;margin:0;padding:1% 2%;background-color:transparent;list-style:none;z-index:1000}.item[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-content:center;align-items:center;color:#a5c3fc;font-size:1em;cursor:pointer;font-weight:700}.item.light-text[_ngcontent-%COMP%]{color:#fff}.item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:inline-block;margin-top:5px}.item[_ngcontent-%COMP%]   .seperator[_ngcontent-%COMP%]{font-size:1em;display:flex;justify-content:center;align-items:center}.item[_ngcontent-%COMP%]:hover{color:#002677}.item.active[_ngcontent-%COMP%]{color:#3c3c3c;font-weight:500;cursor:default;pointer-events:none}@media only screen and (max-width: 1600px){.item[_ngcontent-%COMP%]{font-size:.8em}.item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin-top:0}}"]}),n})();const R=function(){return["/app/patient"]},P=function(){return{exact:!1}},X=function(){return["/app/appointments"]};let W=(()=>{class n{constructor(){this.isMobileView=!1,this.browserWidth=1e3}recomputeDevice(e){this.isMobileView=e<=600}ngOnInit(){this._resize$=(0,D.R)(window,"resize").pipe((0,J.b)(200),(0,d.U)(()=>window.innerWidth),(0,k.x)(),(0,N.O)(window.innerWidth),(0,B.b)(e=>this.recomputeDevice(e))),this._resize$.subscribe()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-landingpage"]],decls:22,vars:9,consts:[[2,"height","100vh"],["fxFlexFill","",1,"app-container"],["fxLayout","column",3,"mode"],["sidenav",""],["fxLayout","column",1,"side-menu-holder"],[1,"logo"],["src","assets/openboxblue.png","alt","logo"],["href","#","mat-button","","routerLinkActive","header-active",3,"routerLink","routerLinkActiveOptions","click"],["fxFlexFill",""],["fxShow","true"],["mat-button","",3,"click"],[1,"content"]],template:function(e,o){if(1&e){const s=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"mat-sidenav-container",1),t.TgZ(2,"mat-sidenav",2,3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"a",7),t.NdJ("click",function(){return t.CHM(s),t.MAs(3).toggle()}),t._uU(8,"My Profile"),t.qZA(),t.TgZ(9,"a",7),t.NdJ("click",function(){return t.CHM(s),t.MAs(3).toggle()}),t._uU(10,"My Appointments"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"mat-sidenav-content",8),t.TgZ(12,"mat-toolbar"),t.TgZ(13,"div",9),t.TgZ(14,"button",10),t.NdJ("click",function(){return t.CHM(s),t.MAs(3).toggle()}),t.TgZ(15,"mat-icon"),t._uU(16,"menu"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"span"),t._uU(18,"One Healthcare Platform"),t.qZA(),t.qZA(),t.TgZ(19,"div",11),t._UZ(20,"app-breadcrumb"),t._UZ(21,"router-outlet"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}2&e&&(t.xp6(2),t.Q6J("mode",o.isMobileView?"over":"side"),t.xp6(5),t.Q6J("routerLink",t.DdM(5,R))("routerLinkActiveOptions",t.DdM(6,P)),t.xp6(2),t.Q6J("routerLink",t.DdM(7,X))("routerLinkActiveOptions",t.DdM(8,P)))},directives:[A.TM,g.s9,A.JX,g.xw,M.zs,p.yS,p.Od,A.Rh,H.Ye,_.b8,M.lW,L.Hw,G,p.lC],styles:["mat-sidenav[_ngcontent-%COMP%]{width:15vw}mat-toolbar[_ngcontent-%COMP%]{background-color:#002677;color:#fff}a.mat-button[_ngcontent-%COMP%]{width:100%}.side-menu-holder[_ngcontent-%COMP%]{display:flex!important;flex-direction:column!important;padding:0;justify-content:center!important;align-content:center;align-items:center}.logo[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:2%}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;width:100px}@media only screen and (max-width: 600px){mat-sidenav[_ngcontent-%COMP%]{width:35vw}.side-menu-holder[_ngcontent-%COMP%]{padding:10% 0}}"]}),n})();var j=i(7574);let K=(()=>{class n{constructor(e,o){this.loginService=e,this.router=o}canActivate(e,o){return new j.y(s=>{this.loginService.isLoggedIn().subscribe(r=>{!1===r&&this.router.navigate(["app/login"]),s.next(!0),s.complete()},r=>{this.router.navigate(["app/login"]),s.next(!1),s.complete()})})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(y),t.LFG(p.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),V=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-patient-details"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"patient-details works!"),t.qZA())},styles:[""]}),n})();var h=i(171);function $(n,a){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.Oqu(e.drug)}}const m=function(){return{standalone:!0}},tt=[{path:"",component:W,canActivate:[K],children:[{path:"patient",component:V,data:{title:"Patient Details",breadcrumb:[{icon:"",label:"Home",routePath:"/"}]}},{path:"appointments",component:(()=>{class n{constructor(e){this.formBuilder=e,this.prescriptionList=[],this.initialform={drug:"",dose:"",days:"",time:"",foodPeriod:"",notes:""},this.prescribeForm=this.initialform}addDrug(){this.prescriptionList.push(this.prescribeForm),this.prescribeForm=this.initialform}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-my-appointment"]],decls:70,vars:19,consts:[[1,"form-wrapper"],["hideToggle",""],[1,"content"],["fxLayout","row","fxLayout.sm","column","fxLayout.xs","column","fxLayoutGap","10px"],["src","/assets/appointment/image 2.png","alt","img"],["src","/assets/appointment/image 3.png","alt","img"],["src","/assets/appointment/image 4.png","alt","img"],["flxLayout","column"],[4,"ngFor","ngForOf"],["mat-stroked-button","",3,"click"],["fxLayout","row",1,"prescription"],["fxLayout","row","fxLayout.md","column","fxLayout.sm","column","fxLayout.xs","column","fxLayoutGap","10px",1,"pres-row"],[1,"pres-cell"],["appearance","outline",1,"app-full-width"],["matInput","",3,"ngModel","ngModelOptions","ngModelChange"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h3"),t._uU(2,"Jhon Doe appoinmtne Patient Record"),t.qZA(),t.TgZ(3,"mat-accordion"),t.TgZ(4,"mat-expansion-panel",1),t.TgZ(5,"mat-expansion-panel-header"),t.TgZ(6,"mat-panel-title"),t._uU(7," Patient Id: 123456 "),t.qZA(),t.TgZ(8,"mat-panel-description"),t.TgZ(9,"b"),t._uU(10,"Patient Name:"),t.qZA(),t._uU(11," Jhon Doe \xa0\xa0 "),t.TgZ(12,"b"),t._uU(13,"Age:"),t.qZA(),t._uU(14," 42 \xa0\xa0 "),t.TgZ(15,"b"),t._uU(16,"Gender:"),t.qZA(),t._uU(17," Male "),t.qZA(),t.qZA(),t.TgZ(18,"div",2),t.TgZ(19,"h5"),t._uU(20,"Doctor's Notes - 06 Aug 2022"),t.qZA(),t.TgZ(21,"p"),t._uU(22," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "),t.qZA(),t.TgZ(23,"p"),t._uU(24," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "),t.qZA(),t.TgZ(25,"h5"),t._uU(26,"Patient Report - 06 Aug 2022"),t.qZA(),t.TgZ(27,"div",3),t._UZ(28,"img",4),t._UZ(29,"img",5),t._UZ(30,"img",6),t.qZA(),t.TgZ(31,"h5"),t._uU(32,"Prescription - 06 Aug 2022"),t.qZA(),t.TgZ(33,"ul",7),t.YNc(34,$,2,1,"li",8),t.qZA(),t.TgZ(35,"button",9),t.NdJ("click",function(){return o.addDrug()}),t._uU(36,"Prescribe Drug"),t.qZA(),t._UZ(37,"br"),t.TgZ(38,"div",10),t.TgZ(39,"div",11),t.TgZ(40,"div",12),t.TgZ(41,"mat-form-field",13),t.TgZ(42,"mat-label"),t._uU(43,"Drug Name"),t.qZA(),t.TgZ(44,"input",14),t.NdJ("ngModelChange",function(r){return o.prescribeForm.drug=r}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(45,"div",12),t.TgZ(46,"mat-form-field",13),t.TgZ(47,"mat-label"),t._uU(48,"Dose"),t.qZA(),t.TgZ(49,"input",14),t.NdJ("ngModelChange",function(r){return o.prescribeForm.dose=r}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"div",12),t.TgZ(51,"mat-form-field",13),t.TgZ(52,"mat-label"),t._uU(53,"Days"),t.qZA(),t.TgZ(54,"input",14),t.NdJ("ngModelChange",function(r){return o.prescribeForm.days=r}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(55,"div",12),t.TgZ(56,"mat-form-field",13),t.TgZ(57,"mat-label"),t._uU(58,"Time"),t.qZA(),t.TgZ(59,"input",14),t.NdJ("ngModelChange",function(r){return o.prescribeForm.time=r}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(60,"div",12),t.TgZ(61,"mat-form-field",13),t.TgZ(62,"mat-label"),t._uU(63,"Before/After Food"),t.qZA(),t.TgZ(64,"input",14),t.NdJ("ngModelChange",function(r){return o.prescribeForm.foodPeriod=r}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(65,"div",12),t.TgZ(66,"mat-form-field",13),t.TgZ(67,"mat-label"),t._uU(68,"How to take"),t.qZA(),t.TgZ(69,"input",14),t.NdJ("ngModelChange",function(r){return o.prescribeForm.notes=r}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(34),t.Q6J("ngForOf",o.prescriptionList),t.xp6(10),t.Q6J("ngModel",o.prescribeForm.drug)("ngModelOptions",t.DdM(13,m)),t.xp6(5),t.Q6J("ngModel",o.prescribeForm.dose)("ngModelOptions",t.DdM(14,m)),t.xp6(5),t.Q6J("ngModel",o.prescribeForm.days)("ngModelOptions",t.DdM(15,m)),t.xp6(5),t.Q6J("ngModel",o.prescribeForm.time)("ngModelOptions",t.DdM(16,m)),t.xp6(5),t.Q6J("ngModel",o.prescribeForm.foodPeriod)("ngModelOptions",t.DdM(17,m)),t.xp6(5),t.Q6J("ngModel",o.prescribeForm.notes)("ngModelOptions",t.DdM(18,m)))},directives:[h.pp,h.ib,h.yz,h.yK,h.u4,g.xw,g.SQ,c.sg,M.lW,Z.KE,Z.hX,O.Nt,l.Fj,l.JJ,l.On],styles:[".form-wrapper[_ngcontent-%COMP%]{padding:2%}[_nghost-%COMP%]     .mat-expansion-panel-header, [_nghost-%COMP%]     .mat-expansion-panel-header:hover{height:100px;background-color:#d0d0d0;color:#000}[_nghost-%COMP%]     .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true]){background-color:#d0d0d0}.pres-row[_ngcontent-%COMP%]{width:100%}.pres-cell[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),n})(),data:{title:"Jhon Doe Appointment Details",breadcrumb:[{icon:"",label:"My Center",routePath:"/"},{icon:"",label:"Appointments",routePath:"/app/appointments"}]}}]},{path:"login",component:I}];let nt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.ez,p.Bz.forChild(tt)],p.Bz]}),n})();var et=i(5566),q=i(8609);let ot=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[q.q,c.ez,nt,et.o9,l.u5,l.UX,q.q,b.JF]]}),n})()}}]);