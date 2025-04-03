export default function Footer() {
  return (
    <div className=" w-full px-2 md:px-16 lg:px-32 py-14 bg-gray-800 grid grid-cols-1 md:grid-cols-2 gap-2 text-center text-slate-100 text-xl md:text-2xl">
      <div className="pb-4 md:pb-0">
        Most of these photos were taken in a hurry, so I apologize for the poor
        quality. 😅
      </div>
      <ul className="border-t-2 md:border-t-0 md:border-l-2 flex justify-center items-center gap-6 text-3xl pt-4 md:pt-0">
        <li>
          <a
            href="http://wa.me/+201126575078"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/samy.ahmed216"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://x.com/SamyAhmed216"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/SAMY216"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/samy_ahmed____/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://t.me/SamyAhmed216"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            <i className="fab fa-telegram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
