async function myPromise(): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log("executed myPromise");
        resolve();
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
}

Promise.all([myPromise(), myPromise()]);
