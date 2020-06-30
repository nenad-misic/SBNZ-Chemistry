if (localStorage.getItem('auth')){
    localStorage.removeItem('auth');
}

let url = 'http://localhost:8080/login';

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
            localStorage.setItem('auth', res.data.token);
            window.location.href = '/index.html'
        }).catch((err) => {
            if (err.response.data.srd.code == 400 || err.response.data.srd.code == 401) {
                document.querySelector('#submitinput').disabled = true;
                document.querySelector('#errmessagecontent').innerHTML = err.response.data.srd.message;
                document.querySelector('#errmessage').style.display = 'block';
            } else {
                document.querySelector('#errmessagecontent').innerHTML = "Invalid credentials";
                document.querySelector('#errmessage').style.display = 'block';
            }
        });
    }
}) 