let userData = { id: 1, name: "John Doe" };

let userTask = 
 { userId: 1, task: "Write code" ,
   userId: 1, task: "Review PRs"}


setTimeout(() => {
  console.log(userData);
}, 1000);

setTimeout(() => {
    console.log(userTask);
    
},2000);
