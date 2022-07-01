import DATA from "./data.json";




//sort by assistant
const assistants = DATA.filter(person=>person.assistant);
console.log(assistants);
////sort by nonAssistant
const nonAssistants=DATA.filter(person => !person.assistant);
console.log(nonAssistants);
//sort by groub names
const groupNames = DATA.reduce((result,item) =>{
  result[item.group]=[]
  return result},
  {});
  Object.keys(groupNames).forEach(group =>{
    const findStudents=DATA.filter(student =>
    student.group == group);
    console.log(findStudents)
    groupNames[group]=findStudents})
  console.log(groupNames);



