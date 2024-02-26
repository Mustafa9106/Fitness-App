// fetch("https://famous-quotes4.p.rapidapi.com/random?category=fitness&count=4",{
//     "method":"GET",
//     "headers":{
//         'X-RapidAPI-Key': '645fca1125msh8899c333deee92dp115e04jsnb8f6350280cd',
// 		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'

//     }
// })
// .then(Response=> Response.json())
// .then(Response =>{
//     console.log(Response);
//     console.log(Response.content);
// })
// .catch(err =>{
//     console.log(err);
// })

const dynamicText = document.querySelector("h1 span");
const words = [
  "BECOME STRONGER IS YOUR CHOICE.",
  "NO PAIN, NO GAIN.",
  "DO IT NOW OR NEVER.",
  "STAY HARD !",
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");
  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 70);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 70);
  } else {
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 900);
  }
};
typeEffect();
