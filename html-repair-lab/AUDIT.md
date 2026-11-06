# HTML Audit

## 1. Missing doctype
**What was wrong:** The page had no `<!DOCTYPE html>`.
**Fix:** Added it as the first line.
**Why:** Adding a doctype switch the html to modern html

## 2. No language on the html tag
**What was wrong:** `<html>` had no `lang` attribute.
**Fix:** Changed it to `<html lang="en">`.
**Why:** The lang attribute make the browser understand the language it is

## 3. h1 inside head
**What was wrong:** The `<h1>` was placed inside `<head>`.
**Fix:** Moved it into the `<header>` in the body.
**Why:** Any code taht will appear on the website are placed in the body and not the head. The CSS and title goes into the head 

## 4. No useful metadata
**What was wrong:** There was no charset, viewport or description.
**Fix:** Added three `<meta>` tags.
**Why:** 

## 5. Vague page title
**What was wrong:** The title was only "Home".
**Fix:** Changed it to "Tech Club | Home".
**Why:** Adding Tech clud to the title make it more meaningful and descriptive

## 6. Navigation in a plain div
**What was wrong:** The links sat in an anonymous `<div>`.
**Fix:** Wrapped them in `<nav>`.
**Why:** The use of too much did is not encouraged in recent html. `<nav>` is use for wrapping links

## 7. No page landmarks
**What was wrong:** There was no `header`, `main` or `footer`.
**Fix:** Added all three.
**Why:** The use of semantics structure make the code understandable and easier to edit

## 8. Headings out of order
**What was wrong:** There were two `h1`s, and levels jumped from h3 to h1 to h4 to h2.
**Fix:** One `h1`, sections use `h2`, events use `h3`.
**Why:** A page should have one h1 as its main title, with h2 and h3 going down in order. Screen readers and search engines use headings as an outline of the page. Jumping levels or repeating the h1 breaks that outline and makes the page harder to follow.

## 9. Article placed directly inside ul
**What was wrong:** `<article>` was a direct child of `<ul>`.
**Fix:** Put each `<article>` inside an `<li>`.
**Why:** A <ul> can only contain <li> items as its direct children. Putting <article> straight inside it is invalid HTML, so browsers may handle it unpredictably. Putting each <article> inside an <li> makes it a proper list item, and the article still keeps its own meaning.

## 10. Poor image alt text
**What was wrong:** The alt text was just "image".
**Fix:** Wrote a description of what the picture shows.
**Why:** An alternative text in an image link make it descriptive if the image is not available 
