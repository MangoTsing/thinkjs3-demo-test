const Base = require('./base.js');
module.exports = class extends Base {
  constructor(ctx){
  	super(ctx);
  	this.ctx = ctx
  	// console.log(this.ctx.header.host)
  }
  indexAction(){
  	// console.log(this.ctx.res);
  	this.body = '<br/>login<br/>'
  	// console.log('login success')
  }
  async addAction(){
    let data = this.get();
    if (think.isEmpty(data.id)) {
      //保存
      let res = await this.model("thinkjsplus_category").add(data);
      
      if (res) {
        return this.json({"succ":true});
      } else {
        return this.json({"succ":false});
      }
    } else {
      //更新
      let res = await this.model("thinkjsplus_category").update(data);
       if (res) {  
        return this.json({"succ":true});
      } else {
        return this.json({"succ":false});
      }
    }
  }
  async loginAction(){
      const user = this.model('thinkjsplus_category');
      const data = await user.having('id>10 AND remark >100').select()
      return this.json(data);
  }
}