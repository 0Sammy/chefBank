"use client"
import { makeApiRequest } from "@/lib/apiUtils";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { redirect } from 'next/navigation'

type deleteProps = {
    id: string
    userEmail: string
}
const DeleteButton = ({id, userEmail} :deleteProps) => {

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        toast.info("Deleting User")
        
        const formData = { id }
        const formData1 = { email: userEmail };

        makeApiRequest("/adminDeleteAllTransaction", "post", formData, {

          onSuccess: () => {
            // Handle success
            toast.success("Client's transactions was deleted successfully.")
    
            makeApiRequest("/adminDeleteUser", "post", formData1, {
              onSuccess: () => {
                // Handle success
                toast.success("Client was deleted successfully.")
                window.location.reload()
              },
              onError: (error: any) => {
                // Handle error
                if (error.message === "Missing Fields") {
                  toast.error("Missing fields, contact the developer.")
                }
                toast.error("Unable to delete user now, please try again later.")
                window.location.reload()
              },
            });
            
          },
          onError: (error: any) => {
            // Handle error
            if (error.message === "Missing Fields") {
              toast.error("Missing fields, contact the developer.")
            }
            toast.error("Unable to delete clients transactions now, please try again later.")
            window.location.reload()
          },
        });
    }
    


    return ( 
        <main>
            <form onSubmit={onSubmit}>
                <button type="submit" className="text-xs md:text-sm xl:text-base border border-red-600 bg-red-600 rounded-lg px-4 md:px-8 xl:px-10 py-2 md:py-3 text-white hover:bg-white hover:text-red-600 duration-500">Delete</button>
            </form>
        </main>
     );
}
 
export default DeleteButton;