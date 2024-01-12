
function cardSpotify() {
  return (
    
    <div className={`h-[450px] w-[320px] md:w-[472px] bg-[#1D2D44] flex items-center justify-center rounded-2xl font-mono`}>
      <iframe
        style={{ borderRadius: '16px', backgroundColor: 'transparent' }}
        src="https://open.spotify.com/embed/playlist/5byZS9QHioXTbxiOWpm2PQ?utm_source=generator&theme=0"
        width="100%"
        height="450"
        title="playList1"
        frameBorder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
  </div>
  )
}

export default cardSpotify