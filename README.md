# pageCanvas

### 预览页面

- 预览页面：[Canvas画图页面](https://tinyfatboy.github.io/pageCanvas/index.html)

### 说明

- 利用canvas制作的画图工具

- 设计参考追波并且修改了一部分

- 适配手机，电脑端

- iPad由于屏幕宽度为4:3，未能完美适配；画板未能充分利用空间

- 手机竖屏的状态下，由于屏幕宽度，不支持自选颜色，只能使用黑色

- 手机横屏，电脑端与iPad上面支持多种颜色画图

- 默认检测屏幕宽度刷新canvas画布，改变浏览器窗口宽度默认刷新画布

### 可改进的部分

- window.screen.width在iOS设备中无论横屏竖屏都是一样的值，用inner.width代替这一部分

- 在宽度415至1024分辨率时同时监听touch和mouse事件，可以优化代码

- 在chrome中开发者模式中如果切换设备需要手动刷新页面（页面监听window.onresize事件，不修改电脑端画图的mouse与移动端touch事件；由于在真实设备中页面宽度固定，不会产生此类现象）

- 在桌面端使用mouse事件画图时，如果画出canvas范围则本次画线结束；需要再次在canvas范围内mousedown才能继续画线