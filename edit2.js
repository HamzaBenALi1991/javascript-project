// get the key user from local storage and information // 
var key =JSON.parse(localStorage.getItem('edit'))[0].key;
var nature=JSON.parse(localStorage.getItem('edit'))[0].nature;
var univ=JSON.parse(localStorage.getItem(nature))[key]
document.getElementById('progileimage').src=univ.image;
// putting the name into the strong element //

document.getElementById('name').innerHTML= '    ' +univ.name ;
document.getElementById('adress').innerHTML=" "+univ.adress;
document.getElementById('email').innerHTML=" "+univ.email;
document.getElementById('loc2').innerHTML=" "+univ.location;

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
document.getElementById('name2').value=univ.name;
document.getElementById('adress2').value=univ.adress;
document.getElementById('email2').value=univ.email
document.getElementById('loc3').value=univ.location;
// function for save modification // 
function save() {
    // stocking new infos
    var user ={
    }
    user.name=document.getElementById('name2').value;
    user.adress=document.getElementById('adress2').value;
    user.location=document.getElementById('loc3').value;
    user.email=univ.email;
    user.password=univ.password;
    user.image=univ.image;
    

    // get the users infos from local storage iinto an array 
    var  stab=JSON.parse(localStorage.getItem("uni")) || [] ;
    // remove old infos 
    stab.splice(key,1);
    // remove old local storage // 
    localStorage.removeItem("uni");
    // put new information  into local storge// 
    stab.push(user);
    localStorage.setItem("uni",JSON.stringify(stab) );
    // change the key user then reload //

    if (JSON.parse(localStorage.getItem('key'))[0].nature=='uni') {
        location.replace("///home/hamza/Desktop/first%20project/puniv.html");
    } else {
        location.replace("///home/hamza/Desktop/first%20project/padmin.html");
    }
    
}
function deco() {
    location.replace('///home/hamza/Desktop/first%20project/login.html')
}
