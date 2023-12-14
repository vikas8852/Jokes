// const url='https://api.chucknorris.io/jokes/random';
const url='https://icanhazdadjoke.com/';
const text=document.querySelector('.joke p')

// const weather=async()=>{
//     const response=await fetch(url);
   
//     const data=await response.json();
//     console.log(data);
  
// }
// weather();
async function getjoke(){
    const joked=await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept':'application/json'  
        }

});
const jokeobj=await joked.json();
//console.log(jokeobj)
//console.log(jokeobj.joke)
text.innerHTML=jokeobj.joke;
}

