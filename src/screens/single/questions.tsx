import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { NormalItem } from '@components/ui/question/normal-item';
import { SafeView } from '@components/ui/safe-view';
import type { Choices, Question } from 'types/question';
import { shuffleArray } from '@utils/helpers';
import axios from 'axios';

export const QuestionScreen = () => {
  const { styles } = useStyles(stylesheet);

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [shuffledChoices, setShuffledChoices] = useState<Choices[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

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
      return;
    }

    if (isLastQuestion) {
      Alert.alert('Fim do Quiz', 'Você completou todas as perguntas!');
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const fetchQuestions = async () => {
    try {
      const request = (await axios.post<Question[]>(
        'http://192.168.0.10:3000/questions/find',
        { quant: 10 },
      )) as any;
      const data = await request.data.questions;
      console.log({ data });
      if (data.length > 0) {
        setQuestions(data);
      } else {
        Alert.alert('Erro', 'Nenhuma pergunta retornada.');
      }
    } catch (err) {
      Alert.alert('Erro', 'Falha ao buscar perguntas.');
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    setSelectedAnswer(null);
    setAnswerChecked(false);
    if (currentQuestion) {
      setShuffledChoices(shuffleArray(currentQuestion.choices));
    }
  }, [currentQuestion]);

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
            {currentQuestionIndex + 1}/{questions.length}
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
              id={item.value}
              value={item.value}
              onPress={handleAnswerSelection}
              isSelected={selectedAnswer}
              correctValue={currentQuestion.rightChoice}
            />
          )}
          contentContainerStyle={{ gap: 10 }}
          keyExtractor={item => item.value}
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
