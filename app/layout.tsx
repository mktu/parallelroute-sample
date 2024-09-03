import "./globals.css";
import { FC } from "react";
import { Inter } from "next/font/google";
import { PageInfoProvider } from "@/context/PageInfoContext";
import FilePathList from "@/components/FilePathList";
import Routes from "@/components/Routes";
import Description from "@/components/Description";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Parallel route checker",
  description: "Next.jsのParallel Routeのサンプルページです",
};

const Layout: FC<Props> = ({ children, left, right }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='w-screen p-5 flex flex-col gap-2'>
          <PageInfoProvider>
            <div className='flex gap-2'>
              <Routes />
              <FilePathList />
              <Description />
            </div>
            <section className='border border-input rounded p-4 flex flex-col gap-2'>
              <h4 className='font-semibold text-lg'>Rendered</h4>
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