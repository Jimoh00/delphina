import { View, Text, StyleSheet } from 'react-native';

export default function ServicesList({ services }) {
    return (
        <View>
            {services.map((service, index) => (
                <View key={index} style={styles.item}>
                    <View style={styles.profile}>
                        <Text style={styles.profileText}> {service.startingLetter} </Text>
                    </View>

                    <View>
                        <Text style={styles.title}> {service.serviceTitle} </Text>
                        <Text> {service.body} </Text>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1EE',
    },
    title: {
        fontWeight: 'semibold',
        fontSize: 18,
    },
    profile: {
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#F4EFE6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#1B3A31',
    }
})