const theme1 = document.getElementById('theme1')
const theme2 = document.getElementById('theme2')
const theme3 = document.getElementById('theme3')
const seven = document.getElementById('seven')


function toggleTheme(switchToTheme){
    // Default to light theme, since that is starting theme
    // window.theme = typeof(window.theme)==='string' ? window.theme : 'theme1';
    // console.log(window.theme)
    // var switchToTheme = window.theme === 'theme1' ? 'theme2' : 'theme1';
    // window.theme = switchToTheme;
    document.querySelector('body').setAttribute('color-scheme',switchToTheme);
}



theme1.addEventListener('click', ()=> {
    console.log("theme 1 clicked")
    toggleTheme('theme1')
})

theme2.addEventListener('click', ()=> {
    console.log("theme 2 clicked")
    toggleTheme('theme2')
})

theme3.addEventListener('click', ()=> {
    console.log("theme 3 clicked")
    toggleTheme('theme3')
})

seven.addEventListener('click', ()=> {
    console.log("seven clicked")
})

toggleTheme('theme1')