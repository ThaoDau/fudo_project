    var email = document.querySelector('.email');
    var ten = document.querySelector('.name');
    var pass = document.querySelector('.pass');
    var re_pass =document.querySelector('.re_pass');
    var flag = true;


function validate(){
    if(email.value == ''){
        document.querySelector('.err_email').innerHTML='Please input email';
        email.style = 'background: yellow';
        flag = false;
    }else{
        document.querySelector('.err_email').innerHTML='';
        email.style = 'background: none';
    }
    if(ten.value == ''){
        document.querySelector('.err_name').innerHTML='Please input name';
        ten.style = 'background: yellow';
        flag = false;
    }else{
        document.querySelector('.err_name').innerHTML='';
        ten.style = 'background: none';
    }
    if(pass.value == ""){
        document.querySelector('.err_pass').innerHTML='Please input pass';
        pass.style = 'background: yellow';
        flag = false;
    }else{
        document.querySelector('.err_pass').innerHTML='';
        pass.style = 'background: none';
    }
    if(pass.value == re_pass){
        document.querySelector('.err_re_pass').innerHTML="Please again password";4
        re_pass.style = 'background: yellow';
        flag= false;

    }else{
        document.querySelector('err_re_pass').innerHTML = "";
        re_pass.style = 'background: none';
    }

    return flag;
}