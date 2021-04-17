// get the key user from local storage and information // 
var key =JSON.parse(localStorage.getItem('key'))[0].key;
var nature=JSON.parse(localStorage.getItem('key'))[0].nature;
var univ=JSON.parse(localStorage.getItem(nature))[key]
document.getElementById('progileimage').src=univ.image;
// feeding infos into the page from local storage // 
// name header / email / adress/location /name again // 
document.getElementById('strong').innerHTML=" "+  univ.name 
document.getElementById('email').innerHTML=" "+univ.email;
document.getElementById('adr').innerHTML=" "+univ.adress;
document.getElementById('loc').innerHTML=" "+univ.location;
document.getElementById('Name').innerHTML= ' ' +univ.name ;
// function deco
function deco() {
    location.replace('///home/hamza/Desktop/first%20project/login.html')
}
// function 
function ok() {
    var x=document.getElementById('original').className;
    var y=document.getElementById('amodifie').className;
    if (x == 'show') {
        document.getElementById('original').className='none'
        document.getElementById('mod').innerHTML=" Retour au profile"
    }else{
        document.getElementById('original').className='show'
        document.getElementById('mod').innerHTML=" Modifié le  profile"
    }
    if (y=='show') {
        document.getElementById('amodifie').className='none'
    } else {
        document.getElementById('amodifie').className='show'
    }

}
///putting infos into input .value // 
document.getElementById('name2').value=univ.name;
document.getElementById('loc2').value=univ.location;
document.getElementById('email2').value=univ.email;
document.getElementById('adress2').value=univ.adress;
// FUNCTION Save // 
function save() {
    //stocking infos
    var user={
    }
    user.name=document.getElementById('name2').value;
    user.location=document.getElementById('loc2').value;
    user.adress=document.getElementById('adress2').value;
    user.image=univ.image;
    user.password=univ.password;
    user.email=univ.email;
    //get the user infos frm localStorage into array
    var  stab=JSON.parse(localStorage.getItem("uni")) || [] ;
    // remove old infos 
    stab.splice(key,1);
    // remove old local storage // 
    localStorage.removeItem("uni");
    // put new information  into local storge// 
    stab.push(user);
    localStorage.setItem("uni",JSON.stringify(stab) );
      // change the key user then reload //
      var keytab=[];
      var nowuser={
      }
      nowuser.key=stab.length-1;
      nowuser.nature="uni";
      keytab.push(nowuser);
      localStorage.setItem("key",JSON.stringify(keytab)); 
      location.reload();
}
// list of student belonging to specific school 
var x= JSON.parse(localStorage.getItem("students"))
var texte=' ';
for (let i = 0; i < x.length; i++) {
    if (x[i].university ==univ.name) {
        
        texte =texte+ "<li>"+ 'Name :' + x[i].name + " ,  Last name : "+x[i].lastname+ '<br>'+ "aged :"+x[i].Age + '<br> Actif adress : '+ x[i].adress
        +" <br> <button value='"+i+ "' onclick='edit(this.value)' type='button' class='btn btn-warning'>EDIT</button> <button value='"+i
        + "' onclick='Delete(this.value)' type='button' class='btn btn-danger'>Delete</button> </li>" 
}
}
 document.getElementById('listofstudent').innerHTML=texte

 //function edit // 
 function edit(e) {
        var t=[];
        var useredit={
        }
        useredit.key=e;
        useredit.nature="students";
        t.push(useredit);
        localStorage.setItem("edit",JSON.stringify(t));
        location.replace('///home/hamza/Desktop/first%20project/edit.html')
 }
 // delete function 
 function Delete(e) {
   
// get the users infos from local storage iinto an array 
    var  stab=JSON.parse(localStorage.getItem("students")) || [] ;
// remove old infos 
    stab.splice(e,1);
// remove old local storage // 
    localStorage.removeItem("students");
    // add new local 
    localStorage.setItem("students",JSON.stringify(stab) );
    location.reload();
 }
// function show // 
function show2() {
    var x =document.getElementById('lists').className
    if (x=="row justify-content-center") {
        document.getElementById('lists').className="row justify-content-center none";
        document.getElementById('btn1').innerHTML='See All the  Students '

    } else {
        document.getElementById('lists').className="row justify-content-center";
        document.getElementById('btn1').innerHTML='Hide all the  Students '
    }

}