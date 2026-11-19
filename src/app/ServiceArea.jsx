import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import LocationBadge from '../components/LocationBadge';
import CustomButton from '@/components/CustomButton';

export default function ServiceArea() {
    const Badges = ["Oak Ridge", "Anderson County", "Roane County", "Knox County Area"]

    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <Header title={"Where we go"} />
                <Text style={styles.bodyText}>Oak Ridge is home. From there we serve the counties around it.</Text>
                
                <View style={styles.map}></View>

                <View style={styles.badgeContainer}>
                    {Badges.map((badge, index) => (
                        <LocationBadge key={index} title={badge} />
                    ))}
                </View>

                <CustomButton 
                    title={"Not sure? Call and ask"}
                    type={"accent"}
                    style={styles.cta}
                    icon='true' 
                    iconUrl={require('@/assets/images/tabIcons/call.png')}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFFDFA',
    },
    bodyText: {
        fontSize: 18,
        lineHeight: 30,
    },
    map: {
        borderWidth: 1,
        borderRadius: 20,
        width: '100%',
        height: 250,
        marginVertical: 16,
        borderColor: '#c2c2c2'
    },
    cta: {
        marginTop: 16,
    },
    badgeContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 8,
    }
})