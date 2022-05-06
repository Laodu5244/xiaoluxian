// 标题栏切换
let headNavs = document.querySelectorAll('.head-nav a');
headNavs.forEach(i => {
  i.addEventListener("mouseenter", function () {
    headNavs.forEach(item => {
      item.classList.remove("active")
    })
    this.classList.add("active")
  })
});

// 切换导航栏
let cat_items = document.querySelectorAll(".cat-item");
let sub_cat = document.querySelectorAll(".sub-cat");
let close_nav = document.querySelector(".close-nav");


cat_items.forEach((item, index) => {
  item.onmouseenter = function () {
    sub_cat.forEach(i1 => {
      sub_cat.forEach(i2 => {
        i2.classList.remove("active");
      })
      i1 = index;
      sub_cat[i1].classList.add("active");
    })
  }
})
// 鼠标移出关闭导航栏
close_nav.onmouseleave = function () {
  sub_cat.forEach(i2 => {
    i2.classList.remove("active");
  })
}

//@ 轮播图
let s_btn = document.querySelectorAll(".scroll-btn");
let s_img = document.querySelectorAll(".scroll-img");

s_btn.forEach((item, index) => {
  item.onmouseenter = function () {
    s_btn.forEach((i) => {
      i.classList.remove("active")
    })
    this.classList.add("active")

    s_img.forEach((item2) => {
      s_img.forEach((i2) => {
        i2.classList.remove("active")
      })
      item2 = index;
      s_img[item2].classList.add("active")
    })
  }
})

// 箭头控制图片
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let max = 3; min = 1; cur = min;
// 左箭头
prev.onclick = function () {
  if (cur === min) {
    cur = max;
  } else {
    cur--;
  }
  change_img();
  change_icon();
}
// 右箭头
next.onclick = function () {
  if (cur === max) {
    cur = min;
  } else {
    cur++;
  }
  change_img();
  change_icon();
}

// 箭头改变图片
function change_img() {
  s_img.forEach((item2) => {
    s_img.forEach((i2) => {
      i2.classList.remove("active")
    })
    item2 = cur - 1;
    s_img[item2].classList.add("active")
  })
}
// 箭头改变图标
function change_icon() {
  s_btn.forEach((item2) => {
    s_btn.forEach((i2) => {
      i2.classList.remove("active")
    })
    item2 = cur - 1;
    s_btn[item2].classList.add("active")
  })
}

// 自动轮播图片
let s_con = document.querySelector(".scroll-content");

function next_img() {
  let timer = setInterval(() => {
    if (cur === max) {
      cur = min;
    } else {
      cur++;
    }
    change_img();
    change_icon();
  }, 5000);

  // 暂停轮播
  s_con.onmouseenter = function () {
    clearInterval(timer)
  }
}
// 继续轮播
s_con.onmouseleave = function () {
  next_img()
}

next_img();




