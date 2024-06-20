import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-screen p-16 text-[#3D3D3D]">
      <div className="flex flex-col mx-auto gap-20">
        <div className="flex flex-col max-w-[40rem] mx-auto gap-12 justify-between grow p-14 bg-white rounded-xl">
          <section className="flex flex-col gap-8 text-center">
            <Image
              src="/skyencripttion.png"
              width={256}
              height={256}
              alt="logo"
            />
            <div>
              <div className="font-black text-3xl">
                Coming Soon
              </div>
              <div className="text-lg">
                SkyEncripttion
              </div>
            </div>
          </section>
        </div>
        <footer className="mx-auto text-center">
          © 2024 SkyEncripttion. All Rights Reserved.
        </footer>
      </div>
    </main>
  );
}
