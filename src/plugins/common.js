export default {
	install(Vue) {
		Array.prototype.has = (val) => {
			return this.indexOf(val) >= 0;
		};
	}
}
