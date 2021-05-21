import React from "react";

import {View , Text} from "react-native";

const HomePage = ()=>{    
    return(
        <View style = {{ flex : 1 , justifyContent : "center" , alignItems : "center" }}>
            <Text>Hello world , this is the first ReactNative Component I build. </Text>
        </View>

    );
};

export default HomePage;