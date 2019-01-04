import React from 'react';
import { Text, View } from 'react-native';

//Parrent component showing props from here and it is written here
// const Header = () => {
//     const { textStyle, viewStyle } = styles;
//     return (
//         <View style={viewStyle}>
//         <Text style={textStyle}>Albums</Text>
//         </View>
//     );
// };


//parent component setting props from their and showing it here.
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {

    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5,
        position: 'relative'


    },

    textStyle: {
        fontSize: 20
    }

};

export { Header };
