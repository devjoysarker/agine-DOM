

const submit  = document.querySelector('#submit');
const name    = document.querySelector('#name');
const year    = document.querySelector('#year');
const output  = document.querySelector('.output');



submit.onclick = () => {
 
output.innerHTML = ageCal(name.value, year.value);

name.value = '';
year.value = '';


};


const signUP     = document.querySelector('#sing_up');
const user_name  = document.querySelector('#user');
const namee      = document.querySelector('#namee');
const emaill     = document.querySelector('#eemail');
const outing     = document.querySelector('#outin');

signUP.addEventListener('submit', (e) =>{

    e.preventDefault();

   user_name.style.border  = (user_name.value == '') ? '1px solid red' : '1px solid black';
    namee.style.border     = (namee.value == '') ? '1px solid red' : '1px solid black';
    emaill.style.border    = (emaill.value == '') ? '1px solid red' : '1px solid black';
if (user_name.value == '' || namee.value == '' || emaill == '') {

    outing.innerHTML =` 
    <p class ="alert alert-danger">All fields are required</p>
    `;
    
}else{
    outing.innerHTML = `
    <p class = "alert alert-success">Data stable</p>

    `;
}

});