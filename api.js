var json;
function reqListener1 () {
  json = JSON.parse(this.responseText);
  console.log(json);
  document.getElementById("para").innerHTML="";
  if(json.status == "OK"){
    var profile = document.getElementById("handle");
  var name = document.createElement("p");
  var obj = json.result[0];
  profile.style.display = "";
  document.getElementById("avatar").src =  obj.avatar;
  //document.getElementById("avatar").class="w3-border w3-padding";
  
  name.innerHTML = " Handle : " + obj.handle;
  profile.appendChild(name);
  if(obj.firstName)
  name.innerHTML = " Name : " + obj.firstName[0].toUpperCase() +obj.firstName.slice(1) + " " ;
  
  if(obj.lastName)
  name.innerHTML += obj.lastName[0].toUpperCase() +obj.lastName.slice(1);
  profile.appendChild(name);

  name = document.createElement("p");
  name.innerHTML = "Rating : "  + obj.rating+", Maximum Rating : "+obj.maxRating;
  profile.appendChild(name);

  name = document.createElement("p");
  name.innerHTML = "Contribution : "  + obj.contribution;
  profile.appendChild(name);

  name = document.createElement("p");
  name.innerHTML = "Friends of Count : "  + obj.friendOfCount;
  profile.appendChild(name);

  name = document.createElement("p");
  name.innerHTML = "Rank : "  + obj.rank+", Maximum Rank : "+obj.maxRank;
  profile.appendChild(name);  
  }
  
}

function reqListener2 () {
  json = JSON.parse(this.responseText);
  console.log(json);
  document.getElementById("para").innerHTML="";
  if(json.status == "OK"){
    var profile = document.getElementById("handle");
  var name = document.createElement("p");
  var res = json.result;
  var i;
   name.innerHTML = "BlogEntries : ";
   var short_url = "http://codeforces.com/blog/entry/" ;
  for (i in res){
    var final_link = short_url + res[i].id
    name.innerHTML += "<a href=" + final_link + ">"+ res[i].title + "</a>"
  }
profile.appendChild(name); 
}
}

function reqListener3 () {
  json = JSON.parse(this.responseText);
  console.log(json);
  document.getElementById("para").innerHTML="";
  if(json.status == "OK"){
    var profile = document.getElementById("handle");
  var name = document.createElement("p");
  var res = json.result;
  var i;
   name.innerHTML = "Problems Solved: ";
  var short_url = "http://codeforces.com/problemset/problem/" ;
  for (i in res){
    var problem_link = short_url + res[i].problem.contestId + "/" + res[i].problem.index ;
    name.innerHTML += "<a href=" + problem_link + ">" + "(" + res[i].problem.name + ")" + "<br>" + "     " + "</a>" 
  }
profile.appendChild(name); 
}
}


function reqListener4 () {
   json = JSON.parse(this.responseText);
  console.log(json);
  document.getElementById("para").innerHTML="";
  if(json.status == "OK"){
    var profile = document.getElementById("handle");
  var name = document.createElement("p");
  var obj = json.result;
  profile.style.display = "";
  var short_url = "http://codeforces.com/blog/entry/" ;
  var final_link = short_url + obj.id
   name.innerHTML =  "<a href=" + final_link + ">" + "Title of blog ->" + obj.title + "<br>" + "     " + "</a>" ;
profile.appendChild(name); 
}
}




function reqListener5 () {
   json = JSON.parse(this.responseText);
  console.log(json);
  document.getElementById("para").innerHTML="";
  if(json.status == "OK"){
    var profile = document.getElementById("handle");
  var name = document.createElement("p");
  var obj = json.result[0];
  profile.style.display = "";
   name.innerHTML = "First Comment On Blog : " + "<br>" + "commentatorHandle= " + obj.commentatorHandle + "<br>" + obj.text ;
profile.appendChild(name); 
}
}




function reqListener6 () {
   json = JSON.parse(this.responseText);
  console.log(json);
  document.getElementById("para").innerHTML="";
  if(json.status == "OK"){
    var profile = document.getElementById("handle");
  var name = document.createElement("p");
  var obj = json.result.problems;
  profile.style.display = "";
  var i;
   name.innerHTML = "Problems in contest : ";
   var short_url = "http://codeforces.com/problemset/problem/" ;
  for (i in obj){
    var problem_link = short_url + obj[i].contestId + "/" + obj[i].index ;
    name.innerHTML += "<a href=" + problem_link + ">" + "(" + obj[i].name + ")" + "<br>" + "     " + "</a>" ;
  }
profile.appendChild(name); 
}
}



function reqListener7 () {
   json = JSON.parse(this.responseText);
  console.log(json);
  document.getElementById("para").innerHTML="";
  if(json.status == "OK"){
    var profile = document.getElementById("handle");
  var name = document.createElement("p");
  var obj = json.result;
  profile.style.display = "";
  var i;
  var short_url = "http://codeforces.com/problemset/problem/" ;
   name.innerHTML = "Last Ten Submissions : " + "<br>";
  for (i in obj){
    var problem_link = short_url + obj[i].problem.contestId + "/" + obj[i].problem.index ;
    name.innerHTML += "<a href=" + problem_link + ">" +obj[i].problem.name + "-->"+"handle of participant : " +obj[i].author.members[0].handle + " , " +  "<br>" + "</a>" ;
  }
profile.appendChild(name); 
}
}



