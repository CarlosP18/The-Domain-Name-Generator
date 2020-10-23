let pronoun = ['everybody', 'my', 'your', 'someone', 'the', 'our']
let adj = ['favorite', 'best', 'new', 'horrible', 'last', 'great']
let noun = ['meal', 'videogame', 'gun', 'song', 'dog', 'bacon']
let ext = ['.com', '.io', '.net', '.uk', '.ve', '.us']
let texto = ""

for (let h = 0; h < pronoun.length; h++) {
    for (let i = 0; i < adj.length; i++) {
        for (let j = 0; j < noun.length; j++) {
            for (let k = 0; k < ext.length; k++) {
                texto += pronoun[h] + adj[i] + noun[j] + ext[k] + "<br>";
            }
        }
    }
}


titulo.querySelector = "#titulo"
btnAdd = document.querySelector(".btn")

btnAdd.addEventListener("click",  () => {
    let urlList = document.createElement("p");
    urlList.innerHTML = texto;
    titulo.appendChild(urlList)
})