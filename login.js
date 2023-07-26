document.getElementById('form').addEventListener("submit", event => {
    event.preventDefault();

    let user = {}
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;

    //check for login 
    getData("http://localhost:3000/login", "POST", user).then(data => {
        console.log(data)
    })
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