import React, {Component} from 'react';
export default class Cycle extends Component {
	constructor(props) {
		super(props);
		console.time();
		console.log('good text');
		console.timeEnd();
	}
	//组件挂载之前的
    componentWillMount() {
        console.time();
        console.log('我是componentWillMount方法');
        console.timeEnd();
        //getJson是自己封装的fetch请求的数据方式
        
    }
    //父组件更新props的时候子组件会优先shouldComponentUpdate前调用componentWillReceiveProps钩子函数
    componentWillReceiveProps(nextProps){
        console.log(`我是componentWillReceiveProps函数--${nextProps}`);
        return true;
    }
    //setState后都会调用shouldComponentUpdate判断是否需要重新
    shouldComponentUpdate(nextProps,nextState){
        console.log(`我是shouldComponentUpdate函数--${nextProps}---${nextState}`);
        //console.log(JSON.stringify(nextProps))
        return true;
    }
    //shouldComponentUpdate返回true或者调用forceUpdate之后
    componentWillUpdate(nextProps,nextState){
        console.log(`我是componentWillUpdate函数--${nextProps}---${nextState}`);
        return true;
    }
    componentDidUpdate(nextProps,nextState){
        console.log(`我是componentDidUpdate函数--${nextProps}---${nextState}`);
        return true;
    }
    render() {
        console.time();
        console.log('我是render方法')
        console.timeEnd();
        return (
            <div></div>
        )
    }
}