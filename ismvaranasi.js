var modal= document.getElementById("id01")

// when the user click anywhere outside of the model close it
window.onclick=function(event){

  if(event.target==modal){
    modal.style.display="none";
  }
}

function myadmissionform(){
 location.href='admission_form.html'
}