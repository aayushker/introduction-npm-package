#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
    const message = "Hey there! I'm Aayusker, a Full Stack Web Developer from India. I love building web applications and learning new technologies. Feel free to connect with me!";
    const twitterLink = "https://twitter.com/aayushker";
    const linkedinLink = "https://www.linkedin.com/in/aayushker/";
    const wesbiteLink = "https://aayushker.netlify.app";

    // Create a colorful box using ANSI escape codes
    const colorfulBox = `
    \x1b[38;5;51m+---------------------------------------------------------------------+
    |                                                                     |
    |   \x1b[38;5;105mHey there! I'm Aayusker, a Full Stack Web Developer from India.\x1b[38;5;51m   |
    |   \x1b[38;5;105mI love building web applications and learning new technologies.\x1b[38;5;51m   |
    |   \x1b[38;5;105mFeel free to connect with me!\x1b[38;5;51m                                     |
    |                                                                     |
    +---------------------------------------------------------------------+
    | \x1b[38;5;93mTwitter:\x1b[0m    \x1b[38;5;39m${twitterLink}                           \x1b[38;5;51m|
    | \x1b[38;5;93mLinkedIn:\x1b[0m   \x1b[38;5;39m${linkedinLink}                  \x1b[38;5;51m|
    | \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${wesbiteLink}                           \x1b[38;5;51m|
    +---------------------------------------------------------------------+\x1b[0m
    `;
  
    // Log the colorful box in the terminal
    console.log(colorfulBox);
}
// Call the function to log your details
logDetails();