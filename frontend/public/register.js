if (localStorage.getItem('auth')){
    localStorage.removeItem('auth');
}

let url = 'http://localhost:8080/register';

let getHeaders = () => {
    let token = localStorage.getItem('auth')?localStorage.getItem('auth'):''
    return {headers: {"X-Auth-Token": token}};
}

document.querySelector('#submitinput').addEventListener('click', (e) => {
    e.preventDefault();
    let input1 = document.querySelector('#emailinput').value;
    let input2 = document.querySelector('#passwordinput').value;
    if (input1 != '' && input2 != ''){
        axios.post(url, {email: input1, password: input2}, getHeaders()).then((res) => {
            window.location.href = '/login.html'
        }).catch((err) => {
            alert('Wrong credentials')
        });
    }
}) 