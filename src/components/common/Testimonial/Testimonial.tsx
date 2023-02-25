import React from 'react'

function Testimonial({
  avatarUrl,
  score,
  text,
  name,
}: {
  avatarUrl: string
  score: number
  text: string
  name: string
}) {
  return (
    <div>
      <img src={avatarUrl} alt='avatar'></img>
      {/*TODO: Add testimonial stars*/}
      <p>{score}</p>
      <p>{text}</p>
      <p>{name}</p>
    </div>
  )
}

export default Testimonial
