interface FormState {
  name: string;
  email: string;
  date: number;
  rating: number;
  feedback: string;
}

interface OnChangeAction {
  type: "onChange";
  payload: {
    name: keyof FormState;
    value: string | number;
  };
}

interface HandleSubmitAction {
  type: "handleSubmit";
}

type FormAction = OnChangeAction | HandleSubmitAction;

const initialState: FormState = {
  name: "",
  email: "",
  date: Date.now(),
  rating: 0,
  feedback: "",
};

function FormReducer(state = initialState, action: FormAction): FormState {
  switch (action.type) {
    case "onChange":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        date: Date.now(),
      };
    case "handleSubmit":
      return {
        ...initialState,
        date: Date.now(),
      };
    default:
      return state;
  }
}

export const onChange = (
  name: keyof FormState,
  value: string | number
): OnChangeAction => {
  return { type: "onChange", payload: { name, value } };
};

export const handleSubmit = (formData: FormState): HandleSubmitAction => {
  console.log("Submitting feedback:", formData);
  return { type: "handleSubmit" };
};

export default FormReducer;
