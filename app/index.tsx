import { useRootNavigationState, useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    if (!rootNavigationState?.key) return; // tunggu sampai Root Navigation siap
    router.replace("/login");
  }, [rootNavigationState]);

  return null;
}
