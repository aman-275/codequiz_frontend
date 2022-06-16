import React, { useState } from "react";
import InputField from "../../components";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ICreateQuestionForm,
  createQuestionSchema,
} from "./CreateQuestionForm";

import { Box, Paper, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createQuestion } from "../../services/questions";
import { useNavigate } from "react-router-dom";

export default function CreateQuestion() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICreateQuestionForm>({
    resolver: yupResolver(createQuestionSchema),
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const onSubmit: SubmitHandler<ICreateQuestionForm> = async (data) => {
    const obj = {
      description: data.question,
      answers: [
        { answer: data.optionfirst, correct: data.radioButton == 1 },
        { answer: data.optionsecond, correct: data.radioButton == 2 },
        { answer: data.optionthird, correct: data.radioButton == 3 },
        { answer: data.optionfour, correct: data.radioButton == 4 },
      ],
    };
    setLoading(true);
    const response = await createQuestion(obj);
    setLoading(false);
    navigate("/main");
  };

  return (
    <Box sx={{ padding: "1rem" }}>
      <Paper elevation={3} sx={{ padding: "1.5rem" }}>
        <Typography variant="h4" component="h4" sx={{ fontWeight: "bold" }}>
          Create Question
        </Typography>
        <form
          style={{
            width: "100%",
            marginTop: "10px",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <Controller
            name="question"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputField
                style={{ width: "100%" }}
                error={!!errors.question}
                label="Question"
                variant="outlined"
                helperText={!!errors.question && errors.question.message}
                {...field}
              />
            )}
          />
          <Controller
            name="optionfirst"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputField
                style={{ width: "100%" }}
                error={!!errors.optionfirst}
                label="Write Option first"
                variant="outlined"
                helperText={!!errors.optionfirst && errors.optionfirst.message}
                {...field}
              />
            )}
          />
          <Controller
            name="optionsecond"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputField
                style={{ width: "100%" }}
                error={!!errors.optionsecond}
                label="Write Option second"
                variant="outlined"
                helperText={
                  !!errors.optionsecond && errors.optionsecond.message
                }
                {...field}
              />
            )}
          />
          <Controller
            name="optionthird"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputField
                style={{ width: "100%" }}
                error={!!errors.optionthird}
                label="Write Option third"
                variant="outlined"
                helperText={!!errors.optionthird && errors.optionthird.message}
                {...field}
              />
            )}
          />
          <Controller
            name="optionfour"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputField
                style={{ width: "100%" }}
                error={!!errors.optionfour}
                label="Write Option four"
                variant="outlined"
                helperText={!!errors.optionfour && errors.optionfour.message}
                {...field}
              />
            )}
          />

          <Controller
            name="radioButton"
            control={control}
            defaultValue={1}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Correct Answer
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Correct Answer"
                  {...field}
                >
                  <MenuItem value={1}>Option First</MenuItem>
                  <MenuItem value={2}>Option Second</MenuItem>
                  <MenuItem value={3}>Option Third</MenuItem>
                  <MenuItem value={4}>Option Four</MenuItem>
                </Select>
              </FormControl>
            )}
          />

          <LoadingButton
            variant="contained"
            loading={loading}
            sx={{ marginTop: "10px" }}
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </LoadingButton>
        </form>
      </Paper>
    </Box>
  );
}
