import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

// Test suite

describe("Hero Component", () => {
    test("render hero img", () => {
        render(<Hero />);
        const heroImage = screen.getAllByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","Media/images/homeHero.png");
        
    })
})