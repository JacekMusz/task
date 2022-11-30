import React, { HTMLInputTypeAttribute } from "react";
import { InputHTMLAttributes, useEffect, useState } from "react";

export type InputFieldType = Extract<HTMLInputTypeAttribute, "text" | "number">;

export type FieldData = {
  name: string;
  label: string;
  type: InputFieldType;
  attrs?: InputHTMLAttributes<HTMLInputElement>;
};

type FormFields = FieldData & {
  value: FieldData["type"] extends "number" ? number | null : string | null;
};

type FormStateType = Record<string, FormFields>;

export const useNewTransactionForm2 = (fields: FieldData[]) => {
  const [formState2, setFormState2] = useState<FormStateType>({});

  const handleUpdateForm2 = (
    e: React.FormEvent<HTMLInputElement>,
    name: keyof FormStateType
  ) => {
    let updatedField = formState2;
    updatedField[name] = {
      ...updatedField[name],
      value: e.currentTarget.value,
    };
    setFormState2(updatedField);
  };

  useEffect(() => {
    let initForm: FormStateType = {};

    fields.forEach((field) => {
      initForm[field.name] = {
        name: field.name,
        label: field.label,
        type: field.type,
        value: null,
        attrs: field.attrs ? field.attrs : undefined,
      };
    });

    setFormState2(initForm);
  }, []);

  return {
    formState2,
    handleUpdateForm2,
  };
};
