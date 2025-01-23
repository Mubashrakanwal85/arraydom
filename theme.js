function toggletheme() {
    const displayref = document.getElementById("theme-display");
    console.log();

    const bodycolor = document.body.style.backgroundColor;
    const isdark = bodycolor === "black";
  
    if (document.body.style.backgroundColor === "black") {
      console.log("i am dark theme");
      document.body.style.backgroundColor === "white";
      document.body.style.backgroundColor === "black";
    } else {
    
      console.log("i am light theme");
    
      document.body.style.backgroundColor = "black";
    
      document.body.style.color = "white";
      displayref.innertext = "dark";
    }
  }
  
  const themebtnref = document.getElementById("theme-btn");
  themebtnref.addEventListener("click", () => {
    toggletheme();
  });
  
  
  
  setTimeout(() => {
    console.log("terminating set interval");
  }, 15000);
  
  const intervalid = setInterval (() => {
      console.log("set interval called");
      toggletheme();
  
  }, 5000);
  