const Base = require('./../base.js');
module.exports = class extends Base {
  indexAction() {

      return this.display('');
  }
  loginAction(){
  	this.body = 'login'
  	console.log('login success')
  }
}