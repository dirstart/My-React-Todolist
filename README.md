# 项目进度

*  *  *
##### 1.完成了增加任务
##### 2.完成了删除任务
##### 3.完成了部分css任务
##### 4.由本来的{content} => {content,flag} =>  目前想要改为 {content,flag,id} 原因是遇到了Bug，在删除的时候通过给index的flag改成false，之后在map的时候用默认i赋值导致出错，改进方案==>  改为{content,flag,id},同时分为dustbinList和TodoList两块
#####  5.悬浮弹窗的实现，目前已经实现，利用css动画实现
#####  6.input等css动画的改进

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

# 过程中遇到的问题
* * *
##### 1.map的问题，大意疏漏的bug
> 解决方案：
在删除的时候通过给index的flag改成false，之后在map的时候用默认i赋值导致出错，改进方案==>  改为{content,flag,id},同时分为dustbinList和TodoList两块
##### 2.!!!!!!!input和button明明设置的height一样却不能等高
##### 3.在list的地方我也加上了animation，但是这次出现了抖动的现象，主要是下方出现了波浪线
#####4.当任务栏过长，则suspension会出现问题，应该将suspension设置为fixed定位
##### 5.css动画出现了波浪线的问题，截图的时候没有，但是在播放的时候肉眼可见
##### 有没有一种可以先写一个可重用的css然后再套用的东西？不用多加一个class的那种
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


# 感想
*  *  *
##### 1.用animation加个动画真是好玩
##### 2.得到了成就感，找bug的能力，着急并没有卵用
##### 3.css动画问题，感觉还是多次创建suspension的div往下滑之后再销毁，这样的效果应该比较好。再次更新，自己蠢不能怪css3没法实现，还是用css3实现吧
##### 4.需要学习的：Map，let of，filter等ES6相关问题