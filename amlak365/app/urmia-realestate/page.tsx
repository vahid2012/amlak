import Link from 'next/link';

export default function UrmiaRealEstatePage() {
  return (
    <div style={{ padding: '40px', direction: 'rtl', minHeight: '80vh', color: 'black' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>املاک شهر ارومیه</h1>
      <p>لطفا منطقه یا خیابان مورد نظر خود را انتخاب کنید:</p>
      
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px', fontSize: '20px' }}>
        <li style={{ marginBottom: '15px' }}>
          <Link href="/urmia-realestate/molavi/" style={{ color: 'blue', textDecoration: 'underline' }}>
            املاک خیابان مولوی
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <Link href="/urmia-realestate/golshahr/" style={{ color: 'blue', textDecoration: 'underline' }}>
            املاک محله گلشهر
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <Link href="/urmia-realestate/bakery/" style={{ color: 'blue', textDecoration: 'underline' }}>
            املاک خیابان باکری
          </Link>
        </li>
      </ul>
    </div>
  );
}
