const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}
console.log(users)
let max_skills = 0
max_skill_user = ''
for(const user in users){
    skills = users[user].skills.length
    if (skills > max_skills) {
        max_skills = skills
        max_skill_user = user
    }
}
console.log("usuario con mayor cantidad de skills:",max_skills, max_skill_user)
//alert('Open the console and check if the countries has been loaded')
let count = 0
for(const user in users) {
    loggedIn = users[user].isLoggedIn
    if(loggedIn)
        count++
}
console.log("usuarios conectados:", count)

count = 0
for(const user in users){
    points = users[user].points
    if (points>=50) {
        count++
    }
}
console.log(`usuarios con puntaje mayor o igual a 50: ${count}`)

const MERN = ['MongoDB', 'Express', 'React', 'Node']
for(const user in users){
  count = 0
  MERN.forEach(element => {
    skills = users[user].skills
    if (skills.includes(element))
      count++
  })
  if (count==4) {
    console.log(user)    
  }
}

users_ = Object.assign(users, {Francisco: {email: "ffloresm@udec.cl", skills: ['Python', 'C', 'Java', 'JavaScript'], age: 28, isLoggedIn: true, points: 50}});
console.log(users_)

for(const user in users_){
  console.log(Object.keys(users_[user]))
}

for(const user in users_){
  console.log(Object.values(users_[user]))
}