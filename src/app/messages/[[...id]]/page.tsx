'use client';
import React from "react";
import Chat from "@/app/components/Chat/Chat";


export default function Messages({params}: {params : {id:string}}){
    return (
        <Chat id={params.id}/>
    )
}
