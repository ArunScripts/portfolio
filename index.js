// console.log("love of life");

var tablinks = document.getElementsByClassName('tab-links')
var tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-links") 
        }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    } 
    event.currentTarget.classList.add("active-links")
    document.getElementById(tabname).classList.add("active-tab")   
    }

var sidem=document.getElementById('sidemenu');

function openmenu(){
    sidem.style.right='0'
}
function closemenu(){
    sidem.style.right='-200px'
}



  const scriptURL = 'https://script.google.com/macros/s/AKfycbwGgE1BXaduNKzXlKTSr-rp85q0oJJ1YsNS1OrHzrXvnwQGcKzrEZ2QsfEqUPHqRjB-/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg =document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },4000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
