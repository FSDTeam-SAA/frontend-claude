
"use client"
import React from 'react'
import { UserProfileApiResponse } from './player-data-type';
import { useQuery } from '@tanstack/react-query';
import PlayerInfoSkeleton from './profile-info-skeleton';
import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';

const HighlightsVideo = ({id}:{id:string}) => {

     const { data, isLoading, isError, error } = useQuery<UserProfileApiResponse>({
        queryKey: ["profile-info", id],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${id}`, {
                method: "GET",
                // headers: {
                //     Authorization: `Bearer ${token}`
                // }
            })
            return res.json();
        },
        // enabled: !!token
    })

    console.log(data)

    if (isLoading) {
        return <div className="pb-8">
            <PlayerInfoSkeleton />
        </div>
    } else if (isError) {
        return <div className='py-8'>
            <ErrorContainer message={error?.message || "Something went wrong!"} />
        </div>
    }
  return (
    <div>HighlightsVideo</div>
  )
}

export default HighlightsVideo