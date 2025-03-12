import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:podcastwaw@gmail.com";
  };

  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
              src="/img/contact-2.jpg"
              clipClass="sword-man-clip-path lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/contact-3.jpg"
            clipClass="sword-man-clip-path md:scale-125"
          />

        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Contact us
          </p>

          <AnimatedTitle
            title="let&#39;s un<b>l</b>ock the <br /> mysteries of <br /> exis<b>ta</b>nce t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="email us" containerClass="mt-10 cursor-pointer" onClick={handleEmailClick} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
