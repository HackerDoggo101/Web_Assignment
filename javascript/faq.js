/*Title animation */ 
let li = document.querySelectorAll(".faq-text li");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e)=>{
    let clickedLi;
    if(e.target.classList.contains("question-arrow")){
      clickedLi = e.target.parentElement;
    }else{
      clickedLi = e.target.parentElement.parentElement;
    }
   clickedLi.classList.toggle("showAnswer");
  });
}

let spanTexts = document.getElementsByTagName("span");

window.onload = function() {
    for (spanText of spanTexts) {
        spanText.classList.add("active");
    }
}

/*FAQ accordian javascript*/
const accordian = document.getElementsByClassName('contentBx');

for (i=0; i<accordian.length;i++){
  accordian[i].addEventListener('click',function(){
    this.classList.toggle('active')
  })
}