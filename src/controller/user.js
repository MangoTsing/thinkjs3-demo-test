const Base = require('./base.js');
module.exports = class extends Base {
  constructor(ctx){
  	  super(ctx);
  	  this.body = ctx.method
  }
  indexAction(){
    this.body += 'hello1 world!';
  }
}