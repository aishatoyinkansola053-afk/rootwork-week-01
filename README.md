# rootwork-week-01

```
Git status
modified: README.md
```


Name: Abdul-Azeez Aishat Oyinkansola



Programming experience: I have the basic understanding of HTML,CSS and a little bit of JavaScript.



I am currently interested in learning FULLSTACK and CYBERSECURITY.



By the end of the Rootwork I want to be able to code efficiently, and striving to become a professional





Week 02:Learning Git and GitHub



1. Git repository: Git repository is like a digital file in cabinet that stores all the file and all the changes made.it is like a time machine  for code.



2\. Why learn Git from the terminal first: Because it is more powerful and you have a better understanding of what is happening behind the scene.



3\. The four stages: a .Working Directory b. Staging Area c. Local Repository d. Remote Repository



4\. Sample project used: Task-Tracker



5\. Branching work out example: 
Features that calculates the total callories


6\. Branch name created in the demo: Git checkout(feature/login)



7\. After merging the pull request he: He deleted the branch



8\. What he does to bring the latest changes down: 
He run git pull


9\. Files that goes into the Gitignore and why: files that should not be tracked e.g node\_modules, secret and keys. Because if you push them to a public repo anyone can see and misuse them.



10\. Platform used for demonstrating CI/CD: Vercel



11\. Something new to me: The vercel used

#Developer profile- week 6
A responsive developer profile built with html and css.

## Week 6 

1. **When would you choose Flexbox instead of Grid?**
   I would choose flexbox when I need to arrange items mainly in one direction. either in a column or a row.

2. **What does `box-sizing: border-box` change?**
   It makes the element width and height include the padding and border

3. **What is the difference between margin and padding?**
   margin is the space outside an element while padding is the space inside an element, between it's content and it's border.

4. **What does a media query do?**
  A media query allow CSS to apply different styles depending on the screen size or device. It is commonly used to make website responsive on phones, tablets and computers.

5. **Why is `max-width: 100%` useful for images?**
   It prevents an image from becoming wider than it's parent container.

6. **One CSS behaviour that confused me, and how I understand it now:**
7. At first, I was confused about how flexbox alignment works, especially justify-content and align-items. I now understand that justify-content controls alignment along the main axis, while align-items controls alignment along the cross axis.

# Task Tracker

A small task-tracking page built with HTML, CSS and vanilla JavaScript.

## How to open and run

1. Open the `task-tracker/` folder.
2. Open `index.html` in a browser (tap or double-click it, or open it from a code editor's preview).
3. No install, build step or internet connection is needed.

## How task state is stored and rendered

- Tasks live in an in-memory array called `tasks`. Refreshing the page clears it.
- Each task is an object: `{ id, text, completed }`.
- `id` comes from a counter (`nextId`) that goes up by 1 for every new task, so ids are unique and never change.
- `completed` starts as `false`, so every new task is active.
- The array is the single source of truth. When something changes, I update the array (or the current filter) and then call `render()`.
- `render()` clears the list, picks the tasks that match the current filter, and builds an `<li>` for each one (checkbox, label, Delete button). It also updates the "tasks left" count and the empty-state message.
- Task text is added with `textContent`, never `innerHTML`, so user input can't run as HTML.

## How event listeners work

An event listener tells the browser: "when this event happens on this element, run this function."

- **Form `submit`:** runs when the user taps Add or presses Enter. It calls `event.preventDefault()` so the page doesn't reload.
- **Checkbox `change`:** each task's checkbox toggles that task's `completed` value, then calls `render()`.
- **Delete button `click`:** each button removes its own task using the task's id, then calls `render()`.
- **Filter button `click`:** reads the button's `data-filter` value (all, active or completed), saves it in `currentFilter`, then calls `render()`.

No inline `onclick` handlers are used. All listeners are added with `addEventListener`.

## How blank input is prevented

When the form is submitted, the script reads `input.value` and calls `.trim()` to remove spaces from both ends. If the result is an empty string (nothing typed, or only spaces), it:

1. Shows "Please type a task before adding." in the message area,
2. Puts the cursor back in the input, and
3. Uses `return` to stop, so nothing is added.

## One bug I debugged

My first version showed tasks on the page, but there was no way to tell active tasks from completed ones. The tasks were being saved with `completed: false`, but my first `render()` only displayed the task text and never used the `completed` value, so the Active and Completed filters had nothing to work with. I found it by adding tasks and noticing every task looked identical. I fixed it by updating `render()` to create a checkbox for each task, add a `completed` CSS class when a task is done, and filter the list using `currentFilter`.

## Manual test results

| Test | Steps | Result |
| Adding | Typed 3 tasks and tapped Add | All 3 tasks appeared in the list and the input cleared |
| Toggling | Ticked one task | The text was crossed out and greyed, and the "tasks left" count went down by 1. Unticking reversed it |
| Deleting | Deleted a different task | Only that task was removed. The others stayed and the count updated |
| Filtering | Tapped Active, then Completed, then All | Active showed only unticked tasks, Completed showed only ticked tasks, All showed everything. The selected button was highlighted |
| Empty input | Pressed Add with nothing typed | A red message appeared and no task was added |
| Spaces only | Typed spaces and pressed Add | Rejected with the same message and no task was added |
| Keyboard | Used Tab, Enter and Space only | I could type a task, press Enter to add it, tick it with Space, delete it with Enter, and switch filters. The focus outline was visible |
| 375px width | Checked the page at 375px wide | Everything fit with no horizontal scrolling. The layout also worked on desktop |
| Empty state | Opened Completed with no completed tasks | "No completed tasks yet." was shown |

## AI usage disclosure

I used an AI assistant (Claude) while building this project. It helped me understand the assignment requirements, explained the JavaScript concepts I needed (events, arrays, `filter`, `render`, `textContent`), and suggested the starting code for `script.js` which I tested in a code editor and on GitHub. It also helped me fix file-naming and. I read through the code, tested it against the self-check in the brief, and can explain how each part works.

