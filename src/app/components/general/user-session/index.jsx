"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function GetUserSession({ onGetSession }) {
  const { data: session } = useSession();

  useEffect(() => {
    onGetSession(session);
  }, [session]);

  return <></>;
}
