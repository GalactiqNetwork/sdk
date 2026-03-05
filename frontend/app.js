async function getToken(){

const res = await fetch("http://localhost:3000/token/info")

const data = await res.json()

document.getElementById("result").innerHTML =
`
Name: ${data.name} <br>
Symbol: ${data.symbol} <br>
Supply: ${data.supply}
`
}
