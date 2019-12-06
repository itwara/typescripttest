function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 1, 2];
// let user = "Jane User";

document.body.innerHTML = greeter(user);