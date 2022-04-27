const fs = require('fs').promises

const iconsSizePlaceholder = /%{{icon_size}}%/g
const iconSize = '21px'
;(async () =>{
    const markdownTemplate = await fs.readFile('./README.md.tpl', {encoding: 'utf-8'})
    //Changing icon size to all icons
    const newMarkdown = markdownTemplate
    .replace(iconsSizePlaceholder, iconSize)
   
    
    //Adding changes into readme
    await fs.writeFile('./README.md', newMarkdown)
})()
