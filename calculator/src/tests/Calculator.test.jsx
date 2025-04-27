import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Calculator from "../components/Calculator";

describe("Kalkylator", () => {
  test("kan addera två tal", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Tal 1"), { target: { value: "4" } });
    fireEvent.change(screen.getByPlaceholderText("Tal 2"), { target: { value: "5" } });
    fireEvent.click(screen.getByText("Addera"));
    expect(screen.getByText("Resultat: 9")).toBeInTheDocument();
  });

  test("kan subtrahera två tal", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Tal 1"), { target: { value: "10" } });
    fireEvent.change(screen.getByPlaceholderText("Tal 2"), { target: { value: "3" } });
    fireEvent.click(screen.getByText("Subtrahera"));
    expect(screen.getByText("Resultat: 7")).toBeInTheDocument();
  });

  test("kan multiplicera två tal", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Tal 1"), { target: { value: "6" } });
    fireEvent.change(screen.getByPlaceholderText("Tal 2"), { target: { value: "7" } });
    fireEvent.click(screen.getByText("Multiplicera"));
    expect(screen.getByText("Resultat: 42")).toBeInTheDocument();
  });

  test("kan dividera två tal", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Tal 1"), { target: { value: "8" } });
    fireEvent.change(screen.getByPlaceholderText("Tal 2"), { target: { value: "2" } });
    fireEvent.click(screen.getByText("Dividera"));
    expect(screen.getByText("Resultat: 4")).toBeInTheDocument();
  });

  test("visar felmeddelande vid division med noll", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Tal 1"), { target: { value: "8" } });
    fireEvent.change(screen.getByPlaceholderText("Tal 2"), { target: { value: "0" } });
    fireEvent.click(screen.getByText("Dividera"));
    expect(screen.getByText("Resultat: Kan inte dividera med 0!")).toBeInTheDocument();
  });
});
