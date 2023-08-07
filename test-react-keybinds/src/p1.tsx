import { useKeyBind, useRegisterShortcut, } from 'react-keybinds'
import { useEffect, useMemo } from 'react'
export default function P1() {
    const { debounce, registerShortcut } = useKeyBind()
    const shortcut = useMemo(() => ({
        label: 'register when mounted',
        keys: {
            Windows: ['Alt', 'c']

        },
        callback: () => {
            alert('ctrl + c')
        }
    }), [])
    useRegisterShortcut(
        shortcut
    )
    useEffect(() => {
        console.log("🚀 ~ file: p1.tsx:7 ~ useEffect ~         'reg':", 'reg')
        return () => {
            console.log("🚀 ~ file: p1.tsx:22 ~ return ~ 'unmount':", 'unmount')
        }
    }, [])
    return (
        <div>qwe</div>
    )
}