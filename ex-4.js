const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here
employees.push ({
  //Key name มี Value เป็น "Alicia" Key age มี Value เป็น 29
  // Key hobbies มี Value เป็น “Shopping" และ “Reading novels
  name: "Alicia",
  age: 29,
  hobbies: ["Shopping", "Reading novels"],
});
//พนักงานคนที่ 2 มี Property ของ Object ดังนี้
// Key name มี Value เป็น "Kody"
// Key age มี Value เป็น 19
// Key hobbies มี Value เป็น “Computer games" และ “Wakeboard"
employees.push ({
  name: "Kody",
  age: 19,
  hobbies: ["Computer games", "Wakeboard"],
});

console.log(employees);
