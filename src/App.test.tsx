import { render, screen } from "@testing-library/react";
import mapboxgl from "mapbox-gl";
import App from "./App";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({})),
}));
// @ts-ignore
// I am not using most of the functions it requires to declare
mapboxgl.Map.prototype = {
  getBearing: jest.fn(),
  getCenter: jest.fn(),
  getPitch: jest.fn(),
  getZoom: jest.fn(),
  setZoom: jest.fn(),
  addControl: jest.fn(),
  off: jest.fn(),
  on: jest.fn(),
  remove: jest.fn(),
  resize: jest.fn(),
};

test("renders app container", () => {
  render(<App />);
  const app = screen.getByTestId("app");
  expect(app).toBeInTheDocument();
});

test("renders map component", () => {
  render(<App />);
  const map = screen.getByTestId("map-container");
  expect(map).toBeInTheDocument();
});
