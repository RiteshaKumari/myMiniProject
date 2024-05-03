//---------------------------------------------------------------------NAVBAR-----------------------------

let sidebar = document.querySelector('.side-bar')
let closebtn = document.querySelector('.close-btn')
let submenu = document.querySelector('.submenu')

function showMenu(){
    sidebar.style.left="0px"
    closebtn.style.visibility ="visible"
}

function hideMenu(){
  sidebar.style.left="-290px"
 }

function drop(){
 if(submenu.style.display == "none"){
    submenu.style.display = "block"
 }
 else{
    submenu.style.display = "none"
 }
}


//-------------------------------------------------------------------TODOLIST-----------------------------

let todoinput = document.querySelector('#addtodoitem')
let Addbtn = document.querySelector('#AddItem')
let HideItem = document.querySelector('#HideItem')
let Hide = document.querySelector('.Hide')
let todolist = document.querySelector('.todolist')
let todolist1 = document.querySelector('.todolist1')
let todolist2 = document.querySelector('.todolist2')
let i = document.querySelector('i')



Hide.addEventListener('click', ()=>{
   if(todolist.style.display == "flex"){
      todolist.style.display =  "none"
      HideItem.innerHTML="ShowItem"
   }
   else{
      todolist.style.display =  "flex"
      HideItem.innerHTML="HideItem"
   }
})

function addTodoItem(){
  if(addtodoitem.value == " "){
   // alert("Enter the list item please !")
  
   errortoast()
   

  }
  else{
   
   
    let div1 = document.createElement('div')
    div1.classList.add('todolist1')
   
    
    let ul = document.createElement('ul')
    
    let li = document.createElement('li')
    
    li.innerHTML = todoinput.value

       todoinput.value = " "

    ul.append(li)
    div1.append(ul)

   
   let div2 = document.createElement('div')
   div2.classList.add('todolist2')


   let i3 = document.createElement('i')
   i3.classList.add('fa-solid', 'fa-trash-can')
   div2.append(i3)
   div1.append(div2)
   todolist.append(div1)

   div1.querySelector("i").addEventListener("click", remove) 
   function remove(){
     
      div1.remove()
   }  
   
  }
  
}

Addbtn.addEventListener('click',()=>{
   addTodoItem()

})

todoinput.addEventListener('keyup', (e)=>{
   if(e.which == 13){
      addTodoItem()
   }
})

// -------------------------------------------------------------------------------Toast------------------------
let notifications = document.querySelector('.notifications');
   //  let success = document.getElementById('success');
   //  let error = document.getElementById('error');
   //  let warning = document.getElementById('warning');
   //  let info = document.getElementById('info');
    
    function createToast(type, icon, title, text){
        let newToast = document.createElement('div');
        newToast.innerHTML = `
            <div class="toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>
            </div>`;
        notifications.appendChild(newToast);
        newToast.timeOut = setTimeout(
            ()=>newToast.remove(), 5000
        )
    }
   //  success.onclick = function(){
   //      let type = 'success';
   //      let icon = 'fa-solid fa-circle-check';
   //      let title = 'Success';
   //      let text = 'This is a success toast.';
   //      createToast(type, icon, title, text);
   //  }

   //  error.onclick = function(){
      //   let type = 'error';
      //   let icon = 'fa-solid fa-circle-exclamation';
      //   let title = 'Error';
      //   let text = 'This is a error toast.';
      //   createToast(type, icon, title, text);
   //  }
   function errortoast(){
      let type = 'error';
      let icon = 'fa-solid fa-circle-exclamation';
      let title = 'Error';
      let text = 'Enter the list item please !';
      createToast(type, icon, title, text);
   }
   //  warning.onclick = function(){
   //      let type = 'warning';
   //      let icon = 'fa-solid fa-triangle-exclamation';
   //      let title = 'Warning';
   //      let text = 'This is a warning toast.';
   //      createToast(type, icon, title, text);
   //  }


   //  info.onclick = function(){
   //      let type = 'info';
   //      let icon = 'fa-solid fa-circle-info';
   //      let title = 'Info';
   //      let text = 'This is a info toast.';
   //      createToast(type, icon, title, text);
   //  }

//-------------------------------------------------------------------------------CALCULATOR------------------------


//-------------------------------------------------------------------------------COUNTDOWN------------------------

