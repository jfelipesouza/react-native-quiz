import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { NormalItem } from '@components/ui/question/normal-item';
import { SafeView } from '@components/ui/safe-view';
import { MOCK_QUESTION } from '@utils/mock/question';
import type { Choices } from 'types/question';
import { shuffleArray } from '@utils/helpers';

export const QuestionScreen = () => {
  const { styles } = useStyles(stylesheet);
  const mock = MOCK_QUESTION;

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [shuffledChoices, setShuffledChoices] = useState<Choices[]>([]);

  const isLastQuestion = currentQuestionIndex === mock.length - 1;
  const currentQuestion = mock[currentQuestionIndex];

  const handleAnswerSelection = (value: string) => {
    if (!answerChecked) {
      setSelectedAnswer(value);
      setAnswerChecked(true);
    }
  };
  const handleNextOrSubmit = () => {
    if (!answerChecked) {
      setAnswerChecked(true);
      setSelectedAnswer('');
    } else {
      if (isLastQuestion) {
        Alert.alert('Fim do Quiz', 'Você completou todas as perguntas!');
        // Navegue para uma tela de resultados ou redefina o quiz
        setCurrentQuestionIndex(0); // Reinicia o quiz para demonstração
        setSelectedAnswer(null);
        setAnswerChecked(false);
      } else {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      }
    }
  };

  useEffect(() => {
    setSelectedAnswer(null);
    setAnswerChecked(false);
    if (currentQuestion) {
      setShuffledChoices(shuffleArray(currentQuestion.choices));
    }
  }, [currentQuestionIndex, currentQuestion]);

  if (!currentQuestion) {
    return (
      <SafeView style={styles.container}>
        <Text style={styles.normalText}>Carregando perguntas...</Text>
      </SafeView>
    );
  }
  return (
    <SafeView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inline}>
          <View style={styles.circle} />
          <Text style={[styles.normalText, styles.username]}> Felipe</Text>
        </View>
        <View style={styles.inline}>
          <Text style={[styles.normalText, styles.username]}>
            {currentQuestionIndex + 1}/{mock.length}
          </Text>

          <TouchableOpacity
            style={styles.skipButton}
            onPress={handleNextOrSubmit}
          >
            <Text style={styles.btnText}>
              {answerChecked
                ? isLastQuestion
                  ? 'Finalizar'
                  : 'Avançar'
                : 'Pular'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, styles.normalText]}>
          {currentQuestionIndex + 1}. {currentQuestion.title}
        </Text>
        <FlatList
          data={shuffledChoices}
          renderItem={({ item }) => (
            <NormalItem
              id={item.id}
              value={item.value}
              onPress={handleAnswerSelection}
              isSelected={selectedAnswer}
              correctValue={currentQuestion.rightChoice}
            />
          )}
          contentContainerStyle={{ gap: 10 }}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeView>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    paddingHorizontal: theme.metrics.spacings.sm,
    paddingTop:
      theme.metrics.dimensions.bar + theme.metrics.dimensions.h * 0.01,
  },
  content: {
    flex: 1,
    marginTop: theme.metrics.spacings.lg,
    gap: theme.metrics.spacings.lg,
  },
  normalText: {
    color: theme.colors.text,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
  },
  title: {
    textAlign: 'justify',
    fontSize: 18,
  },
  username: {
    fontSize: 16,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.metrics.spacings.sm,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skipButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: theme.metrics.spacings.md,
  },
  btnText: {
    fontSize: 16,
    color: theme.colors.onPrimary,
  },
}));
