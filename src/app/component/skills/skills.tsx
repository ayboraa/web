const name = "Tecrübe Ettiklerim";


export function Skills() {
 
  return (
    <section className='flex justify-center'  id="skills">
      <div>
        <h1 className='text-center'>{name}</h1>
        <div className="flex items-center justify-center grid grid-cols-3 mt-5 gap-10">
          <div>
            <b>Diller</b>
          </div>
          <div>
          <b>Frameworkler</b>
          </div>
          <div>
          <b>Veritabanları</b>
          </div>
        </div>
        <div className="flex items-center justify-center grid grid-cols-3 mt-5 gap-10">
          <div>
          <ul className="list-none hover:list-disc">
            <li>Java</li>
            <li>C#</li>
            <li>PHP</li>
            <li>Javascript</li>
            <li>Lua</li>
          </ul>
          </div>
          <div>
          <ul className="list-none hover:list-disc">
            <li>Spring Boot</li>
            <li>.NET Core</li>
            <li>Next.js</li>
          </ul>
          </div>
          <div>
          <ul className="list-none hover:list-disc">
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>SqlLite</li>
          </ul>
          </div>
        </div>
      </div>
    </section>

  )
}