let hrs=document.querySelector('#hrs')
let min=document.querySelector('#min')
let sec=document.querySelector('#sec')
let fra=document.querySelector('#fra')
let limithrs=document.querySelector('#limithrs')
let limitmin=document.querySelector('#limitmin')
let limitsec=document.querySelector('#limitsec')

 let hour 
 let minu  
 let seco 
 let frac 
 let timer=false
 function Start(){
   timer=true

   if(limithrs.value == "" && limitmin.value == "" && limitsec.value == "" ){
   alert("First limit your time !")
   window.location.Restart()

  }
  if(limithrs.value == ""){
   limithrs.value =  0
}

if(limitmin.value == ""){
   limitmin.value =  0
}

if(limitsec.value == ""){
   limitsec.value =  0
}
 // console.log(limithrs.value)
limithrs.addEventListener('change',(e)=>{
   limithrs.value = e.target.value
 })

 limitmin.addEventListener('change',(e)=>{
   limitmin.value = e.target.value
 })

 limitsec.addEventListener('change',(e)=>{
   limitsec.value = e.target.value
 })
   hour = limithrs.value
    minu = limitmin.value 
    seco = limitsec.value
   frac = 60

 stopwatchsec()
}



 function Restart(){
  timer=false

hour = 0
minu = 0
seco = 0
frac = 0

  hrs.innerHTML= "00"
  min.innerHTML= "00"
  sec.innerHTML= "00"
  fra.innerHTML= "00"
 }

 function stopwatchsec(){
 if(timer == true){

   if(frac != 0 ){

      frac = frac -1
     
   }
   else{
     
      if(seco != 0){
     
    
         frac = 60
         seco = seco -1
      }
      else{
         if(minu != 0){
         
            
            seco = 60
            frac = 60
            minu = minu - 1
         }
         else{
           if(hour != 0){
         
            frac = 60
            seco = 60
            minu = 60
            hour = hour - 1
           }
         else{
            timer = false
            hour = 0
            frac = 0
            minu = 0
            seco = 0
           
           }
       }
      
      }
      
   }
   
}
let se= seco
let hr= hour
let mi= minu
let fr= frac
if(se < 10){
  se = "0" + se;
}

if(hr < 10){
  hr = "0" + hr;
}

if(mi < 10){
  mi = "0" + mi;
}

if(fr < 10){
  fr = "0" + fr;
}

sec.innerHTML=se 
min.innerHTML=mi
hrs.innerHTML=hr
fra.innerHTML=fr

setTimeout("stopwatchsec()",10) 
}
function showcountdown(){
   if(limithrs.value == "" && limitmin.value == "" && limitsec.value == "" ){
      alert("First limit your time !")
      window.location.Restart()
   
     }
   watchCover = document.querySelector('.watchCover')
   inp = document.querySelector('.inp')
   watchCover.style.display = "flex";
   inp.style.disabled = "none";
}

// -------------------------------------------------------------------------------GUESSTHENUMBER------------------------

function a(){
let guessnum = document.querySelector('#guessnum')
let guessubmit = document.querySelector('#submit')   
let StartGame = document.querySelector('#StartGame') 
let regards = document.querySelector('#regards') 
let yourGuesses = document.querySelector('#yourGuesses')  
let form = document.querySelector('form')
let guessStr 

let arr = []
let computerNUM = Math.floor(Math.random() * (100 - 0 + 1) ) + 0;


form.addEventListener('submit',(e)=>{
  
   //debugger
   e.preventDefault()
   console.log(computerNUM)
   if(guessnum.value < 0 || guessnum.value > 100 || guessnum.value == ""){
      alert('Please guess a valid number !')
   }
   else{
    
      if(guessnum.value > computerNUM){
         regards.innerHTML = "Guessed too high number !"
       
      }
      if(guessnum.value < computerNUM){
         regards.innerHTML = "Guessed too low number !"
        
      }
      
      if(guessnum.value == computerNUM){
         regards.innerHTML = "CONGRATULATION ! You guessed perfect 👍"
         guessubmit.disabled = true
         StartGame.disabled = false
        
      }

      arr.push(guessnum.value)
      guessStr = arr.join(', ')
      yourGuesses.innerHTML = `Your guesses are : ${guessStr}`
      guessnum.value = ""
   }


})

StartGame.addEventListener('click',()=>{
   regards.innerHTML = ""
   yourGuesses.innerHTML = ""
   arr = []
   guessubmit.disabled = false
   computerNUM = Math.floor(Math.random() * (100 - 0 + 1) ) + 0;
})

}
a();

// -------------------------------------------------------------------------------AUTOTYPINGTEXTEFFECT------------------------