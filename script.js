//Asking how old
const age = prompt('How old are? So that we can see what the price the admission fee is depending on your age. There is a student fee on Tuesday and Thursday for ages 12-21')
//Asking what day there are going
const day = prompt('What day is the day of the week that you are planning on going. Because on Tuesday and Thursday there is student pricing.')
//If its thursday or tuesday and if age is over 12 and under 21 then
if ((day === 'tuesday' || day === 'thursday') || (age > 12 && age < 21)) {
  //display a message about student pricing
  document.write('You are eligible for student pricing! Because you are ' + age)
} else {
  //if else then display a message about regular price
  document.write('You are eligible for regular price. Only.')
}
