import React from "react";
import { IQuestion, IAnswer } from "../../types";
import { Box, Paper, Alert } from "@mui/material";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { checkAnswer } from "../../services/questions";

interface IProps {
  question: IQuestion;
}

export default function QuestionForm({ question }: IProps) {
  const [value, setValue] = React.useState<number | string>("");
  const [feedback, setFeedback] = React.useState(false);
  const [checker, setChecker] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const submitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const data = await checkAnswer(value);
    setChecker(data.key);
    setFeedback(true);
  };

  return (
    // <div>dljflksd</div>
    <Box style={{ marginTop: "20px", paddingInline: "50px" }}>
      <form onSubmit={submitHandler}>
        <Paper elevation={2} style={{ padding: "1rem" }}>
          {question.description}
        </Paper>

        {/* <List sx={style} component="nav" aria-label="mailbox folders"> */}
        <Paper elevation={2} style={{ marginTop: "10px" }}>
          <FormControl sx={{ width: "100%", padding: "1rem" }}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              {question.answers.map((answer: IAnswer) => {
                return (
                  <>
                    <FormControlLabel
                      key={answer.id}
                      value={answer.id}
                      control={<Radio />}
                      label={answer.answer}
                    />
                    <Divider />
                  </>
                );
              })}
            </RadioGroup>
          </FormControl>
        </Paper>
        <Button
          type="submit"
          style={{ marginLeft: "auto", display: "block", marginTop: "10px" }}
          variant="contained"
        >
          Verify Answer
        </Button>
        {feedback && (
          <Alert
            severity={checker == true ? "success" : "error"}
            onClose={() => {
              setFeedback(false);
            }}
          >
            {checker == true ? "Correct" : "Incorrect"}
          </Alert>
        )}
      </form>

      {/* </List> */}
    </Box>
  );
}
