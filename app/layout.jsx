import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/navbar-comp/Navbar';
import Footer from '@/components/footer/footer';
import SessionWrapper from '@/hooks/SessionProvider';
import '@/styles/global.css'

export const metadata = {
  title: "Airbnb",
  description: "Book homes and vacation rentals worldwide.",
  keywords: ["Airbnb clone", "rentals", "vacation homes", "travel booking"],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body cz-shortcut-listen="true">
     
         <nav>
         <Navbar/>
        </nav>
      
       
        <main className="container-fluid">
          {children}
        </main>

    <Footer className='pt-5'>
      <Footer  className='pt-5'/>
    </Footer>
     </body>
     </SessionWrapper>
    </html>
  );
}
