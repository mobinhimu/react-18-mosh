export const descriptionSchema: object = {
  required: "Description is required",
  minLength: {
    value: 1,
    message: "At least 1 character should be provided",
  },

  maxLength: {
    value: 12,
    message: "Please provide maximum 12 character",
  },
};
export const amountSchema: object = {
  required: "Amount is required",
  min: {
    value: 1,
    message: "Minimum amount should be at least 1 or higher",
  },

  max: {
    value: 1000,
    message: "Maximum amount should be 1000 or lower",
  },
};

export const categorySchema: object = {
  required: "Category is required",
};
