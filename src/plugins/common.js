export default {
	install(Vue) {
		Array.prototype.has = function (val) {
			return this.indexOf(val) >= 0;
		};
		Array.prototype.removeFirst = function () {
			let temp = [...this];
			temp.shift();
			return temp;
		};
	}
}
