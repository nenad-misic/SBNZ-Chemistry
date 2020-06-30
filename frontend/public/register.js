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
    let input3 = document.querySelector('#captchainput').checked;
    if (input1 != '' && input2 != ''){
        axios.post(url, {email: input1, password: input2, captcha: input3}, getHeaders()).then((res) => {
            window.location.href = '/login.html'
        }).catch((err) => {
            if(err.response.data.code == 402) {
                document.querySelector('#captcha').style.display = 'block';
            } else if (err.response.data.code == 502) {
                document.querySelector('#captcha').style.display = 'none';
                document.querySelector('#submitinput').disabled = true;
            }
            document.querySelector('#errmessagecontent').innerHTML = err.response.data.message;
            document.querySelector('#errmessage').style.display = 'block';
        });
    }
}) 