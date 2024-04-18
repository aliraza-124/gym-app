import { Alert, StyleSheet,  View } from 'react-native'
import React from 'react'
import BackgroundIcon from '../../components/backgroundIcon'
import { IconButton, Text, MD3Colors, useTheme  } from 'react-native-paper'
import QrScanner from '../../components/qrScanner'

export default function QrScanScreen({navigation}) {
    const theme = useTheme();
    const handleOnSuccess = (e)=>{
        
        Alert.alert(
              "Scanned Data",
              e.data,
              [
                {
                  text: "OK",
                  onPress: () => console.log("Going to Welcom screen"),
                },
              ],
              { cancelable: false }
            );
    }
    
    const handleNavigation = (e)=>{
      if(e.data == '/signup?branchId=f02743df-41e6-47fe-92a6-a60a202639da')
          {
            navigation.navigate('register');
          }
        else
        {
          console.log('QR is invalid')
        }
    }

  return (
    <View>
        <BackgroundIcon />
        <View style={styles.container} >
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <IconButton
                    icon="arrow-left"
                    iconColor={theme.colors.primary}
                    size={28}
                    onPress={navigation.goBack}
                />
                <Text style={styles.heading} >Scan QR code to sign up on mobile</Text>
            </View>
                <Text style={{paddingBottom:10}} >Scan QR Code Here</Text>
        </View>
            <QrScanner handleOnSuccess={handleOnSuccess}/>
            {/* <QrScanner navigation={navigation}/>sssss */}
        
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        marginTop : 120,
        alignItems:'center',
        marginBottom:80,
    },
    heading : {
        fontSize : 16,
        fontWeight : 700,
        padding : 10
    }
})