
    let a = document.getElementById('body');
    a.addEventListener('click', ChangeBackGroundColor);
    function ChangeBackGroundColor(){
        a.classList.toggle('body-active');
    }


    let b = document.getElementsByClassName('image');
    for (let i = 0; i < b.length; i++) {
        b[i].addEventListener('click', ChangeImage);
    }


    function ChangeImage(){
        for (let i = 0; i < b.length; i++) {
            b[i].classList.toggle('image-active');
        }
    }




