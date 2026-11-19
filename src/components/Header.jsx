import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header({ title }) {
    return (
        <View style={styles.heading}>
            <View>
                <Image source={require('@/assets/images/back.png')} style={styles.icon} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24    ,
        fontWeight: 'bold',
        color: '#1B3A31',
    },
    heading: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 8,
    },
    icon: {
        width: 18,
        height: 18,
    }
})