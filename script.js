const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');

const generatejokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }
        const res = await fetch('http://icanhazdadjoke.com', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch(err){
        console.log(`The error is ${err}`);
    }
}

jokebtn.addEventListener('click', generatejokes);
generatejokes();
