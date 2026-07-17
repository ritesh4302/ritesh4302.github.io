import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Reviews from "./Reviews";
import type { Review } from "@/lib/hospital";

const reviews: Review[] = [
  { author: "Asha", profile_photo_url: "", rating: 5, relative_time: "a month ago", text: "Wonderful care.", time: 1 },
  { author: "Bharat", profile_photo_url: "", rating: 4, relative_time: "2 months ago", text: "Very attentive doctors.", time: 2 },
  { author: "Chirag", profile_photo_url: "", rating: 5, relative_time: "3 months ago", text: "Clean and friendly.", time: 3 },
];

function renderReviews() {
  return render(<Reviews reviews={reviews} rating={4.9} count={580} />);
}

describe("Reviews", () => {
  it("shows the aggregate rating and review count", () => {
    renderReviews();
    expect(screen.getByText(/4\.9 out of 5/)).toBeInTheDocument();
    expect(screen.getByText(/based on 580 Google reviews/)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /read all 580 reviews on google/i }),
    ).toBeInTheDocument();
  });

  it("shows the first review initially", () => {
    renderReviews();
    expect(screen.getByText(/Wonderful care\./)).toBeInTheDocument();
    expect(screen.getByText("Asha")).toBeInTheDocument();
  });

  it("advances with the next button and wraps around", async () => {
    const user = userEvent.setup();
    renderReviews();
    const next = screen.getByRole("button", { name: /next review/i });

    await user.click(next);
    expect(screen.getByText("Bharat")).toBeInTheDocument();

    await user.click(next);
    expect(screen.getByText("Chirag")).toBeInTheDocument();

    await user.click(next); // wraps to the first review
    expect(screen.getByText("Asha")).toBeInTheDocument();
  });

  it("goes backwards with the previous button, wrapping to the last review", async () => {
    const user = userEvent.setup();
    renderReviews();

    await user.click(screen.getByRole("button", { name: /previous review/i }));
    expect(screen.getByText("Chirag")).toBeInTheDocument();
  });

  it("jumps to a review via the dot navigation and marks it current", async () => {
    const user = userEvent.setup();
    renderReviews();
    const dot2 = screen.getByRole("button", { name: /review 2 of 3 by Bharat/i });

    await user.click(dot2);
    expect(screen.getByText("Bharat")).toBeInTheDocument();
    expect(dot2).toHaveAttribute("aria-current", "true");
  });

  it("announces the rating of the visible review for screen readers", () => {
    renderReviews();
    expect(screen.getByText("Rated 5 out of 5")).toBeInTheDocument();
  });
});
