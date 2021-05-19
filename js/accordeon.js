document.addEventListener('DOMContentLoaded', () => {
  
  const featuresLinkElems = document.querySelectorAll('.feature__link');
  const featuresSubElems = document.querySelectorAll('.feature-sub');
  // for (let i = 0; i < featuresLinkElems.length;
  //   i++) {
  //     featuresLinkElems[i].addEventListener('click', () =>{
  //       featuresSubElems[i].classList.toggle('hidden');
  //       featuresLinkElems[i].classList.toggle('feature__link_active');

  //     })
      
  //   }
    featuresLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          if (btn.classList.contains('feature__link_active')) {

            btn.classList.remove('feature__link_active');
            featuresSubElems[index].classList.add('hidden');
          }
          else{
            
            featuresSubElems.forEach((featuresSubElem) => {
             featuresSubElem.classList.add('hidden');
            });
            featuresLinkElems.forEach((featuresLinkElem) => {

            featuresLinkElem.classList.remove('feature__link_active');
            });
            
            featuresSubElems[index].classList.remove('hidden');
            btn.classList.add('feature__link_active');

          }
       })
      })
});



