// get the key student from local storage and information // 
var key =JSON.parse(localStorage.getItem('edit'))[0].key;
var nature=JSON.parse(localStorage.getItem('edit'))[0].nature;
var Student=JSON.parse(localStorage.getItem(nature))[key]
document.getElementById('progileimage').src=Student.image;
// get the key student from local storage and information // 
var key1 =JSON.parse(localStorage.getItem('key'))[0].key;
var nature1=JSON.parse(localStorage.getItem('key'))[0].nature;
var Student1=JSON.parse(localStorage.getItem(nature))[key]
document.getElementById('progileimage').src=Student.image;
// putting the name into the strong element //
document.getElementById('strong').innerHTML=Student.name + " " + Student.lastname;
document.getElementById('Name').innerHTML= '    ' +Student.name ;
document.getElementById('lname').innerHTML=" "+Student.lastname;
document.getElementById('email').innerHTML=" "+Student.email;
document.getElementById('adress').innerHTML=" "+Student.adress;
document.getElementById('univer').innerHTML=" "+Student.university;
document.getElementById('email').innerHTML=" "+Student.email;
document.getElementById('age').innerHTML= Student.Age + " " +" Years Old"
// function for display upon clock on modifie button // 
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
// concernant modifie le profile // 
document.getElementById('name2').value=Student.name;
document.getElementById('lastname2').value=Student.lastname;
document.getElementById('adress2').value=Student.adress;
document.getElementById('email2').value=Student.email
document.getElementById('Age2').value=Student.Age;
document.getElementById('univer2').value=Student.university;
// function for save modification // 
function save() {
    // stocking new infos
    var user ={
    }
    user.name=document.getElementById('name2').value;
    user.lastname=document.getElementById('lastname2').value;
    user.Age=document.getElementById('Age2').value;
    user.adress=document.getElementById('adress2').value;
    user.email=Student.email;
    user.password=Student.password;
    user.image=Student.image;
    user.university=Student.university;

    // get the users infos from local storage iinto an array 
    var  stab=JSON.parse(localStorage.getItem("students")) || [] ;
    // remove old infos 
    stab.splice(key,1);
    // remove old local storage // 
    localStorage.removeItem("students");
    // put new information  into local storge// 
    stab.push(user);
    localStorage.setItem("students",JSON.stringify(stab) );
    // change the key user then reload //

    if (nature1=='uni') {
        location.replace("///home/hamza/Desktop/first%20project/puniv.html");
    } else {
        location.replace("///home/hamza/Desktop/first%20project/padmin.html");
    }
    
}
function deco() {
    location.replace('///home/hamza/Desktop/first%20project/login.html')
}
