let section = document.querySelectorAll(".section");
//let menu = document.querySelectorAll("nav li a");

var nav = document.querySelectorAll(".nav-link");

function activeLink(li){
  nav.forEach((item) =>
  item.classList.remove('active'));
  li.classList.add('active');
}

nav.forEach((item) =>
  item.addEventListener('click',function(){
    activeLink(this)
  }
));


window.onscroll = () =>{
  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
                    activeLink(target);
      // nav.forEach((item) => {
      //     item.classList.remove('active');
      //     if(item.querySelector('a').getAttribute('href') == '#' + id){
      //         item.classList.add('active');
      //     }
      //  });            
  }
  })
};

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 10;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      nav.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("nav li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
