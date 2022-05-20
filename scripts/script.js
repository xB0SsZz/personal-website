var backImage = document.querySelector('#backgroundimg');

backImage.onclick = function() {
    var myImage = backImage.getAttribute('src');
    console.log(myImage)
    if(myImage === '/images/background.jpg'){
        backImage.setAttribute('src', '/images/nature.jpg');
    }
    else{
        backImage.setAttribute('src', '/images/background.jpg');
    }
}
