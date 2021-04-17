
function checkoption(drone) {// function for option between student / superadmin /university //
    var x =drone ;
    if (x=="Etudiant") {
        document.getElementById('student').className="row justify-content-center white"
        document.getElementById('ss').className="row justify-content-center s";
        document.getElementById('uni').className="row justify-content-center s";
        
    }
     else if (x=="University") {
        document.getElementById('uni').className='row justify-content-center white'
        document.getElementById('ss').className="row justify-content-center s";
        document.getElementById('student').className='row justify-content-center s'
    } 
    else {
        document.getElementById('uni').className='row justify-content-center s'
        document.getElementById('ss').className="row justify-content-center white ";
        document.getElementById('student').className='row justify-content-center s '
    }
}
//les declaration de variable à travailler for university  //
var Uname;
var Ulocation;
var Uadress;
var Umail;
var Upassword;
var Upassword2;
var Uimage;
var Utab=[]; // tableau pour remplir local storage
var regexname =/^[A-Z][a-zA-Z0-9\s]{2,50}$/; // regex name correct //
var regexpassword=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ ; // regex for password 
var regexmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// declaration global for student // 
var stab=[];




function ucheck() {
    var x = JSON.parse(localStorage.getItem("uni",Utab));// tout les object on local storage key uni //
    var y = JSON.parse(localStorage.getItem("students",stab));
    var z = JSON.parse(localStorage.getItem("Admin",tabadmin));

    var university={
  
    }
    Utab= JSON.parse(localStorage.getItem("uni")) || [] ;
    Uname=document.getElementById('instituion').value;
    Ulocation=document.getElementById('location').value;
    Uadress=document.getElementById('Sadress').value;
    Umail=document.getElementById('uemail').value;
    Upassword=document.getElementById('Upassword').value;
    Upassword2=document.getElementById('Upassword2').value;
    if (document.getElementById('Uimage').value ) { // in case the user does not provide an image // 
        Uimage=document.getElementById('Uimage').files[0].name 
    }
    else{
        Uimage="Uimage.jpg"
    }
    
    university.image=Uimage ;// registration for unvi
   if (Uname == false || Uname.match(regexname)==null )  { // verifie le nom si correct et none vide //
          if (Uname == false ) {
              document.getElementById('wrongname').innerHTML="This feild must be completed ,The name of the Institution is required";
          } 
          else {
            document.getElementById('wrongname').innerHTML='Please check this feild again , the name Format is wrong'
          }      
   } 
   else {
       document.getElementById('wrongname').innerHTML=""
       university.name=Uname;
       
   }
   if (Ulocation ==false || Ulocation.match(regexname)==null) { //  verifie location  si correct et none vide  //
       if (Ulocation ==false ) {
           document.getElementById('wronglocation').innerHTML='This feild is required , it can not be empty '
       }
        else {
            document.getElementById('wronglocation').innerHTML="Please do check the location again , something is apparently wrong"
       }
   } 
   else {
       document.getElementById('wronglocation').innerHTML=""
       university.location=Ulocation;

   }
   if (Uadress ==false ) { // verification if adress is null or not // 
       document.getElementById('wrongadress').innerHTML='This feild is not optional ';
   } 
   else {
    document.getElementById('wrongadress').innerHTML=""
    university.adress=Uadress;
   }
   if (Upassword ==false || Upassword.match(regexpassword)==null) {// verfication password null or invalid 
       if (Upassword ==false ) {
        document.getElementById('wrongpassword').innerHTML='This feild is required ';
       } else {
        document.getElementById('wrongpassword').innerHTML="Your password must contain Minimum eight characters, at least one capital letter and one number."
       }
   }
    else {
    document.getElementById('wrongpassword').innerHTML="";
    university.password=Upassword ; 
   }
   if (Upassword2 !=Upassword  || Upassword==false ) { // validité de confiramtion de pasword // 
       if (Upassword==false ) {
             document.getElementById('wrongpassword2').innerHTML='Your Forgot to put your Password. ';
       } 
       else {
             document.getElementById('wrongpassword2').innerHTML='Please make sure the Password is the same ';
             
       }
   } 
   else {
    document.getElementById('wrongpassword2').innerHTML="";
    var Passwordconfirmation =true ;
    
   }
    if (x!=null || y!=null || z!=null ) { // validation email //
        var valid=true;
      
        if (Umail ==false) { // check email false // 
            document.getElementById('wrongemail').innerHTML='This feild is required ';
            valid=false;
          
        } 
        else if(Umail.match(regexmail)==null) {  // email valid regex//
            document.getElementById('wrongemail').innerHTML='Your email seems Invalid , Please check again .';
            valid=false;
            
        }
        else{
         
            if (x!=null) {
     
                for (let i = 0; i < x.length; i++) {
                    if (x[i].email== Umail && valid) {
                        valid=false;
                        document.getElementById('wrongemail').innerHTML='This account Email already exist on our Universities Databaase .'
                    }  
                }
             }
             if (y!=null ) {
               
                 for (let j = 0; j < y.length; j++) {
                     if (y[j].email== Umail && valid) {
                        valid=false;
                        document.getElementById('wrongemail').innerHTML='This account Email already exist on our Student Database .'
                     }
                     
                 }
             }if (z!=null) {
          
                 for (let k = 0; k < z.length; k++) {
                     if (z[k].email== Umail && valid) {
                        valid=false;
                        document.getElementById('wrongemail').innerHTML='This account Email already exist on our Admins Database .'
                     }
                     
                 }
             }
        }
        if (valid == true ) {
            document.getElementById('wrongemail').innerHTML="";
            university.email=Umail;
        }
     
     
    }
    
    else {  
        if (Umail ==false || Umail.match(regexmail)==null) {
            if (Umail ==false) {
                document.getElementById('wrongemail').innerHTML='This feild is required ';
            } 
            else  {
                document.getElementById('wrongemail').innerHTML='Your email seems Invalid , Please check again .';
            }        
    } 
        else {
            document.getElementById('wrongemail').innerHTML="";
            university.email=Umail;
         
        }
    } 
  
    ////// putting infos into local storage //////////
    if (university.name && university.location &&university.adress && university.email && university.password  && university.image && Passwordconfirmation) {
        Utab.push(university);
        localStorage.setItem("uni",JSON.stringify(Utab)); 
        location.replace("file:///home/hamza/Desktop/first%20project/login.html")
   
    }
        
       
    }
    ////////////////// student inscrition //////////////////
    var sname;
    var slastname;
    var sadress;
    var smail;
    var spassword;
    var spassword2;
    var simage;
    var suniv;
    var y = JSON.parse(localStorage.getItem("uni",Utab));
    var list =''
    
    if(y){
        for (let i = 0; i < y.length; i++) { // list of university loaded from localstorage //
        list =list + '<option value= "'+y[i].name+'"> '; // loading list//
         }
    }
    else{
        document.getElementById('screens.screenid').className="infos erase"
    }
    document.getElementById('screens.screenid-datalist').innerHTML=list ;// implimenting into the Html page//

    function scheck() { // function on click btn registration  student //
        var student={
        };
        
        var x = JSON.parse(localStorage.getItem('students',stab));
        var y = JSON.parse(localStorage.getItem('uni',Utab));
        var z =JSON.parse(localStorage.getItem("Admin",tabadmin));

        stab=JSON.parse(localStorage.getItem("students")) || [] ;
        
        
        if (document.getElementById('simage').value ) { // collect student image imput  // 
            simage=document.getElementById('simage').files[0].name ;
        }
        else{
            simage="Uimage.jpg"; // in case the user does not provide an image // 
        }
        student.image=simage; // setting the student image 
        // collecting the name input and verfication // 
        spassword=document.getElementById('Passworduser').value;
        spassword2=document.getElementById('Passworduser2').value;
        sname=document.getElementById('fname').value ;
        sadress=document.getElementById('SAdress').value ;
        smail=document.getElementById('Semail').value ; 
        slastname=document.getElementById('lname').value;
        sage=document.getElementById('SDateofbirth').value;
        suniv=document.getElementById('screens.screenid').value;      
        // checking the name validity // 
        if (sname ==false || sname.match(regexname)==null ) {
            if (sname ==false) {
                document.getElementById('invalidname').innerHTML="This feild is required" ; // error msg//
            } 
            else {
                document.getElementById('invalidname').innerHTML="Please make sure the first letter is Capital or the format is correct" ;
            }
        }
         else {// implimenting the input into the student object // 
            document.getElementById('invalidname').innerHTML="";//removing error msg // 
            student.name=sname;
        }     
        // checking validté lastname // 
        if (slastname ==false || slastname.match(regexname)==null) {// last name test validty // 
            if (slastname ==false ) {
                document.getElementById('invalidlastname').innerHTML="This feild is required"; //eroor msg//
            } 
            else {
                document.getElementById('invalidlastname').innerHTML="Please make sure the first letter is Capital or the format is correct";
            }   
        }
         else {// implimenting the input valid //
            document.getElementById('invalidlastname').innerHTML="";//removing error msg //
            student.lastname=slastname;
        } 
        // checking adress validty //
        if (sadress== false ) { // test address empty or not // 
            document.getElementById('falseadress').innerHTML="This feild can not be empty . ";
        } 
        else { // collecting the correct input // 
            document.getElementById('falseadress').innerHTML="";
            student.adress=sadress;
        }
        if (x!=null || y!=null || z!=null)  { // check email in the students/university data base   // 
            var valid = true ;
            if (smail == false || smail.match(regexmail)==null) {
                if (smail == false ) { // check if email input is void // 
                    document.getElementById('invalidemail').innerHTML="This feild is required . "; 
                    valid=false;
                    
                } 
                else { // check email is correct according to regex// 
                    document.getElementById('invalidemail').innerHTML="Please make sure the format of Email is correct . ";
                    valid=false;
                   
                }
            } 
            else { // CHECKING EMAIL existancy
                    if (x!=null) { // checking email existancy in the student data base //
                        
                        for (let i = 0; i < x.length; i++) { // check existance of email in the database // 
                            if (x[i].email== smail  ) {
                                document.getElementById('invalidemail').innerHTML="This email already used by one of our the Students .";
                                valid=false ;  
                            }
                        }
                    }
                    if (y!=null) {// checking email existancy in the universities data base // 
                        for (let j = 0; j < y.length; j++) {
                            if (y[j].email== smail) {
                                document.getElementById('invalidemail').innerHTML="This email already used by one of the Universities  .";
                                valid=false ; 
                            }
                        }
                    }
                    if (z!=null) {// checking email existancy in the admins data base // 
                        for (let k = 0; k < z.length; k++) {
                            if (z[k].email==smail) {
                                document.getElementById('invalidemail').innerHTML="This email already used by one of the Admins  .";
                                valid=false ;
                            }
                        }
                    }
            }
            if (valid ) {// collecting correct input //
                document.getElementById('invalidemail').innerHTML="";
                student.email=smail;
            }
        }
         else {// first inscription for a student in  the site 
            var valid =true ; 
            if (smail == false || smail.match(regexmail)==null) {
                if (smail == false ) {
                    document.getElementById('invalidemail').innerHTML="This feild is required . "; 
                    valid=false ; 
                } 
                else {
                    document.getElementById('invalidemail').innerHTML="Please make sure the format of Email is correct . ";
                    valid=false ;
                  
                }
            } 
            if (valid) {
                document.getElementById('invalidemail').innerHTML="";
                student.email=smail;
            }
        }
        // collecting student university inut  if true //
       if (suniv) {
           document.getElementById('univempty').innerHTML="";
           student.university=suniv;
    
       } 
       else {
        document.getElementById('univempty').innerHTML="You must choose a University among the options , if there is no option come again later. ";
       }
       // password test validty and inpmlimentation into my student object //
       if (spassword==false || spassword.match(regexpassword)==null) {
           if (spassword==false ) {
               document.getElementById('invalidpass').innerHTML='The feild is required .'
           } else {
               document.getElementById('invalidpass').innerHTML='our password must contain Minimum eight characters, at least one capital letter and one number. '
           }
       } 
       else {
        document.getElementById('invalidpass').innerHTML='';
        student.password=spassword;
       }
       // password confirmation 
       if (spassword2) {
           
           if (spassword ==false || spassword !=spassword2 ) {
               if (spassword ==false ) {
                document.getElementById('invalidpass2').innerHTML='You forgot to write your passord .';
               } else {
                document.getElementById('invalidpass2').innerHTML='the two passwords does not match .';
               }
           } 
           else {
            document.getElementById('invalidpass2').innerHTML='';
            var sPasswordconfirmation;
            sPasswordconfirmation=true ; 
           }
       } 
       else {
           document.getElementById('invalidpass2').innerHTML='This feild is required'
       }
       // student age input verification //
       if (sage) {
                  // calculating student age 
                  var text;
                  text="'"+sage +"'";
                  var ageinput;
                  ageinput =new Date(text);
                 //calculate month difference from current date in time  
                  var month_diff = Date.now() - ageinput.getTime();  
      
                  var age_dt = new Date(month_diff);   
                  //now calculate the age of the user  
                  var age;
                   age = Math.abs(age_dt.getUTCFullYear() - 1970); 
                   student.Age=age;
                   document.getElementById('ageinvalid').innerHTML="";
       } 
       else {
           document.getElementById('ageinvalid').innerHTML="This feild is required ";
       }
        if (student.email && student.image && student.lastname && student.lastname && student.password && student.university && student.Age && student.adress && sPasswordconfirmation) {
            stab.push(student);
            localStorage.setItem("students",JSON.stringify(stab));
            location.replace("file:///home/hamza/Desktop/first%20project/login.html")
        }           
    }
