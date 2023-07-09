import React, { useState } from "react";
import axios from "axios";

// Import images.
const spinner =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/spinner.png";

const contact = () => {
  const [state, setState] = useState({
    is_mail_sent: false,
    is_mail_sending: false,

    full_name: "",
    full_name_visited: false,

    company: "",
    company_visited: false,

    phone: "",
    phone_visited: false,

    email: "",
    email_visited: false,
    email_error: false,

    country: "",
    country_visited: false,

    interest: "",
    interest_visited: false,
  });

  const isEmail = (email) => {
    let emailRegex =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  // Name funcs.
  const handleNameOnBlur = () => {
    if (state.full_name === "") {
      setState({ ...state, full_name_visited: true });
    }
    if (state.full_name) {
      setState({ ...state, full_name_visited: false });
    }
  };
  /////////////////////////////////////////////

  // Company funcs.
  const handleCompanyOnBlur = () => {
    if (state.company === "") {
      setState({ ...state, company_visited: true });
    }
    if (state.company) {
      setState({ ...state, company_visited: false });
    }
  };
  /////////////////////////////////////////////

  // Email funcs.
  const handleEmailOnBlur = () => {
    const isValidEmail = isEmail(state.email);

    if (state.email.length === 0) {
      setState({ ...state, email_visited: true, email_error: false });
    }

    if (state.email.length > 0 && !isValidEmail) {
      setState({ ...state, email_visited: false, email_error: true });
    }

    if (state.email.length > 0 && isValidEmail) {
      setState({ ...state, email_visited: false, email_error: false });
    }
  };
  /////////////////////////////////////////////

  // Country funcs.
  const handleCountryOnBlur = () => {
    if (state.country === "") {
      setState({ ...state, country_visited: true });
    }
    if (state.country) {
      setState({ ...state, country_visited: false });
    }
  };

  const handleCountryOnKeyUp = () => {
    if (!state.company.length >= 41) {
      setState({ ...state, country_error: true });
    }
    if (state.company.length < 41) {
      setState({ ...state, country_error: false });
    }
  };
  /////////////////////////////////////////////

  const sendMail = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    try {
      let emailBody = JSON.stringify({
        to: {
          name: "Qi",
          email: "connect@qidigital.com",
        },
        parameters: {
          client_name: state.full_name,
          client_email: state.email,
          message: state.interest,
          phone: state.phone,
          company: state.company,
          country: state.country,
        },
      });

      setState({
        ...state,
        is_mail_sending: true,
      });

      const res = await axios.post(
        "https://www.qidigital.com/email.php",
        emailBody,
        config
      );

      console.log(res);

      if (res.status === 200) {
        setState({
          ...state,
          is_mail_sent: true,
          is_mail_sending: false,
          full_name: "",
          full_name_visited: false,
          company: "",
          company_visited: false,
          phone: "",
          phone_visited: false,
          email: "",
          email_visited: false,
          email_error: false,
          country: "",
          country_visited: false,
          interest: "",
          interest_visited: false,
        });
      } else {
        setState({
          ...state,
          is_mail_sent: false,
          is_mail_sending: false,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = async () => {
    await sendMail();
  };

  const submit_button = state.is_mail_sending ? (
    <div
      onClick={handleSubmit}
      className="col-span-1 cursor-pointer mt-2 md:mt-0 w-full h-[50px] bg-[#c3bdad] text-lg text-center grid content-center text-white"
    >
      <div className="animate-spin h-10 w-10 mx-auto">
        <img src={spinner} className="overflow-hidden h-10" />
      </div>
    </div>
  ) : (
    <div
      onClick={handleSubmit}
      className="col-span-1 cursor-pointer mt-2 md:mt-0 w-full h-[50px] bg-[#c3bdad] text-lg text-center grid content-center text-white"
    >
      Submit
    </div>
  );

  const success_msg = state.is_mail_sent ? (
    <p className="font-CormorantGaramond sm:text-[26px] text-[22px] leading-snug mt-20 h-16">
      *Thank you for your enquiry. We'll be in touch soon.
    </p>
  ) : (
    <div className="mt-20 h-16"></div>
  );

  return (
    <div id="contact" className="bg-[#fbf8ec] py-36">
      <div className="max-w-[1480px] mx-auto lg:px-20 md:px-12 px-6">
        <h2 className="font-CormorantGaramond lg:text-[3.2rem] sm:text-[3.2rem] text-[2.8rem] mt-4 leading-none mb-20 max-w-[440px]">
          Open your business to the whole world
        </h2>

        <div className="xl:flex block justify-between font-SourceSansPro">
          <p className="xl:max-w-[300px] max-w-[450px] sm:text-[18px] text-[16px] leading-8 mr-16 -mt-2 mb-14">
            If you’re looking to accept or process a blockchain powered digital
            currency contact us by filling in the form.
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 md:w-[700px] sm:w-4/5 w-full">
            <div className="col-span-1">
              <label htmlFor="full_name"></label>
              <input
                className="text-lg w-full bg-[#EEEEEE] text-black focus:outline-none py-3 px-5 w-full"
                type="text"
                name="full_name"
                placeholder="*Full name"
                onChange={handleChange}
                onBlur={handleNameOnBlur}
                value={state.full_name}
                maxLength="51"
              />
              <div className="grid h-4 mt-2 content-center text-[#a10031]">
                {state.full_name.length > 50 ? (
                  <div className="ml-4 text-sm">Max. 50 chars</div>
                ) : null}
                {state.full_name_visited && state.full_name.length <= 50 ? (
                  <div className="ml-4 text-sm">Please leave a name</div>
                ) : null}
              </div>
            </div>

            <div className="col-span-1">
              <label htmlFor="company"></label>
              <input
                className="text-lg w-full bg-[#EEEEEE] text-black focus:outline-none py-3 px-5 w-full"
                type="text"
                name="company"
                placeholder="*Company"
                onChange={handleChange}
                onBlur={handleCompanyOnBlur}
                value={state.company}
                maxLength="51"
              />
              <div className="grid h-4 mt-2 content-center text-[#a10031]">
                {state.company.length > 50 ? (
                  <div className="ml-4 text-sm">Max. 50 chars</div>
                ) : null}
                {state.company_visited && state.company.length <= 50 ? (
                  <div className="ml-4 text-sm">
                    Please leave us a company name
                  </div>
                ) : null}
              </div>
            </div>

            <div className="col-span-1">
              <label htmlFor="phone"></label>
              <input
                className="text-lg w-full bg-[#EEEEEE] text-black focus:outline-none py-3 px-5 w-full"
                type="tel"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                value={state.phone}
                maxLength="50"
              />
              <div className="h-4 mt-2"></div>
            </div>

            <div className="col-span-1">
              <label htmlFor="email"></label>
              <input
                className="text-lg w-full bg-[#EEEEEE] text-black focus:outline-none py-3 px-5 w-full"
                type="email"
                name="email"
                placeholder="*Email"
                onChange={handleChange}
                onBlur={handleEmailOnBlur}
                value={state.email}
                maxLength="70"
              />
              <div className="grid h-4 mt-2 content-center text-[#a10031]">
                {state.email_error ? (
                  <div className="ml-4 text-sm">
                    Please leave a valid email address
                  </div>
                ) : null}
                {state.email_visited ? (
                  <div className="ml-4 text-sm">
                    Please leave an email address
                  </div>
                ) : null}
              </div>
            </div>

            <div className="col-span-1">
              <label htmlFor="country"></label>
              <input
                className="text-lg w-full bg-[#EEEEEE] text-black focus:outline-none py-3 px-5 w-full"
                type="text"
                name="country"
                placeholder="*Country"
                onChange={handleChange}
                onBlur={handleCountryOnBlur}
                onKeyUp={handleCountryOnKeyUp}
                value={state.country}
                maxLength="51"
              />
              <div className="grid h-4 mt-2 content-center text-[#a10031]">
                {state.country.length > 50 ? (
                  <div className="ml-4 text-sm">Max. 50 chars</div>
                ) : null}
                {state.country_visited && state.country.length <= 50 ? (
                  <div className="ml-4 text-sm">
                    Please tell us which country you are in
                  </div>
                ) : null}
              </div>
            </div>

            <div className="col-span-1">
              <label htmlFor="interest"></label>

              <input
                className="text-lg w-full bg-[#EEEEEE] text-black focus:outline-none py-3 px-5 w-full"
                type="text"
                name="interest"
                placeholder="Your interest"
                onChange={handleChange}
                value={state.interest}
              />
              <div className="h-4 mt-2"></div>
            </div>

            <div className="col-span-1 w-full h-0 hidden md:block"></div>
            {submit_button}
          </div>
        </div>

        {success_msg}

        <div className="flex font-LexendDeca tracking-widest mt-[150px] opacity-50 w-full justify-center">
          <h5>
            Q i <span className="ml-4">D \ G \ T A L</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default contact;
