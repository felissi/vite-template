import { useMemo, useEffect } from "react";
import { useKeyBind } from "react-keybinds";
import type { ShortcutType } from "react-keybinds";
export function useScopeKeyBind(shortcut: ShortcutType) {
  const _shortcut = useMemo(() => shortcut, []);
  const { registerShortcut } = useKeyBind();
  useEffect(() => {
    return () => {};
  });
}
