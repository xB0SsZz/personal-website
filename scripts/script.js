var backImage = document.querySelector('#backgroundimg');

// backImage.onclick = function() {
//     var myImage = backImage.getAttribute('src');
//     console.log(myImage)
//     if(myImage === '/images/background.jpg'){
//         backImage.setAttribute('src', '/images/nature.jpg');
//     }
//     else{
//         backImage.setAttribute('src', '/images/background.jpg');
//     }
// }

function pageScroll() {
    window.scrollBy(0,1);
    delay = setTimeout(pageScroll, 10);
}

// var headers = document.getElementsByClassName('mainHeaders');
// console.log(headers);

// for (const header of headers){
//     console.log(header);
//     header.addEventListener("click", function(){
//         console.log("Clicked on " + header.getAttribute('id'));
//         switch(header.getAttribute('id')){
//             case 'aboutMe':
//                 //var scrolling = setInterval(window.scrollBy(0, 1), 10);
//                 window.scrollTo({ top: document.querySelector('#pageAboutMe'), behavior: 'smooth' })
//                 break;
//         }
//     })
// }




