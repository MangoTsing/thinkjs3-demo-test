module.exports = class extends think.Logic {
  __before(){
  	console.log('logic __before')
  }
  indexAction() {
  	console.log('indexx')
  }
  __after(){
  	console.log('after')
  }
};
