import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View ,ScrollView} from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const Home = ({ navigation }) => {
    const category = ['All', 'Shoes', 'Clothes', 'Kids','Clothes']

    // const []
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginHorizontal: 20, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{}}>
                    <Image source={require('../../images/manu.png')} style={{
                        height: 30, width: 30,
                    }} />
                </TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.titleText}>mypop</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../images/search.png')} style={{
                        height: 30,
                        width: 30,
                    }} />
                </TouchableOpacity>
            </View>

            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoryView}> 
                    {
                        category.map((data) => {
                            return(
                                <TouchableOpacity style={{ marginHorizontal: 32,}}>
                                    <Text style={{fontSize: 24,}}>{data}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                    </ScrollView>
            </View>

            <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    title: {
        alignSelf: 'center',
    },
    titleText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30,
    },
    categoryView:{
        flexDirection: 'row',
        marginVertical: 10,
        marginTop: 40,
    }
})