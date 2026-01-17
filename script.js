const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

	xhr.onreadystatechange = function () {
		if (this.readyState === 4) {
			if (this.status === 200) {
				jokeEl.innerHTML = JSON.parse(this.responseText).value;
            } else {
                jokeEl.innerHTML = 'Something went wrong (Not Funny'
			}
		}
	};

	xhr.send();
};


// background color changing
let intervalId;
function startChange() {
    if (!intervalId) {
        intervalId = setInterval(changeColor, 1000);
    }
}

function changeColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`
	
    
}


document.getElementById('joke-btn').addEventListener('click', startChange)

jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke)
