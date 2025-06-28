"use client";
import Section from "@/components/layouts/Section";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [authInfo, setAuthInfo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        // 1. Проверяем куки
        const cookieRes = await fetch(
          "https://rakhmetulayeva.onrender.com/auth/verify",
          {
            credentials: "include",
          }
        );

        if (cookieRes.ok) {
          const data = await cookieRes.json();
          return setAuthInfo(data);
        }

        // 2. Если куки не работают, пробуем localStorage
        const token = localStorage.getItem("token");
        if (token) {
          const headerRes = await fetch(
            "https://rakhmetulayeva.onrender.com/auth/verify",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const data = await headerRes.json();
          setAuthInfo(data);
        } else {
          throw new Error("No auth tokens found");
        }
      } catch (error) {
        console.error("Auth error:", error);
        router.push("/login");
      }
    };

    verifyAuth();
  }, []);

  if (!authInfo) return <div>Проверка авторизации...</div>;

  return (
    <>
      <Section title="Admin-panel">
        <p>Добро пожаловать, {authInfo.user.username}!</p>

        <div className="flex flex-wrap gap-4"></div>
      </Section>
    </>
  );
}
