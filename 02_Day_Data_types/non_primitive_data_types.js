let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

//let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers) // false

let userOne = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
let userTwo = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
console.log(userOne == userTwo) // false

let numbers_ = nums
console.log(nums == numbers_)  // true

let userOne_ = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
let userTwo_ = userOne_
console.log(userOne_ == userTwo_)  // true