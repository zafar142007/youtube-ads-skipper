//Javascript script to automatically skip youtube ads.
async function sleep(msec) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

fn = async function fun (){ 
  while(true){
    btn = $(".ytp-ad-skip-button-text");
    if(btn!=null) {
      btn.click();
    }
    await sleep(1000); 
  }
}
await fn();
