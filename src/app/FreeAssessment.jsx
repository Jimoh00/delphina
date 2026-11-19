import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TextInput, Textarea  } from 'react-native';
import Header from '../components/Header';
import CustomButton from '@/components/CustomButton';

export default function FreeAssessment() {
    return (
        <SafeAreaProvider style={{ flex: 1, }}>
            <SafeAreaView style={styles.container}>
                <Header title={"Free Assessment"} />
                <Text style={styles.bodyText}>Three things and an RN will call you back.</Text>

                
                <View style={styles.form}>
                    <View>
                        <Text style={styles.formLabel}>Your name</Text>
                        <TextInput placeholder='Sarah Jenkins' style={styles.input}/>
                    </View>

                    <View>
                        <Text style={styles.formLabel}>Best phone number</Text>
                        <TextInput placeholder='(865) 555-0148' style={styles.input}/>
                    </View>

                    <View>
                        <Text style={styles.formLabel}>Who needs care, and what's going on?</Text>
                        <TextInput placeholder='My Mother, 82, in Oak Ridge...' style={styles.input} multiline={true} numberOfLines={3} />
                    </View>
                </View>

                <View style={styles.footer}>
                    <CustomButton title={"Send it"} type={'primary'}/>
                    <Text style={{ textAlign: 'center', marginTop: 8, fontSize: 12, }}>No cost, no obligation. We don't share your information.</Text>
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
    },
    bodyText: {
        fontSize: 18,
        lineHeight: 30,
    },
    form: {
        marginTop: 24,
        gap: 16,
        marginBottom: 24,
    },
    input: {
        padding: 18,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#afaaaa',
        marginTop: 8,
    },
    formLabel: {
        fontWeight: 'bold',
        color: '#1B3A31',
    },
    footer: {
        position: 'absolute',
        bottom: 8,
        left: 10,
        right: 10,
    },
})