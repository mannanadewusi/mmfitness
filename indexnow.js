const axios = require("axios");

const data = {
  host: "www.mmfitness.com.ng",
  key: "820777bfea56488fb5cf305cf702fa6b",
  keyLocation:
    "https://www.mmfitness.com.ng/820777bfea56488fb5cf305cf702fa6b.txt",
  urlList: [
    "https://www.mmfitness.com.ng/",
    "https://www.mmfitness.com.ng/index.html",
    "https://www.mmfitness.com.ng/pages/about.html",
    "https://www.mmfitness.com.ng/pages/services.html",
    "https://www.mmfitness.com.ng/pages/membership.html",
    "https://www.mmfitness.com.ng/pages/shop.html",
    "https://www.mmfitness.com.ng/pages/contact.html",
    "https://www.mmfitness.com.ng/pages/booking.html",
  ],
};

axios
  .post("https://api.indexnow.org/indexnow", data)
  .then((response) =>
    console.log(`URLs submitted successfully! Status: ${response.status}`),
  )
  .catch((err) => {
    console.error(
      "Submission failed:",
      err.response?.status,
      err.response?.data || err.message,
    );
    process.exitCode = 1;
  });
