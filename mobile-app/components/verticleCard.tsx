import React from "react";
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar, Image, Pressable, Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2lk8ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa9l7f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571ek29d72",
        title: "Third Item",
    },
];

// type ItemProps = {title: string};

// eslint-disable-next-line @typescript-eslint/no-shadow, @typescript-eslint/no-unused-vars
const Item = ({ item }: any) => {

    return (
        <View
            // key={i}
            style={styles.cardwidth}
        //    style={styles.user}
        >
           <Image
        style={{width:150, height:150}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

            <View
                style={styles.center}
            >
                <Pressable
                    style={styles.button}
                // onPress={() => signUpHandle()}
                >
                    <Text
                        style={styles.buttontext}
                    >

                        Test name
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export const VerticleCard = () => {
    return (
        <SafeAreaView
        >
            <FlatList
                numColumns={2}
                data={DATA}
                renderItem={(item) => <Item item={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};



export const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        // backgroundColor: "#0D88C3",
        borderColor: "grey",
        // borderRadius: 5,
        // borderWidth: 1,
        // height: 25,
        justifyContent: "center",
        width: windowWidth/2.2,
    },
    buttontext:{color: "#000000", fontSize:12 , fontWeight: "600" , letterSpacing:-.1 , lineHeight:15.6, paddingBottom:10, paddingTop:8},
    cardwidth:{
        marginHorizontal:windowWidth/22 ,
        width: windowWidth/2.7,
        
    },
    center:{
        alignItems:"center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 5,
    },
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    img:{ width: 175 },
});

