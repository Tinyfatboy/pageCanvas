# pageCanvas

### 预览页面

- 预览页面[Canvas画图页面](https://tinyfatboy.github.io/pageCanvas/index.html)

### 说明

- 利用canvas制作的画图工具

- 设计参考追波并且修改了一部分

- 适配手机，电脑端与iPad

- 手机竖屏的状态下，由于屏幕宽度，不支持自选颜色，只能使用黑色

- 手机横屏，电脑端与iPad上面支持多种颜色画图

- 默认检测屏幕宽度刷新canvas画布，改变浏览器窗口宽度默认刷新画布

### 需要改进的部分

- window.screen.width在iOS设备中无论横屏竖屏都是一样的值，用inner.width代替这一部分

- 在chrome中开发者模式中如果切换设备需要手动刷新页面画图（监听window.onsize，不修改电脑端画图的mouse事件与移动端touch事件；在真实设备中页面宽度固定，不会产生此类现象）

- 在桌面端使用mouse事件画图时，如果画出canvas范围则本次画线结束；需要再次在canvas范围内mousedown才能继续画线