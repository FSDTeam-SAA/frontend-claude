import React from 'react'
import PlayerProfileContainer from './_components/player-profile-container'

interface PlayerProfilePageProps {
  params: { id: string }
}

const PlayerProfilePage = ({ params }: PlayerProfilePageProps) => {
  return (
    <div className="h-min-screen bg-white bg-[linear-gradient(105.34deg,_rgba(177,174,255,0.24)_9.41%,_rgba(255,255,255,0.24)_49.41%,_rgba(176,167,255,0.24)_100.83%)]">
      <PlayerProfileContainer id={params?.id} />

    </div>
  )
}

export default PlayerProfilePage