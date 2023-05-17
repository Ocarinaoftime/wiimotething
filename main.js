import WIIMote from "./src/wiimote.js"



requestButton.addEventListener("click", async () => {
    let device;
    try {
      const devices = await navigator.hid.requestDevice({
          filters: [{ vendorId: 0x057e }],
      });
      
      device = devices[0];
      wiimote = new WIIMote(device)
  
    } catch (error) {
      console.log("An error occurred.", error);
    }
  
    if (!device) {
      console.log("No device was selected.");
    } else {
      console.log(`HID: ${device.productName}`);
  
      enableControls()
      initCanvas()
  
    }
  });


window.onload = function() {
    setTimeout(() => {
        keyboardJS.pressKey('a')
    }, 4000)
}

