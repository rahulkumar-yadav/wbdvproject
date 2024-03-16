import React from "react";

function Footer() {
  return (
    <section className="flex items-center justify-center w-screen">
      <div className="flex flex-col items-center gap-y-10 justify-center w-full max-w-7xl py-12 px-3 sm:px-6 lg:px-8">
        <span className="flex flex-col gap-y-5 items-center justify-center w-full">
          <h1 className="text-xl text-left font-bold tracking-wide italic w-full sm:text-3xl">
            Your <i className="text-[#0096C8]">Hobby</i>, Your{" "}
            <i className="text-[#8064A2]">Community</i>
          </h1>
          <span className="flex items-center justify-start w-full">
            <button className="bg-[#8064A2] py-1.5 px-5 text-white rounded-md cursor-pointer">
              Get Started
            </button>
          </span>
          <img src={"/Images/Group 99.png"} alt="loading error" />
        </span>

        <span className="grid grid-cols-1 gap-y-10 place-items-start w-full sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4">
          <span className="flex flex-col items-start gap-y-2.5 justify-end w-full">
            <h3 className="font-bold text-black">Hobbycue</h3>
            <ul className="flex flex-col gap-y-1 items-start justify-center">
              <li className="cursor-pointer">About us</li>
              <li className="cursor-pointer">Our Services</li>
              <li className="cursor-pointer">Work with Us</li>
              <li className="cursor-pointer">FAQ</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          </span>

          <span className="flex flex-col items-start gap-y-2.5 justify-end w-full">
            <h3 className="font-bold text-black">How Do I</h3>
            <ul className="flex flex-col gap-y-1 items-start justify-center">
              <li className="cursor-pointer">Sign Up</li>
              <li className="cursor-pointer">Add a Listing</li>
              <li className="cursor-pointer">Claim Listing</li>
              <li className="cursor-pointer">Post a Query</li>
              <li className="cursor-pointer">Add a Blog Post</li>
              <li className="cursor-pointer">Other Queries</li>
            </ul>
          </span>

          <span className="flex flex-col items-start gap-y-2.5 justify-end w-full">
            <h3 className="font-bold text-black">Quick Links</h3>
            <ul className="flex flex-col gap-y-1 items-start justify-center">
              <li className="cursor-pointer">Listings</li>
              <li className="cursor-pointer">Blog Posts</li>
              <li className="cursor-pointer">Shop / Store</li>
              <li className="cursor-pointer">Community</li>
            </ul>
          </span>

          <span className="flex flex-col items-start gap-y-10 justify-end w-full">
            <span className="flex flex-col items-start justify-center gap-y-2.5">
              <h3 className="font-bold text-black">Social Media</h3>
              <span className="flex gap-x-5 items-center justify-start">
                <img
                  src={"/Images/104498_facebook_icon 1.png"}
                  alt="facebook"
                  className="h-4 w-4 cursor-pointer"
                />
                <img
                  src={
                    "/Images/5296514_bird_tweet_twitter_twitter logo_icon 3.png"
                  }
                  alt="twitter"
                  className="h-4 w-4 cursor-pointer"
                />
                <img
                  src={
                    "/Images/5335781_camera_instagram_social media_instagram logo_icon 1.png"
                  }
                  alt="instagram"
                  className="h-4 w-4 cursor-pointer"
                />
                <img
                  src={
                    "/Images/5279116_pin_pinterest_inspiration_pinterest logo_icon 1.png"
                  }
                  alt="pinterest"
                  className="h-4 w-4 cursor-pointer"
                />
                <img
                  src={"/Images/843777_google_google+_plus_icon 1.png"}
                  alt="google"
                  className="h-4 w-4 cursor-pointer"
                />
                <img
                  src={"/Images/4375133_logo_youtube_icon 1.png"}
                  alt="youtuve"
                  className="h-4 w-4 cursor-pointer"
                />
                <img
                  src={"/Images/4375108_logo_telegram_icon 1.png"}
                  alt="telegram"
                  className="h-4 w-4 cursor-pointer"
                />
                <img
                  src={"/Images/1564504_email_letter_mail_message_icon 1.png"}
                  alt="email"
                  className="h-4 w-4 cursor-pointer"
                />
              </span>
            </span>

            <span className="flex flex-col items-start justify-center gap-y-2.5">
              <h3 className="font-bold text-black">Invite Friends</h3>
              <span className="flex items-center justify-center">
                <input
                  type="email"
                  placeholder="Email Id"
                  className="border-[#8064A2] border-2 border-solid rounded-s-md outline-none px-2.5 py-1.5"
                />
                <span className="px-2.5 py-1.5 bg-[#8064A2] text-white rounded-e-md border-2 border-solid border-[#8064A2] cursor-pointer">
                  invite
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
    </section>
  );
}

export default Footer;
