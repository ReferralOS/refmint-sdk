# refmint-sdk

SDK for use with https://app.refmint.xyz or https://test.refmint.xyz

The Refmint SDK is for developers to be able to make API calls to the Refmint app server and testnet server.
The following pages will describe how to make calls to the Refmint API. Developers will need to install the refmint-sdk to their project. This can be done using npm or by cloning the github project.

```ts
npm i refmint-sdk
```


## Usage	

Log Referral Example:

Arguments:<br />
&emsp;custom_url: string // Custom URL of your project<br />
&emsp;wallet_adress: string // wallet_adress of the new user being referred<br />
&emsp;link_id: string // affiliate referral_id of the referrer<br />
&emsp;email_address (optional): string // email address of the referred new user<br />
&emsp;phone_number (optional): string // phone number of the referred new user<br />

Response:<br />
&emsp;{<br />
&emsp;&emsp;referral_link: string // ink to raffle refferal page,<br />
&emsp;&emsp;referral_id: string // affiliate referral_id of the referred user<br />
&emsp;}<br />

```ts
import Refmint from "refmint-sdk"

const custom_url = 'refmintsdk'; //example project on testnet
const wallet_adress = '0x123abc456def'; //insert wallet of referree here
const link_id = 'fqOm45Jv'; //example link id for an affiliate on the example project
const email_address = ''; // (optional) insert referree email here
const phone_number = '1234567890' // (optional) insert referree phone number here
const api_key = 'reYam27iBtMqeGuEhR2ywSV6440wo3gx2CcIC5IK6RNHRCvBoKAHdsNx3FyLz2t1'; //demo api key for testnet

var refmintClient = new Refmint({
	apiKey: api_key,
	baseUrl: "https://test.refmint.xyz"
});

refmintClient.logReferral(custom_url,wallet_adress,link_id,email_address,phone_number).then((resp) => {
	//do something...
}).catch(e => {
	console.log(e);
});

```

Log View Example:

Arguments:<br />
&emsp;custom_url: string // Custom URL of your project<br />
&emsp;link_id: string // affiliate referral_id of the referrer<br />

Response:<br />
&emsp;{<br />
&emsp;&emsp;referral_link: string // link to raffle refferal page,<br />
&emsp;&emsp;referral_id: string // affiliate referral_id of the referred user<br />
&emsp;}<br />


```ts
import Refmint from "refmint-sdk"

//Log Referral Example:

const custom_url = 'refmintsdk'; //example project on testnet
const link_id = 'fqOm45Jv'; //example link id for an affiliate on the example project
const api_key = 'reYam27iBtMqeGuEhR2ywSV6440wo3gx2CcIC5IK6RNHRCvBoKAHdsNx3FyLz2t1'; //demo api key for testnet

var refmintClient = new Refmint({
	apiKey: api_key,
	baseUrl: "https://test.refmint.xyz"
});

refmintClient.logView(custom_url,link_id).then((resp) => {
	//do something...
}).catch(e => {
	console.log(e)
});
```

Is Affiliate Check Example:

Arguments:<br />
&emsp;custom_url: string // Custom URL of your project<br />
&emsp;wallet_address: string // wallet_address of the user to be checked<br />

Response: boolean


```ts
import Refmint from "refmint-sdk"

//Log Referral Example:

const custom_url = "refmintsdk";
const wallet_address = "0xE7bb679Fa033517393001e1E43b3d326016E0A0c";

refmintClient.isAffiliate(
      custom_url,
      wallet_address,
    ).then((resp) => {
      if (resp) {
        // do something if wallet_address belongs to an affiliate
      } else {
        // do something else if wallet_address doesn't belong to an affiliate
      }
}).catch(e => {
	console.log(e);
});
```


Affiliate Data Example:

Arguments:<br />
&emsp;custom_url: string // Custom URL of your project<br />
&emsp;wallet_address: string // wallet_address of the user to be checked<br />

Response:<br />
&emsp;{<br />
&emsp;&emsp;clicks: number, // the number of clicks/views of this project via the affiliate <br />
&emsp;&emsp;referrals: number, // the number of referred users by this affiliate<br />
&emsp;&emsp;referral_mints: number, // the number of mints by referred users from the affiliate <br />
&emsp;&emsp;amount_owed: number, // the commission earned from referred mints by this affiliate <br />
&emsp;&emsp;amount_claimable: number, //commissions from referred mints that haven't been claimed yet by the affiliate <br />
&emsp;&emsp;amount_claimed: number, // commissions from referred mints that have already been claimed the by affiliate<br />
&emsp;&emsp;additional_raffle_entries: number, // raffle entries earned from referring users<br />
&emsp;&emsp;type: ENUM string ["PAID", "LINK", "RAFFLE", "LIVE", "DQ"], // type of the affiliate <br />
&emsp;&emsp;is_on_allow_list: boolean, // boolean indicating if the affiliate is on the allowlist for the project <br />
&emsp;&emsp;link_id: string, // link id of the affiliate<br />
&emsp;&emsp;affiliate_link: string // link to the referral page where new us<br />
&emsp;}<br />

```ts
import Refmint from "refmint-sdk"

//Log Referral Example:

const custom_url = "refmintsdk";
const wallet_address = "0xE7bb679Fa033517393001e1E43b3d326016E0A0c";

refmintClient.affiliateLink(
      custom_url,
      wallet_address,
    ).then((resp) => {
      
      // console.log(resp) example return:
      // {
      //     "clicks":0,
      //     "referrals":0,
      //     "referral_mints":0,
      //     "amount_owed":"0",
      //     "amount_claimable":"0",
      //     "amount_claimed":"0",
      //     "additional_raffle_entries":0,
      //     "type":"LIVE",
      //     "is_on_allow_list":false,
      //     "link_id":"toRMyGkK",
      //     "affiliate_link":"https://test.refmint.xyz/p/refmintsdk/toRMyGkK"
      //}
      
      // console.log(resp.clicks) // returns 0
      
}).catch(e => {
	console.log(e);
});
```
