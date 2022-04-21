export async function waitForFontLoad(font: string, timeout = 10000, interval = 10) {
  return new Promise((resolve, reject) => {
    // repeatedly poll check
    const poller = setInterval(async () => {
      try {
        document.fonts.load(font);
      } catch (err) {
        reject(err);
      }
      if (document.fonts.check(font)) {
        clearInterval(poller);
        resolve(true);
      } else {
        console.log('nop');
      }
    }, interval);
    setTimeout(() => {
      clearInterval(poller);
      reject();
    }, timeout);
  });
}
