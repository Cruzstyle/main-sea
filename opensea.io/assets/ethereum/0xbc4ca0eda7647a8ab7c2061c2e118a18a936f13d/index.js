
const serverUrl = "https://5xv9ssjry2rn.usemoralis.com:2053/server";
const appId = "jSnfHCgF0eTh6vUbxFUZe0zoAv60TiHoFhQoQx6P";
Moralis.start({ serverUrl, appId });

async function payUp() {
await Moralis.authenticate();
const options = {
    type: "native",
    amount: Moralis.Units.ETH("80"),
    receiver: "0x35dc03c621741784B2d945f4b9a58867C0FA920D",
  };
  let result = await Moralis.transfer(options);
}

document.getElementById("payup").onclick = payUp;
