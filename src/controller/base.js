module.exports = class extends think.Controller {
  async __before(){
    const userInfo = await this.session('userInfo');
    //获取用户的 session 信息，如果为空，返回 false 阻止后续的行为继续执行
    if(think.isEmpty(userInfo)){
      // console.log(userInfo)
      return true;

    }
  }
  __after(){
  	// console.log(this.get(name))
    this.body +='name:'+this.get('name')
  }
  __call(){
  	console.log('error call')
  }
};
