const Collections = () => {

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Collections</h1>
        <p>View currated collections of related content. These collections are frequently updated as we recive new content.</p>
        <div style={{backgroundColor:"rgba(247, 45, 66, 0.14)", borderColor:"black",  padding:"5%", borderRadius:"10%", display:"flex"}}>
            <div style={{width:"20"}}>
                <h2>The Playlist</h2>
                <p>Currated variety of songs about weak submissive men being pathetic.<br /><a href="https://music.youtube.com/playlist?list=PL7dW0T0h2ygF5p2Aq8MsSpfNt6vb0yjTd&si=8FwYs6qneXdhyAKI" referrerPolicy="no-referrer" target="_blank">Listen on YouTube Music</a></p>
            </div>
            <div style={{padding:"10px"}}>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?si=i36z5W6ibCzhoTmj&amp;list=PL7dW0T0h2ygF5p2Aq8MsSpfNt6vb0yjTd" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
        <h4>Stay tuned, more is coming here soon!</h4>
      </div>{" "}
    </div>
  );
};

export default Collections;