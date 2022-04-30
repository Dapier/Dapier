const fs = require('fs').promises
var d = new Date();
var time = d.getHours();
let currentTime
if (time < 12) {
  currentTime = '☀ Good Morning ☀'
}
if (time > 12) {
  currentTime = "Good afternoon!";
}
if (time == 12) {
    currentTime = "🌕 Good Night! 🌕";
}
const iconsSizePlaceholder = /%{{icon_size}}%/g
const timePlaceholder = /%{{greeting}}%/g


const iconSize = '21px'
;(async () =>{
    const markdownTemplate = await fs.readFile('./README.md.tpl', {encoding: 'utf-8'})
    //Changing icon size to all icons
    const newMarkdown = markdownTemplate
    .replace(iconsSizePlaceholder, iconSize)
    .replace(timePlaceholder, currentTime)
    
    //Adding changes into readme
    await fs.writeFile('./README.md', newMarkdown)
})()
