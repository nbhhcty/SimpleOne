/**
 * @author :JessieK
 * @email :lyj1246505807@gmail.com
 * @description : 手势引导悬浮界面
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    TouchableOpacity
} from 'react-native';
import constants from '../Constants';
let {width, height} = constants.ScreenWH;

class Guide extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <Modal
            animationType={'fade'}
            transparent={true}
            visible={this.props.isVisible}
            onRequestClose={() => {
                this.props.onCancel()
            }}>
            <TouchableOpacity style={styles.container} onPress={() => this.props.onCancel()}>
                <Image style={styles.displayImg} source={{uri:'one_hp_guide'}}/>
            </TouchableOpacity>
        </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.74)'
    },
    displayImg: {
        width: width*0.5,
        height: width*1.2,
    },

});

export default Guide;