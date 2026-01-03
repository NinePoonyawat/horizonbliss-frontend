import { Suspense } from "react";
import EnterClient from "./EnterClient";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <EnterClient />
    </Suspense>
  );
}
