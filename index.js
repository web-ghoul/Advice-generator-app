const quote = document.querySelector("section .contain p")

const num = document.querySelector("section .contain .head span")

const myRequest = new Request("	https://api.adviceslip.com/advice")

const diceBtn= document.querySelector("section .contain picture.dice")

const time = setTimeout(function(){
  fetch(myRequest)
      .then((response) => response.json())
      .then((data) => {
        quote.innerHTML = "\“ " + data.slip.advice+" \”"
        num.innerHTML = "# "+data.slip.id
      })
      .catch(console.error);
},100)

diceBtn.addEventListener("click",function(){
    fetch(myRequest)
      .then((response) => response.json())
      .then((data) => {
        quote.innerHTML = "\“ " + data.slip.advice+" \”"
        num.innerHTML = "# "+data.slip.id
      })
      .catch(console.error);
})
