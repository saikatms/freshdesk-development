var client;

init();

async function init() {
  client = await app.initialized();
}


function showNotification() {
  client.interface
    .trigger("showNotify", {
      type: "success",
      message: "A notification for the Tutorial",
      /* The "message" should be plain text */
    })
    .then(function (data) {
      console.info("Notification displayed");
      console.info(data);
    })
    .catch(function (error) {
      console.error("Unable to show Notification");
      console.error(error);
    });
}