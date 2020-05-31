/**
 * @param {Number} x 横坐标
 * @param {Number} y 纵坐标  
 * @param {Image} img 对象图片  
 * @description 游戏的背景对象
 * 在这里我们要使用我们的javascript最新的语法去创建我们的对象
 */
class BackGround {
	// 添加一个构造器，将这三个参数传递进来
	constructor(x, y, img) {
		//将传递进来的三个参数保存下来
		this.x = x;
		this.y = y;
		this.img = img;
		this.speed = 2; //背景移动的速度
	}
	// 在当前对象里面定义一个方法，把自己画出来
	// 传递ctx这个参数进来，这个ctx的参数就是我们游戏里面的画笔
	draw(ctx) {
		//每次在绘画之前，调用一下自己移动的方法
		this.move();
		// drawImage是绘制一个图片
		ctx.drawImage(this.img, this.x, this.y);
	}
	//背景移动的方法
	move() {
		//背景是自己在移动，其实就是不这的改变自己的纵坐标
		this.y = this.y + this.speed;
		//防止纵坐标变最成0，而背景移出去
		if (this.y >= 0) {
			this.y = -768;
		}
	}
}
