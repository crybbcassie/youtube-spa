import axios from "axios";

// login&register
export async function login(userLoginData, navigate, updateToken) {
  const loginUrl = `${process.env.REACT_APP_URL}auth/login`;
  try {
    const result = await axios.post(loginUrl, userLoginData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("token", result.data.token);
    updateToken(result.data.token);
    navigate("/youtube-spa/search");
  } catch (e) {
    if (e && e.response && e.response.data) {
      console.log(e.response.data.message);
    } else {
      console.log("An error occurred while logging in.");
    }
  }
}

export async function register(userRegisterData, changePage) {
  const registerUrl = `${process.env.REACT_APP_URL}users/register`;
  try {
    const result = await axios.post(registerUrl, userRegisterData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
      changePage();
      console.log(result)
  } catch (e) {
    if (e && e.response && e.response.data) {
      console.log(e.response.data.message);
    } else {
      console.log("An error occurred while register.");
    }
  }
}

  export default function handleVideoClick (videoId) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };


// // get video
// export const getVideo = async (currentId) => {
//   try {
//     const response = await axios.get(
//       "https://www.googleapis.com/youtube/v3/videos",
//       {
//         params: {
//           key: "AIzaSyCsNXupWYNLK2vB5E1zhdS9TdtsrOwDkAM",
//           part: "snippet",
//           id: currentId,
//         },
//       }
//     );
//       console.log('get video', response.data.items[0].snippet)
//     return response.data.items[0].snippet;
//   } catch (e) {
//      if (e && e.response && e.response.data) {
//        console.log(e.response.data.message);
//      } else {
//        console.log("An error occurred while get video.");
//      }
//   }
// };

// export const getViews = async (currentId) => {
//   try {
//     const response = await axios.get(
//       "https://www.googleapis.com/youtube/v3/videos",
//       {
//         params: {
//           key: "AIzaSyCJ6AL7gdQucwj1Mmd1wTXWz9-nUJT-M90",
//           part: "statistics",
//           id: currentId,
//         },
//       }
//     );

//     return response.data.items[0].statistics.viewCount;
//   } catch (error) {
//     console.log(error);
//   }
// };