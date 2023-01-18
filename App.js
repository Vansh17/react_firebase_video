// import React,{ useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, 
//   Text, 
//   View,
//   SafeAreaView,
//   ActivityIndicator,
// TouchableOpacity, } from 'react-native';
// import storage from '@react-native-firebase/storage';

// import DocumentPicker from 'react-native-document-picker';

// const App=()=>{
//   const [loading,setLoading]=useState(false);
//   const [filePath,setFilePath]=useState({});
//   const [process, setProcess]=useState('');

//   const pickFiles=async()=>{
//     try{
//       const fileDetails=await DocumentPicker.pickSingle({
//         type: [DocumentPicker.types.allFiles],
//         copyTo: 'cachesDirectory',
//       });
//       console.log(fileDetails);
//       setFilePath(fileDetails);
//     } catch (error){
//         setFilePath({});
//         alert(
//           DocumentPicker.isCancel(error)
//           ? 'Canceled'
//           : 'Unknown Error: ' + JSON.stringify(error),
//         );
//     }
//   };

//   const uploadImages = async()=>{
//     try{
//       console.log(filePath.fileCopyUri.replace('file://', ''));
//       console.log(filePath.name);
//       const reference = storage().ref(`/myfiles/${filePath.name}`);
//       const task=reference.putFile(
//         filePath.fileCopyUri.replace('file://', ''),
//       );
//       task.on('state_changed',taskSnapShot =>{
//         setProcess(
//           `${taskSnapShot.bytesTransferred} transferred
//           out of ${taskSnapShot.totalBytes}`, 
//         );
//         console.log(
//           `${taskSnapShot.bytesTransferred} transferred
//           out of ${taskSnapShot.totalBytes}`, 
//         );
//       });

//     }
//   }

// }


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



// import React,{ useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, 
//   Text, 
//   View,
//   SafeAreaView,
//   ActivityIndicator,
// TouchableOpacity, } from 'react-native';
// import storage from '@react-native-firebase/storage';

// import DocumentPicker from 'react-native-document-picker';

// const App=()=>{
//   const [loading,setLoading]=useState(false);
//   const [filePath,setFilePath]=useState({});
//   const [process, setProcess]=useState('');

//   const pickFiles=async()=>{
//     try{
//       const fileDetails=await DocumentPicker.pickSingle({
//         type: [DocumentPicker.types.allFiles],
//         copyTo: 'cachesDirectory',
//       });
//       console.log(fileDetails);
//       setFilePath(fileDetails);
//     } catch (error){
//         setFilePath({});
//         alert(
//           DocumentPicker.isCancel(error)
//           ? 'Canceled'
//           : 'Unknown Error: ' + JSON.stringify(error),
//         );
//     }
//   };

//   const uploadImages = async()=>{
//     try{
//       console.log(filePath.fileCopyUri.replace('file://', ''));
//       console.log(filePath.name);
//       const reference = storage().ref(`/myfiles/${filePath.name}`);
//       const task=reference.putFile(
//         filePath.fileCopyUri.replace('file://', ''),
//       );
//       task.on('state_changed',taskSnapShot =>{
//         setProcess(
//           `${taskSnapShot.bytesTransferred} transferred
//           out of ${taskSnapShot.totalBytes}`, 
//         );
//         console.log(
//           `${taskSnapShot.bytesTransferred} transferred
//           out of ${taskSnapShot.totalBytes}`, 
//         );
//       });
//       task.then(()=>{
//         alert('Image uploaded to bucket');
//         setProcess('');
//       });
//       setFilePath({});


//     }
//     catch(error){
//       console.log('Error->',error);
//       alert(`Error-> ${error}`);

//     }
//     setLoading(false);
//   };
//   return (
//     <>
//     {loading ? (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="blue"/>

//       </View>
//     ):(
//       <SafeAreaView style={{flex:1}}>
//         <View style={styles.container}>
//           <View style={styles.container}>
//             <Text>Choose Video</Text>
//             <Text>Process</Text>
//             <TouchableOpacity
//               activeOpacity={0.5}
//               style={styles.buttonStyle}
//               onPress={pickFiles}
//             >
//               <Text style={styles.buttonTextStyle}>Choose Video</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
              
//               style={styles.buttonStyle}
//               onPress={uploadImages}
//             >
//               <Text style={styles.buttonTextStyle}>Upload File on storage</Text>
//             </TouchableOpacity>

//           </View>
//         </View>

//       </SafeAreaView>
//     )}
//     </>
// );

// };


// export default App;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     // justifyContent: 'center',
//     padding:10,
//   },
//   titleText:{
//     fontSize:20,
//     fontWeight:'bold',
//     textAlign:'center',
//     padding:20,
//   },
//   buttonStyle:{
//     alignItems:'center',
//     backgroundColor:'green',
//     padding:10,
//     width:300,
//     marginTop:16

//   },
//   buttonTextStyle:{
//     color:'white',
//     fontWeight:'bold',
//   },
//   footerHeading:{
//     fontSize:18,
//     textAlign:'center',
//     color:'grey',
//   },
//   footerText:{
//     fontSize:16,
//     textAlign:'center',
//     color:'grey',
//   }
// })

// ***********************************************************************
import * as React from 'react';
import { View, StyleSheet, Button,Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video style={styles.cont1}
        ref={video}
        
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/internship-task-171a5.appspot.com/o/big_buck_bunny.mp4?alt=media&token=7f81bf0e-463c-4a09-b1df-77bbe21a3c76',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.cont} >
        <Button 
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex: 1, justifyContent: "center",backgroundColor:'#00bcd4'},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  button:{
    // marginTop:'100px',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'orange',
    
  },
  cont:{
    // marginTop:'100px',
    // top:'50px',
    
    
  },
  cont1:{
    width:'100%',
    flex:1,
  }
});