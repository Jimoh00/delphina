import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ContainerCard from '../components/ContainerCard';
import CustomButton from '@/components/CustomButton';


export default function Confirmation() {
    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.heading}>
                    <Image source={require('../../assets/images/verified.png')} style={styles.image} />
                    <Text style={styles.header}>We've got it</Text>
                </View>

                <Text style={styles.body}>
                    Someone will call you back. If tonight feels urgent, don't wait — call now.
                </Text>

                <ContainerCard>
                    <View>
                        <Text> <Text style={styles.boldText}>Next:</Text> an RN visits at a time that suits you. Free, no obligation.</Text>
                    </View>
                </ContainerCard>

                <View style={styles.footer}>
                    <CustomButton title={"Call (865) 272-4673"} type={'primary'} icon='true' iconUrl={require('@/assets/images/call-white.png')} />
                    <CustomButton title={"Back to home"} type={'secondary'} />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFFDFA',
        alignItems: 'center',
        paddingTop: 40,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    body: {
        textAlign: 'center',
        marginTop: 18,
        paddingHorizontal: 40,
        lineHeight: 24,
        marginBottom: 24,
    },
    footer: {
        position: 'absolute',
        bottom: 8,
        left: 10,
        right: 10,
        gap: 10,
    },
    image: {
        width: 160,
        height: 160,
    },
    heading: {
        alignItems: 'center',
    },
    boldText: {
        fontWeight: 'bold',
    }
})