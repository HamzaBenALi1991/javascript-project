// get the key user from local storage and information // 
var key =JSON.parse(localStorage.getItem('key'))[0].key;
var nature=JSON.parse(localStorage.getItem('key'))[0].nature;
var admin=JSON.parse(localStorage.getItem(nature))[key]
document.getElementById('progileimage').src='Uimage.jpg';
// putting infos into the page 
document.getElementById('strong').innerHTML=admin.name
document.getElementById('name').innerHTML=admin.name;
document.getElementById('lastname').innerHTML=admin.lastname;
document.getElementById('email').innerHTML=admin.email;
///////////////////////
document.getElementById('name2').value=admin.name;
document.getElementById('l2').value=admin.lastname;
document.getElementById('email2').value=admin.email;
/////////function ok 
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
//////////////////:function deconexion
function deco() {
    location.replace('///home/hamza/Desktop/first%20project/login.html')
}
///////function save modification 
function save() {
    //stocking infos
    var user={
    }
    user.name=document.getElementById('name2').value;
    user.lastname=document.getElementById('l2').value;
    user.email=admin.email;
    user.password=admin.password;
    
    //get the user infos frm localStorage into array
    var  stab=JSON.parse(localStorage.getItem("Admin")) || [] ;
    // remove old infos 
    stab.splice(key,1);
    // remove old local storage // 
    localStorage.removeItem("Admin");
    // put new information  into local storge// 
    stab.push(user);
    localStorage.setItem("Admin",JSON.stringify(stab) );
      // change the key user then reload //
      var keytab=[];
      var nowuser={
      }
      nowuser.key=stab.length-1;
      nowuser.nature="Admin";
      keytab.push(nowuser);
      localStorage.setItem("key",JSON.stringify(keytab)); 
      location.reload();
}
// list of student belonging to specific school 
var x= JSON.parse(localStorage.getItem("students"))
var texte=' ';
for (let i = 0; i < x.length; i++) {
        
        texte =texte+ "<li>"+ 'Name :' + x[i].name + " ,  Last name : "+x[i].lastname+ '<br>'+ "aged :"+x[i].Age + '<br> Actif adress : '+ x[i].adress
        +" <br> <button value='"+i+ "' onclick='edit(this.value)' type='button' class='btn btn-warning'>EDIT</button> <button value='"+i
        + "' onclick='Delete(this.value)' type='button' class='btn btn-danger'>Delete</button> </li>" 
}

 document.getElementById('listofstudent').innerHTML=texte
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
/////////////list of uni //////////
// list of student belonging to specific school 
var y= JSON.parse(localStorage.getItem("uni"))
var texte2=' ';
for (let i = 0; i < y.length; i++) {
        
        texte2 =texte2+ "<li>"+ 'Name :' + y[i].name + " <br> Actif adress : "+ y[i].adress + '<br> Localisé à : '+ y[i].location
        +" <br> <button value='"+i+ "' onclick='edit2(this.value)' type='button' class='btn btn-warning'>EDIT</button> <button value='"+i
        + "' onclick='Delete2(this.value)' type='button' class='btn btn-danger'>Delete</button> </li>" 
}

 document.getElementById('listofuni').innerHTML=texte2
 /////////function show 3 ////////////
 function show3() {
    var x =document.getElementById('lists2').className
    if (x=="row justify-content-center") {
        document.getElementById('lists2').className="row justify-content-center none";
        document.getElementById('btn2').innerHTML='See All the  universities'

    } else {
        document.getElementById('lists2').className="row justify-content-center";
        document.getElementById('btn2').innerHTML='Hide all the  Universities '
    }
}
//////////function delete universities ///////////
function Delete2(e) {
   
    // get the users infos from local storage iinto an array 
        var  tt=JSON.parse(localStorage.getItem("uni")) || [] ;
    // remove old infos 
        tt.splice(e,1);
    // remove old local storage // 
        localStorage.removeItem("uni");
        // add new local 
        localStorage.setItem("uni",JSON.stringify(tt) );
        location.reload();
     }
     function edit2(e) {
        var t=[];
        var useredit={
        }
        useredit.key=e;
        useredit.nature="uni";
        t.push(useredit);
        localStorage.setItem("edit",JSON.stringify(t));
        location.replace('///home/hamza/Desktop/first%20project/edit2.html')
    }