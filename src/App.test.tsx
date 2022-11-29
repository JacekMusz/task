import { render, screen } from "@testing-library/react";
import App from "./App";
import { isValuesNullish } from "./layout/content/NewTransactionForm/utils";
import { initFormState } from "./hooks/useNewTransactionForm";

describe("basic tests", () => {
  test("display app conteiner", () => {
    render(<App />);
    const appWrapper = screen.getByTestId("app-container");
    expect(appWrapper).toBeInTheDocument();
  });

  test("check isValuesNullish function", () => {
    const isAnyValueNullish = isValuesNullish(initFormState);
    expect(isAnyValueNullish).toBeTruthy();
  });
});
