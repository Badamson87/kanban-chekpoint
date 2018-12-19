(function(t){function e(e){for(var a,n,r=e[0],l=e[1],d=e[2],u=0,p=[];u<r.length;u++)n=r[u],i[n]&&p.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,d||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var c=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("c21b"),i=s.n(a);i.a},"158c":function(t,e,s){"use strict";var a=s("f3dc"),i=s.n(a);i.a},"3b8a":function(t,e,s){"use strict";var a=s("f249"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[s("i",{staticClass:"fas fa-box-open box"}),s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Cardboard")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[s("ul",{staticClass:"navbar-nav"},[t._m(1),s("li",{staticClass:"nav-item action"},[s("a",{staticClass:"nav-link",on:{click:t.logout}},[t._v("Logout")])])])])]),s("router-view")],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"/"}},[t._v("Home")])])}],n={methods:{logout(){this.$store.dispatch("logout")}}},r=n,l=(s("034f"),s("2877")),d=Object(l["a"])(r,i,o,!1,null,null,null);d.options.__file="App.vue";var c=d.exports,u=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"b-page col-12"},[s("h1",[t._v("WELCOME")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"New Board",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],staticClass:"m-2",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),s("button",{staticClass:"btn btn-warning mb-1",attrs:{type:"submit"}},[t._v("Create Board")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 task"},t._l(t.boards,function(e){return s("div",{key:e._id},[s("div",{staticClass:"card m-3 p-5"},[s("div",{staticClass:"card-body"},[s("router-link",{attrs:{to:{name:"board",params:{boardId:e._id,board:e}}}},[t._v(t._s(e.title)+"\n            ")]),s("i",{staticClass:"fas fa-trash action",on:{click:function(s){t.deleteBoard(e._id)}}})],1)])])}))])])},m=[],v={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards||[]}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},deleteBoard(t){this.$store.dispatch("deleteBoard",t)}}},h=v,f=(s("3b8a"),Object(l["a"])(h,p,m,!1,null,null,null));f.options.__file="Boards.vue";var b=f.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row header"},[s("div",{staticClass:"col-12 d-flex flex-row  justify-content-around"},[s("h1",{staticClass:"text align-self-center"},[t._v(t._s(t.board.title))]),s("h2",{staticClass:"text align-self-center"},[t._v(t._s(t.board.description))]),s("form",{staticClass:"align-self-center",on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),s("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[t._v("Create List")])])])]),s("div",{staticClass:"board row"},t._l(t.lists,function(t){return s("list",{staticClass:"task col-4 py-3",attrs:{listData:t}})}))])},w=[],_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"list col-3"},[s("div",{staticClass:"card",staticStyle:{width:"18rem"}},[s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-title"},[t._v(t._s(t.listData.title)+" "),s("i",{staticClass:"fas fa-trash action",on:{click:function(e){t.deleteList()}}})]),s("form",{on:{submit:function(e){return e.preventDefault(),t.createTask(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.title,expression:"newTask.title"}],attrs:{type:"text",placeholder:"New Task",required:""},domProps:{value:t.newTask.title},on:{input:function(e){e.target.composing||t.$set(t.newTask,"title",e.target.value)}}}),t._m(0)]),t._l(t.tasks,function(e){return s("task",{attrs:{listData:t.listData,taskData:e}})})],2)])])])},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{attrs:{type:"submit"}},[s("i",{staticClass:"fas fa-plus"})])}],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task"},[s("div",{staticClass:"card"},[s("div",{staticClass:"cardbody"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.taskData.title)+" "),s("i",{staticClass:"fas fa-trash action",on:{click:function(e){t.deleteTask()}}})]),s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-secondary dropdown-toggle fas fa-truck-moving",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}}),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},t._l(t.lists,function(e){return s("p",{staticClass:"dropdown-item action",attrs:{listData:e,value:"list._id"},on:{click:function(s){t.moveTask(e._id)}}},[t._v(t._s(e.title))])}))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.taskData.description))]),s("form",{on:{submit:function(e){return e.preventDefault(),t.createComment(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.body,expression:"newComment.body"}],attrs:{type:"text",placeholder:"New Comment"},domProps:{value:t.newComment.body},on:{input:function(e){e.target.composing||t.$set(t.newComment,"body",e.target.value)}}}),t._m(0)])]),t._l(t.taskData.comments,function(e){return s("div",[t._v(t._s(e.body)+"\n      "),s("i",{staticClass:"fas fa-trash action",on:{click:function(s){t.deleteComment(e._id)}}})])})],2)])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{attrs:{type:"submit"}},[s("i",{staticClass:"fas fa-plus"})])}],$={name:"Task",props:["taskData","listData"],data(){return{newComment:{body:""}}},mounted(){},computed:{lists(){return this.$store.state.lists}},methods:{deleteTask(){this.$store.dispatch("deleteTask",this.taskData)},moveTask(t){let e={listId:t,taskId:this.taskData._id,oldListId:this.taskData.listId};this.$store.dispatch("moveTask",e)},createComment(){let t={taskId:this.taskData._id,body:this.newComment.body,listId:this.listData._id};console.log(t),this.$store.dispatch("createComment",t)},deleteComment(t){let e={taskId:this.taskData._id,commentId:t};this.$store.dispatch("deleteComment",e)}}},x=$,T=(s("fcc1"),Object(l["a"])(x,C,y,!1,null,null,null));T.options.__file="Task.vue";var I=T.exports,L={name:"List",props:["listData"],components:{Task:I},data(){return{newTask:{title:"",description:"",listId:"",boardId:""}}},mounted(){return this.$store.dispatch("getTasks",this.listData._id)},computed:{tasks(){return this.$store.state.tasks[this.listData._id]||[]}},methods:{deleteList(){this.$store.dispatch("deleteList",this.listData)},createTask(){this.newTask.boardId=this.listData.boardId,this.newTask.listId=this.listData._id,this.$store.dispatch("createTask",this.newTask),this.newTask={title:"",description:"",boardId:"",listId:""}}}},D=L,B=(s("bdda"),Object(l["a"])(D,_,k,!1,null,"199398fd",null));B.options.__file="List.vue";var U=B.exports,N={name:"board",props:["boardId"],components:{List:U},data(){return{newList:{title:"",boardId:""}}},mounted(){this.$store.dispatch("getLists",this.boardId)},computed:{lists(){return this.$store.state.lists},board(){return this.$store.state.boards.find(t=>t._id==this.boardId)||{}}},methods:{addList(){this.newList.boardId=this.boardId,this.$store.dispatch("addList",this.newList),this.newList={title:"",boardId:""}}}},j=N,O=(s("158c"),Object(l["a"])(j,g,w,!1,null,null,null));O.options.__file="Board.vue";var P=O.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login m-5"},[s("h1",{staticClass:"text m-5"},[t._v("Welcome to Cardboard")]),t.loginForm?s("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}})]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],staticClass:"m-3",attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}})]),s("button",{staticClass:"mb-3",attrs:{type:"submit"}},[t._v("Login")])]):s("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.name},on:{input:function(e){e.target.composing||t.$set(t.newUser,"name",e.target.value)}}})]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],staticClass:"m-3",attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}})]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}})]),s("button",{staticClass:"m-3 btn btn-primary",attrs:{type:"submit"}},[t._v("Create Account")])]),s("div",{on:{click:function(e){t.loginForm=!t.loginForm}}},[s("div",{staticClass:"text action"},[t.loginForm?s("p",[t._v("No account? Click here to Register")]):s("p",[t._v("Already have an account? Click here to Login")])])])])},M=[],S={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},F=S,q=Object(l["a"])(F,E,M,!1,null,null,null);q.options.__file="Login.vue";var A=q.exports;a["a"].use(u["a"]);var R=new u["a"]({routes:[{path:"/",name:"boards",component:b},{path:"/board/:boardId",name:"board",props:!0,component:P},{path:"/login",name:"login",component:A},{path:"*",redirect:"/"}]}),J=s("2f62"),W=s("bc3a"),H=s.n(W);a["a"].use(J["a"]);let z=!window.location.host.includes("localhost"),G=z?"https://cardboard-kanban.herokuapp.com/":"//localhost:3000",K=H.a.create({baseURL:G+"auth/",timeout:3e3,withCredentials:!0}),Q=H.a.create({baseURL:G+"api/",timeout:3e3,withCredentials:!0});var V=new J["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{},comments:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setLists(t,e){t.lists=e},setTasks(t,e){console.log(e),a["a"].set(t.tasks,e.listId,e.data)},logout(t){t.user={},R.push({name:"login",path:"/login"})}},actions:{register({commit:t,dispatch:e},s){K.post("register",s).then(e=>{t("setUser",e.data),R.push({name:"boards"})})},authenticate({commit:t,dispatch:e}){K.get("authenticate").then(s=>{t("setUser",s.data),e("getBoards")}).catch(t=>{console.log(t),R.push({name:"login"})})},login({commit:t,dispatch:e},s){K.post("login",s).then(e=>{t("setUser",e.data),R.push({name:"boards"})})},logout({commit:t,dispatch:e}){K.delete("/logout").then(e=>{t("logout")})},getBoards({commit:t,dispatch:e}){Q.get("boards").then(e=>{t("setBoards",e.data)})},addBoard({commit:t,dispatch:e},s){Q.post("boards",s).then(t=>{e("getBoards")})},deleteBoard({commit:t,dispatch:e},s){Q.delete("boards/"+s).then(t=>{e("getBoards")})},getLists({commit:t},e){Q.get("lists/"+e).then(e=>{t("setLists",e.data)})},addList({commit:t,dispatch:e},s){console.log(s),Q.post("lists/",s).then(t=>{e("getLists",t.data.boardId)})},updateList({commit:t,dispatch:e},s){Q.put("lists/"+s).then(t=>{e("getLists")})},deleteList({commit:t,dispatch:e},s){console.log("delete list store"),Q.delete("lists/"+s._id).then(t=>{e("getLists",s.boardId)})},createTask({commit:t,dispatch:e},s){console.log(s),Q.post("tasks/",s).then(t=>{e("getTasks",t.data.listId)})},getTasks({commit:t},e){Q.get("tasks/"+e).then(s=>{t("setTasks",{data:s.data,listId:e})})},deleteTask({commit:t,dispatch:e},s){console.log("Task Deleted"),Q.delete("tasks/"+s._id).then(t=>{e("getTasks",s.listId)})},moveTask({commit:t,dispatch:e},s){console.log(s),Q.put("tasks/"+s.taskId,{listId:s.listId}).then(t=>{e("getTasks",s.listId),e("getTasks",s.oldListId)})},createComment({commit:t,dispatch:e},s){Q.post("tasks/"+s.taskId+"/comments",s).then(t=>{e("getTasks",s.listId)}).catch(t=>console.log("cannot create comment"))},deleteComment({commit:t,dispatch:e},s){Q.put("tasks/",s).then(t=>{e("getTasks",t.data.listId)})}}});a["a"].config.productionTip=!1,new a["a"]({router:R,store:V,created(){this.$store.dispatch("authenticate")},render:t=>t(c)}).$mount("#app")},a376:function(t,e,s){},bdda:function(t,e,s){"use strict";var a=s("a376"),i=s.n(a);i.a},c21b:function(t,e,s){},cd37:function(t,e,s){},f249:function(t,e,s){},f3dc:function(t,e,s){},fcc1:function(t,e,s){"use strict";var a=s("cd37"),i=s.n(a);i.a}});
//# sourceMappingURL=app.b045984b.js.map