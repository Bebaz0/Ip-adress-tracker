# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./img.png)

### Links

- Solution URL: [https://www.frontendmentor.io/Bebaz0](https://www.frontendmentor.io/Bebaz0)
- Live Site URL: [https://bebaz0.github.io/Ip-adress-tracker/](https://bebaz0.github.io/Ip-adress-tracker/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Tailwind - Css Framework



### What I learned
Use react, tailwind css and apis. Biggest project yet.

```js
 const fetchData = async (ip) => {
  try {
    const response = await fetch(
            `https://iplocate.io/api/lookup/${ip}?apikey=${API_KEY}`,);
    const data = await response.json();
    setIpData(data);
    console.log(data);
  } catch (error) {
    console.error("Error fetching IP data:", error);
  }
};
```


## Author

- Frontend Mentor - [@Bebaz0](https://www.frontendmentor.io/profile/Bebaz0)
-Github - [Bebaz0](https://github.com/Bebaz0)

