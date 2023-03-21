
var email = document.querySelector('.email_input');
var pass = document.querySelector('.pass_input');
var flag = true;
function validate(){
    if(email.value ==''){
        document.querySelector('.err_email').innerHTML='Mời bạn nhập họ tên';
        email.style='background: yellow';
        flag = false;
    }else{
        document.querySelector('.err_email').innerHTML='';
        email.style='background: none';
    }
    if(pass.value == '' || pass.value.length <6){
        document.querySelector('.err_pass').innerHTML='Mời bạn nhập mật khẩu';
        pass.style='background: yellow';
        flag = false;
    }else{
        document.querySelector('.err_pass').innerHTML='';
        pass.style='background:none';
    }
    
    return flag ;
}