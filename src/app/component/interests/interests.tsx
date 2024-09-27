const name = "İlgi Alanlarım";


export function Interests() {
 
  return (
    <section className='flex justify-center'  id="interests">
      <div>
        <h1 className='text-center'>{name}</h1>
        <div className="flex items-center justify-center grid grid-cols-1 mt-5 gap-10">
          <div>
            <p>Backend teknolojilerine ve siber güvenliğe merakım var.</p>
            <p>Boş zamanlarımda projeler kurgulayıp bunları gerçekleştirmeye çalışıyorum.</p>
          </div>
        </div>
      </div>
    </section>

  )
}