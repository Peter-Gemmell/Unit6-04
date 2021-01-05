const age = prompt ('How old are? So that we can see what the price the admission fee is depending on your age. There is a student fee on Tuesday and Thursday for ages 12-21')
const day = prompt ('What day is the day of the week that you are planning on going. Because on Tuesday and Thursday there is student pricing.')

if ((day == "tuesday" || day == "thursday") || (age > 12 && age < 21)) {
  document.write('You are eligible for student pricing! Because you are ' + age);
} else {
  document.write('You are eligible for regular price. Only.');
}
