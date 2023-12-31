document.getElementById('form').addEventListener("submit", event => {
    event.preventDefault();

    let user = {}
    user.username = document.getElementById("username").value;
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;
    user.password2 = document.getElementById("password2").value;

    //check for the password
    if(user.password == user.password2){
        getData("https://web-2-art-dump.onrender.com/register", "POST", user).then(data => {
            window.location.href = "/web2-frontend-Stephenasante21/Login.html"
            alert(data.message)
        })
    }else{
        alert("Passwords does not match!!!")
    }

})

async function getData(url, method, data){
    let resp = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    });
    return await resp.json();
}