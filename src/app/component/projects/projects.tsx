const name = "Projeler";

export function Projects() {
 
  return (
    <section className='flex justify-center'  id="projects">
      <div>
        <h1 className='text-center'>{name}</h1>
        <div className="flex items-center justify-center grid grid-cols-2 mt-5 gap-10">
          <div>
            <p className="text-center"><a href="https://github.com/ayboraa/FastNet"><b>FastNet</b></a></p>
            <p>FastNet ismini verdiğim C# kütüphanesi, paket oluşturmanıza yardım ederek sizin proje üzerinde odaklanmanıza yardım ediyor.</p> 
          </div>
          <div>
          <p className="text-center"><a href="https://github.com/ayboraa/CompanyAPI"><b>CompanyAPI</b></a></p>
          <p>Company ismini verdiğim web uygulamasının backendini oluşturuyor. Spring Boot yardımıyla yazdığım proje henüz geliştirme aşamasında.</p> 
          </div>
        </div>
      </div>
    </section>

  )
}