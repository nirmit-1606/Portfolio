document.addEventListener("scroll", () => {
    const section = document.getElementById("my-work");
    const link = document.querySelector('aside.page-nav a[href="#my-work"]');
  
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  