

$(document).ready(()=>{
  $('#buttlogin').on("click",()=>{
    const re =  /^([a-z\d\.-]+)@([a-z\d-+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    $userNameValue = $('#username').val();
    if ($userNameValue != re){
        $('.invalid-email').show()

    }
  })
$(".createbutt").on("click",() =>{
    $(".createacc").toggle()
})



})

const userName = document.getElementById("username");

function validateEmail(email) {
    const re =  /^([a-z\d\.-]+)@([a-z\d-+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    return re.test(email); 
  }
 function validateLogin(){
     if (userName!=validateEmail(email)){
         console.log("no")
     }


 };
 const button = document.getElementById('buttlogin');

 button.addEventListener("click",function() {
     console.log("help")
 });
