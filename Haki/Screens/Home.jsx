import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Buttons from '../Components/Buttons';
import List from '../Components/List';

const Home = ({ navigate }) => {
  const handleLogout = () => {
    navigate('GetStarted');
  };

  const Data = [
    {
      id: '1',
      title: 'One Piece',
      description: 'An adventurous saga about Monkey D. Luffy and his pirate crew searching for the ultimate treasure, the One Piece, to become the Pirate King.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkyvkom3MAhlbva1Oh4cd16mD1KV0-4NESw&s',
    },
    {
      id: '2',
      title: 'Naruto',
      description: 'A story of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and the leader of his village, the Hokage.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuj3hzwHplx7Lo_v41xOr-YomdHqIWJ2tldg&s',
    },
    {
      id: '3',
      title: 'Bleach',
      description: 'The journey of Ichigo Kurosaki, a teenager who gains the powers of a Soul Reaper to protect the living and the dead from malevolent spirits.',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: '4',
      title: 'Monster',
      description: 'A psychological thriller following Dr. Kenzo Tenma quest to stop a murderous genius he once saved, delving into morality, justice, and the human psyche.',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BM2ZkYTAwMGMtOGEwOS00MzBjLTgxOGYtZTYwY2E1ZjMyZmY4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg',
    },
    {
      id: '5',
      title: 'Classroom of the Elite',
      description: 'A suspenseful anime where students at an elite high school compete for supremacy, revealing dark truths about society and human nature.',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDM0MmVlOGItNDRjYi00MmE3LWExMjktMDc0YTYxYjAzYTE4XkEyXkFqcGdeQXVyNjc3NTI5MDY@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: '6',
      title: 'Pokemon',
      description: 'A journey of Ash Ketchum and his friends as they explore different regions, capture Pokemon, and compete in battles to become Pokemon Masters.',
      imageUrl: 'https://preview.redd.it/rank-your-pokemon-anime-series-from-worst-to-best-v0-02o8iwaovt591.jpg?width=1080&crop=smart&auto=webp&s=e7b8d66a88d3800e23e1f22c10543782bc1523ce',
    },
  ];

  return (
    <ImageBackground
      source={{ uri: 'https://media.istockphoto.com/id/174931919/photo/grunge-wall.webp?b=1&s=170667a&w=0&k=20&c=lIlT5tTQJvpN7o4WFhWqR7uYoisf0hcvR07nryaDqN4=' }}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Welcome to the Home Page!</Text>
        <List data={Data} />
        <Buttons kind="primary" size="large" onPress={handleLogout}>
          Logout
        </Buttons>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Home;
