console.log("Start Here 😉")
const box = document.getElementsByClassName("box")
const darkRadio = document.getElementsById("dark")
darkRadio.onclick = () => {
  box.style.backgroundColor = "black"
}
