const name = "Favori Şarkım...";


export function RickRoll() {
 
  return (
    <section className='flex justify-center'  id="rickroll">
      <div>
        <h1 className='text-center'>{name}</h1>
        <div className="max-w-md flex items-right justify-center ">
          <div className="shadow-2xl">
          <iframe width="655" height="356" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>

  )
}