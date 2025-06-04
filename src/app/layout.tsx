import "./globals.css";
import Image from "next/image";
import { FaAlignJustify, FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Customer Service Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-sans">
        <div className="flex flex-col h-screen">
          {/* Header */}
          <div className="fixed top-0 left-0 right-0 bg-white w-full shadow-md p-4 flex z-50">
            <Image src="/amp.png" alt="AMP Logo" width={200} height={50} />
            <button className="ml-auto">
              <Image
                src="/csr.jpg"
                alt="Profile"
                width={75}
                height={75}
                className="rounded-full hover:border-2 hover:border-dark_blue"
              />
            </button>
          </div>
          {/* Layout */}
          <div className="flex flex-1 pt-[110px] overflow-hidden">
            {/* Sidebar */}
            <div className="bg-white h-full p-4 w-56 space-y-4 overflow-y-auto">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/users"
                  className="text-dark_gray flex items-center space-x-2 p-2 hover:bg-gray-100 rounded w-full"
                >
                  <FaAlignJustify className="text-dark_gray" size={20} />
                  <span>User List</span>
                </Link>
                <Link
                  href="/faq"
                  className="text-dark_gray flex items-center space-x-2 p-2 hover:bg-gray-100 rounded w-full"
                >
                  <FaQuestionCircle className="text-dark_gray" size={20} />
                  <span>FAQ</span>
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 h-full overflow-y-auto p-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
