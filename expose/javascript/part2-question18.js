let d = new Date();

setInterval(() => {
  let time = d.toLocaleTimeString();
  console.log(time);
}, 1000);
