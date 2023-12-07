const students = [
    {
      name: "Aniruddha",
      marks: 95,
    },
    {
      name: "Pryanshu",
      marks: 75,
    },
    {
      name: "Ashif",
      marks: 92,
    },
    {
      name: "Shubam",
      marks: 70,
    },
    {
      name: "Farhan",
      marks: 59,
    },
  ];
function markscheck(name){
    let i;
    for(i=0;i<students.length;i++)
    {
        if(students[i].name === name)
        {
            if(students[i].marks >= 90)
            {
                console.log("Congratulation !You have qualified for the exam.");
            }
            else{
                console.log("Sorry !You have not qualified for the exam.");
            }
            return;
        }
    }
}
markscheck("Farhan");