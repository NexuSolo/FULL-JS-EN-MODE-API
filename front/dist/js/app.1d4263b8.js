(function(){"use strict";var e={2297:function(e,a,t){var r=t(9242),i=t(3396);const s={id:"app"};function n(e,a,t,r,n,d){const o=(0,i.up)("NavBar"),c=(0,i.up)("router-view"),l=(0,i.up)("FooterBar");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(o),(0,i.Wm)(c),(0,i.Wm)(l)])}const d=e=>((0,i.dD)("data-v-2c73837a"),e=e(),(0,i.Cn)(),e),o={class:"fenetre-footer"},c=d((()=>(0,i._)("div",{class:"footer-liens"},[(0,i._)("a",{href:""},"A propos"),(0,i._)("a",{href:""},"Contact"),(0,i._)("a",{href:""},"Mentions légales")],-1))),l=[c];function p(e,a,t,r,s,n){return(0,i.wg)(),(0,i.iD)("div",o,l)}var v={name:"FooterBar",props:{msg:String}},u=t(89);const m=(0,u.Z)(v,[["render",p],["__scopeId","data-v-2c73837a"]]);var f=m;const g={class:"NavBar-fenetre"},_={class:"Navbar-content"},b=(0,i._)("div",{class:"logo"},[(0,i._)("img",{class:"logo-img",src:"logo.png",alt:""})],-1),h=(0,i._)("a",{href:""},"A propos",-1),w=(0,i._)("a",{href:""},"Contact",-1),y={class:"profil"},x={class:"no-user"},j={class:"user"},k=(0,i._)("img",{class:"profil-img",src:"profil.png",alt:""},null,-1);function P(e,a,t,r,s,n){const d=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("div",_,[b,(0,i._)("nav",null,[(0,i.Wm)(d,{class:"",to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("Accueil")])),_:1}),h,w]),(0,i._)("div",y,[(0,i._)("div",x,[(0,i.Wm)(d,{class:"bouton-connection",to:"/connection"},{default:(0,i.w5)((()=>[(0,i.Uk)("Se connecter")])),_:1})]),(0,i._)("div",j,[(0,i.Wm)(d,{to:"/profil"},{default:(0,i.w5)((()=>[k])),_:1})])])])])}var D={name:"NavBar",props:{msg:String},mounted(){const e=(0,i.FN)().appContext.config.globalProperties.user;console.log("User : "+e),""!=e?(document.querySelector(".no-user").style.display="block",document.querySelector(".user").style.display="none"):(document.querySelector(".no-user").style.display="none",document.querySelector(".user").style.display="block")}};const z=(0,u.Z)(D,[["render",P]]);var C=z,S={name:"App",components:{NavBar:C,FooterBar:f}};const M=(0,u.Z)(S,[["render",n]]);var O=M,q=t(2483),A=t(7139);const L=e=>((0,i.dD)("data-v-1264abe4"),e=e(),(0,i.Cn)(),e),W={class:"accueil-fenetre"},Z=(0,i.uE)('<div class="accueil-content" data-v-1264abe4><div class="accueil-texte" data-v-1264abe4><div class="line" data-v-1264abe4></div><h1 data-v-1264abe4>Vroum Vroum</h1><h3 data-v-1264abe4>Le site de covoiturage pour les étudiants de l&#39;EFREI</h3><p data-v-1264abe4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br data-v-1264abe4> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><a class="decouvrir-button" href="/create-trajet" data-v-1264abe4>Créer un trajet</a></div><div class="accueil-voiture" data-v-1264abe4><div class="blue-box" data-v-1264abe4></div><img class="img-car" src="car.png" alt="car" data-v-1264abe4></div></div><form class="search-bar" action="POST" data-v-1264abe4><div class="search-depart" data-v-1264abe4><input type="text" name="" id="" placeholder="Départ" data-v-1264abe4></div><div class="search-fleche" data-v-1264abe4><img src="fleche.png" alt="" width="30px" data-v-1264abe4></div><div class="search-arrivee" data-v-1264abe4><input type="text" name="" id="" placeholder="Destination" data-v-1264abe4></div><div class="search-date" data-v-1264abe4><input type="date" name="" id="" data-v-1264abe4></div><div class="search-prix" data-v-1264abe4><input type="number" name="" id="" placeholder="Prix" data-v-1264abe4></div><div class="search-button" data-v-1264abe4><a href="/" type="submit" data-v-1264abe4><img src="search.png" alt="" width="30px" data-v-1264abe4></a></div></form>',2),I={class:"liste-trajets"},N=L((()=>(0,i._)("div",{class:"titre-trajets"},[(0,i._)("h3",null,"Date"),(0,i._)("h3",null,"Départ"),(0,i._)("h3",null,"Arrivée"),(0,i._)("h3",null,"Places"),(0,i._)("h3",null,"Prix")],-1))),U={class:"trajet"},E={class:"date"},F={class:"depart"},T={class:"arrivee"},B={class:"distance"},H={class:"prix"};function Y(e,a,t,r,s,n){const d=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",W,[Z,(0,i._)("div",I,[N,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.trajets,((e,a)=>((0,i.wg)(),(0,i.iD)("div",{key:a},[(0,i.Wm)(d,{class:"plus",to:"/trajet"},{default:(0,i.w5)((()=>[(0,i._)("div",U,[(0,i._)("div",E,(0,A.zw)(e.date),1),(0,i._)("div",F,(0,A.zw)(e.depart),1),(0,i._)("div",T,(0,A.zw)(e.arrivee),1),(0,i._)("div",B,(0,A.zw)(e.places),1),(0,i._)("div",H,(0,A.zw)(e.prix),1)])])),_:2},1024)])))),128))])])}var K={name:"AccueilPresentation",props:{msg:String},data(){return{trajets:[{depart:"Paris",arrivee:"Lyon",date:"12/12/2020",prix:"20€",places:"2",etat:"disponible"},{depart:"Paris",arrivee:"Lyon",date:"12/12/2020",prix:"20€",places:"2",etat:"disponible"},{depart:"Paris",arrivee:"Lyon",date:"12/12/2020",prix:"20€",places:"2",etat:"disponible"},{depart:"Paris",arrivee:"Lyon",date:"12/12/2020",prix:"20€",places:"2",etat:"disponible"},{depart:"Paris",arrivee:"Lyon",date:"12/12/2020",prix:"20€",places:"2",etat:"disponible"},{depart:"Paris",arrivee:"Lyon",date:"12/12/2020",prix:"20€",places:"2",etat:"disponible"},{depart:"Paris",arrivee:"Lyon",date:"12/12/2020",prix:"20€",places:"2",etat:"disponible"},{depart:"Paris",arrivee:"Lyon",date:"12/12/2020",prix:"20€",places:"2",etat:"disponible"}]}}};const R=(0,u.Z)(K,[["render",Y],["__scopeId","data-v-1264abe4"]]);var V=R;const G=e=>((0,i.dD)("data-v-47a12b8c"),e=e(),(0,i.Cn)(),e),J={class:"connection-fenetre"},Q={class:"wrapper"},X={class:"container"},$=G((()=>(0,i._)("h1",null,"Connection",-1))),ee=G((()=>(0,i._)("form",{class:"form"},[(0,i._)("input",{type:"text",placeholder:"Email",id:"email",name:"email"}),(0,i._)("input",{type:"password",placeholder:"Mot de passe",id:"mdp",name:"mdp"}),(0,i._)("button",{type:"submit",id:"login-button"},"Se connecter")],-1)));function ae(e,a,t,r,s,n){const d=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",J,[(0,i._)("div",Q,[(0,i._)("div",X,[$,ee,(0,i.Wm)(d,{class:"bouton-inscription",to:"/inscription"},{default:(0,i.w5)((()=>[(0,i.Uk)("S'inscrire")])),_:1})])])])}var te={name:"FormulaireConnection",props:{msg:String}};const re=(0,u.Z)(te,[["render",ae],["__scopeId","data-v-47a12b8c"]]);var ie=re;const se={class:"connection-fenetre"},ne={class:"wrapper"},de={class:"container-inscription"},oe=(0,i.uE)('<h1 data-v-1bc32321>Inscription</h1><form class="form" data-v-1bc32321><input type="text" placeholder="Nom" id="nom" name="nom" data-v-1bc32321><input type="text" placeholder="Prénom" id="prenom" name="prenom" data-v-1bc32321><input type="text" placeholder="Email" id="email" name="email" data-v-1bc32321><input type="password" placeholder="Mot de passe" id="mdp" name="mdp" data-v-1bc32321><button type="submit" id="login-button" data-v-1bc32321>S&#39;inscrire</button></form>',2);function ce(e,a,t,r,s,n){const d=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",se,[(0,i._)("div",ne,[(0,i._)("div",de,[oe,(0,i.Wm)(d,{class:"bouton-inscription",to:"/connection"},{default:(0,i.w5)((()=>[(0,i.Uk)("Se connecter")])),_:1})])])])}var le={name:"FormulaireConnection",props:{msg:String}};const pe=(0,u.Z)(le,[["render",ce],["__scopeId","data-v-1bc32321"]]);var ve=pe;const ue=e=>((0,i.dD)("data-v-e24f121c"),e=e(),(0,i.Cn)(),e),me={class:"profil-fenetre"},fe={class:"profil-presentation"},ge=ue((()=>(0,i._)("img",{class:"profil-pic",src:"profil.png",alt:""},null,-1))),_e={class:"name"},be={class:"note"},he={key:0,class:"star",src:"stars/1.png",alt:""},we={key:1,class:"star",src:"stars/2.png",alt:""},ye={key:2,class:"star",src:"stars/3.png",alt:""},xe={key:3,class:"star",src:"stars/4.png",alt:""},je={key:4,class:"star",src:"stars/5.png",alt:""},ke={class:"historique-trajets"},Pe=ue((()=>(0,i._)("h2",null,"Historique de trajets",-1))),De={class:"trajet"},ze={class:"date"},Ce={class:"depart"},Se={class:"arrivee"},Me={class:"distance"},Oe={class:"prix"};function qe(e,a,t,r,s,n){const d=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",me,[(0,i._)("div",fe,[ge,(0,i._)("h2",_e,(0,A.zw)(s.name),1),(0,i._)("div",be,[1===s.note?((0,i.wg)(),(0,i.iD)("img",he)):2===s.note?((0,i.wg)(),(0,i.iD)("img",we)):3===s.note?((0,i.wg)(),(0,i.iD)("img",ye)):4===s.note?((0,i.wg)(),(0,i.iD)("img",xe)):5===s.note?((0,i.wg)(),(0,i.iD)("img",je)):(0,i.kq)("",!0)])]),(0,i._)("div",ke,[Pe,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.trajets,((e,a)=>((0,i.wg)(),(0,i.iD)("div",{key:a},[(0,i.Wm)(d,{class:"plus",to:"/trajet"},{default:(0,i.w5)((()=>[(0,i._)("div",De,[(0,i._)("div",ze,(0,A.zw)(e.date),1),(0,i._)("div",Ce,(0,A.zw)(e.depart),1),(0,i._)("div",Se,(0,A.zw)(e.arrivee),1),(0,i._)("div",Me,(0,A.zw)(e.distance),1),(0,i._)("div",Oe,(0,A.zw)(e.prix),1)])])),_:2},1024)])))),128))])])}var Ae={name:"ProfilPage",props:{msg:String},data(){return{name:"Yanis",note:3,trajets:[{date:"01/01/2021",depart:"Paris",arrivee:"Marseille",distance:"800km",duree:"8h",prix:"50€"},{date:"01/01/2021",depart:"Paris",arrivee:"Marseille",distance:"800km",duree:"8h",prix:"50€"},{date:"01/01/2021",depart:"Paris",arrivee:"Marseille",distance:"800km",duree:"8h",prix:"50€"},{date:"01/01/2021",depart:"Paris",arrivee:"Marseille",distance:"800km",duree:"8h",prix:"50€"},{date:"01/01/2021",depart:"Paris",arrivee:"Marseille",distance:"800km",duree:"8h",prix:"50€"},{date:"01/01/2021",depart:"Paris",arrivee:"Marseille",distance:"800km",duree:"8h",prix:"50€"},{date:"01/01/2021",depart:"Paris",arrivee:"Marseille",distance:"800km",duree:"8h",prix:"50€"},{date:"01/01/2021",depart:"Paris",arrivee:"Marseille",distance:"800km",duree:"8h",prix:"50€"},{date:"01/01/2021",depart:"Paris",arrivee:"Marseille",distance:"800km",duree:"8h",prix:"50€"}]}}};const Le=(0,u.Z)(Ae,[["render",qe],["__scopeId","data-v-e24f121c"]]);var We=Le;const Ze=e=>((0,i.dD)("data-v-c24252a0"),e=e(),(0,i.Cn)(),e),Ie={class:"trajet-fenetre"},Ne={class:"adresses"},Ue={class:"trajet-depart"},Ee=Ze((()=>(0,i._)("div",{class:"to"},[(0,i._)("img",{class:"fleche",src:"fleche.png"})],-1))),Fe={class:"trajet-arrivee"},Te=Ze((()=>(0,i._)("h2",null,"Conducteur",-1))),Be={class:"conducteur"},He={class:"conducteur-info"},Ye=Ze((()=>(0,i._)("div",{class:"conducteur-photo"},[(0,i._)("img",{src:"https://www.w3schools.com/howto/img_avatar.png",alt:"Avatar"})],-1))),Ke={class:"conducteur-details"},Re={class:"conducteur-prenom"},Ve={class:"conducteur-nom"},Ge={class:"conducteur-note"},Je=Ze((()=>(0,i._)("div",{class:"conducteur-voiture"},[(0,i._)("img",{src:"logo.png",alt:"Avatar"})],-1))),Qe={class:"passagers-liste"},Xe={class:"passager"},$e=Ze((()=>(0,i._)("div",{class:"passager-photo"},[(0,i._)("img",{src:"https://www.w3schools.com/howto/img_avatar.png",alt:"Avatar"})],-1))),ea={class:"passager-details"},aa={class:"passager-prenom"},ta={class:"passager-nom"},ra={class:"passager-note"},ia={class:"infos"},sa={class:"infos-left"},na={class:"trajet-distance"},da=Ze((()=>(0,i._)("span",{class:"titre-detail"},"Distance : ",-1))),oa={class:"trajet-duree"},ca=Ze((()=>(0,i._)("span",{class:"titre-detail"},"Durée : ",-1))),la={class:"trajet-prix"},pa=Ze((()=>(0,i._)("span",{class:"titre-detail"},"Prix : ",-1))),va={class:"infos-right"},ua={key:0,class:"check-trajet",href:""},ma={key:1,class:"termine-trajet",href:""};function fa(e,a,t,r,s,n){return(0,i.wg)(),(0,i.iD)("div",Ie,[(0,i._)("div",Ne,[(0,i._)("div",Ue,(0,A.zw)(s.trajet.depart),1),Ee,(0,i._)("div",Fe,(0,A.zw)(s.trajet.arrivee),1)]),Te,(0,i._)("div",Be,[(0,i._)("div",He,[Ye,(0,i._)("div",Ke,[(0,i._)("div",Re,(0,A.zw)(s.conducteur.prenom),1),(0,i._)("div",Ve,(0,A.zw)(s.conducteur.nom),1),(0,i._)("div",Ge,(0,A.zw)(s.conducteur.note),1)])]),Je]),(0,i._)("div",Qe,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.passagers,((e,a)=>((0,i.wg)(),(0,i.iD)("div",{key:a},[(0,i._)("h2",null,"Passager "+(0,A.zw)(a+1),1),(0,i._)("div",Xe,[$e,(0,i._)("div",ea,[(0,i._)("div",aa,(0,A.zw)(e.prenom),1),(0,i._)("div",ta,(0,A.zw)(e.nom),1),(0,i._)("div",ra,(0,A.zw)(e.note),1)])])])))),128))]),(0,i._)("div",ia,[(0,i._)("div",sa,[(0,i._)("div",na,[(0,i._)("p",null,[da,(0,i.Uk)((0,A.zw)(s.trajet.distance),1)])]),(0,i._)("div",oa,[(0,i._)("p",null,[ca,(0,i.Uk)((0,A.zw)(s.trajet.duree),1)])]),(0,i._)("div",la,[(0,i._)("p",null,[pa,(0,i.Uk)((0,A.zw)(s.trajet.prix),1)])])]),(0,i._)("div",va,["disponible"===s.trajet.etat?((0,i.wg)(),(0,i.iD)("a",ua,"Choisir ce trajet")):"termine"===s.trajet.etat?((0,i.wg)(),(0,i.iD)("p",ma,"Trajet terminé")):(0,i.kq)("",!0)])])])}var ga={name:"TrajetPage",props:{msg:String},data(){return{trajet:{depart:"Paris",arrivee:"Marseille",distance:"800km",duree:"8h",prix:"50€",etat:"disponible"},conducteur:{prenom:"Yanis",nom:"Rozier",voiture:"Peugeot 307",note:"5"},passagers:[{prenom:"Nicolas",nom:"Theau",note:"5"},{prenom:"Sebastien",nom:"Zhou",note:"5"},{prenom:"Tom",nom:"Rene",note:"5"}]}}};const _a=(0,u.Z)(ga,[["render",fa],["__scopeId","data-v-c24252a0"]]);var ba=_a;const ha={class:"create-trajet-fenetre"},wa=(0,i.uE)('<div class="create-trajet" data-v-69e0a4d4><div class="create-trajet-title" data-v-69e0a4d4><h1 data-v-69e0a4d4>Créer un trajet</h1></div><div class="create-trajet-form" data-v-69e0a4d4><form action="" data-v-69e0a4d4><div class="create-trajet-form-depart" data-v-69e0a4d4><label for="depart" data-v-69e0a4d4>Départ</label><input type="text" name="depart" id="depart" data-v-69e0a4d4></div><div class="create-trajet-form-arrivee" data-v-69e0a4d4><label for="arrivee" data-v-69e0a4d4>Arrivée</label><input type="text" name="arrivee" id="arrivee" data-v-69e0a4d4></div><div class="create-trajet-form-date" data-v-69e0a4d4><label for="date" data-v-69e0a4d4>Date</label><input type="date" name="date" id="date" data-v-69e0a4d4></div><div class="create-trajet-form-heure" data-v-69e0a4d4><label for="heure" data-v-69e0a4d4>Heure</label><input type="time" name="heure" id="heure" data-v-69e0a4d4></div><div class="create-trajet-form-prix" data-v-69e0a4d4><label for="prix" data-v-69e0a4d4>Prix</label><input type="text" name="prix" id="prix" data-v-69e0a4d4></div><div class="create-trajet-form-places" data-v-69e0a4d4><label for="places" data-v-69e0a4d4>Nombre de places</label><input type="text" name="places" id="places" data-v-69e0a4d4></div><div class="create-trajet-form-submit" data-v-69e0a4d4><input type="submit" value="Créer" data-v-69e0a4d4></div></form></div></div>',1),ya=[wa];function xa(e,a,t,r,s,n){return(0,i.wg)(),(0,i.iD)("div",ha,ya)}var ja={name:"CreateTrajet",props:{msg:String}};const ka=(0,u.Z)(ja,[["render",xa],["__scopeId","data-v-69e0a4d4"]]);var Pa=ka;const Da=[{path:"/",component:V},{path:"/connection",component:ie},{path:"/inscription",component:ve},{path:"/profil",component:We},{path:"/trajet",component:ba},{path:"/create-trajet",component:Pa}],za=(0,q.p7)({history:(0,q.PO)(),routes:Da});var Ca=za;const Sa="",Ma=(0,r.ri)(O);Ma.config.globalProperties.user=Sa,Ma.use(Ca).mount("#app")}},a={};function t(r){var i=a[r];if(void 0!==i)return i.exports;var s=a[r]={exports:{}};return e[r].call(s.exports,s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(a,r,i,s){if(!r){var n=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],s=e[l][2];for(var d=!0,o=0;o<r.length;o++)(!1&s||n>=s)&&Object.keys(t.O).every((function(e){return t.O[e](r[o])}))?r.splice(o--,1):(d=!1,s<n&&(n=s));if(d){e.splice(l--,1);var c=i();void 0!==c&&(a=c)}}return a}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,i,s]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,r){var i,s,n=r[0],d=r[1],o=r[2],c=0;if(n.some((function(a){return 0!==e[a]}))){for(i in d)t.o(d,i)&&(t.m[i]=d[i]);if(o)var l=o(t)}for(a&&a(r);c<n.length;c++)s=n[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(l)},r=self["webpackChunkfront"]=self["webpackChunkfront"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(2297)}));r=t.O(r)})();
//# sourceMappingURL=app.1d4263b8.js.map