function reqListener8 () {
   json = JSON.parse(this.responseText);
  console.log(json);
  document.getElementById("para").innerHTML="";
  if(json.status == "OK"){
    var profile = document.getElementById("handle");
  var name = document.createElement("p");
  var obj = json.result.problems;
    profile.style.display = "";
   var i;
   name.innerHTML = "Problems under tags : ";
   var short_url = "http://codeforces.com/problemset/problem/" ;
   for (i in obj){
    var problem_link = short_url + obj[i].contestId + "/" + obj[i].index ;
    name.innerHTML += "<a href=" + problem_link + ">" + "(" + obj[i].name + ")" + "<br>" + "     " + "</a>" ;

  }
profile.appendChild(name); 
}
}






function getJSON1(url){
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener1);
oReq.open("GET", url);

oReq.send();
}

function getJSON2(url){
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener2);

oReq.open("GET", url);

oReq.send();
}

function getJSON3(url){
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener3);

oReq.open("GET", url);

oReq.send();
}


function getJSON4(url){
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener4);

oReq.open("GET", url);

oReq.send();
}


function getJSON5(url){
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener5);

oReq.open("GET", url);

oReq.send();
}


function getJSON6(url){
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener6);

oReq.open("GET", url);

oReq.send();
}


function getJSON7(url){
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener7);

oReq.open("GET", url);

oReq.send();
}



function getJSON8(url){
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener8);

oReq.open("GET", url);

oReq.send();
}


function sendURL(){
  var inp = document.getElementById("input0");
  var para = document.getElementById("para");
  var handle = document.getElementById("handle");
  handle.innerHTML = "";
  var img = document.createElement("img");
  img.id = "avatar";
  
  img.class="w3-border w3-padding"
  handle.appendChild(img);

  
  
  if(inp){
    if(inp.value==""){
      alert("Usrename is missing");
    }else{
      para.style = "font-size:36px; margin-left:45%;";

      //para.innerHTML = "Loading.....";
      document.getElementById("handle").style.display = "none";
      var url1 = "http://codeforces.com/api/user.info?handles=" + inp.value;
      var url2 = "http://codeforces.com/api/user.blogEntries?handle=" + inp.value;
      var url3 = "http://codeforces.com/api/user.status?handle=" + inp.value + "&from=1&count=10" ;
      getJSON1(url1);
      getJSON2(url2);
      getJSON3(url3);
    }
  }
}



function sendURL1(){
  var inp = document.getElementById("input1");
  var para = document.getElementById("para");
  var handle = document.getElementById("handle");
  handle.innerHTML = "";
  var img = document.createElement("img");
  img.id = "avatar";
  
  img.class="w3-border w3-padding"
  handle.appendChild(img);

  
  
  if(inp){
      para.style = "font-size:36px; margin-left:45%;";

      //para.innerHTML = "Loading.....";
      document.getElementById("handle").style.display = "none";
      var url4 = "http://codeforces.com/api/blogEntry.view?blogEntryId=" + inp.value;
      var url5 = "http://codeforces.com/api/blogEntry.comments?blogEntryId=" + inp.value;
      getJSON4(url4);
      getJSON5(url5);
    }
  }


function sendURL2(){
  var inp = document.getElementById("input2");
  var para = document.getElementById("para");
  var handle = document.getElementById("handle");
  handle.innerHTML = "";
  var img = document.createElement("img");
  img.id = "avatar";
  
  img.class="w3-border w3-padding"
  handle.appendChild(img);

  
  
  if(inp){
      para.style = "font-size:36px; margin-left:45%;";

      //para.innerHTML = "Loading.....";
      document.getElementById("handle").style.display = "none";
      var url6 = "http://codeforces.com/api/contest.standings?contestId=" + inp.value + "&from=1&count=5&showUnofficial=true";
      var url7 = "http://codeforces.com/api/contest.status?contestId=" + inp.value + "&from=1&count=10";
      getJSON6(url6);
      getJSON7(url7);
    }
  }


  function sendURL3(){
  var inp = document.getElementById("input3");
  var para = document.getElementById("para");
  var handle = document.getElementById("handle");
  handle.innerHTML = "";
  var img = document.createElement("img");
  img.id = "avatar";
  
  img.class="w3-border w3-padding"
  handle.appendChild(img);

  
  
  if(inp){
      para.style = "font-size:36px; margin-left:45%;";

     // para.innerHTML = "Loading.....";
      document.getElementById("handle").style.display = "none";
      var url8 = "http://codeforces.com/api/problemset.problems?tags=" + inp.value ;
      getJSON8(url8);
    }
  }