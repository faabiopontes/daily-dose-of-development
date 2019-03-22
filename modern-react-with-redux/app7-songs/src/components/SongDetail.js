import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  return <div>Song Detail</div>;
};

const mapStateToProps = state => ({ song: state.selectedSong });

export default connect(mapStateToProps)(SongDetail);
