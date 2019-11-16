function sayHello() {
    throw "Ooops something went wrong"
}

function welcomePerson(name) {
    console.log(sayHello(), name, 'welcome to this course');
}

function displayWelcomeMessage(name) {
  welcomePerson(name.toUpperCase());
}

displayWelcomeMessage("Michael");
