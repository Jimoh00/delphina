import { View, Text, StyleSheet } from 'react-native'

export default function LocationBadge({ title }) {
    return (
        <View style={styles.badge}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    badge: {
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#F4EFE6',
    },
    text: {
        color: '#1B3A31',
        fontWeight: 'semibold',
    }
})