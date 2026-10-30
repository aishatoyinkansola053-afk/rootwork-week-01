## Debug Log

## Problem 1: (pending is not defined)

**What went wrong:**
My program crashed before it could print the task statistics.

**What I observed:**
The terminal showed `ReferenceError: pending is not defined`,pointing to line 52 of `task-manager.js, where I wrote `pending++`.

**What I checked:**
I read the error messageand went to the line it pointed to. Then I compared the variable names I created at the top of the section (`completedtasks` and `pendingtasks`) with the names I used inside the loop.

**Cause:**
I declared the counters as `completedtasks` and `pending task`, but inside the loop I wrote `complete++` and `pending++`. Javascript treated those as variables that did not exist, so it stopped with a RerferenceERROR.

**Fix:**
I changed the the loop to use the same names i declared 
: `completedtasks++` and `pendingtasks++`. I also added `let` in front of `i` in the for loop so it is not an accidental global variable.
 
 ## Problem 2: (No high and not completed tasks)

 **What went wrong**
 I wanted to print tasks that are high priorityu and not completed,but the program printed the "no tasks" message again and again instead of the task titles.

 **What I observed**
 The terminal printed `No high and not completed tasks`five times. then it printed `High priority Tasks: 0` and `Not completed tasks: 0`, even though my data has high priority tasks that are not completed.

 **What I checked**
 I looked at the `if` conditions inside my for loop and compared the names after `tasks[i]. `with the property names in my tasks array (`title`, `category`, `completed` and `priority`). I also looked at how my `if` and `else` were connected.

 **Cause**
 There were two mistakes. First, I wrote `tasks[i].highpriorityTasks` and `tasks[i].notCompletedTasks`. Those are the name of my counter variables, not properties of a task, so JavaScript found `undefined` and the  conditions never matched. second, I used two separate `if` statements, so the `else` only belonged to the second one and ran for tasks that did not match it. I never combined the two conditions in one check.

 **Fix**
 I changed the condition to 
 `tasks[i].priority === "high"" && tasks[i].Completed === false` inside a single `if`. I also moved the "no tasks" message outside the loop, so it prints once only if nothing matched.  