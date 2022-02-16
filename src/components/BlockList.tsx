import React, {ReactNode, useMemo} from "react";
import useActiveWeb3React from "../hooks/useActiveWeb3React";
import {BLOCKED_ADDRESSES} from "../config/constants";

export function BlockList({children}: { children: ReactNode }) {
  const {account} = useActiveWeb3React();
  const blocked: boolean = useMemo(() => Boolean(account && BLOCKED_ADDRESSES.indexOf(account) !== -1), [account]);
  if (blocked) {
    return <div>Blocked address</div>
  }
  return <>{children}</>
}
