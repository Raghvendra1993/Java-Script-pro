var assets = [{name : "pc" , isMovable : true },{name : "pc1" , isMovable : false},{name : "pc2" , isMovable : true },{name : "pc3" , isMovable : false }]
var val = assets.filter(function(ass){
return ass.isMovable
})
console.log(val);