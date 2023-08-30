import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import BackButton from '../assets/icons/onboardingSvgs/BackButton';
import NextButton from '../assets/icons/onboardingSvgs/NextButton';

const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        require('../assets/images/onboarding/Onboarding1.jpg'),
        require('../assets/images/onboarding/Onboarding2.jpg'),
        require('../assets/images/onboarding/Onboarding3.jpg'),
    ];

    const textData = [
        { title: "Məqsədimiz nədir?", content: "Code8 Career+2 namizədlərinin tədris müddəti ərzində öyrəndikləri bilik və bacarıqlarını nümayiş etdirməsi üçün təşkil olunan tədbirdir." },
        { title: "Kimlər yarışacaq?", content: "Hər birində 14 nəfər olmaqla 7 komanda 8 saat ərzində bir-biri ilə yarışaraq verilmiş tətbiqin üzərində çalışacaqlar." },
        { title: "Təşəkkür edirik!", content: "Hackathon-a xoş gəldiniz. İştirak edən hər kəsə uğurlar!" },
    ];

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={images[currentIndex]} style={styles.imageBackground} resizeMode="cover">
                <View style={styles.overlay} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{textData[currentIndex].title}</Text>
                    <Text style={styles.content}>{textData[currentIndex].content}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[{ opacity: currentIndex === 0 ? 0.5 : 1 }]}
                        onPress={handlePrev}
                        disabled={currentIndex === 0}
                    >
                        <BackButton style={styles.backButton} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[{ opacity: currentIndex === images.length - 1 ? 0.5 : 1 }]}
                        onPress={handleNext}
                        disabled={currentIndex === images.length - 1}
                    >
                        <NextButton style={styles.nextButton} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    textContainer: {
        paddingHorizontal: '5%',
        gap: 12,
        height: '15%',
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    content: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: '12%',
        marginHorizontal: '11%',
        justifyContent: 'space-between',
    },
    backButton: {
        width: 60,
        height: 60,
    },
    nextButton: {
        width: 60,
        height: 60,
    },
});

export default Onboarding;
