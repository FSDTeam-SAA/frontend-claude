"use client"
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { UserProfileApiResponse } from './player-data-type';
import PlayerInfoSkeleton from './profile-info-skeleton';
import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import moment from 'moment';
import Image from 'next/image';

const NationalTeam = ({ id }: { id: string }) => {

    const { data, isLoading, isError, error } = useQuery<UserProfileApiResponse>({
        queryKey: ["national-team-career", id],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/detail/${id}`)
            return res.json();
        },
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

    const personalInfo = data?.data?.national;
    return (
        <div className='py-6'>
            <div className="container  bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014
]">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">National Team Career</h3>
                <div>
                    <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%]">National Team</TableHead>
                                        <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%]">Debut</TableHead>
                                        <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%]">Category</TableHead>
                                        <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%]">Match</TableHead>
                                        <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%]">Goal</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                      {
                        personalInfo?.map((info) => {
                            return  <TableRow  key={info?._id} className="">
                                        
                                        <TableCell className="flex items-center gap-2">
                                            <Image src={info?.flag || "/assets/images/no-flag.png"} alt={info?.teamName || "team name"} width={100} height={100} className="w-12 h-8 object-contain"/>
                                            <p className="text-base text-[#131313] leading-[150%] font-normal py-3">{info?.teamName || "N/A"}</p>
                                        </TableCell>
                                        <TableCell className="text-base text-[#131313] leading-[150%] font-normal py-3">{moment(info?.debut).format("DD / MM / YYYY")}</TableCell>
                                        <TableCell className="text-base text-[#131313] leading-[150%] font-normal py-3">{info?.category || "N/A"}</TableCell>
                                        <TableCell className="text-base text-[#131313] leading-[150%] font-normal py-3">{info?.match || "N/A"}</TableCell>
                                        <TableCell className="text-base text-[#131313] leading-[150%] font-normal py-3">{info?.goals || "N/A"}</TableCell>
                                    </TableRow>
                        }
                        )}

                                   
                                </TableBody>
                            </Table>
                  
                </div>

            </div>
        </div>
    )
}

export default NationalTeam