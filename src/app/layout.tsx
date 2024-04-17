import Sidebar from '@/components/Sidebar/Sidebar';
import './globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const showSideMenu = true;

  return (
    <html lang="en">
      <head>
        <title>----</title>
      </head>  
      <body className='flex'>
        {showSideMenu && (
          <div className="flex flex-col">
            <Sidebar/>
          </div>
        )}

        <div className='w-[100%] h-[100%]'>
          {children}
        </div>
      </body>
    </html>
  );
}
