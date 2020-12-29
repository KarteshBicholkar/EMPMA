
  function renderHeader() {
    

    return (
      <View
        style={{
            flex:1,
            flexDirection:'row',
          backgroundColor: '#fff',
          padding: 10,
        //   marginVertical: 10,
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          borderTopColor:'white',
          borderRightColor:'white',
          borderLeftColor:'white',
          borderBottomColor:'grey',
          borderStyle:'solid',
          borderWidth:1,
        }}
      >
       
       <View styles={{
           flex:1,
           paddingHorizontal:10,
           backgroundColor:'teal'
       }}>   
       
       <Ionicons name="search-circle" size={45} color="teal"  styles={{
           flex:1,
           paddingHorizontal:10,
           
       }}/>
       
       </View>
       <View styles={{
           flex:1,
           flexDirection: 'row',
           paddingHorizontal: 10,
       }}>
       <Text> Employee</Text>
        
       </View>
        
      </View>
    );
  }




