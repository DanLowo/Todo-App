const loadTemplate = async () => {
  const isDeviceMobile = isDeviceTypeMobile();

  try {
    const desktopTemplate = await getHTMLFromURL(DESKTOP_TEMPLATE_URL);
    const mobileTemplate = await getHTMLFromURL(MOBILE_TEMPLATE_URL);

    // Add template to DOM based on device type
    if (isDeviceMobile) {
      const mobileTemplateSection = mobileTemplate.body.firstElementChild;
      document.body.insertAdjacentElement("afterbegin", mobileTemplateSection);
    } else {
      const desktopTemplateSection = desktopTemplate.body.firstElementChild;
      document.body.insertAdjacentElement("afterbegin", desktopTemplateSection);
    }
  } catch (err) {
    console.log(err);
  }
};
