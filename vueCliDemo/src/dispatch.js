//MVVM 事件管理器

class Dispatch {
	constructor() {
		this.store = {};
	}

	/**
	 * 获取事件在列表中的位置
	 * @param context
	 * @param callback
	 * @private
	 */
	_evIndex(event, context, callback) {
		let index = -1;
		for (let i = 0; i <= event.length; i++) {
			if (event[i].context === contex && event[i].callback === callback) {
				index = i;
				break;
			}
		}
		return index;
	}

	/**
	 * 绑定事件
	 * @param eventType string 事件类型
	 * @param context Object callback的this作用域
	 * @param callback
	 */
	on(context, eventType, callback) {
		if (typeof eventType != 'string' || typeof callback != 'function') {
			return;
		}
		let event = this.store[eventType];
		let eventObj = {
			context: context,
			callback: callback
		};
		if (!event || !Array.isArray(event)) {
			this.store[eventType] = [eventObj];
		} else if (this._evIndex(event, context, callback) < 0) {
			this.store[eventType].push(eventObj);
		}
	}

	/**
	 * 解绑事件
	 * @param eventType string
	 * @param callback 回调
	 */
	off(context, eventType, callback) {
		if (typeof eventType != 'string' || typeof callback != 'function') {
			return;
		}
		let event = this.store[eventType];
		let eventObj = {
			context: context,
			callback: callback
		};
		if (event && Array.isArray(event)) {
			let index = this._evIndex(event, context, callback);
			if (index >= 0) {
				this.store[eventType].splice(index, 1);
			}
		}
	}

	/**
	 * 广播某个事件
	 * @param eventType 时间类型
	 * @param data 数据
	 */
	emit(eventType, data = {}) {
		if (typeof eventType != 'string') {
			return;
		}
		let event = this.store[eventType];
		if (event && Array.isArray(event)) {
			for (let i = 0; i < event.length; i++) {
				event[i].callback.call(event[i].context, data, eventType);
			}
		}
	}

}

let Dispatcher = new Dispatch();
export default Dispatcher;