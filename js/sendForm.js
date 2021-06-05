const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callBack, falseCallBack) =>{

   const request = new XMLHttpRequest();
   request.open('POST', server);

   request.addEventListener('readystatechange', ()=>{
      if (request.readyState !==4) return;
      if (request.status ===200 || request.status ===201) {
        const response = JSON.parse(request.responseText);
        callBack(response.id);
      } else {
      falseCallBack(request.responseText)
       throw  new Error(request.status)
      }
   });
   request.send(data)

}; 


const formElems = document.querySelectorAll('.form');

const formHandler = (form) => {
  form.addEventListener('submit', (event) => {

    event.preventDefault();
    const data = {};

    for (const {name, value} of form.elements){

      if (name) {
        data[name] = value;
      }
    }

    const smallElem = document.createElement('small')
    sendData(JSON.stringify(data),
  (id) => {
   
    smallElem.textContent = 'Ваша заявка №' + id +
    '!\nВ ближайшее время с вами свяжеться!';
    smallElem.style.color = 'green';
    form.append(smallElem);


    // alert('Ваша заявка №' + id +'!\nВ ближайшее время с вами свяжеться!')
    
  },
  (err) => {
 smallElem.textContent = 'Сбой передачи, попробуйте позже';
  smallElem.style.color = 'red';
  form.append(smallElem);
  });
  form.reset();
  })
};

 formElems.forEach(formHandler);


// const dataTest = {
//   name: 'Dan',
//   phone: '+789500000'
// };

// // sendData(JSON.stringify(dataTest),
//  (id) => {
//    alert('Ваша заявка №' + id +'!\nВ ближайшее время с вами свяжеться!')
//    console.log(data);
//  },
//  (err) => {
// alert('Сбой передачи, попробуйте позже' + err)
//  });