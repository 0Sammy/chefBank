"use client"
import { makeApiRequest } from "@/lib/apiUtils";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { redirect } from 'next/navigation'

const DeleteTransactionButton = ({id}: string | any) => {
    
    const [loading, setLoading] = useState<boolean>(false)
    const [deleted, setDeleted] = useState<boolean>(false)

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        setLoading(true)
        
        const formData = { id };

        makeApiRequest("/deleteTransaction", "post", formData, {
            onSuccess: () => {
              // Handle success
              toast.success("Transaction was deleted successfully.")
              setLoading(false)
              setDeleted(true)
            },
            onError: (error: any) => {
              // Handle error
              if (error.message === "Missing Fields") {
                toast.error("Missing fields, contact the developer.")
              }
              toast.error("Unable to delete transaction now, please try again later.")
              setLoading(false)
              window.location.reload()
            },
          });
    }

    deleted && redirect(`/admin/history`)

    return ( 
        <main>
            <form onSubmit={onSubmit}>
                <button type="submit" className="text-xs md:text-sm xl:text-base text-primary hover:underline duration-500">{loading ? "Deleting..." : "Delete"}</button>
            </form>
        </main>
     );
}
 
export default DeleteTransactionButton;