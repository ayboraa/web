const name = "Neler Yaptım?";


export function Goals() {
 
  return (
    <section className='flex justify-center'  id="goals">
      <div>
        <h1 className='text-center'>{name}</h1>
        <div className="max-w-md flex items-right justify-center grid grid-cols-1 mt-5 gap-10">
          <div>
          <ul className="list-none hover:list-disc">
              <li><p>Ülkemizin siber güvenlik alanında yetkin kişilerin yetiştirilmesi amaçlanan <b>Siber Vatan</b> programına katılım sağladım ve Linux&apos;tan web güvenliğine uzanan uzun bir yolculuğa başladım.</p></li>
              <br />
              <li><p><b>Türk Telekom</b> tarafından düzenlenen Siber Güvenlik Kampı&apos;nın beşincisine katılma fırsatı yakaladım. Bu kamp boyunca siber güvenlik alanında kapsamlı bilgiler elde ettim. </p></li>
          </ul>
          </div>
        </div>
      </div>
    </section>

  )
}