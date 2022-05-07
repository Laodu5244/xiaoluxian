//切换样式
let nav_links = document.querySelectorAll(".nav-link");
let tabs = document.querySelectorAll(".tab-contents");
nav_links.forEach((item, index) => {
  item.addEventListener("click", function () {
    nav_links.forEach((i) => {
      i.classList.remove("active")
    })
    this.classList.add("active");
    // 切换内容
    tabs.forEach((j) => {
      tabs.forEach((k) => {
        k.classList.remove("active2")
      })
      j = index;
      tabs[j].classList.add("active2");
    })
  })
})





