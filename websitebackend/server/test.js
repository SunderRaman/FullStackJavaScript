var models = require('./server.js').models;

/* 
var toSave = [
    {name:"abc", email:"abc.com"},
    {name:"abc1", email:"abc1.com"},
    {name:"abc2", email:"abc2.com"},
    {name:"abc3", email:"abc3.com"},
    {name:"def", email:"def.com"},
    {name:"def1", email:"def1.com"},
    {name:"def2", email:"def2.com"},
    {name:"def3", email:"def3.com"},
    {name:"ghi", email:"ghi.com"},
    {name:"ghi1", email:"ghi1.com"},
    {name:"ghi2", email:"ghi2.com"},
    {name:"ghi3", email:"ghi3.com"}
]

toSave.map(obj => {
    models.Profile.create(obj,(err,created) =>{
        console.log("created?", err, created)
    })    
})
*/

 var filter = {
    where : {
        email:{like:'ghi'}
        /* postCount : {gt: 10} */ 
    },
    order : 'id ASC',
    limit : 10,
    skip : 0,
    fields : {
       email: true 
    }
    /*include = {
        relation : 'Posts',
        scope:{
            limit: 5,
            order:'date DESC'
            include : {
                relation: 'Image',
                limit : 1,
                where : {type: 'thumbnail'}
            }
        }
    }*/
} 

models.Profile.destroyAll(filter.where, (err, found) => {
        console.log("Found?", err, found);
})
