const Base = require('./base.js');
module.exports = class extends Base {
  constructor(ctx){
    super(ctx);
    this.ctx=ctx
  }
  indexAction(){
  	return this.display()
  }
  async addAction(){
    let data = this.get();
    // if (think.isEmpty(data.id)) {
      //保存
      let res = await this.model("xgjd").add(data);
      
      if (res) {
        return this.json({"succ":true});
      } else {
        return this.json({"succ":false});
      }
    // } else {
    //   //更新
    //   let res = await this.model("xgjd").update(data);
    //    if (res) {  
    //     return this.json({"succ":true});
    //   } else {
    //     return this.json({"succ":false});
    //   }
    // }
  }
  async loginAction(){
      return this.json(this.get() );
  }
}