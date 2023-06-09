
const enter=()=>{
let em =document.getElementById(`em`).value
let pass =document.getElementById(`pass`).value
let num =document.getElementById(`num`).value
if( em =="syedvali@gmail.com" && pass =="123456789" && num =="0987654321" ){

  localStorage.setItem('auth',true)
window.location.href="index2.html"
}
else{
document.getElementById('email').style.display='flex'

setTimeout(form,1000)
setTimeout(myload)

}
}

// const myone=()=>{
  
// setTimeout(form,1000)
// setTimeout(myload)


// }


const form=()=>{
  document.getElementById('mainid').style.display='flex'
}

const myload=()=>{
  document.getElementById(`loading`).style.display=`flex`
  document.getElementById('first').style.display='none'
  
}


const Verify=()=>{
  if(localStorage.auth){
    window.location.href="index2.html"
  }
  else{
 
  }
  
  }
  
  Verify()