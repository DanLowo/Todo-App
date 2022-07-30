// Default Values
const HOST_URL = "http://127.0.0.1:5500"
const DESKTOP_TEMPLATE_URL = HOST_URL.concat("/html/template/desktop-template.html")
const MOBILE_TEMPLATE_URL = HOST_URL.concat("/html/template/mobile-template.html")
const COMPONENTS_URL = HOST_URL.concat("/html/components.html")

// Send a get request to an html file, then parse the contents to become an HTML DOM Element / Node
const getHTMLFromURL = async (url) => {
  try {
    const data = await fetch(url);
    const parser = new DOMParser()
    const parsedHTML = parser.parseFromString(await data.text(), "text/html");

    return parsedHTML;
  } catch (err) {
    console.log(err);
  }
};

const isDeviceTypeMobile = () => {
  const size = window.innerWidth
  if(size <= 600) {
    return true;
  }
  return false;
}
