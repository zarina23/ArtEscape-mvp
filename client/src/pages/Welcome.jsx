import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const HeroFrame = styled(Box)(({}) => ({
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('src/images/hilma-af-klint-svanen.jpg!Large.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "right",
  alignItems: "center",
  backgroundRepeat: "no-repeat",
}));

const TextContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  maxWidth: 700,
  margin: theme.spacing(2),
  marginTop: 70,
  boxShadow: "0 0 0px rgba(0, 1, 0.5, 0)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  // alignItems: "center",
}));

export function Welcome() {
  const navigate = useNavigate();

  const takeHookQuiz = () => {
    navigate("/hook_quiz");
  };

  const goToGallery = () => {
    navigate("/gallery");
  };

  const goToLectures = () => {
    navigate("/lectures/artists");
  };

  return (
    <div>
      {/* parent */}
      <HeroFrame>
        {/* child one */}
        <TextContainer>
          <Typography variant="h2" align="center" className="welcomeH2 header">
            Welcome to ArtEscape
          </Typography>
          <Typography variant="h5" align="center" className="welcomeH2">
            Embark on a journey of artistic discovery. Expand your art
            knowledge, play, and navigate through the most beautiful paintings
            in art history.
          </Typography>
        </TextContainer>

        {/* child two */}
        <div className="actionsContainer">
          <TextContainer className="actionBoxes">
            <Typography
              className="actionText"
              variant="h6"
              align="center"
              gutterBottom
            >
              Fancy playing? Start by taking a quiz and test your knowledge in
              art
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 0 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={takeHookQuiz}
                sx={{ marginRight: 0 }}
              >
                Start Quiz Now
              </Button>
            </Box>
          </TextContainer>

          <TextContainer className="actionBoxes">
            <Typography
              className="actionText"
              variant="h6"
              align="center"
              gutterBottom
            >
              Want to learn first? Follow the educational path offered in our
              lectures
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 0 }}
            >
              <Button variant="contained" size="large" onClick={goToLectures}>
                Artists Lectures
              </Button>
            </Box>
          </TextContainer>

          <TextContainer className="actionBoxes">
            <Typography
              className="actionText"
              variant="h6"
              align="center"
              gutterBottom
            >
              Here to enjoy art? Visit our virtual gallery from the comfort of
              your web browser
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 0 }}
            >
              <Button variant="contained" size="large" onClick={goToGallery}>
                Paintings Gallery
              </Button>
            </Box>
          </TextContainer>
        </div>
        {/* end of parent container */}
      </HeroFrame>

      {/* <Spacer />
      <TextContainer>
        <Typography variant="h4" align="center" gutterBottom>
          Take a first quick quiz and test your knowledge in art!
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}>
          <Button
            variant="contained"
            size="large"
            onClick={takeHookQuiz}
            sx={{ marginRight: 0 }}
          >
            Start Quiz Now
          </Button>
        </Box>
      </TextContainer>
      <div>
        <TextContainer>
          <Typography variant="h4" align="left" gutterBottom>
            Go straight to the gallery and simply enjoy art!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}>
            <Button variant="contained" size="large" onClick={goToGallery}>
              Paintings Gallery
            </Button>
          </Box>
        </TextContainer>
      </div> */}
      {/* componente espacio para el footer */}
    </div>
  );
}
