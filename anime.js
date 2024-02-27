const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate')
        } else {
            entry.target.classList.remove('animate')
        }
    })
});
const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el)=> observer.observe(el));