
function signup(){
    let Femail = document.getElementById("email").value
    let Fpass = document.getElementById("pswd").value
    let Fname = document.getElementById("name").value

    let user_record = new Array();
    user_record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_record.some((user_record_value) => {
        return user_record_value.email == Femail 
    })){ 
        alert("Duplicate Data ! Enter unique email") 
       }
    else{
        let thelength = /.{8,32}/
        let specialCase = /[^A-Za-z0-9]/
        let lowercase = /[a-z]/
        let uppercase = /[A-Z]/
        let numberCase = /[0-9]/
        if(
            thelength.test(Fpass) && specialCase.test(Fpass) && lowercase.test(Fpass) && uppercase.test(Fpass) && numberCase.test(Fpass)
        ){
            //alert('good password')
            user_record.push({
                "email" : Femail,
                "pass": Fpass,
                "name":Fname
            })
            localStorage.setItem("users",JSON.stringify(user_record))
            alert("Successfully Signup!")
        }

        else{
            alert('length must be between 8 to 32, atleast one specialCase,lowercase,lowercase,numberCase')
        }
   
    }

}

function login(){
 
    let Femail = document.getElementById("Logemail").value
    let Fpass = document.getElementById("Logpswd").value
  //  if(remb.checked && Femail.value !== "" && Fpass.value !== "" ){

    let user_record = new Array();
    user_record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_record.some((user_record_value) => {
        return user_record_value.email == Femail && user_record_value.pass == Fpass
    })){
        alert("Login Successfull !")
        let current_user = user_record.filter((v) =>{
            return v.email == Femail && v.pass == Fpass
        })[0]
      
        localStorage.setItem('name', current_user.name);
        localStorage.setItem('email', current_user.email);
        localStorage.setItem('password', current_user.pass);
       // localStorage.setItem('checkbox', remb.value);
       
        // window.location.href("/project0/SignInUp/profile.html")
        window.open('miniproject.html', '_blank', 'noopener, noreferrer');
      
    }
    else{
        alert("Oops! login failed")
    }
}

function logout(){
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    window.open('index.html', '_self', 'noopener, noreferrer');
}



