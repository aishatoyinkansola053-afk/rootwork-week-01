const tasks = [
   {
    title: "Study Engineering",
    category: " School",
    completed: false,
    priority: "high",
   },
   {
    title: "Practice javascript",
    category: "coding",
    completed: true,
    priority: "medium",
   },
   {
    title: "Learn cooking",
    category: "home",
    completed: true,
    priority: "Low",
   },
   {
    title: "Study Microbiology",
    category: "online",
    completed: false,
    priority: "high",
   },
   {
    title: "Wash clothes",
    category: "home",
    completed: false,
    priority: "low",
   },
   {
    title: "Go for a walk",
    category: "health",
    completed: false,
    priority: "high",
   }
]

//part 1
function displayTasks() {
   for (i=0; i < tasks.length; i++) {
   console.log(tasks[i])
}

}

//part 2
function showStatistics() {
  let completedtasks = 0;
let pendingtasks = 0;
for (let i=0; i < tasks.length; i++) {
   if (tasks[i].completed === true) {
     completedtasks++;
   } else {
      pendingtasks++
   }
}

console.log("total tasks:", tasks.length);
console.log("completed tasks:",  completedtasks);
console.log("pending tasks:",  pendingtasks); 
}

//part 3
function findhighNOTcompleted() {
  let highNotcompleted = 0;
  for (let i=0; i < tasks.length; i++) {
    if (tasks[i].priority === "high" && tasks[i].completed === false) {
      console.log(tasks[i].title);
      highNotcompleted++
   }
}
if (highNotcompleted === 0) {
   console.log("No high priority and not completed tasks");
 }
}

//part 4
function countByCategory() {
   let homeCount = 0;
   let healthCount = 0;

   for (i = 0; i < tasks.length; i++) {
      if (tasks[i].category === "home") {
         homeCount++;
      }
      if (tasks[i].category === "health") {
         healthCount++;
      }
   }
   console.log("Home tasks:", homeCount);
   console.log("Health count:", healthCount) ; 
}

displayTasks();
showStatistics();
findhighNOTcompleted();
countByCategory();



