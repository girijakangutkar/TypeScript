export interface FormState {
  name: string;
  email: string;
  date: number;
  rating: number;
  feedback: string;
}

export interface OnChangeAction {
  type: "onChange";
  payload: {
    name: keyof FormState;
    value: string | number;
  };
}

export interface HandleSubmitAction {
  type: "handleSubmit";
}

export type FormAction = OnChangeAction | HandleSubmitAction;

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
