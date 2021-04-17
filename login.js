//declaration //
var inputemail;
var inputpass;
var x=JSON.parse(localStorage.getItem('students')) || [];
var z=JSON.parse(localStorage.getItem('Admin')) ||[];
var y=JSON.parse(localStorage.getItem('uni')) ||[];
var key;


function login() {
    var keytab=[];
    var emailvalid=false ;
    user={
    };
    inputemail=document.getElementById('emailinput').value;
    inputpass=document.getElementById('passlog').value;
    if (inputemail==false) {//checking email empty or not + error msg //
     document.getElementById('wronglog').innerHTML="This feild is required .";
     

    }
    else{ // checking email existancy 
        if (x.length || y.length || z.length ) {
            if (x.length) { // checking 
                for (let i = 0; i < x.length; i++) {
                    if (inputemail==x[i].email ) {
                        user.key=i;
                        user.nature='students';
                        keytab.push(user)
                        localStorage.setItem("key",JSON.stringify(keytab));  
                      
                        emailvalid=true;
                        break
                    }
                    else{
                        document.getElementById('wronglog').innerHTML="This Email is  wrong  or invalid  .";
                        
                    }
                }
            }
            if (y.length) {
                for (let j = 0; j < y.length; j++) {
                    if (inputemail==y[j].email) {
                        user.key=j;
                        user.nature="uni";
                        keytab.push(user);
                        localStorage.setItem("key",JSON.stringify(keytab));
            
                        emailvalid=true;
                        break
                    }
                    else{
                        document.getElementById('wronglog').innerHTML="This Email is  wrong  or invalid .";
                        
                        
                    }
                }
            }
            if (z.length) {
                for (let p = 0; p < z.length; p++) {
                    if (inputemail==z[p].email) {
                        user.key=p;
                        user.nature="Admin";
                        keytab.push(user);
                        localStorage.setItem("key",JSON.stringify(keytab));
                        emailvalid=true;
                       
                        break
                    }
                    else{
                        document.getElementById('wronglog').innerHTML="This Email is  wrong  or invalid .";
                    }
             }
            }
        }
        else{
            document.getElementById('wronglog').innerHTML="This Email is  wrong  or invalid . If you Dont have an account Yet you can register using the link down below .<i style='color:blue' class='fas fa-arrow-circle-down'></i>";
        }

    }
    if (emailvalid ) {
        document.getElementById('wronglog').innerHTML=""
        var key =JSON.parse(localStorage.getItem('key'))[0].key;
        var nature=JSON.parse(localStorage.getItem('key'))[0].nature;
        var match=JSON.parse(localStorage.getItem(nature))[key].password;
    }

    var pass=false
    if (!inputpass) {
        document.getElementById('wrongpass').innerHTML='This feild is required , it can not be empty .'
    } 
    else{
        if (match==inputpass) {
            pass=true
        }
        else{
            document.getElementById('wrongpass').innerHTML='The password you have entred is Incorrecte .'
        }
    }
  if (pass && emailvalid) {
    if (nature=="students") {
        location.replace('///home/hamza/Desktop/first%20project/petudiant.html')
    }
    if (nature=="uni") {
        location.replace('///home/hamza/Desktop/first%20project/puniv.html')
    }
    if (nature=='Admin') {
        location.replace('///home/hamza/Desktop/first%20project/padmin.html')
    }
  }

}







