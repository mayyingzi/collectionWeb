# 面向切面编程（AOP）
- 什么AOP
- 为什么要使用AOP
- 代码实现


## 什么是AOP
```hash
    面向切面编程（AOP：Aspect Oriented Program首字母缩写）：运行时，动态的将代码切入到类的指定方法、指定位置上的变成思想就是面向切面的编程。
    一般而言，我们管切入到指定类指定方法的代码片段称为切面，而切入到哪些类、哪些方法则叫切入点。
```

## 为什么要使用AOP
```hash
    对比：面向对象的特点是继承、多态和封装。
        1、而封装就要求将功能分散到不同的对象中去，这个被称之为职责分配。
        2、不同的类设计不同的方法。将代码分散到一个个类中去，
        3、优势：降低代码的复杂度，类可重用。
        4、不足：分散代码，增加了代码的重复性。面向对象的设计让类与类之间无法联系，而不能将重复的代码统一起来
    AOP是OOP的补充。
    OOP：从横向上区分出一个类来；
    AOP：从纵向上向对象中加入特定的代码。时间维度：AOP使OOP由原来的二维变为三维，由平面变为立体；

    实现原理： 代理机制
```

## 代码实现
- 主要思想：**代理**&**保存原函数引用**&**apply**
- 实例：
```hash
    Function.prototype.before = function(beforeFn) {
        var _self = this; // 保存原函数引用
        return function() { // 返回包含了原函数和新函数的‘代理’函数
            beforeFn.apply(this, arguments); // 执行新函数，修正this
            return _self.apply(this, arguments); // 执行原函数
        }
    }

    Function.propotype.after = function(afterFn) {
        var _self = this;
        return function() {
            var ret = _self.apply(this, arguments);
            afterFn.apply(this, arguments);
            return ret;
        }
    }

    var obj = {
        name: 'tangdy',
        before: 'this is before',
        after: 'this is after',
        method: function() {
            console.log(this.name)
        }
    }

    obj.method = obj.method.before(function() {
        console.log(this.before)
    }).after(function() {
        console.log(this.after)
    })

    obj.method()

    <!--
        before 和 after 都会返回一个新的函数（一个函数外壳），将原来的函数存储到新的函数中，同时把传入的函数也存储到新的函数；
        调用时的语法：obj.before(...); before的前一个调用栈是method, 所以before内部的this采用了隐式绑定，this就是method

     -->

```