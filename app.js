let userData = { id: 1, name: "John Doe" };

let userTask =  [{ userId: 1, task: "Write code" },
   { userId: 1, task: "Review PRs" }];


function getUserData(cb) {
  setTimeout(() => {
    console.log(userData);
    cb(userData);
  }, 1000);
}

function getUserTask(cb) {
  setTimeout(() => {
    console.log(userTask);
    cb(userTask);
  }, 2000);
}
