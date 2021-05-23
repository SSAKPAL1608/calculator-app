# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![mobile - default theme](https://user-images.githubusercontent.com/63062052/119277928-f65c0f80-bbe7-11eb-80c9-144d561ff46a.png)
![tablet - light theme](https://user-images.githubusercontent.com/63062052/119277970-286d7180-bbe8-11eb-8aca-58af3a9ada97.png)
![desktop - vivid theme](https://user-images.githubusercontent.com/63062052/119277990-43d87c80-bbe8-11eb-87be-848899a2f088.png)

### Links

- Solution URL: [@github](https://github.com/davidrhyne/calculator-app)
- Live Site URL: [@github pages](https://davidrhyne.github.io/calculator-app/)

## My process

I started by reviewing the design specification.  I then started the markup knowing that the mobile and desktop layouts were very similiar and would be managed primarily by CSS grid. Afer the markup, I stated the CSS styling with mobile-first workflow and then created two media queries to handle the transition from the mobile to the desktop layouts.  After completing 95% of the styling, I started coding the JavaScript.  The process of coding logic, especially the theme switch, lead to several iterations of changing the markup and CSS to match changes introduce with JavaScript.

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

This was another excellent exercise in CSS grid and flexbox, so I deepened my knowledge on both of those topics.  And this was the first frontend mentor project that included JavaScript, so this a great exercise in functional programming, event listeners, and local storage.

### Continued development

While working on this project, I was thinking the next project should include React, so that will be the focus for my next project.  Likewise, I am really enjoying the practice I am getting using CSS grid and flexbox.

### Useful resources
- [How to build a Calculator App with JavaScrip](https://freshman.tech/calculator/) - This is an excellent resource for the javascript for a calculator app.
- [Radio button toggle switch by Mike Hemberger](https://codepen.io/JiveDig/pen/jbdJXR) - The codepen was very helpful for a 3-position radio input which was used for the theme switch.
- [Kevin Powell](https://www.kevinpowell.co/) - Kevin Powell is an excellent teacher and I relied heavily on the notes that I took from his CSS courses taught on scrimba.com.
- [A Complete Guide to Grid ](https://css-tricks.com/snippets/css/complete-guide-grid/) -  I have found css.tricks.com to be a valuable resourse for grid, flexbox, and all things CSS.

## Author

- Frontend Mentor - [@davidrhyne](https://www.frontendmentor.io/profile/davidrhyne)
- Twitter - [@DavidRhyne16](https://www.twitter.com/DavidRhyne16)
