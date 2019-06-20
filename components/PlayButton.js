const PlayButton = ({ id, audioUrl }) => {
  const playAudio = () => {
    audioPlayer.setAttribute("src", audioUrl);
    audioPlayer.play();
  };
  return (
    <button className="button" onClick={playAudio}>
      Play Component {id}
    </button>
  );
};

export default PlayButton;
