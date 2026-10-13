const name = "Abdul-Azeez Aishat Oyinkansola";
console.log(` Hello, Rootwork. My name is ${name}.`);

//Rootwork Decision Engine
const age = 21;
const score = 78;
const hasLaptop = true;
const hasInternet = true;
const completedApplication = true;

if (
    age >= 18 &&
    score >= 85 &&
    completedApplication &&
    hasLaptop &&
    hasInternet
)   {
    console.log("Priority candidate");
}   else if (
    age >= 18 &&
    score >= 60 &&
    completedApplication &&
    hasLaptop &&
    hasInternet
)   {
    console.log("Eligible");
}   else {
    console.log("Not eligible");
}