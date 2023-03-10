console.log("it is working")

let themeDot = document.getElementsByClassName('theme-dot')
let theme =localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

for(var i=0; themeDot.length>i; i++){
    themeDot[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        console.log("it is also working",mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href='default.css'
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href='blue.css'
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href='green.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href='purple.css'
    }

    localStorage.setItem('theme',mode)
}