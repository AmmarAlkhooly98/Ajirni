import { FETCH_ITEM, FETCH_IMAGES } from "./types";
import axios from "axios";

export const fetchItem = para => dispatch => {
  axios
    .get(`/uu/?id=${para}`)
    .then(item => {
      console.log(item)
      dispatch({
        type: FETCH_ITEM,
        itemRetrive: item.data,
        user_id: item.data.user
      });
      return item;
    })
    .then(item => {
      // console.log(item);
      axios.get(`/images/?id=${item.data.id}`).then(images => {
        dispatch({
          type: FETCH_IMAGES,
          images: images.data
        });
      });
    });
};
