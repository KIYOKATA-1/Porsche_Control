import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const MusicPlayer = () => {
  const [videoId, setVideoId] = useState('');

  const handleTextChange = (text) => {
    const match = text.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\s*[^\/\n\s]+\/|[^\/\n\s]+\/|watch\/?)?|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (match && match[1]) {
      setVideoId(match[1]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        value={videoId}
        placeholder="Enter YouTube video link"
      />
      {videoId ? <YoutubePlayer height={200} play={true} videoId={videoId} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    position: 'relative',
    top: 125,
  },
  input: {
    width: 350,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    padding: 10,
  },
});

export default MusicPlayer;
