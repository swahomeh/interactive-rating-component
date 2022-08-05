console.log("Hello World")
// let index = 0;
const handleArrow = (direction) => {
    if(direction==="l"){
        index = 1;
        index !== 0 ? index-1 : 2;

        let pixels = -100*index;
        suffix = 'vw';
        console.log (pixels+' translateX('+pixels+suffix+')');

        document.getElementsByClassName("slide-img")[1].style.setProperty(`transform`, 'translateX('+pixels+suffix+')');
        document.getElementsByClassName("slide-img")[0].style.setProperty(`transform`, 'translateX('+0+suffix+')');
    }
    if(direction==="r"){
        index = 0;
        index !== 1 ? index+1 : 0;

        let pixels = -100*index;
        suffix = 'vw';
        console.log (pixels);

        document.getElementsByClassName("slide-img")[1].style.setProperty(`transform`, 'translateX('+pixels+suffix+')');
        document.getElementsByClassName("slide-img")[0].style.setProperty(`transform`, 'translateX('+0+suffix+')');
    }
}

// const lis = document.querySelectorAll('.rating li');

// function handleClick() {
//     const suffix = this.dataset.sizing || 'vw';
//     document.documentElement.style.setProperty(`--$(this.name`, this.value + suffix);
// }

// lis.forEach(li => li.addEventListener('change', handleClick));