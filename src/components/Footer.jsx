import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#151515] text-white">
      {/* FOOTER BACKGROUND */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/footer-city.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* FOOTER OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* FOOTER CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1450px] px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* FOLLOW US */}
          <div>
            <h3 className="text-2xl font-medium">Follow us</h3>
            <div className="mt-5 h-px bg-white/20" />

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-black"
              >
                f
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
              >
                ◎
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-black"
              >
                in
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
              >
                ▶
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
              >
                X
              </a>
            </div>

            <Link
              href="/enquiry"
              className="mt-6 inline-flex rounded-full bg-white px-10 py-4 text-black transition hover:bg-gray-200"
            >
              Contact Us
            </Link>
          </div>

          {/* ABOUT US */}
          <div>
            <h3 className="text-2xl font-medium">About Us</h3>
            <div className="mt-5 h-px bg-white/20" />

            <h3 className="mt-10 text-2xl font-medium">Quick Links</h3>
            <div className="mt-5 h-px bg-white/20" />

            <div className="mt-5 flex flex-col gap-3 text-lg">
              <Link href="/commercial">Commercial</Link>
              <Link href="/career">Career</Link>
            </div>
          </div>

          {/* RESIDENTIAL */}
          <div>
            <h3 className="text-2xl font-medium">Residential</h3>
            <div className="mt-5 h-px bg-white/20" />

            <div className="mt-5 flex flex-col gap-3 text-lg">
              <Link href="/residential/completed">Complete</Link>
              <Link href="/residential/ongoing">Ongoing</Link>
              <Link href="/residential/upcoming">Upcoming</Link>
            </div>
          </div>

          {/* HEAD OFFICE */}
          <div>
            <h3 className="text-2xl font-medium">Head Office</h3>
            <div className="mt-5 h-px bg-white/20" />

            <div className="mt-5 text-lg leading-8">
              <p>Emperia World</p>
              <p>
                Mumbai & Navi Mumbai
                <br />
                Maharashtra, India
              </p>
              <p className="mt-4">hello@emperiworld.com</p>
              <p>+91 99999 99999</p>
            </div>
          </div>
        </div>

        {/* FOOTER DIVIDER */}
        <div className="mt-16 border-t border-white/20" />

        {/* BIG EMPERIA (Fixed size & alignment) */}
        <div className="w-full overflow-hidden pt-8 text-center">
          <div className="select-none text-[15.5vw] font-black leading-none tracking-tight text-white">
            EMPERIA
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/20 pt-6 text-sm text-white/80 md:flex-row">
          <p>© 2026 All Rights Reserved by Emperia World</p>

          <div className="flex flex-wrap gap-5">
            <Link href="#">Terms & Conditions</Link>
            <span>|</span>
            <Link href="#">Privacy Policy</Link>
            <span>|</span>
            <Link href="#">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}