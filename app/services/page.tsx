
"use client";
import TwentyOneDaysPage from "@/app/services/21-days/21-days";
import FiftyHourMultiPage from "@/app/services/50 Hr  multi/page"
import OneHundredHourMultiPage from "@/app/services/100 Hr Multi/page"
import TwoHundredHourMultiPage from "@/app/services/200 Hr Multi/page"
import ThreeHundredHourMultiPage from "@/app/services/300 Hr Multi/page"

export default function Page() {
  return (
    <div>
      <TwentyOneDaysPage />
      <FiftyHourMultiPage />
      <OneHundredHourMultiPage/>
      <TwoHundredHourMultiPage/>
      <ThreeHundredHourMultiPage/>
    </div>
  );
}