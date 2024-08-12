import Link from "next/link"

export default function Testimonial() {
  return (
    <div className="w-full">
      <h2 className="text-2xl mt-10 px-10 w-full font-bold text-gray-900">What our customers say?</h2>
      <div className="flex justify-center">
        <section className="mt-10 w-full mx-20">

          <div className="flex my-10 justify-center items-center">

            <div className="flex-col py-16 ring-1  relative shadow-xl ring-sky-400 mt-4 px-24 max-sm:pl-20 max-sm:pr-2 w-2/3 max-sm:w-4/5 bg-white rounded-lg">
              <img src='/images/review-1.png' className="w-36 h-36 z-20 absolute top-[60px] max-sm:top-1/4 -left-[72px] " />
              <div className="flex items-center mb-2 text-yellow-400 justify-end">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.995h5.262c.97 0 1.371 1.24.588 1.81l-4.253 3.104 1.618 4.995c.3.921-.755 1.688-1.539 1.217L10 15.347l-4.253 3.104c-.784.571-1.838-.296-1.539-1.217l1.618-4.995L1.573 9.732c-.784-.571-.382-1.81.588-1.81h5.262L9.049 2.927z"></path>
                  </svg>
                ))}
                <svg
                  className="w-5 h-5"
                  fill="gray"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.995h5.262c.97 0 1.371 1.24.588 1.81l-4.253 3.104 1.618 4.995c.3.921-.755 1.688-1.539 1.217L10 15.347l-4.253 3.104c-.784.571-1.838-.296-1.539-1.217l1.618-4.995L1.573 9.732c-.784-.571-.382-1.81.588-1.81h5.262L9.049 2.927z"></path>
                </svg>

              </div>

              <p className="text-lg italic max-sm:text-xs max-sm:pr-4 text-gray-900">"I am proud to say that after a few months of taking this course... I passed my exam and am now an AWS Certified Cloud Practitioner!"</p>
              <p className="mt-2 text-[20px] max-sm:text-xs max-sm:font-semibold font-bold text-gray-900">- Nia Kyle</p>
              <div className="min-[640px]:hidden mt-2">
              <Link href={'/'} className="min-[640px]:hidden text-sky-400">
              next
              </Link>
              </div>
              <div className="bg-sky-400 flex justify-center max-sm:hidden items-center ring-1 ring-sky-400 w-1/12 h-full absolute top-0 right-0  rounded-r-lg hover:bg-sky-600">
                <div className="size-8 my-32 mx-6">  <img src="/icons/arrow_next.png" alt="nextbtn" /></div>
              </div>
            </div>

          </div>

        </section>
      </div>
    </div>
  );
}
