function mig_2(){
    window.location.href = 'login_.html'
}
function fun(e){
    e.preventDefault();
    
    let form = document.querySelector('#myForm');

    let email = form.email.value;
    let pass = form.btn_1.value;
    
    //console.log(email,pass);

    let detail = {
        email,
        pass
    };

    let arr;

    arr = JSON.parse(localStorage.getItem('details'));

    if(arr == null){
        arr = [];
    }else{
        arr = JSON.parse(localStorage.getItem('details'));
    }

    arr.push(detail);

    localStorage.setItem('details',JSON.stringify(arr));
}
