import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "Baby One More Time", duration: "3:05" },
    { title: "Barbie Girl", duration: "2:15" },
    { title: "I Want It That Way", duration: "4:10" },
    { title: "Bitter Sweet Symphony", duration: "5:20" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});