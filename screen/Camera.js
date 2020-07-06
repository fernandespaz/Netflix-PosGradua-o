
import React, {PureComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { RNCamera} from 'react-native-camera';

export default class CameraScreen extends React.Component{
 
  constructor(props){
    super(props);
    this.state = {type:RNCamera.Constants.Type.back, hasPermission: null};
  }

  ComponentDidMount(){
    const handlePermission = async () => {
      const { status } = await RNCamera.requestPermissionsAsync();
      this.setState({hasPermission: status === 'granted'});
    }
    handlePermission();
   
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RNCamera 
        ref={ref => {
          this.camera = ref;
        }}
        style={{ flex: 1 }} 
        type={this.state.type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={async() => {
                if (this.camera) {
                  const options = {quality:0.5,base64:true};
                  let photo = await this.camera.takePictureAsync();
                  this.props.navigation.navigate("More", {
                    image: photo.uri,
                    name: this.props.route.params.name,
                    icon: null,
                  })
                }
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
            </TouchableOpacity>
          </View>
        </RNCamera>
      </View>
    );
  }
}
