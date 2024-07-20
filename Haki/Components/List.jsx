import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from '../Components/Card';

const List = ({ data }) => {
  const renderCard = ({ item }) => (
    <Card title={item.title} description={item.description} imageUrl={item.imageUrl} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderCard}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.cardContainer}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default List;
