function namePerson() {
    let person = prompt("Please enter your name!", "Username or nickName");
    let nameSpace = document.getElementsByClassName("user");
    nameSpace[0].innerHTML = person;
    nameSpace[1].innerHTML = person;
}
namePerson();