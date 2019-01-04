import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    
    return (
        <View style={styles.containerStyle}> 
        {props.children} 
        </View>
    );
};
const styles = {
    containerStyle: {
        // borderWidth: 1,
        // borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#fff',
        position: 'relative'
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 2,
        // elevation: 1,
        // marginLeft: 5,
        // marginRight: 5,
        // marginTop: 10
    }
};

export { CardSection };

