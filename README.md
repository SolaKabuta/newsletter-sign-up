# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Newsletter sign-up form with success message solution](#frontend-mentor---newsletter-sign-up-form-with-success-message-solution)
  - [Table of contents](#table-of-contents)
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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)


![Design preview for the Newsletter sign-up form with success message coding challenge](./preview.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

- The Power of Regex in Email Validation



```javascript
// Regex de validation email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(mail.value.trim())) {
        errorMessage.style.display = 'block';
        mail.style.border = '1px solid hsl(4, 100%, 67%)';
        mail.style.background = 'hsl(4, 100%, 97%)';
        return; 
    } 
```



### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques 

### Useful resources

- [Medium]([stackoverflow.com/](https://medium.com/@sketch.paintings/email-validation-with-javascript-regex-e1b40863ed23)) - This article helped me for the regex verification.
- [ChatGPT](chatgpt.com/) - This helped me to display the mail input into the success message page



## Author

- Website - [portfolio](https://www.solakabuta.com)
- Frontend Mentor - [@SolaKabuta](https://www.frontendmentor.io/profile/SolaKabuta)
- Twitter - [@sola_kabuta](https://x.com/sola_kabuta)



