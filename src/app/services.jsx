import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Header from '../components/Header';
import ServicesList from '../components/ServicesList';
import CustomButton from '../components/CustomButton';
import ContainerCard from '../components/ContainerCard';


export default function Services() {
    const services = [
        {
            startingLetter: "P",
            serviceTitle: "Personal Care",
            body: "Bathing, dressing, grooming, mobility"
        },
        {
            startingLetter: "C",
            serviceTitle: "Companionship",
            body: "Conversation, cards, a walk"
        },
        {
            startingLetter: "R",
            serviceTitle: "Respite care",
            body: "Time off for the family caregiver"
        },
        {
            startingLetter: "M",
            serviceTitle: "Meals & light cleaning",
            body: "Cooking, meal prep, tidying"
        },
        {
            startingLetter: "M",
            serviceTitle: "Medication & vitals",
            body: "Reminders and vital sign checks"
        },
        {
            startingLetter: "T",
            serviceTitle: "Transportation & errands",
            body: "Appointments, groceries"
        },
        {
            startingLetter: "B",
            serviceTitle: "Bills & organizing",
            body: "Paying bills, paperwork"
        },
        {
            startingLetter: "P",
            serviceTitle: "Pet care",
            body: "Feeding, walks, litter"
        },
    ]
    const router = useRouter();

    return (
        <ScrollView>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    <Header title={"What we do"} />
                    <Text style={styles.bodyText}>
                        Non-medical home care. No skilled nursing procedures
                    </Text>

                    <View style={styles.serviceCard}>
                        <ServicesList services={services} />
                    </View>


                    <View style={{ marginTop: 24 }}>
                        <ContainerCard >
                            <Text style={styles.ctaTitle}>Not sure what you need?</Text>
                            <Text style={styles.ctaBody}>
                                An RN will visit, look at the whole picture, and tell you honestly.
                            </Text>

                            <CustomButton 
                                title={"Request a free assesment"} 
                                type={"primary"}
                                onPress={() => router.push('/FreeAssessment')}
                            />
                        </ContainerCard>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFDFA',
        padding: 10,
    },
    serviceCard: {
        marginTop: 32,
        borderWidth: 1,
        borderColor: '#f1f1ee',
        borderRadius: 24, 
    },
    bodyText: {
        fontSize: 18,
        lineHeight: 30,
    },
    ctaTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fff',
    },
    ctaBody: {
        lineHeight: 20,
        marginTop: 8,
        color: '#e7e7e7',
        marginBottom: 12,
    }
})