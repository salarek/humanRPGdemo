const CategoriesData = [
  {
    name: "kalistenika",
    skills: [""],
  },
  {
    name: "notyourbuissness",
    skills: [""],
  },
];
var namer = "kalistenika";
console.log(CategoriesData[0].name)

for(let cat of CategoriesData){
  if(namer == cat.name){
    cat.skills=["dupa","cipa"]
  }
 
}
console.log(CategoriesData)