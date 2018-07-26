const Base = require('../base.js');
module.exports = class extends Base {
  
  loginAction(){
  	this.body = 'login'
  	console.log('login success')
  }
}