import React from 'react';
import { Entypo } from '@expo/vector-icons';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  NavigatorIOS,
  StyleSheet,
  Image,
} from 'react-native';


export default class FileIdRegistration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fileId: ""
        };

        this.setFileId = this.setFileId.bind(this);
        this.goToQrCodeScreen = this.goToQrCodeScreen.bind(this);
    }

    setFileId(id) {
        this.setState({fileId: id});
        console.log('id set' + id);
    }

    goToQrCodeScreen() {
        this.props.navigation.navigate('FileViewer', {fileId: this.state.fileId});
    }

    render() {
        return (

        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <Entypo style={{marginBottom: 50}} name="text-document" size={120} color="white"/>
            <Text style={{textAlign: 'left', marginBottom:10,fontSize:15, color: 'white'}}>Input File ID:</Text>
            <TextInput value={this.state.fileId} onChangeText={t => this.setFileId(t)}
                style={styles.textbox} placeholder={"Ex. 0,0,1234"} />

            <TouchableOpacity onPress={()=>this.goToQrCodeScreen()}>
                <Text style={{marginTop:20,fontSize:20, color: 'white'}}>Submit</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#372248'
    //backgroundColor: '#924bcc'
  },
  textbox: {
    borderRadius: 10,
    borderWidth: 1,
    width: 300,
    height: 50,
    marginTop: 20,
    paddingLeft:10,
    backgroundColor: 'white'
  },
  icon: {
    position: 'absolute',
    bottom: 60
  }
});
