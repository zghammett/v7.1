
'use client'

export default function Page() {
  const services = [
    { title: "House Washing", text: "Restore the look of your home’s exterior by removing dirt and grime." },
    { title: "Driveway & Concrete", text: "Brighten driveways, patios and sidewalks with a deep clean." },
    { title: "Roof Cleaning", text: "Improve curb appeal with safe roof cleaning methods." },
    { title: "Gutter Cleaning", text: "Keep gutters clear and functioning properly." },
    { title: "Patio & Sidewalk", text: "Refresh outdoor spaces with a noticeable clean." },
    { title: "Fence Cleaning", text: "Remove discoloration and restore fencing." },
    { title: "Commercial Washing", text: "Professional exterior cleaning for businesses." },
    { title: "Rust Removal", text: "Target stubborn rust stains on exterior surfaces." }
  ]

  return (
    <main style={{fontFamily:'Arial, sans-serif', padding:'40px'}}>
      <img src="/logo.png" style={{maxWidth:300}}/>
      <h1>Red White & Clean</h1>
      <p>Veteran-Owned Pressure Washing</p>

      <h2>Services</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20}}>
        {services.map(s => (
          <div key={s.title} style={{border:'1px solid #ddd',padding:20,borderRadius:12}}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>

      <h2 style={{marginTop:40}}>Get a Quote</h2>
      <p>Call: 816-319-4857</p>
      <p>Email: zghammett@gmail.com</p>
    </main>
  )
}