// admin registration //
    localStorage.setItem('AdminSuperKey', "Hamza");
// declaration tableau pour admins information //
var tabadmin=[0];
var adminname;
var adminlastname;
var adminemail;
var adminpassword;
var admin={

};

    function checkadmin() {
        
        // collecting infos from localstorage //
        var x = JSON.parse(localStorage.getItem('students',stab));
        var y = JSON.parse(localStorage.getItem('uni',Utab));
        var z =JSON.parse(localStorage.getItem('Admin',tabadmin));
        // collecting input //
        tabadmin =JSON.parse(localStorage.getItem("Admin")) || [] ;
        adminemail= document.getElementById('adminemail').value;
        adminpassword=document.getElementById('adminownkey').value;
        adminname=document.getElementById('adminName').value;
        adminlastname=document.getElementById('adminlastName').value;
        // checking name validity + error msg //
        if (adminname==false || adminname.match(regexname)==null) {
            if (adminname==false) {
                document.getElementById('wrongadminame').innerHTML="This Feild is required .";
            } 
            else {
                document.getElementById('wrongadminame').innerHTML="The format of the name is wrong , try with First letter capital or check the format .";
            }
        }
        else{
            document.getElementById('wrongadminame').innerHTML="";
            admin.name =adminname ; 
        }
        // checking lastname validty + error msg //
        if (adminlastname == false || adminlastname.match(regexname)==null) {
            if (adminlastname == false) {
                document.getElementById('adminlastnamewrong').innerHTML="This feild is required ."
            } 
            else {
                document.getElementById('adminlastnamewrong').innerHTML="The format of the name is wrong , try with First letter capital or check the format .";
            }
        }
         else {
            document.getElementById('adminlastnamewrong').innerHTML="";
            admin.lastname=adminlastname;
        }
        // checking admin super key //
        var keyvalid;
        if (localStorage.getItem('AdminSuperKey')== document.getElementById('passwordadmin').value) {
            document.getElementById('passwordadminwrong').innerHTML="";
            keyvalid=true;
        } 
        else {
            keyvalid=false;
            document.getElementById('passwordadminwrong').innerHTML='This KEY is not valid .';
        }
        if (adminpassword ==false || adminpassword.match(regexpassword)==null ) {// checking own password empty or invalid
            if (adminpassword ==false ) {// if password input is empty
                document.getElementById('adminwrongpassword').innerHTML="This feild is required . ";
            } else {// if password is invalid // 
                document.getElementById('adminwrongpassword').innerHTML="Your password must contain Minimum eight characters, at least one capital letter and one number. ";
            }
        } 
        else {// password valid and stocking it into admin object data // 
            document.getElementById('adminwrongpassword').innerHTML="";
            admin.password=adminpassword;
        }
        if (x!=null || y!=null || z!=null ) { // checking email validité under condition local storage is not completly empty
            var emailvalid =true ; 
            if ( adminemail== false ) {// in case empty email input 
                emailvalid =false ;
                document.getElementById('emailadminwrong').innerHTML='This feild is required .';
            }
            else if ( adminemail.match(regexmail)==null && emailvalid) {
                emailvalid=false;
                document.getElementById('emailadminwrong').innerHTML='Please check the email Format  .';
            }
            else {// checking email in the student /univ/admin data base existancy //
                if (x!=null) {
                    for (let i = 0; i < x.length; i++) {
                        if (x[i].email==adminemail) {
                            emailvalid=false;
                            document.getElementById('emailadminwrong').innerHTML='This email already exist , and used by one of the Students.';
                        }
                        
                    }
                }
                if (y!=null) {
                    for (let j = 0; j < y.length; j++) {
                        if (y[j].email==adminemail) {
                            document.getElementById('emailadminwrong').innerHTML='This email already exist , and used by one of the Universites.';
                            emailvalid=false;
                        }            
                    }
                }
                if (z!=null) {
                    for (let k = 0; k < z.length; k++) {
                        if (z[k].email==adminemail) {
                            document.getElementById('emailadminwrong').innerHTML='This email already exist , and used by one of the Admins.';
                            emailvalid=false;
                        }
                        
                    }
                }
            }
            if (emailvalid) {// validate the input and stocking it into data admin object
                document.getElementById('emailadminwrong').innerHTML='';
                admin.email=adminemail;
            }
            
        }
         else {// first one to register on site 
            if (adminemail== false ) {
                document.getElementById('emailadminwrong').innerHTML='This feild is required .';
            } 
            else if(adminemail.match(regexmail)==null) {
                document.getElementById('emailadminwrong').innerHTML='Please do check the format of the email  .';
            }
            else{
                document.getElementById('emailadminwrong').innerHTML='';
                admin.email=adminemail;
            }
        }
      
        if (keyvalid && admin.name && admin.lastname && admin.password && emailvalid &&admin.email) {
            tabadmin.push(admin);
            localStorage.setItem("Admin",JSON.stringify(tabadmin));
            location.replace("file:///home/hamza/Desktop/first%20project/login.html")
        }
    }

    
    

    
