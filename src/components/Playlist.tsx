import {
  BaseSyntheticEvent,
  ButtonHTMLAttributes,
  SyntheticEvent,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlaylistTypes, selectItem } from "../redux/Playlist/PlaylistSlice";

export const Playlist = () => {
  const value: PlaylistTypes = useSelector((state: any) => state.playlist);
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    parseInt((e.target as Element).id) === value.selectedItemId
      ? dispatch(selectItem(null))
      : dispatch(selectItem(parseInt((e.target as Element).id)));
  };

  return (
    <div className="container">
      <h2>Playlist</h2>
      <ul className="list">
        {value.playlist.map((item: any) => {
          const isOpen = item.id === value.selectedItemId;
          return (
            <li key={item.id} className="item">
              <div className="header">
                <span>{item.name}</span>
                <span className="duration">{item.duration}</span>
              </div>
              <div className="details">
                <div className={item.id} hidden={!isOpen}>
                  <span className="detail">Artist: {item.artists}</span>
                  <span className="detail">Album: {item.album}</span>
                  <span className="detail">Genre: {item.genre}</span>
                </div>
                <button className={item.id} onClick={handleClick} id={item.id}>
                  {isOpen ? "close" : "details"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
