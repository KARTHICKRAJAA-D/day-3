let person={
    "FirstName"  :"Karthickrajaa",
        "LastName"   :"Duraisamy",
        "Age"        :"28",
        "Gender"     :"Male",
        "BloodGroup" :"o+ve",
        "Mobile No"  :"9865377907",
}
for(let [key,values] of Object.entries(person)){
    console.log(`${key}:${values}`)
}


/*
FirstName:Karthickrajaa
LastName:Duraisamy
Age:28
Gender:Male
BloodGroup:o+ve
 Mobile No:9865377907
*/

for(let key in person){
    console.log(key + ':' + person[key]);
}
/*
FirstName:Karthickrajaa
LastName:Duraisamy
Age:28
Gender:Male
BloodGroup:o+ve
 Mobile No:9865377907

*/
let person1=[{
    "FirstName"  :"Karthickrajaa",
        "LastName"   :"Duraisamy",
        "Age"        :"28",
        "Gender"     :"Male",
        "BloodGroup" :"o+ve",
        "Mobile No"  :"9865377907",
},{
    "PG Degree"     :"M.E",
        "College"       :"College of Engineering Guindy,Chennai",
        "specilization" :"Internal Combustion Engineering",
        "Department"    :"Mechanical",
        "completed year":"2019",
        "percentage"    :"70.3",
}]

for(let i=0;i<person1.length;i++){
    console.log(person1[i]);
}


//json resume format


let resume={
    "personal_information":{
        "FirstName"  :"Karthickrajaa",
        "LastName"   :"Duraisamy",
        "Age"        :"28",
        "Gender"     :"Male",
        "BloodGroup" :"o+ve",
        "Mobile No"  :"9865377907",
        "DOB"        :"14 Oct 1994"
    },
    "EducationalQualification":[{
        "PG Degree"     :"M.E",
        "College"       :"College of Engineering Guindy,Chennai",
        "specilization" :"Internal Combustion Engineering",
        "Department"    :"Mechanical",
        "completed year":"2019",
        "percentage"    :"70.3",},

        {"uG Degree"     :"B.E",
        "College"       :"PSG College of Technology,Coimbatore",
        "Department"    :"Mechanical Engineering",
        "completed year":"2016",
        "percentage"    :"65.5",},

        {"Diploma"       :"DME",
        "College"       :"Muthayammal Polytechnic College,Rasipuram",
        "Department"    :"Mechanical Engineering",
        "completed year":"2013",
        "percentage"    :"97.5",},

        {"SSLC"          :"Matriculation",
        "School"        :"Kurinji Matric Higher Secondary School,namakkal",
        "completed year":"2010",
        "percentage"    :"75",
    }],
    "Experience":[{
        "Designation"   :"Assistant Professor",
        "College"       :"Muthayammal Engineering College,Rasipuram",
        "years"         :"1 year",},

        {"Designation"  :"Shift Incharge",
        "Company"       :"Sri NamagiriAmman Tyre Reteads",
        "years"         :"3 year",
    }],
    "language":"Tamil,English",


    
}

