var express=require('express');
var app=express();
var PORT=process.env.PORT || 3000;
var products=[{
	id:1,
	name:'Krizma Lawn',
	description:'This Branded Suit',
	price:23.0,
	brandName:'Krizma',
	type:'Vol 3'
},

{
id:2,
	name:'Maria B Lawn',
	description:'This is Maria b Replica',
	price:23.0,
	brandName:'Maria B',
	type:'Vol 2'
}];

app.get('/',function(req,res){
 
 res.send('Product Api in QM Collection');
 
});


// GET:/products

app.get('/products',function(req,res){
res.json(products);
});
app.listen(PORT,function(){
console.log('Express listening on PORT: '+PORT +' !' );
});