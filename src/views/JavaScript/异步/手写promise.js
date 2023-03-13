/**
 * 基本的手写promise
 */
class MyPromise {
    // 构造方法
    constructor(executor) {

        // 初始化值
        this.initValue()
        // 初始化this指向
        this.initBind()
        // 执行传进来的函数
        executor(this.resolve, this.reject)
    }

    initValue() {
        // 初始化值
        this.PromiseResult = null // 终值
        this.PromiseState = 'pending' // 状态
    }

    initBind() {
        // 初始化this
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }


    resolve(value) {
        if (this.PromiseState === 'pending') return;
        // 如果执行resolve，状态变为fulfilled
        this.PromiseState = 'fulfilled'
        // 终值为传进来的值
        this.PromiseResult = value
    }

    reject(reason) {
        if (this.PromiseState === 'pending') return;

        // 如果执行reject，状态变为rejected
        this.PromiseState = 'rejected'
        // 终值为传进来的reason
        this.PromiseResult = reason
    }
}

const test1 = new MyPromise((resolve, reject) => {
    resolve('success')
})
console.log(test1) // MyPromise { PromiseState: 'fulfilled', PromiseResult: 'success' }

const test2 = new MyPromise((resolve, reject) => {
    reject('fail')
})
console.log(test2) // MyPromise { PromiseState: 'rejected', PromiseResult: 'fail' }
