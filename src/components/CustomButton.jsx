import { Pressable, Text, StyleSheet, Image } from 'react-native'

export default function CustomButton({ title, style = {}, type = 'primary', icon = 'false', iconUrl, onPress = () => {}, textColor = '#000',  }) {
    return (
        <>
            {type === "primary" && 
                <Pressable 
                    style={[
                        styles.cta, style, 
                        { 
                            backgroundColor: '#C25A2B', 
                        },
                    ]}
                    onPress={onPress}
                >
                    {icon && <Image source={iconUrl} />}
                    <Text style={[styles.primary, styles.ctaText]}>{title}</Text>
                </Pressable>
            }

            {type === "secondary" && 
                <Pressable 
                    style={[
                        styles.cta, style, 
                        { 
                            backgroundColor: 'none', 
                            borderWidth: 1,
                            borderColor: '#afafaf',
                        },
                    ]}
                    onPress={onPress}
                >
                    {icon && <Image source={iconUrl} />}
                    <Text style={[styles.secondary, styles.ctaText, { color: textColor }]}>{title}</Text>
                </Pressable>
            }

            {type === "accent" && 
                <Pressable 
                    style={[
                        styles.cta, style, 
                        { 
                            backgroundColor: '#F4EFE6', 
                        },
                    ]}
                    onPress={onPress}
                >
                    {icon && <Image source={iconUrl} />}
                    <Text style={[styles.accent, styles.ctaText]}>{title}</Text>
                </Pressable>
            }
        
        </>
    )
}

const styles = StyleSheet.create({
    cta: {
        paddingVertical: 16,
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        flexDirection: 'row',
        gap: 8,
    },
    ctaText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    primary: {
        color: '#fff',
    },
    secondary: {
        color: '#000',
    },
    accent: {
        color: '#1B3A31'
    }
})