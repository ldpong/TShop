import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
type Props = {};
export default class MyPage extends Component<Props> {

    render() {
        return ( // 渲染布局
            <View style={styles.container}>
                <Text style={{margin:10,fontSize:20,color:'black'}}>个人中心</Text>
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
