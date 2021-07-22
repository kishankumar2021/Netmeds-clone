function mig(){
    window.location.href = 'signup.html'
}

function fun(el,len){
    //e.preventDefault();
    
    let form = document.querySelector('#newForm');

    let email = form.email.value;
    let password = form.btn_1.value;
    
    //console.log(email,pass);
    
    //console.log(count);

    if(email == el.email && password == el.pass){
        console.log('old');
    }else if(count == len-1){
        console.log('new');
    }

}
function check(){
    let det = JSON.parse(localStorage.getItem('details'));
    let len = det.length;
    //console.log(len);
    let count = 0;

    det.forEach(el => {
        fun(el,len);
        count++;
    });
}
check();
