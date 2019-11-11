import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Display from "./Display";

test("Display renders correctly", () => {
  expect(render(<Display />)).toMatchSnapshot();
});

test("displays if gate is closed and if it is locked", () => {
  expect(render(<Display locked={true} closed={true} />)).toMatchSnapshot();
});

test("displays if gate is open and if it is unlocked", () => {
  expect(render(<Display locked={false} closed={false} />)).toMatchSnapshot();
});

test("displays closed if the closed prop is true", () => {
  const { getByText, queryByText } = render(<Display closed={true} />);
  expect(getByText(/closed/i));
  expect(queryByText(/^open/i)).toBeFalsy();
});

test("displays locked if the locked prop is true", () => {
  const { getByText, queryByText } = render(<Display locked={false} />);
  expect(getByText(/unlocked/i));
  expect(queryByText(/^locked/i)).toBeFalsy();
});

test("when unlocked use the green-led class", () => {
  const { queryByText } = render(<Display locked={false} />);
  const lock = queryByText(/unlocked/i);
  expect(lock).toBeInTheDocument();
  expect(lock).toHaveClass("green-led");
});

test("When locked use the red-led class", () => {
  const { queryByText } = render(<Display locked={true} />);
  const lock = queryByText(/locked/i);
  expect(lock).toBeInTheDocument();
  expect(lock).toHaveClass("red-led");
});
