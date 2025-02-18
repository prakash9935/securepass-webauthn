async function registerUser() {
    const username = document.getElementById("username");
    if(!usrename) return alert("Enter a username");

    const response = await fetch("http://localhost:5000/register",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ username })
});

const options =await response.json();
options.challenge = Uint8Array.from(atob(options.challenge),c => c.charCodeAt(0));
options.user.id  = Uint8Array.from(atob(options.user.id), c => c.charCodeAt(0));

const credential = await navigator.credentials.create({publicKey: options });
console.log("Credential created", credential);

}