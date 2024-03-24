import React from 'react'
import { cn } from "@/lib/utils";

function Label({ htmlFor, text, className }) {
    return (
        <label htmlFor={htmlFor} className={cn("label_text", className)}>{text}</label>
    )
}

export default Label