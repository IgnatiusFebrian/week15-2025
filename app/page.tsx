import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
  // Mengambil data dari database
  const mahasiswa = await prisma.mahasiswa.findMany();

  return (
    <main style={{ 
      maxWidth: '600px', 
      margin: '50px auto',
      padding: '20px',
      fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        fontSize: '2rem',
        borderBottom: '2px solid #333',
        paddingBottom: '10px'
      }}>
        Daftar Mahasiswa
      </h1>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {mahasiswa.map((mhs) => (
          <li key={mhs.id} style={{
            backgroundColor: '#1a1a1a', 
            border: '1px solid #333', 
            borderRadius: '12px',  
            padding: '20px',
            marginBottom: '15px',    
            display: 'flex',         
            justifyContent: 'space-between', 
            alignItems: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
          }}>
            <div>
              <span style={{ 
                display: 'block', 
                fontSize: '1.2rem', 
                fontWeight: 'bold', 
                color: '#fff' 
              }}>
                {mhs.nama}
              </span>
              <span style={{ fontSize: '0.9rem', color: '#888' }}>
                ID: {mhs.id}
              </span>
            </div>

            <span style={{
              backgroundColor: '#333',
              color: '#4ade80',
              padding: '5px 15px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>
              {mhs.jurusan}
            </span>
          </li>
        ))}
      </ul>

      {mahasiswa.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666' }}>Belum ada data mahasiswa.</p>
      )}
    </main>
  );
}