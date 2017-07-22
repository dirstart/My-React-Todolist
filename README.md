# 项目进度
#### --PS:因前期没有写这个所以已经忘记了部分，果然以后得好好地写readme啊

*  *  *
##### 1.完成了增加任务
##### 2.完成了删除任务
##### 3.完成了部分css任务
##### 4.由本来的{content} => {content,flag} =>  目前想要改为 {content,flag,id} 原因是遇到了Bug，在删除的时候通过给index的flag改成false，之后在map的时候用默认i赋值导致出错，改进方案==>  改为{content,flag,id},同时分为dustbinList和TodoList两块
##### 5.悬浮弹窗的实现，目前已经实现，利用css动画实现
##### 6.input等css动画的改进
##### 7.使用localStorage完成了所有进度的存储
##### 8.完成了todo还原，修改了原来的删除任务，变成已完成状态按clear后才算删除
##### 9.已经成功部署在了GitHub上:  https://dirstart.github.io/My-React-Todolist/build/


# 当前准备完成
* * *
#####  1.当输入文本过长的一些操作
#####  2.关于if-else的各个地方的判断
#####  3.**组件的重用，实在是太多重复的逻辑了，比如说不断传递的那些函数，这个可能需要redux来解决？此外还有很明显的的两个list，两个list的逻辑其实基本相同，考虑能够合成一个组件**
#####  4.关于重复样式的改进,关于鼠标hover有没有那种扩散状态的样式
#####  5.重构。关于动用webpack而不是直接用create-react-app来做，同时可在样式中使用stylus开发更清晰
##### 6.还可以加一个搜索计划,关于搜索过程中怎么提升搜索的效率
##### 7.关于删除和增加的特效能否更加平滑
##### 8.从我的todo项目从React-learning移到另外一个仓库单独存放。 （已完成）
##### 9.再做个导出功能
##### 10.再加点文艺的东西配合我的css，如``别人的成功往往是冰山的一脚，因为我们往往看不见人们冰山下的努力。``
##### 11.关于防止用户多次Enter(或者是不小心按到了Enter)
##### 12.部署在github之后才发现初始的界面不好看，准备继续添加CSS

# 过程中遇到的问题
* * *
##### 1.map的问题，大意疏漏的bug
> 解决方案：
在删除的时候通过给index的flag改成false，之后在map的时候用默认i赋值导致出错，改进方案==>  改为{content,flag,id},同时分为dustbinList和TodoList两块
##### 2.!!!!!!!input和button明明设置的height一样却不能等高
##### 3.在list的地方我也加上了animation，但是这次出现了抖动的现象，主要是下方出现了波浪线
#####4.当任务栏过长，则suspension会出现问题，应该将suspension设置为fixed定位
##### 5.css动画出现了波浪线的问题，截图的时候没有，但是在播放的时候肉眼可见
##### 6.有没有一种可以先写一个可重用的css然后再套用的东西？不用多加一个class的那种
##### 7.解决的问题:关于这里的弹窗当第二次点击的时候如何使上一次的setTimeout停止(以前只用过clearInterval，这下学到了)
> 解决方案：
var t=setTimeout(()=>{},5000);
clearTimemout(t);
// 其实和setInterval停下的方法是一样的
```
if (this.state.content === '') {
      console.log("没有任务");
      this.setState({
        suspension: true
      }, function() {
        setTimeout(() => {
          this.setState({
            suspension: false
          })
        }, 5000);
      })
      return;
    }
```
##### 8.执行了npm run build并且~~挂在了github~~,打算挂在github，但是貌似发现需要配置服务器
> 解决方案：
已解决，感谢React群里的大神，因为create-react-app实际上是在本地里开了一个服务器，所以打包的时候打包的路径其实是绝对路径。而我们要部署我们的静态文件，需要的是相对路径。所以，其实只要加两个'.'在我们引用的css和js文件里即可。学到了！！感谢大神。
##### 9.关于页面缩放的问题，自己才发现自己npm start的时候用了'ctrl'+'+'放大了，这些需要缩放了QAQ
> 解决方案:
```
body{
  zoom:0.9;
}
```
不过有了经验，下次还是要用可定制的css写啊，比如用变量控制长度。
同时发现还需要学习一些关于initial-scale的内容
##### 10.终于能够成功部署静态网页在github了，发现自己的分支gh-pages没有和master同步
> 解决方案
直接在本地`git branch gh-pages` `git push origin gh-pages`即可


# 感想
*  *  *
##### 1.用animation加个动画真是好玩
##### 2.得到了成就感，找bug的能力，着急并没有卵用
##### 3.css动画问题，感觉还是多次创建suspension的div往下滑之后再销毁，这样的效果应该比较好。再次更新，自己蠢不能怪css3没法实现，还是用css3实现吧
##### 4.需要学习的：Map，let of，filter等ES6相关问题

# 在这次项目中值得学习和分享的内容