import { lazy, Suspense } from "react";

// Lazy load Lottie to reduce initial bundle size
const Lottie = lazy(() => import("lottie-react"));

export function LazyLottie({ fallback = null, ...props }) {
  return (
    <Suspense fallback={fallback}>
      <Lottie {...props} />
    </Suspense>
  );
}
