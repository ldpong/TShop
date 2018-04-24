/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 导入React 和 RN 控件
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Counter from "./src/component/Counter"

// 根据不同的平台加载不同的代码
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
// ES6 语法
export default class App extends Component<Props> {

    render() {
        return ( // 渲染布局
            <View style={styles.container}>
                <Counter/>
            </View>
        );
    }
}
// 样式文件
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});