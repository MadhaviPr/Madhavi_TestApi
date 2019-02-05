let express= require('express');
//let bodyParser = require('body-parser');
let app=express();
//let apiRoutes=require("./api-routes")
//app.use(bodyParser.urlencoded({
 //  extended: true
//}));


var CheckLists=
[
    {
      id:1,
       Category :'GameDay',
      CheckItems : 'Suppliments-BrainArmuor',
    },

    {
        id:2,
         Category:'GameDay',
        CheckItems : 'Suppliments-Klean Probiotic',
    },
    {
        id:3,
         Category :'Non-GameDay',
        CheckItems : 'Suppliments-Multi-Vitamins',
    },
    {
        id:4,
         Category :'Non-GameDay',
        CheckItems : 'Hydration-SOS',
    },
    {
        id:5,
         Category :'GameDay',
        CheckItems : 'Hydration-Beta-Alanine',
    }

];


//app.use(bodyParser.json());

var  port= process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Hello World with Express'));


app.get('/api', (req, res) => res.send(CheckLists));

app.get('/api/checklist/:id',(req,res)=>{

    let checklist = CheckLists.find(c=> c.id=== parseInt(req.params.id) );
    if(!checklist) res.status(404).send('The checklist with given id does not found');
    res.send(checklist);


//res.send(req.params.id);
});



//pp.use('/api', apiRoutes)
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});
