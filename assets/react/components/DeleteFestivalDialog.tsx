// 'use client';

import * as React from "react";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

type DeleteFestivalDialogProps = {
    festivalId: number;
    csrfToken: string;
};

export default function DeleteFestivalDialog({festivalId, csrfToken}: DeleteFestivalDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="btn btn-error w-full text-white">
                    Delete
                </button>
            </DialogTrigger>

            <DialogContent className="max-w-sm">
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                </DialogHeader>

                <p>This action will permanently delete this festival.<br/> You cannot undo this!</p>

                <DialogFooter className="pt-4">
                    <form method="post" action={`/festival/${festivalId}`} className="flex gap-4">
                        <input type="hidden" name="_token" value={csrfToken}/>

                        <button type="submit" className="btn btn-error btn-soft text-white">
                            Confirm Delete
                        </button>

                        <DialogTrigger asChild>
                            <button type="button" className="btn btn-outline">
                                Cancel
                            </button>
                        </DialogTrigger>
                    </form>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
