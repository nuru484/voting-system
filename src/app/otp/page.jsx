import { Suspense } from "react";
import VoterOtpPage from "./VoterOtpPage";

export default function OtpPage() {
  return (
    <Suspense fallback={<div>Loading OTP page...</div>}>
      <VoterOtpPage />
    </Suspense>
  );
}
