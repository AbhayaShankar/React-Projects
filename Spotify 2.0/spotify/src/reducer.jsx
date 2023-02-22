const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token:
    "BQA6UFCt5sj3EFzf8Ax2XuoNpZiLiBVWtmfj4lzln8whwpw0sntL8nucJOye2zGMt8ePivzvZXDpDh1pF1at7T90iy8QcE2cChxb6F7i-Ju1R6kfND0Wr9-BtSYGpV0HF2SwJN0-wYgMfnrVPxUGkw-d91hhcsPzTAA6gef_F5D8TQtuUkfp2qM-1bbZRxm3FsOROjElEUTVJm7Ah3lPeQ",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
