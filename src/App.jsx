import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Box,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fdd835", // yellow
    },
    secondary: {
      main: "#000000", // black
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const statusOptions = [
  { value: "beingAsked", label: "Someone's asking me for a treat" },
  { value: "giving", label: "I'm giving a treat voluntarily" },
  { value: "asking", label: "I'm asking others for a treat" },
];

function App() {
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleCheck = () => {
    const sal = Number(salary);

    if (sal <= 80000 && status === "beingAsked") {
      setMessage("😤 Asking someone with 80K or less salary for a treat? Shame on all of you!");
    } else if (sal <= 80000 && status === "giving") {
      setMessage("🙌 A friend with 80K or less salary is still treating? Absolute respect! Real one. ❤️");
    } else if (sal > 300000) {
      setMessage("💰 You're earning like a boss – Treat everyone twice a month!");
    } else if (sal >= 200000) {
      setMessage("🎉 You're doing well – One solid treat this month expected.");
    } else if (sal >= 150000) {
      setMessage("☕ Welcome to the Treat Club – Monthly treat encouraged.");
    } else if (sal <= 80000) {
      setMessage("😌 You're officially exempt – just enjoy the company.");
    } else {
      setMessage("🤝 Middle zone – treat when you're comfortable.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "secondary.main", minHeight: "100vh", py: 5 }}>
        <Container maxWidth="sm">
          <Paper elevation={5} sx={{ p: 4, bgcolor: "primary.main", borderRadius: 3 }}>
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
              KharchaKaro 💸
            </Typography>
            <Typography variant="subtitle1" align="center" gutterBottom>
              Calculate your monthly treat duty with your salary!
            </Typography>

            <TextField
              fullWidth
              type="number"
              label="Monthly Salary (PKR)"
              variant="outlined"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              sx={{ my: 2 }}
            />

            <TextField
              fullWidth
              select
              label="What's your situation?"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              sx={{ mb: 3 }}
            >
              {statusOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <Button
              variant="contained"
              fullWidth
              color="secondary"
              size="large"
              onClick={handleCheck}
            >
              Check Treat Status
            </Button>

            {message && (
              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  bgcolor: "#fffde7", // light yellow
                  border: "2px solid #000",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" color="text.primary">
                  {message}
                </Typography>
              </Box>
            )}
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
