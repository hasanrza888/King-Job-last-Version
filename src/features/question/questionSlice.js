
import { createSlice } from '@reduxjs/toolkit';
const questionSlice = createSlice({
    name: 'question',
    initialState: {
      formData: {
        folder:'',
        question:'',
        options: [{ ans: '', isCorrect: false }],
      },
      formData1:{
        name: '',
        descriptionOfTask: '',
      }
    },
    reducers: {
      setName:(state,{payload})=>{
        state.formData1.name = payload;
        },
      setDescriptionOfTask:(state,{payload})=> {
        state.formData1.descriptionOfTask = payload
      },
      setFolder:(state,{payload})=>{
        state.formData.folder = payload;
      },
      setQuestionData: (state, action) => {
        return {
          ...state,
          formData: action.payload,
        };
      },
      addOption: (state) => {
        return {
          ...state,
          formData: {
            ...state.formData,
            options: [...state.formData.options, { ans: '', isCorrect: false }],
          },
        };
      },
      updateOption: (state, action) => {
        const { index, value } = action.payload;
        return {
          ...state,
          formData: {
            ...state.formData,
            options: state.formData.options.map((option, i) => {
              if (i === index) {
                return {
                  ...option,
                  ans: value,
                };
              }
              return option;
            }),
          },
        };
      },
      handleCorrectOptionChange: (state, action) => {
        const { index } = action.payload;
        const newOptions = state.formData.options.map((option, i) => ({
          ...option,
          isCorrect: i === index,
        }));
        state.formData.options = newOptions;
      },
    },
  });
  export const { setQuestionData, addOption, updateOption,handleCorrectOptionChange,setName,setDescriptionOfTask,setFolder } = questionSlice.actions;
export default questionSlice.reducer;