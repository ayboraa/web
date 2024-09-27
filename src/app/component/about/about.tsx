import Image from 'next/image'

const name = "Hakkımda";


export function About() {
 
  return (
    <section className='flex justify-center'  id="about">
      <div>
        <h1 className='text-center'>{name}</h1>
        <div className="flex items-center justify-center grid grid-cols-2 mt-5 gap-10">
        <center>
          <div className='max-w-64'>
          <Image className='shadow-md w-full rounded-full' src={`/images/me.jpg`} width="500" height="500" />
          </div>
          </center>
          <div>
            <p> Merhaba, ben Aybora!</p> 
            <p>Bilgisayar Mühendisliği 3. Sınıf öğrencisiyim.</p> 
            <p>Kendimi backend alanında geliştirmek için çabalıyorum.</p>
          </div>
        </div>
      </div>
    </section>

  )
}