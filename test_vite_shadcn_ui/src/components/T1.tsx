import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { useState } from 'react'
export default function T1() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <label className="btn swap-flip">
                <input className=' hidden' type='checkbox' checked={open} onChange={() => setOpen(open => !open)} />
                <p className='swap-off bg-secondary p-1 text-primary'>open</p>
                <p className='swap-on bg-secondary p-1 text-primary'>off</p>
            </label>
            <Sheet open={open} onOpenChange={setOpen}>
                {/* <SheetTrigger>Open</SheetTrigger> */}
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )

}