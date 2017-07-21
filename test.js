// let t = 8;

// setTimeout(() => {
// 	t = 100;
// 	console.log(t);
// }, 4000);  //经测试这个t在外围可修改


let t;
clearTimeout(t); //经测试这样不报错，回去再查一下关于clearTimeout的细节