let facebookProfile = {
  name: "Gorky Bunkus",
  friends: 999,
  messages: ["Eyyy baby", "sell me a toaster pls", "gimme a kiss"],
  postMessage: function(message) {
      facebookProfile.messages.push(message);
  },
  deleteMessage: function(index) {
      facebookProfile.messages.splice(index, 1);
  },
  addFriend: function() {
      facebookProfile.friends += 1;
  },
  removeFriend: function() {
      if (facebookProfile.friends > 0) {
          facebookProfile.friends -= 1;
      }
  }
  
}


// This is an array of objects. 
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

//this goes through each donut in the array
donuts.forEach(function(donut) {
    console.log(donut.type + " donuts cost $" + donut.cost + " each");
}
)