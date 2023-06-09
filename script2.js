
const Verify=()=>{
    if(localStorage.auth){
    
    }
    else{
      window.location.href="index.html"
    }
    
    }
    
    Verify()



    const Logout=()=>{

        document.getElementById('myloader').style.display="flex"
        setTimeout(mainLogoutFunction,3000)
    }


    const mainLogoutFunction=()=>{
        
        document.getElementById('myloader').style.display="none"
        localStorage.removeItem('auth')
        window.location.href="index.html"

    }