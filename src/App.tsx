import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Profile from "./routes/profile";
import Home from "./routes/home";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";
import ProtectedRoute from "./components/protected-route";
import PopularSearches from "./components/PopularSearchesWrapper";
import FollowingFriends from "./components/FollowingFriends";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  @font-face {
    font-family: "nanayangFont";
    src: url("../font/온글잎 나나양.ttf") format("truetype");
    font-weight: normal;
    font-size: normal;
  }
  *{
    box-sizing: border-box;
  }
  body{
    background-color: #FF7F50;
    color: #36454F;
    font-family: "nanayangFont", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100vh;
  font-weight: bold;
  font-size: 24px;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftColumn = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; */
  padding: 50px 0;
`;

function App() {
  const [isLoading, setLoading] = useState(true);

  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Wrapper>
          <GlobalStyles />
          <LeftColumn>
            <FollowingFriends />
            <PopularSearches />
          </LeftColumn>
          <MainContent>
            <RouterProvider router={router} />
          </MainContent>
        </Wrapper>
      )}
    </>
    // <Wrapper>
    //   <GlobalStyles />
    //   {isLoading ? (
    //     <LoadingScreen />
    //   ) : (
    //     <>
    //       <LeftColumn>
    //         <FollowingFriends />
    //         <PopularSearches />
    //       </LeftColumn>
    //       <MainContent>
    //         <RouterProvider router={router} />
    //       </MainContent>
    //     </>
    //   )}
    // </Wrapper>
  );
}

export default App;
