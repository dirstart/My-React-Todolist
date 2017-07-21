### 1.完成了增加任务
### 2.完成了删除任务
### 3.完成了部分css任务
### 4.当输入文本过长的一些操作
### 5.由本来的{content} => {content,flag} =>  目前想要改为 {content,flag,id} 原因是遇到了Bug，在删除的时候通过给index的flag改成false，之后在map的时候用默认i赋值导致出错
改进方案==>  改为{content,flag,id},同时分为dustbinList和TodoList两块
### 6.悬浮弹窗的实现

### 思考方案，如果我不在TodoList上获取所有数组，而是在todoApp上写我的逻辑，这样也许会更加清楚一点。

### 过程中遇到的问题：map的问题，大意疏漏的bug
### 觉得自己还需要做的： 1.关于空内容发送的非弹窗提示 2.关于if-else的各个地方的判断
3.**组件的重用，实在是太多重复的逻辑了，比如说不断传递的那些函数，这个可能需要redux来解决？此外还有很明显的的两个list，两个list的逻辑其实基本相同，考虑能够合成一个组件**
4.关于重复样式的改进,关于鼠标hover有没有那种扩散状态的样式
5.关于动用webpack而不是直接用create-react-app来做，同时可在样式中使用stylus开发更清晰
6.关于css动画和交互的改进:a.当input被focus，add按钮2s内缩小，input2s内加长
7.还可以加一个搜索计划,关于搜索过程中怎么提升搜索的效率
8.关于删除和增加的特效能否更加平滑
### 收获：成就感，找bug的能力，着急并没有卵用
### 需要学习的：Map，let of，filter等ES6相关问题

### 有没有一种可以先写一个可重用的css然后再套用的东西？不用多加一个class的那种

### 再做个导出功能哈哈哈

### 用animation加个动画真是好玩
！！！ 更新，感觉还是多次创建suspension的div往下滑之后再销毁，这样的效果应该比较好
！！！ 再次更新，自己蠢不能怪css3没法实现，还是用css3实现吧
！！！ 为了停止卡顿所以还需要停止css3动画

### 关于防止用户多次Enter(或者是不小心按到了Enter)

分层思想，感觉自己运气好想到的？哈哈哈。实际上只传content和index给Content组件，旗帜在之前就已经被拆分


再加点文艺的东西：
    别人的成功往往是冰山的一脚，因为我们往往看不见人们冰山下的努力。


解决的问题:关于这里的弹窗当第二次点击的时候如何使上一次的setTimeout停止(以前只用过clearInterval，这下学到了)
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
