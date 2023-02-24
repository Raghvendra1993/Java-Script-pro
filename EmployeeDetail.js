let empDetail =[
    {
        Name:"raj",
        Age:12,
        Sal:9000
    },
    {
        Name:"raj2",
        Age:12,
        Sal:8000
    },
    {
        Name:"raj3",
        Age:12,
        Sal:3000
    },
    {
        Name:"raj4",
        Age:12,
        Sal:4000
    },
    {
        Name:"raj5",
        Age:12,
        Sal:5000
    },
    {
        Name:"raj6",
        Age:12,
        Sal:6000
    },
    {
        Name:"raj7",
        Age:12,
        Sal:7000
    },
    {
        Name:"raj8",
        Age:12,
        Sal:8000
    }
]
let emp=empDetail.map(test)
    
    function test(x)
    {
        return x.Name + " " + x.Age + " " + x.Sal
    }
    console.log(emp);

//console.log(emp)
//
