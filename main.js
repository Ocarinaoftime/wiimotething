import WIIMote from "./src/wiimote.js"

var wiimote = undefined;

var connectButton = document.getElementById("connect");

connectButton.addEventListener("click", async () => {
  let device;
  try {
    const devices = await navigator.hid.requestDevice({
        filters: [{ vendorId: 0x057e }],
    });
      
    device = devices[0];
    wiimote = new WIIMote(device);
  
  } catch (error) {
    console.log("An error occurred.", error);
  }
  
  if (!device) {
    console.log("No device was selected.");
  } else {
    console.log(`HID: ${device.productName}`);
    initButtons()
  }
});


function initButtons() {
  wiimote.BtnListener = (buttons) => {
    var buttonJSON = JSON.stringify(buttons, null, 2);

    if(document.getElementById('buttons').innerHTML != buttonJSON){
      document.getElementById('buttons').innerHTML = buttonJSON
    }
  }
}

