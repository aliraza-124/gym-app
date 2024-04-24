import { Alert, StyleSheet,  View } from 'react-native'
import React from 'react'
import BackgroundIcon from '../../components/backgroundIcon'
import { IconButton, Text, MD3Colors, useTheme  } from 'react-native-paper'
import QrScanner from '../../components/qrScanner'
import { useBranchId } from '../../context/qrContext'

export default function QrScanScreen({navigation}) {
    const theme = useTheme();

    const {updateBranchId} = useBranchId();
    
    const handleOnSuccess = (e)=>{
      
      updateBranchId(e.data.split("=")[1]);
      handleNavigation(e);
        // Alert.alert(
        //       "Scanned Data",
        //       e.data,
        //       [
        //         {
        //           text: "OK",
        //           onPress: () => console.log("Going to Welcom screen"),
        //         },
        //       ],
        //       { cancelable: false }
        //     );
    }
    const branchIds = [
      '/signup?branchId=f02743df-41e6-47fe-92a6-a60a202639da',
      "/signup?branchId=4fc54550-0182-4e6a-896a-bd2d60209f38",
      "/signup?branchId=2cdcea2f-5cdb-417b-b50e-d3f66b6ab508",
      "/signup?branchId=d875f6fa-70e5-4505-9a4e-05ef54aa43ff",
      "/signup?branchId=2038bd2a-05ee-451d-a3a2-69bd31a2dc59"
    ]
    
    const handleNavigation = (e)=>{
      // if(e.data == '/signup?branchId=f02743df-41e6-47fe-92a6-a60a202639da')
      if(branchIds.includes(e.data))
          {
            navigation.navigate('register');
          }
        else
        {
          Alert.alert(
            "QR is invalid",
            "Try again"
            // e.data,
          );
          console.log('QR is invalid', e.data)
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