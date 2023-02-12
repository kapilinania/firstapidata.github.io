//in this project i am used json placeholder website api
const fetchContent = async (url) =>{
    con = await fetch(url);
    let a = await con.json()
    return a;
}
setInterval(async function(){
    let url ="https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
    let b=(await fetchContent(url))
}, 3000)

setInterval(async function(){
    document.querySelector("#one").classList.toggle("bulb_main")
}, 100)
