module.exports = class extends think.Model {
 async listAction(){
    let model = this.model('user');
    let data = await model.where({name: 'thinkjs'}).find();
    //data returns {name: 'thinkjs', email: 'admin@thinkjs.org', ...}
    if(think.isEmpty(data)) {
      // 内容为空时的处理
      	console.log('data');
    }
  }
};
