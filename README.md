### 1.完成了增加任务
### 2.完成了删除任务
### 3.完成了部分css任务
### 4.当输入文本过长的一些操作
### 5.由本来的{content} => {content,flag} =>  目前想要改为 {content,flag,id} 原因是遇到了Bug，在删除的时候通过给index的flag改成false，之后在map的时候用默认i赋值导致出错
改进方案==>  改为{content,flag,id},同时分为dustbinList和TodoList两块

### 思考方案，如果我不在TodoList上获取所有数组，而是在todoApp上写我的逻辑，这样也许会更加清楚一点。

### 过程中遇到的问题：map的问题，大意疏漏的bug
### 觉得自己还需要做的：
### 收获：成就感，找bug的能力，着急并没有卵用