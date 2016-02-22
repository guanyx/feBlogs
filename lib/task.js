var website = require('./websites');
var x = require('x-ray')();

module.exports = function(){
  website().forEach(function(obj){
    x(obj.url, obj.list, [
      {
        title: obj.title,
        href: obj.href
      }
    ])(function(err, list){
      console.log(err);
      console.log(list)
    })
  })
};