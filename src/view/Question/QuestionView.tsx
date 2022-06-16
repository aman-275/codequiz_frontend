import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import LayoutView from "../../Layout";
import { questions } from "./questionSlice";
import { Box } from "@mui/material";
import QuestionForm from "./QuestionForm";

const style = {
  width: "100%",
  bgcolor: "background.paper",
};

export default function QuestionView() {
  const dispatch = useAppDispatch();
  const questionList = useAppSelector((state) => state.questionReducer);

  useEffect(() => {
    dispatch(questions());
  }, []);

  if (questionList.status == "loading") {
    return <div>loading</div>;
  }

  // if (questionList.status == "success") {
  //   console.log(questionList.question[0].length, "aman");
  // }

  return (
    <LayoutView>
      <Box sx={{ marginTop: "100px" }}>
        {questionList.question.map((currentQuestion) => {
          return (
            <QuestionForm question={currentQuestion} key={currentQuestion.id} />
            // <div>sdf</div>
          );
        })}
      </Box>
    </LayoutView>
  );
}
