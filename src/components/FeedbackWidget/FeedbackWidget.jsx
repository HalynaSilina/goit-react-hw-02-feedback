import React from 'react';

const FeedbackWidget = ({
  state,
  onAddGoodReview,
  onAddNeutralReview,
  onAddBadReview,
}) => {
  return (
    <>
      <button type="button" onClick={onAddGoodReview}>
        Good
      </button>
      <button type="button" onClick={onAddNeutralReview}>
        Neutral
      </button>
      <button type="button" onClick={onAddBadReview}>
        Bad
      </button>
      <h3>Statistics</h3>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
    </>
  );
};

export default FeedbackWidget;

// Крок 2
// Розшир функціонал застосунку таким чином, щоб в інтерфейсі відображалося більше статистики про зібрані відгуки.
// Додай відображення загальної кількості зібраних відгуків з усіх категорій та відсоток позитивних відгуків.
// Для цього створи допоміжні методи countTotalFeedback() і countPositiveFeedbackPercentage(), які підраховують ці значення,
// ґрунтуючись на даних у стані (обчислювані дані).
