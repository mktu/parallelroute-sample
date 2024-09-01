import { FC } from "react";
import ShowCurrentPath from "../components/ShowCurrentPath";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageInfoProvider } from "@/context/PageInfoContext";
import FilePathList from "@/components/FilePathList";
import Links from "@/components/Links";
import Description from "@/components/Description";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}

const Layout: FC<Props> = ({ children, left, right }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='w-screen p-5 flex flex-col gap-2'>
          <PageInfoProvider>
            <div className='flex gap-2'>
              <Links />
              <FilePathList />
              <Description />
            </div>
            <section className='border border-input rounded p-4 flex flex-col gap-2'>
              <h4 className='font-semibold text-lg'>Components</h4>
              {children}
              <div className='flex items-center justify-center'>
                {left}
                {right}
              </div>
            </section>
          </PageInfoProvider>
        </div>
      </body>
    </html>

  );
}

export default Layout;